const ScrollableComponentWrapper = ({
    children,
    title,
    speed = 0.2,
    pauseAtEndEdgeDurationMs = 1200,
    handleScrollDelayMs = 200,
    startAnimationOnMount = true,
    startAnimationOnMountDelayMs = 1e3,
}) => {
    const trackInfoContainerRef = React.useRef(null),
        trackInfoWrapperRef = React.useRef(null),
        animFrameRequestID = React.useRef(0),
        isScrollingPaused = React.useRef(false),
        iterationCount = 1

    const timeoutsRef = React.useRef({
        initialMouseInteraction: null,
        animationOnMount: null,
    })

    const getWrapperOverlayWidthDelta = () => {
        const delta = trackInfoWrapperRef.current?.clientWidth - trackInfoContainerRef.current?.clientWidth
        if (isNaN(delta)) delta = 0
        return delta
    }

    const handleScroll = React.useCallback(() => {
        if (animFrameRequestID.current) return
        let lastTimestamp = 0,
            lastAbsoluteScrollAmount = 0,
            direction = 1,
            lastWrapTimestamp = 0,
            iterationsLeftCount = iterationCount

        const handleScrollRecursive = timestamp => {
            const wrapperOverlatWidthDelta = getWrapperOverlayWidthDelta()
            if (wrapperOverlatWidthDelta <= 0) return
            let absoluteScrollAmount = lastAbsoluteScrollAmount

            if (lastTimestamp) {
                if (lastWrapTimestamp) {
                    if (timestamp > lastWrapTimestamp + pauseAtEndEdgeDurationMs) lastWrapTimestamp = 0
                } else if (!isScrollingPaused.current) {
                    absoluteScrollAmount += direction * ((60 * (timestamp - lastTimestamp)) / 1e3) * speed

                    if (absoluteScrollAmount > wrapperOverlatWidthDelta) {
                        direction *= -1
                        lastWrapTimestamp = timestamp
                        absoluteScrollAmount = wrapperOverlatWidthDelta
                    } else if (absoluteScrollAmount < 0) {
                        direction *= -1
                        lastWrapTimestamp = timestamp
                        absoluteScrollAmount = 0
                        iterationsLeftCount--
                    }
                }

                trackInfoContainerRef.current.scrollLeft = lastAbsoluteScrollAmount = absoluteScrollAmount
            }

            lastTimestamp = timestamp
            animFrameRequestID.current = 0
            if (iterationsLeftCount >= 0) animFrameRequestID.current = requestAnimationFrame(handleScrollRecursive)
        }

        isScrollingPaused.current = false
        handleScrollRecursive(0)
    }, [speed, pauseAtEndEdgeDurationMs])

    const pauseScroll = () => {
        cancelAnimationFrame(animFrameRequestID.current)
        animFrameRequestID.current = 0
        isScrollingPaused.current = true
        trackInfoContainerRef.current.scrollLeft = 0
    }

    const onSelected = eventType => {
        if (animFrameRequestID.current) isScrollingPaused.current = true
        else if ("mouse" === eventType)
            timeoutsRef.current.initialMouseInteraction = setTimeout(handleScroll, handleScrollDelayMs)
    }

    const cancelAnimationOrResumeScrolling = () => {
        timeoutsRef.current.initialMouseInteraction && clearTimeout(timeoutsRef.current.initialMouseInteraction)
        animFrameRequestID.current && (isScrollingPaused.current = false)
    }

    React.useEffect(() => {
        if (startAnimationOnMount) {
            timeoutsRef.current.animationOnMount && clearTimeout(timeoutsRef.current.animationOnMount)
            timeoutsRef.current.animationOnMount = setTimeout(handleScroll, startAnimationOnMountDelayMs)
        }
    }, [handleScroll, startAnimationOnMountDelayMs, startAnimationOnMount])

    React.useEffect(
        () =>
            function cleanUp() {
                pauseScroll()
                Object.values(timeoutsRef.current).forEach(e => e && clearTimeout(e))
            },
        [],
    )

    //! Execute pauseScroll when trackInfoOverlay is resized in width

    //TODO: parent of overlay should be "width: 100%"

    return (
        <div
            ref={trackInfoContainerRef}
            style="-webkit-mask-image: linear-gradient(90deg,transparent 0,var(--spice-sidebar) 6px,var(--spice-sidebar) calc(100% - 12px),transparent)"
            onMouseOver={() => onSelected("mouse")}
            onFocus={() => onSelected("focus")}
            onMouseOut={cancelAnimationOrResumeScrolling}
            onBlur={cancelAnimationOrResumeScrolling}
            title={title}
        >
            <div ref={trackInfoWrapperRef}>{children}</div>
        </div>
    )
}
