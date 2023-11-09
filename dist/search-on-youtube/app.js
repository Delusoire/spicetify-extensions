import{array as ft}from"https://esm.sh/fp-ts";import{flip as bt,pipe as ht,tupled as w}from"https://esm.sh/fp-ts/function";import{startsWith as xt}from"https://esm.sh/fp-ts/string";import{anyPass as O}from"https://esm.sh/fp-ts-std/Predicate";import{array as y,eq as v,string as L,record as G,semigroup as Q,function as c}from"https://esm.sh/fp-ts";import{guard as k,memoize as D}from"https://esm.sh/fp-ts-std/Function";var b=e=>k(e);var B=e=>async t=>e(await t),h=e=>t=>i=>i[e]===t;var l=e=>t=>c.flow(y.chunksOf(e),y.map(t),i=>Promise.all(i),B(y.flatten));var S=e=>c.pipe(e,c.tupled,D(v.contramap(JSON.stringify)(L.Eq)),c.untupled);import{array as $,function as x}from"https://esm.sh/fp-ts";var q={before:{start:x.constant({before:"start"}),fromUri:e=>({before:{uri:e}}),fromUid:e=>({before:{uid:e}})},after:{end:x.constant({after:"end"}),fromUri:e=>({after:{uri:e}}),fromUid:e=>({after:{uid:e}})}};var g=e=>e.normalize("NFKD").replace(/\(.*\)/g,"").replace(/\[.*\]/g,"").replace(/-_,/g," ").replace(/[^a-zA-Z0-9 ]/g,"").replace(/\s+/g," ").toLowerCase().trim();var u=e=>new Promise(t=>setTimeout(t,e));var et=l(50)(async e=>(await Spicetify.CosmosAsync.get(`https://api.spotify.com/v1/artists?ids=${e.join(",")}`)).artists),it=l(1)(async([e])=>[await Spicetify.CosmosAsync.get(`https://api.spotify.com/v1/playlists/${e}`)]),rt=l(50)(async e=>(await Spicetify.CosmosAsync.get(`https://api.spotify.com/v1/albums?ids=${e.join(",")}`)).albums),I=l(50)(async e=>(await Spicetify.CosmosAsync.get(`https://api.spotify.com/v1/tracks?ids=${e.join(",")}`)).tracks);var N=async(e,t,i,s="")=>{let r=new URL("https://ws.audioscrobbler.com/2.0/");return r.searchParams.append("method","track.getInfo"),r.searchParams.append("api_key",e),r.searchParams.append("artist",t),r.searchParams.append("track",i),r.searchParams.append("format","json"),r.searchParams.append("username",s),await fetch(r).then(a=>a.json())},st=S(N),R=async(e,t)=>{let i=new URL("https://www.googleapis.com/youtube/v3/search");return i.searchParams.append("part","snippet"),i.searchParams.append("maxResults","10"),i.searchParams.append("q",t),i.searchParams.append("type","video"),i.searchParams.append("key",e),await fetch(i).then(s=>s.json())};var P=e=>({albumName:e.album.name,albumUri:e.album.uri,artistName:e.artists[0].name,artistUri:e.artists[0].uri,durationMilis:e.duration_ms,name:e.name,playcount:void 0,popularity:e.popularity,releaseDate:new Date(e.album.release_date).getTime(),uri:e.uri});import{task as C}from"https://esm.sh/fp-ts";import{task as T}from"https://esm.sh/fp-ts";import{constVoid as m}from"https://esm.sh/fp-ts/function";var{React:n,ReactDOM:E}=Spicetify,d=class e{constructor(t,i,s={}){this.name=t;this.sectionId=i;this.sectionFields=s}stopHistoryListener;setRerender=null;static waitForReact=async()=>{for(;!(Spicetify.React&&Spicetify.ReactDOM);)u(100);return this};pushSettings=async()=>{for(;!Spicetify?.Platform?.History?.listen;)await u(100);this.stopHistoryListener&&this.stopHistoryListener(),this.stopHistoryListener=Spicetify.Platform.History.listen(({pathname:t=""})=>{t==="/preferences"&&this.render()}),Spicetify.Platform.History.location.pathname==="/preferences"&&await this.render()};toObject=()=>new Proxy({},{get:(t,i)=>e.getFieldValue(this.getId(i.toString()))});rerender=()=>{this.setRerender&&this.setRerender(Math.random())};render=async()=>{for(;!document.getElementById("desktop.settings.selectLanguage");){if(Spicetify.Platform.History.location.pathname!=="/preferences")return;await u(100)}let t=document.querySelector(".x-settings-container"),i=Array.from(t.children).find(({id:s})=>s===this.sectionId);i||(i=document.createElement("div"),i.id=this.sectionId,i.className="settingsContainer",t.appendChild(i)),E.render(n.createElement(this.FieldsContainer,null),i)};addButton=(t,i,s,r=m,a={})=>{let o=this.getId(t);return a.onClick=r,this.sectionFields[t]={id:o,type:"button",description:i,text:s,events:a},this};addToggle=(t,i,s=T.of(!0),r=m,a={})=>{let o=this.getId(t);return e.setDefaultFieldValue(o,s),a.onChange=r,this.sectionFields[t]={id:o,type:"toggle",description:i,events:a},this};addInput=(t,i,s,r=m,a="text",o={})=>{let p=this.getId(t);return e.setDefaultFieldValue(p,s),o.onChange=r,this.sectionFields[t]={id:p,type:"input",description:i,inputType:a,events:o},this};addDropDown=(t,i,s,r=T.of(0),a=m,o={})=>{let p=this.getId(t);return e.setDefaultFieldValue(p,r),o.onChange=a,this.sectionFields[t]={id:p,type:"dropdown",description:i,options:s,events:o},this};addHidden=(t,i)=>{let s=this.getId(t);return e.setDefaultFieldValue(s,i),this.sectionFields[t]={id:s,type:"hidden",description:""},this};getId=t=>`extensions:${this.sectionId}:${t}`;useStateFor=t=>{let[i,s]=n.useState(e.getFieldValue(t));return[i,r=>{r!==void 0&&(s(r),e.setFieldValue(t,r))}]};static getFieldValue=t=>JSON.parse(Spicetify.LocalStorage.get(t)??"null");static setFieldValue=(t,i)=>{Spicetify.LocalStorage.set(t,JSON.stringify(i))};static setDefaultFieldValue=async(t,i)=>{e.getFieldValue(t)===null&&e.setFieldValue(t,await i())};FieldsContainer=()=>{let[t,i]=n.useState(0);return this.setRerender=i,n.createElement("div",{className:"x-settings-section",key:t},n.createElement("h2",{className:"Type__TypeElement-sc-goli3j-0 TypeElement-cello-textBase-type"},this.name),Object.entries(this.sectionFields).map(([s,r])=>n.createElement(this.Field,{field:r})))};Field=({field:t})=>{let i=h("type");return n.createElement("div",{className:"x-settings-row"},n.createElement(this.SettingDescription,{id:t.id,description:t.description}),n.createElement("div",{className:"x-settings-secondColumn"},b([[i("input"),this.SettingInputField],[i("button"),this.SettingButtonField],[i("toggle"),this.SettingToggleField],[i("dropdown"),this.SettingDropdownField]])(this.SettingHidden)(t)))};SettingDescription=({id:t,description:i})=>n.createElement("div",{className:"x-settings-firstColumn"},n.createElement("label",{className:"Type__TypeElement-sc-goli3j-0 TypeElement-viola-textSubdued-type",htmlFor:t},i));SettingButtonField=t=>n.createElement("span",{className:""},n.createElement("button",{id:t.id,className:"Button-sc-y0gtbx-0 Button-sm-buttonSecondary-useBrowserDefaultFocusStyle x-settings-button",...t.events,type:t.type},t.text));SettingToggleField=t=>{let[i,s]=this.useStateFor(t.id);return n.createElement("label",{className:"x-settings-secondColumn x-toggle-wrapper"},n.createElement("input",{id:t.id,className:"x-toggle-input",type:"checkbox",checked:e.getFieldValue(t.id),...t.events,onChange:r=>{s(r.currentTarget.checked),t.events.onChange?.(r)}}),n.createElement("span",{className:"x-toggle-indicatorWrapper"},n.createElement("span",{className:"x-toggle-indicator"})))};SettingInputField=t=>{let[i,s]=this.useStateFor(t.id);return n.createElement("input",{className:"x-settings-input",id:t.id,dir:"ltr",value:e.getFieldValue(t.id),type:t.inputType,...t.events,onChange:r=>{s(r.currentTarget.value),t.events.onChange?.(r)}})};SettingDropdownField=t=>{let[i,s]=this.useStateFor(t.id);return n.createElement("select",{className:"main-dropDown-dropDown",id:t.id,...t.events,onChange:r=>{s(r.currentTarget.selectedIndex),t.events.onChange?.(r)}},t.options.map((r,a)=>n.createElement("option",{selected:a===e.getFieldValue(t.id),value:a+1},r)))};SettingHidden=()=>n.createElement(n.Fragment,null)};var F=new d("Search On YouTube","search-on-youtube").addInput("YouTubeApiKey","YouTube API Key",C.of("000000000000000000000000000000000000000"));F.pushSettings();var f=F.toObject();var{URI:U}=Spicetify,A=new Map,M=async e=>{let t=U.fromString(e).id;if(!A.get(t)){let i=P((await I([t]))[0]),s=`${i.artistName} - ${i.name} music video`,r=[];if(f.YouTubeApiKey)try{r=await R(f.YouTubeApiKey,s)}catch{}if(!r?.length)return void window.open(`https://www.youtube.com/results?search_query=${encodeURIComponent(s)}`);let a=g(i.name);A.set(t,r.find(o=>{g(o.snippet.title).includes(a)})?.id.videoId??r[0].id.videoId)}window.open(`https://www.youtube.com/watch?v=${A.get(t)}`)};new Spicetify.ContextMenu.Item("Search on YouTube",w(M),w(O([U.isTrack])),'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="19px" height="19px"><path fill="currentColor" d="M43.2,33.9c-0.4,2.1-2.1,3.7-4.2,4c-3.3,0.5-8.8,1.1-15,1.1c-6.1,0-11.6-0.6-15-1.1c-2.1-0.3-3.8-1.9-4.2-4C4.4,31.6,4,28.2,4,24c0-4.2,0.4-7.6,0.8-9.9c0.4-2.1,2.1-3.7,4.2-4C12.3,9.6,17.8,9,24,9c6.2,0,11.6,0.6,15,1.1c2.1,0.3,3.8,1.9,4.2,4c0.4,2.3,0.9,5.7,0.9,9.9C44,28.2,43.6,31.6,43.2,33.9z"/><path fill="var(--spice-main)" d="M20 31L20 17 32 24z"/></svg>').register();
//! Does location actually point to document.body?
