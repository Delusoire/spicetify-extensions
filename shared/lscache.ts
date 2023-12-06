/**
 * lscache library
 * Copyright (c) 2011, Pamela Fox
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *       http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// Prefix for all lscache keys
const CACHE_PREFIX = "lscache-"

// Suffix for the key name on the expiration items in localStorage
const CACHE_SUFFIX = "-cacheexpiration"

// expiration date radix (set to Base-36 for most space savings)
const EXPIRY_RADIX = 10

// time resolution in milliseconds
const expiryMilliseconds = 60 * 1000
// ECMAScript max Date (epoch + 1e8 days)
const maxDate = Math.floor(8.64e15 / expiryMilliseconds)

let cacheBucket = ""
const warnings = true

function escapeRegExpSpecialCharacters(text: string) {
    return text.replace(/[[\]{}()*+?.\\^$|]/g, "\\$&")
}

function expirationKey(key: string) {
    return key + CACHE_SUFFIX
}

function currentTime() {
    return Math.floor(new Date().getTime() / expiryMilliseconds)
}

/**
 * Wrapper functions for localStorage methods
 */

function getItem(key: string) {
    return localStorage.getItem(CACHE_PREFIX + cacheBucket + key)
}

function setItem(key: string, value: any) {
    localStorage.setItem(CACHE_PREFIX + cacheBucket + key, value)
}

function removeItem(key: string) {
    localStorage.removeItem(CACHE_PREFIX + cacheBucket + key)
}

function eachKey(fn: (key: string) => void) {
    const prefixRegExp = new RegExp(
        `^${CACHE_PREFIX}${escapeRegExpSpecialCharacters(cacheBucket)}(.*)(?<!${CACHE_SUFFIX})$`,
    )

    const keys = Object.keys(localStorage)
        .map(key => key.match(prefixRegExp)?.[1])
        .filter(Boolean) as Array<string>
    keys.forEach(fn)
}

function flushItem(key: string) {
    const exprKey = expirationKey(key)
    removeItem(key)
    removeItem(exprKey)
}

function flushExpiredItem(key: string) {
    const exprKey = expirationKey(key)
    const expr = getItem(exprKey)

    if (expr) {
        const expirationTime = parseInt(expr, EXPIRY_RADIX)

        if (currentTime() >= expirationTime) {
            flushItem(key)
            return true
        }
    }

    return false
}

function warn(message: string, err?: Error) {
    if (!warnings) return
    if (!("console" in window) || typeof window.console.warn !== "function") return
    window.console.warn("lscache - " + message)
    if (err) window.console.warn("lscache - The error was: " + err.message)
}

function getLength(any: string | null) {
    return any?.length ?? 0
}

export const lscache = {
    set: function (key: string, value: any, time?: number, retryNumber = 0): boolean {
        let valueStr: string
        try {
            valueStr = JSON.stringify(value)
        } catch (_) {
            // Sometimes we can't stringify due to circular refs
            // in complex objects, so we won't bother storing then.
            return false
        }

        try {
            setItem(key, valueStr)
        } catch (e) {
            if (
                retryNumber > 2 ||
                !["QUOTA_EXCEEDED_ERR", "NS_ERROR_DOM_QUOTA_REACHED", "QuotaExceededError"].includes(e?.name)
            ) {
                warn("Could not add item with key '" + key + "'", e)
                return false
            }

            // If we exceeded the quota, then we will sort
            // by the expire time, and then remove the N oldest
            const storedKeys = new Array<{ key: string; size: number; expiration: number }>()
            eachKey(key => {
                const exprKey = expirationKey(key)
                const expiration = getItem(exprKey)
                let expirationDate
                if (expiration) {
                    expirationDate = parseInt(expiration, EXPIRY_RADIX)
                } else {
                    // TODO: Store date added for non-expiring items for smarter removal
                    expirationDate = maxDate
                }
                storedKeys.push({
                    key: key,
                    size: getLength(getItem(key)),
                    expiration: expirationDate,
                })
            })
            // Sorts the keys with oldest expiration time last
            storedKeys.sort((a, b) => b.expiration - a.expiration)

            let sizeToSubstract = getLength(valueStr)
            while (storedKeys.length && sizeToSubstract > 0) {
                const storedKey = storedKeys.pop()!
                warn("Cache is full, removing item with key '" + storedKey.key + "'")
                flushItem(storedKey.key)
                sizeToSubstract -= storedKey.size
            }

            return this.set(key, valueStr, time)
        }

        // If a time is specified, store expiration info in localStorage
        if (time) {
            setItem(expirationKey(key), (currentTime() + time).toString(EXPIRY_RADIX))
        } else {
            // In case they previously set a time, remove that info from localStorage.
            removeItem(expirationKey(key))
        }
        return true
    },

    get: function (key: string) {
        if (flushExpiredItem(key)) {
            return null
        }

        const value = getItem(key)
        if (!value) {
            return null
        }

        try {
            return JSON.parse(value)
        } catch (e) {
            return value
        }
    },

    remove: function (key: string) {
        flushItem(key)
    },

    /**
     * Flushes all lscache items and expiry markers without affecting rest of localStorage
     */
    flush: function () {
        eachKey(flushItem)
    },

    /**
     * Flushes expired lscache items and expiry markers without affecting rest of localStorage
     */
    flushExpired: function () {
        eachKey(flushExpiredItem)
    },

    /**
     * Appends CACHE_PREFIX so lscache will partition data in to different buckets.
     */
    setBucket: function (bucket: string) {
        cacheBucket = bucket
    },

    /**
     * Resets the string being appended to CACHE_PREFIX so lscache will use the default storage behavior.
     */
    resetBucket: function () {
        cacheBucket = ""
    },
}
