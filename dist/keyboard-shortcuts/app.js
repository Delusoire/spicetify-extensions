var M=Object.defineProperty;var q=Object.getOwnPropertyDescriptor;var l=(e,r,t,o)=>{for(var s=o>1?void 0:o?q(r,t):r,i=e.length-1,a;i>=0;i--)(a=e[i])&&(s=(o?a(r,t,s):a(s))||s);return o&&s&&M(r,t,s),s};import{array as S,function as N}from"https://esm.sh/fp-ts";import{LitElement as R,html as k}from"https://esm.sh/lit";import{customElement as A,property as x}from"https://esm.sh/lit/decorators.js";import{styleMap as j}from"https://esm.sh/lit/directives/style-map.js";import{map as z}from"https://esm.sh/lit/directives/map.js";import{function as y,number as H,ord as O}from"https://esm.sh/fp-ts";import{mean as L}from"https://esm.sh/fp-ts-std/Array";import{mod as $}from"https://esm.sh/fp-ts-std/Number";var B=25,I=()=>document.querySelector(".Root__main-view .os-viewport"),b=e=>{let r=I(),t=setInterval(()=>r.scrollTop+=e*B,10);document.addEventListener("keyup",()=>clearInterval(t))},h=e=>I().scroll(0,e),P=e=>Spicetify.Platform.History.push({pathname:e}),g=e=>{let r=Array.from(Array.from(document.querySelectorAll(".main-yourLibraryX-navLink")).values());y.pipe(document.querySelector(".main-yourLibraryX-navLinkActive"),t=>r.findIndex(o=>o===t),t=>$(r.length)(t===-1&&e<=0?e:t+e),t=>r[t].click())};var n=class{constructor(r,t){this.key=r;this.callback=t;this.ctrl=!1;this.shift=!1;this.alt=!1;this.setCtrl=r=>(this.ctrl=r,this);this.setShift=r=>(this.shift=r,this);this.setAlt=r=>(this.alt=r,this);this.register=()=>Spicetify.Keyboard.registerShortcut({key:this.key,ctrl:this.ctrl,shift:this.shift,alt:this.alt},r=>void(!c&&this.callback(r)))}},w=e=>e.checkVisibility({checkOpacity:!0,checkVisibilityCSS:!0}),_=e=>{let r=document.body,t=e.getBoundingClientRect(),o=(s,i)=>a=>a===O.clamp(H.Ord)(s,i)(a);return y.pipe(L([t.top,t.bottom]),o(0,r.clientHeight))&&y.pipe(L([t.left,t.right]),o(0,r.clientWidth))},T='.Root__top-container [href]:not(link),.Root__top-container button,.Root__top-container [role="button"]';debugger;var E=Spicetify.Mousetrap(),u="abcdefghijklmnopqrstuvwxyz".split(""),f=!1,c=!1,p=class extends R{constructor(){super(...arguments);this.key="None";this.target=document.body}render(){let{x:t,y:o}=this.target.getBoundingClientRect(),s={top:t+"px",left:o+"px"};return k`<span class="sneak-key" styles=${j(s)}>${this.key}</span>`}};l([x()],p.prototype,"key",2),l([x()],p.prototype,"target",2),p=l([A("sneak-key")],p);var m=class extends R{constructor(){super();this.props=[];requestAnimationFrame(()=>{let t=0,o=0;this.props=N.pipe(Array.from(document.querySelectorAll(T)),S.filter(w),S.filter(_),S.map(s=>{let i=u[t]+u[o++];return o>=u.length&&(t++,o=0),{target:s,key:i}})),t+o===0?this.remove():f=!0})}disconnectedCallback(){super.disconnectedCallback(),c=!1,f=!1}update_props(t){if(!c){f&&(f=!1,c=!0);return}this.props=this.props.filter(o=>{let[s,...i]=o.key.toLowerCase();return s!==t?!1:(o.key=i.join(""),!0)}),this.props.length===1&&this.props[0].target.click(),this.props.length<2&&this.remove()}render(){return k`${z(this.props,t=>k`<sneak-key key=${t.key} .target=${t.target} />`)}`}};l([x()],m.prototype,"props",2),m=l([A("sneak-overlay")],m);import{array as V,function as v}from"https://esm.sh/fp-ts";var le={before:{start:v.constant({before:"start"}),fromUri:e=>({before:{uri:e}}),fromUid:e=>({before:{uid:e}})},after:{end:v.constant({after:"end"}),fromUri:e=>({after:{uri:e}}),fromUid:e=>({after:{uid:e}})}};var K=e=>Spicetify.Platform.LibraryAPI.contains(...e),C=(e,r)=>Spicetify.Platform.LibraryAPI[r?"add":"remove"](...e),U=async e=>{let r=await K(e);return await v.pipe(e,V.reduceWithIndex([[],[]],(t,o,s)=>(o[Number(r[t])].push(s),o)),([t,o])=>{let s=[];return t.length&&s.push(C(t,!0)),o.length&&s.push(C(o,!1)),Promise.all(s)})};var{KEYS:F}=Spicetify.Keyboard,d,Y=[new n("s",()=>{d=document.createElement("sneak-overlay"),document.body.append(d)}),new n("s",async()=>{await(Spicetify.Platform.UserAPI._product_state||Spicetify.Platform.UserAPI._product_state_service).putValues({pairs:{"app-developer":"2"}}),Spicetify.Platform.UpdateAPI.applyUpdate()}).setShift(!0),new n("tab",()=>g(1)),new n("tab",()=>g(-1)).setShift(!0),new n("h",Spicetify.Platform.History.goBack).setShift(!0),new n("l",Spicetify.Platform.History.goForward).setShift(!0),new n("j",()=>b(1)),new n("k",()=>b(-1)),new n("g",()=>h(0)),new n("g",()=>h(Number.MAX_SAFE_INTEGER)).setShift(!0),new n("m",()=>U([Spicetify.Player.data.item.uri])),new n("/",e=>{e.preventDefault(),P("/search")})];Y.map(e=>e.register());E.bind(u,e=>d.update_props(e.key),"keypress");E.bind(F.ESCAPE,()=>d?.remove());
//! Does location actually point to document.body?
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vZXh0ZW5zaW9ucy9rZXlib2FyZC1zaG9ydGN1dHMvc25lYWsudHMiLCAiLi4vLi4vZXh0ZW5zaW9ucy9rZXlib2FyZC1zaG9ydGN1dHMvdXRpbC50cyIsICIuLi8uLi9zaGFyZWQvdXRpbC50cyIsICIuLi8uLi9leHRlbnNpb25zL2tleWJvYXJkLXNob3J0Y3V0cy9hcHAudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImRlYnVnZ2VyXHJcblxyXG5pbXBvcnQgeyBhcnJheSBhcyBhLCBmdW5jdGlvbiBhcyBmIH0gZnJvbSBcImh0dHBzOi8vZXNtLnNoL2ZwLXRzXCJcclxuXHJcbmltcG9ydCB7IExpdEVsZW1lbnQsIGh0bWwgfSBmcm9tIFwiaHR0cHM6Ly9lc20uc2gvbGl0XCJcclxuaW1wb3J0IHsgY3VzdG9tRWxlbWVudCwgcHJvcGVydHkgfSBmcm9tIFwiaHR0cHM6Ly9lc20uc2gvbGl0L2RlY29yYXRvcnMuanNcIlxyXG5pbXBvcnQgeyBzdHlsZU1hcCB9IGZyb20gXCJodHRwczovL2VzbS5zaC9saXQvZGlyZWN0aXZlcy9zdHlsZS1tYXAuanNcIlxyXG5pbXBvcnQgeyBtYXAgfSBmcm9tIFwiaHR0cHM6Ly9lc20uc2gvbGl0L2RpcmVjdGl2ZXMvbWFwLmpzXCJcclxuXHJcbmltcG9ydCB7IENMSUNLQUJMRV9FTE1FTlRfU0VMRUNUT1IsIGlzRWxlbWVudEluVmlld1BvcnQsIGlzRWxlbWVudFZpc2libGUgfSBmcm9tIFwiLi91dGlsLnRzXCJcclxuXHJcbmV4cG9ydCBjb25zdCBtb3VzZXRyYXBJbnN0ID0gU3BpY2V0aWZ5Lk1vdXNldHJhcCgpXHJcbmV4cG9ydCBjb25zdCBLRVlfTElTVCA9IFwiYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXpcIi5zcGxpdChcIlwiKVxyXG5cclxubGV0IHNob3VsZExpc3RlblRvU25lYWtCaW5kcyA9IGZhbHNlXHJcbmV4cG9ydCBsZXQgbGlzdGVuaW5nVG9TbmVha0JpbmRzID0gZmFsc2VcclxuXHJcbkBjdXN0b21FbGVtZW50KFwic25lYWsta2V5XCIpXHJcbmNsYXNzIFNuZWFrS2V5IGV4dGVuZHMgTGl0RWxlbWVudCB7XHJcbiAgICBAcHJvcGVydHkoKVxyXG4gICAga2V5ID0gXCJOb25lXCJcclxuXHJcbiAgICBAcHJvcGVydHkoKVxyXG4gICAgdGFyZ2V0ID0gZG9jdW1lbnQuYm9keVxyXG5cclxuICAgIHByb3RlY3RlZCByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyB4LCB5IH0gPSB0aGlzLnRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxyXG4gICAgICAgIGNvbnN0IHN0eWxlcyA9IHsgdG9wOiB4ICsgXCJweFwiLCBsZWZ0OiB5ICsgXCJweFwiIH1cclxuICAgICAgICByZXR1cm4gaHRtbGA8c3BhbiBjbGFzcz1cInNuZWFrLWtleVwiIHN0eWxlcz0ke3N0eWxlTWFwKHN0eWxlcyl9PiR7dGhpcy5rZXl9PC9zcGFuPmBcclxuICAgIH1cclxufVxyXG5cclxuQGN1c3RvbUVsZW1lbnQoXCJzbmVhay1vdmVybGF5XCIpXHJcbmV4cG9ydCBjbGFzcyBTbmVha092ZXJsYXkgZXh0ZW5kcyBMaXRFbGVtZW50IHtcclxuICAgIEBwcm9wZXJ0eSgpXHJcbiAgICBwcm9wcyA9IFtdIGFzIEFycmF5PHsga2V5OiBzdHJpbmc7IHRhcmdldDogSFRNTEVsZW1lbnQgfT5cclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpXHJcblxyXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBrMSA9IDAsXHJcbiAgICAgICAgICAgICAgICBrMiA9IDBcclxuXHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMgPSBmLnBpcGUoXHJcbiAgICAgICAgICAgICAgICBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KENMSUNLQUJMRV9FTE1FTlRfU0VMRUNUT1IpKSxcclxuICAgICAgICAgICAgICAgIGEuZmlsdGVyKGlzRWxlbWVudFZpc2libGUpLFxyXG4gICAgICAgICAgICAgICAgYS5maWx0ZXIoaXNFbGVtZW50SW5WaWV3UG9ydCksXHJcbiAgICAgICAgICAgICAgICBhLm1hcCh0YXJnZXQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGtleSA9IEtFWV9MSVNUW2sxXSArIEtFWV9MSVNUW2syKytdXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGsyID49IEtFWV9MSVNULmxlbmd0aCkgazErKywgKGsyID0gMClcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4geyB0YXJnZXQsIGtleSB9XHJcbiAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgKVxyXG5cclxuICAgICAgICAgICAgaWYgKGsxICsgazIgPT09IDApIHRoaXMucmVtb3ZlKClcclxuICAgICAgICAgICAgZWxzZSBzaG91bGRMaXN0ZW5Ub1NuZWFrQmluZHMgPSB0cnVlXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcclxuICAgICAgICBzdXBlci5kaXNjb25uZWN0ZWRDYWxsYmFjaygpXHJcbiAgICAgICAgbGlzdGVuaW5nVG9TbmVha0JpbmRzID0gZmFsc2VcclxuICAgICAgICBzaG91bGRMaXN0ZW5Ub1NuZWFrQmluZHMgPSBmYWxzZVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZV9wcm9wcyhrZXk6IEtleWJvYXJkRXZlbnRbXCJrZXlcIl0pIHtcclxuICAgICAgICBpZiAoIWxpc3RlbmluZ1RvU25lYWtCaW5kcykge1xyXG4gICAgICAgICAgICBpZiAoc2hvdWxkTGlzdGVuVG9TbmVha0JpbmRzKSB7XHJcbiAgICAgICAgICAgICAgICBzaG91bGRMaXN0ZW5Ub1NuZWFrQmluZHMgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgbGlzdGVuaW5nVG9TbmVha0JpbmRzID0gdHJ1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5wcm9wcyA9IHRoaXMucHJvcHMuZmlsdGVyKHByb3AgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBbazEsIC4uLmtzXSA9IHByb3Aua2V5LnRvTG93ZXJDYXNlKClcclxuICAgICAgICAgICAgaWYgKGsxICE9PSBrZXkpIHJldHVybiBmYWxzZVxyXG4gICAgICAgICAgICBwcm9wLmtleSA9IGtzLmpvaW4oXCJcIilcclxuICAgICAgICAgICAgcmV0dXJuIHRydWVcclxuICAgICAgICB9KVxyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLmxlbmd0aCA9PT0gMSkgdGhpcy5wcm9wc1swXS50YXJnZXQuY2xpY2soKVxyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLmxlbmd0aCA8IDIpIHRoaXMucmVtb3ZlKClcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiBodG1sYCR7bWFwKHRoaXMucHJvcHMsIGkgPT4gaHRtbGA8c25lYWsta2V5IGtleT0ke2kua2V5fSAudGFyZ2V0PSR7aS50YXJnZXR9IC8+YCl9YFxyXG4gICAgfVxyXG59XHJcblxyXG5kZWNsYXJlIGdsb2JhbCB7XHJcbiAgICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcclxuICAgICAgICBcInNuZWFrLWtleVwiOiBTbmVha0tleVxyXG4gICAgICAgIFwic25lYWstb3ZlcmxheVwiOiBTbmVha092ZXJsYXlcclxuICAgIH1cclxufVxyXG4iLCAiaW1wb3J0IHsgZnVuY3Rpb24gYXMgZiwgbnVtYmVyIGFzIG4sIG9yZCB9IGZyb20gXCJodHRwczovL2VzbS5zaC9mcC10c1wiXHJcbmltcG9ydCB7IG1lYW4gfSBmcm9tIFwiaHR0cHM6Ly9lc20uc2gvZnAtdHMtc3RkL0FycmF5XCJcclxuaW1wb3J0IHsgbW9kIH0gZnJvbSBcImh0dHBzOi8vZXNtLnNoL2ZwLXRzLXN0ZC9OdW1iZXJcIlxyXG5pbXBvcnQgeyBsaXN0ZW5pbmdUb1NuZWFrQmluZHMgfSBmcm9tIFwiLi9zbmVhay50c1wiXHJcblxyXG5jb25zdCBTQ1JPTExfU1RFUCA9IDI1XHJcblxyXG5jb25zdCBmb2N1c09uQXBwID0gKCkgPT4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxFbGVtZW50PihcIi5Sb290X19tYWluLXZpZXcgLm9zLXZpZXdwb3J0XCIpIVxyXG5cclxuZXhwb3J0IGNvbnN0IGFwcFNjcm9sbCA9IChzOiBudW1iZXIpID0+IHtcclxuICAgIGNvbnN0IGFwcCA9IGZvY3VzT25BcHAoKVxyXG4gICAgY29uc3Qgc2Nyb2xsSW50ZXJ2YWxJZCA9IHNldEludGVydmFsKCgpID0+IChhcHAuc2Nyb2xsVG9wICs9IHMgKiBTQ1JPTExfU1RFUCksIDEwKVxyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsICgpID0+IGNsZWFySW50ZXJ2YWwoc2Nyb2xsSW50ZXJ2YWxJZCkpXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBhcHBTY3JvbGxZID0gKHk6IG51bWJlcikgPT4gZm9jdXNPbkFwcCgpLnNjcm9sbCgwLCB5KVxyXG5cclxuZXhwb3J0IGNvbnN0IG9wZW5QYWdlID0gKHBhZ2U6IHN0cmluZykgPT4gU3BpY2V0aWZ5LlBsYXRmb3JtLkhpc3RvcnkucHVzaCh7IHBhdGhuYW1lOiBwYWdlIH0pXHJcblxyXG5leHBvcnQgY29uc3Qgcm90YXRlU2lkZWJhciA9IChvZmZzZXQ6IG51bWJlcikgPT4ge1xyXG4gICAgY29uc3QgbmF2TGlua3MgPSBBcnJheS5mcm9tKFxyXG4gICAgICAgIEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MRWxlbWVudD4oXCIubWFpbi15b3VyTGlicmFyeVgtbmF2TGlua1wiKSkudmFsdWVzKCksXHJcbiAgICApXHJcblxyXG4gICAgZi5waXBlKFxyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbi15b3VyTGlicmFyeVgtbmF2TGlua0FjdGl2ZVwiKSxcclxuICAgICAgICBhY3RpdmUgPT4gbmF2TGlua3MuZmluZEluZGV4KGUgPT4gZSA9PT0gYWN0aXZlKSxcclxuICAgICAgICBjdXJyID0+IG1vZChuYXZMaW5rcy5sZW5ndGgpKGN1cnIgPT09IC0xICYmIG9mZnNldCA8PSAwID8gb2Zmc2V0IDogY3VyciArIG9mZnNldCksXHJcbiAgICAgICAgdGFyZ2V0ID0+IG5hdkxpbmtzW3RhcmdldF0uY2xpY2soKSxcclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHJlc2l6ZUxlZnRTaWRlYmFyID0gKHB4czogbnVtYmVyKSA9PiB7XHJcbiAgICBjb25zdCBodG1sID0gZG9jdW1lbnQuZmlyc3RFbGVtZW50Q2hpbGQhIGFzIEhUTUxIdG1sRWxlbWVudCxcclxuICAgICAgICBodG1sU3R5bGUgPSBodG1sLnN0eWxlXHJcbiAgICBodG1sU3R5bGUuY3NzVGV4dCA9IGh0bWxTdHlsZS5jc3NUZXh0LnJlcGxhY2UoLygtLWxlZnQtc2lkZWJhci13aWR0aDogKVteO10rLywgYCQxJHtweHN9cHhgKVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQmluZCB7XHJcbiAgICBwcml2YXRlIGN0cmwgPSBmYWxzZVxyXG4gICAgcHJpdmF0ZSBzaGlmdCA9IGZhbHNlXHJcbiAgICBwcml2YXRlIGFsdCA9IGZhbHNlXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGtleTogc3RyaW5nLCBwcml2YXRlIGNhbGxiYWNrOiAoZXZlbnQ6IEtleWJvYXJkRXZlbnQpID0+IHZvaWQpIHt9XHJcblxyXG4gICAgc2V0Q3RybCA9IChyZXF1aXJlZDogYm9vbGVhbikgPT4gKCh0aGlzLmN0cmwgPSByZXF1aXJlZCksIHRoaXMpXHJcbiAgICBzZXRTaGlmdCA9IChyZXF1aXJlZDogYm9vbGVhbikgPT4gKCh0aGlzLnNoaWZ0ID0gcmVxdWlyZWQpLCB0aGlzKVxyXG4gICAgc2V0QWx0ID0gKHJlcXVpcmVkOiBib29sZWFuKSA9PiAoKHRoaXMuYWx0ID0gcmVxdWlyZWQpLCB0aGlzKVxyXG5cclxuICAgIHJlZ2lzdGVyID0gKCkgPT5cclxuICAgICAgICBTcGljZXRpZnkuS2V5Ym9hcmQucmVnaXN0ZXJTaG9ydGN1dChcclxuICAgICAgICAgICAgeyBrZXk6IHRoaXMua2V5LCBjdHJsOiB0aGlzLmN0cmwsIHNoaWZ0OiB0aGlzLnNoaWZ0LCBhbHQ6IHRoaXMuYWx0IH0sXHJcbiAgICAgICAgICAgIGV2ZW50ID0+IHZvaWQgKCFsaXN0ZW5pbmdUb1NuZWFrQmluZHMgJiYgdGhpcy5jYWxsYmFjayhldmVudCkpLFxyXG4gICAgICAgIClcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGlzRWxlbWVudFZpc2libGUgPSAoZTogSFRNTEVsZW1lbnQpID0+IGUuY2hlY2tWaXNpYmlsaXR5KHsgY2hlY2tPcGFjaXR5OiB0cnVlLCBjaGVja1Zpc2liaWxpdHlDU1M6IHRydWUgfSlcclxuZXhwb3J0IGNvbnN0IGlzRWxlbWVudEluVmlld1BvcnQgPSAoZTogSFRNTEVsZW1lbnQpID0+IHtcclxuICAgIGNvbnN0IGMgPSBkb2N1bWVudC5ib2R5XHJcbiAgICBjb25zdCBib3VuZCA9IGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcclxuICAgIGNvbnN0IHdpdGhpbiA9IChtOiBudW1iZXIsIE06IG51bWJlcikgPT4gKHg6IG51bWJlcikgPT4geCA9PT0gb3JkLmNsYW1wKG4uT3JkKShtLCBNKSh4KVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICBmLnBpcGUobWVhbihbYm91bmQudG9wLCBib3VuZC5ib3R0b21dKSwgd2l0aGluKDAsIGMuY2xpZW50SGVpZ2h0KSkgJiZcclxuICAgICAgICBmLnBpcGUobWVhbihbYm91bmQubGVmdCwgYm91bmQucmlnaHRdKSwgd2l0aGluKDAsIGMuY2xpZW50V2lkdGgpKVxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQ0xJQ0tBQkxFX0VMTUVOVF9TRUxFQ1RPUiA9IGAuUm9vdF9fdG9wLWNvbnRhaW5lciBbaHJlZl06bm90KGxpbmspLC5Sb290X190b3AtY29udGFpbmVyIGJ1dHRvbiwuUm9vdF9fdG9wLWNvbnRhaW5lciBbcm9sZT1cImJ1dHRvblwiXWBcclxuIiwgIi8vIGV4cG9ydCBpbnRlcmZhY2UgU3BvdGlmeUlEXHJcbi8vICAgICBleHRlbmRzIE5ld3R5cGU8eyByZWFkb25seSBTcG90aWZ5SUQ6IHVuaXF1ZSBzeW1ib2wgfSwgc3RyaW5nPiB7fVxyXG4vLyBleHBvcnQgaW50ZXJmYWNlIFNwb3RpZnlVUklcclxuLy8gICAgIGV4dGVuZHMgTmV3dHlwZTx7IHJlYWRvbmx5IFNwb3RpZnlVUkk6IHVuaXF1ZSBzeW1ib2wgfSwgc3RyaW5nPiB7fVxyXG5cclxuaW1wb3J0IHsgYXJyYXkgYXMgYSwgZnVuY3Rpb24gYXMgZiB9IGZyb20gXCJodHRwczovL2VzbS5zaC9mcC10c1wiXHJcblxyXG5leHBvcnQgdHlwZSBTcG90aWZ5SUQgPSBzdHJpbmdcclxuZXhwb3J0IHR5cGUgU3BvdGlmeVVSSSA9IHN0cmluZ1xyXG5cclxuZXhwb3J0IHR5cGUgU3BvdGlmeUxvY09iaiA9IHtcclxuICAgIGJlZm9yZT86IFwic3RhcnRcIiB8IHsgdXJpOiBTcG90aWZ5VVJJIH0gfCB7IHVpZDogc3RyaW5nIH1cclxuICAgIGFmdGVyPzogXCJlbmRcIiB8IHsgdXJpOiBTcG90aWZ5VVJJIH0gfCB7IHVpZDogc3RyaW5nIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFNwb3RpZnlMb2MgPSB7XHJcbiAgICBiZWZvcmU6IHtcclxuICAgICAgICBzdGFydDogZi5jb25zdGFudCh7IGJlZm9yZTogXCJzdGFydFwiIH0gYXMgU3BvdGlmeUxvY09iaiksXHJcbiAgICAgICAgZnJvbVVyaTogKHVyaTogU3BvdGlmeVVSSSkgPT4gKHsgYmVmb3JlOiB7IHVyaSB9IH0pLFxyXG4gICAgICAgIGZyb21VaWQ6ICh1aWQ6IHN0cmluZykgPT4gKHsgYmVmb3JlOiB7IHVpZCB9IH0pLFxyXG4gICAgfSxcclxuICAgIGFmdGVyOiB7XHJcbiAgICAgICAgZW5kOiBmLmNvbnN0YW50KHsgYWZ0ZXI6IFwiZW5kXCIgfSBhcyBTcG90aWZ5TG9jT2JqKSxcclxuICAgICAgICBmcm9tVXJpOiAodXJpOiBTcG90aWZ5VVJJKSA9PiAoeyBhZnRlcjogeyB1cmkgfSB9KSxcclxuICAgICAgICBmcm9tVWlkOiAodWlkOiBzdHJpbmcpID0+ICh7IGFmdGVyOiB7IHVpZCB9IH0pLFxyXG4gICAgfSxcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGVzY2FwZVJlZ2V4ID0gKHN0cjogc3RyaW5nKSA9PiBzdHIucmVwbGFjZSgvWy4qKz9eJHt9KCl8W1xcXVxcXFxdL2csIGBcXFxcJCZgKVxyXG5cclxuZXhwb3J0IGNvbnN0IHRpdGxlQ2FzZSA9IChzdHI6IHN0cmluZykgPT4gc3RyLnJlcGxhY2UoL1xcYlxcdy9nLCBsID0+IGwudG9VcHBlckNhc2UoKSlcclxuXHJcbmV4cG9ydCBjb25zdCBub3JtYWxpemVTdHIgPSAoc3RyOiBzdHJpbmcpID0+XHJcbiAgICBzdHJcclxuICAgICAgICAubm9ybWFsaXplKFwiTkZLRFwiKVxyXG4gICAgICAgIC5yZXBsYWNlKC9cXCguKlxcKS9nLCBcIlwiKVxyXG4gICAgICAgIC5yZXBsYWNlKC9cXFsuKlxcXS9nLCBcIlwiKVxyXG4gICAgICAgIC5yZXBsYWNlKC8tXywvZywgXCIgXCIpXHJcbiAgICAgICAgLnJlcGxhY2UoL1teYS16QS1aMC05IF0vZywgXCJcIilcclxuICAgICAgICAucmVwbGFjZSgvXFxzKy9nLCBcIiBcIilcclxuICAgICAgICAudG9Mb3dlckNhc2UoKVxyXG4gICAgICAgIC50cmltKClcclxuXHJcbi8vISBEb2VzIGxvY2F0aW9uIGFjdHVhbGx5IHBvaW50IHRvIGRvY3VtZW50LmJvZHk/XHJcbmV4cG9ydCBjb25zdCB3YWl0Rm9yRWxlbWVudCA9IDxFIGV4dGVuZHMgRWxlbWVudD4oXHJcbiAgICBzZWxlY3Rvcjogc3RyaW5nLFxyXG4gICAgdGltZW91dCA9IDEwMDAsXHJcbiAgICBsb2NhdGlvbiA9IGRvY3VtZW50LmJvZHksXHJcbiAgICBub3RFbD86IEUsXHJcbikgPT5cclxuICAgIG5ldyBQcm9taXNlKChyZXNvbHZlOiAodmFsdWU6IEVsZW1lbnQgfCBudWxsKSA9PiB2b2lkKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcmVzID0gKHY6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICBvYnNlcnZlci5kaXNjb25uZWN0KClcclxuICAgICAgICAgICAgcmVzb2x2ZSh2KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxFPihzZWxlY3RvcilcclxuICAgICAgICAgICAgaWYgKGVsICYmICghbm90RWwgfHwgZWwgIT09IG5vdEVsKSkgcmV0dXJuIHJlcyhlbClcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBvYnNlcnZlci5vYnNlcnZlKGxvY2F0aW9uLCB7XHJcbiAgICAgICAgICAgIGNoaWxkTGlzdDogdHJ1ZSxcclxuICAgICAgICAgICAgc3VidHJlZTogdHJ1ZSxcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBpZiAodGltZW91dCkgc2V0VGltZW91dCgoKSA9PiByZXMobnVsbCksIHRpbWVvdXQpXHJcbiAgICB9KVxyXG5cclxuZXhwb3J0IGNvbnN0IHRyYXBFbGVtZW50ID0gPEUgZXh0ZW5kcyBFbGVtZW50PihcclxuICAgIHNlbGVjdG9yOiBzdHJpbmcsXHJcbiAgICBjYWxsYmFjazogKGVsOiBFIHwgbnVsbCwgbGFzdEVsOiBFIHwgbnVsbCkgPT4gdm9pZCxcclxuICAgIGxvY2F0aW9uID0gZG9jdW1lbnQuYm9keSxcclxuKSA9PiB7XHJcbiAgICBsZXQgbGFzdEVsOiBFIHwgbnVsbCA9IG51bGxcclxuXHJcbiAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKCgpID0+IHtcclxuICAgICAgICBjb25zdCBlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8RT4oc2VsZWN0b3IpXHJcbiAgICAgICAgaWYgKGVsICE9PSBsYXN0RWwpIGNhbGxiYWNrKGVsLCBsYXN0RWwpXHJcbiAgICAgICAgbGFzdEVsID0gZWxcclxuICAgIH0pXHJcblxyXG4gICAgb2JzZXJ2ZXIub2JzZXJ2ZShsb2NhdGlvbiwge1xyXG4gICAgICAgIGNoaWxkTGlzdDogdHJ1ZSxcclxuICAgICAgICBzdWJ0cmVlOiB0cnVlLFxyXG4gICAgfSlcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHNsZWVwID0gKG1zOiBudW1iZXIpID0+IG5ldyBQcm9taXNlKHJlc29sdmUgPT4gc2V0VGltZW91dChyZXNvbHZlLCBtcykpXHJcblxyXG5leHBvcnQgY29uc3QgZ2V0UmVhY3RQcm9wcyA9IChlbGVtZW50OiBFbGVtZW50KSA9PlxyXG4gICAgZWxlbWVudFtPYmplY3Qua2V5cyhlbGVtZW50KS5maW5kKGsgPT4gay5zdGFydHNXaXRoKFwiX19yZWFjdFByb3BzJFwiKSkgYXMga2V5b2YgdHlwZW9mIGVsZW1lbnRdXHJcblxyXG5leHBvcnQgY29uc3QgaXNMaWtlZCA9ICh1cmlzOiBTcG90aWZ5VVJJW10pID0+IFNwaWNldGlmeS5QbGF0Zm9ybS5MaWJyYXJ5QVBJLmNvbnRhaW5zKC4uLnVyaXMpIGFzIFByb21pc2U8Ym9vbGVhbltdPlxyXG5cclxuZXhwb3J0IGNvbnN0IHNldExpa2VkID0gKHVyaXM6IFNwb3RpZnlVUklbXSwgbGlrZWQ6IGJvb2xlYW4pID0+XHJcbiAgICBTcGljZXRpZnkuUGxhdGZvcm0uTGlicmFyeUFQSVtsaWtlZCA/IFwiYWRkXCIgOiBcInJlbW92ZVwiXSguLi51cmlzKVxyXG5cclxuZXhwb3J0IGNvbnN0IHRvZ2dsZUxpa2VkID0gYXN5bmMgKHVyaXM6IFNwb3RpZnlVUklbXSkgPT4ge1xyXG4gICAgY29uc3QgbGlrZWQgPSBhd2FpdCBpc0xpa2VkKHVyaXMpXHJcblxyXG4gICAgcmV0dXJuIGF3YWl0IGYucGlwZShcclxuICAgICAgICB1cmlzLFxyXG4gICAgICAgIGEucmVkdWNlV2l0aEluZGV4KFxyXG4gICAgICAgICAgICBbW10gYXMgU3BvdGlmeVVSSVtdLCBbXSBhcyBTcG90aWZ5VVJJW11dIGFzIGNvbnN0LFxyXG4gICAgICAgICAgICAoaSwgYWNjLCB1cmkpID0+IChhY2NbTnVtYmVyKGxpa2VkW2ldKV0ucHVzaCh1cmkpLCBhY2MpLFxyXG4gICAgICAgICksXHJcbiAgICAgICAgKFt0b0FkZCwgdG9SZW1dKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHBzID0gW11cclxuICAgICAgICAgICAgaWYgKHRvQWRkLmxlbmd0aCkgcHMucHVzaChzZXRMaWtlZCh0b0FkZCwgdHJ1ZSkpXHJcbiAgICAgICAgICAgIGlmICh0b1JlbS5sZW5ndGgpIHBzLnB1c2goc2V0TGlrZWQodG9SZW0sIGZhbHNlKSlcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKHBzKVxyXG4gICAgICAgIH0sXHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBjcmVhdGVRdWV1ZUl0ZW0gPSAocXVldWVkOiBib29sZWFuKSA9PiAodXJpOiBTcG90aWZ5VVJJKSA9PiAoe1xyXG4gICAgY29udGV4dFRyYWNrOiB7XHJcbiAgICAgICAgdXJpLFxyXG4gICAgICAgIHVpZDogXCJcIixcclxuICAgICAgICBtZXRhZGF0YToge1xyXG4gICAgICAgICAgICBpc19xdWV1ZWQ6IHF1ZXVlZC50b1N0cmluZygpLFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgcmVtb3ZlZDogW10sXHJcbiAgICBibG9ja2VkOiBbXSxcclxuICAgIHByb3ZpZGVyOiBxdWV1ZWQgPyBcInF1ZXVlXCIgOiBcImNvbnRleHRcIixcclxufSlcclxuXHJcbmV4cG9ydCBjb25zdCBzZXRRdWV1ZSA9IGFzeW5jIChuZXh0VHJhY2tzOiBBcnJheTxSZXR1cm5UeXBlPFJldHVyblR5cGU8dHlwZW9mIGNyZWF0ZVF1ZXVlSXRlbT4+PikgPT4ge1xyXG4gICAgY29uc3QgeyBfcXVldWUsIF9jbGllbnQgfSA9IFNwaWNldGlmeS5QbGF0Zm9ybS5QbGF5ZXJBUEkuX3F1ZXVlXHJcbiAgICBjb25zdCB7IHByZXZUcmFja3MsIHF1ZXVlUmV2aXNpb24gfSA9IF9xdWV1ZVxyXG5cclxuICAgIHJldHVybiBfY2xpZW50LnNldFF1ZXVlKHtcclxuICAgICAgICBuZXh0VHJhY2tzLFxyXG4gICAgICAgIHByZXZUcmFja3MsXHJcbiAgICAgICAgcXVldWVSZXZpc2lvbixcclxuICAgIH0pIGFzIFByb21pc2U8eyBlcnJvcjogbnVtYmVyOyByZWFzb25zOiBzdHJpbmcgfT5cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHNldFBsYXlpbmdDb250ZXh0ID0gKHVyaTogU3BvdGlmeVVSSSkgPT4ge1xyXG4gICAgY29uc3QgeyBzZXNzaW9uSWQgfSA9IFNwaWNldGlmeS5QbGF0Zm9ybS5QbGF5ZXJBUEkuZ2V0U3RhdGUoKVxyXG4gICAgcmV0dXJuIFNwaWNldGlmeS5QbGF0Zm9ybS5QbGF5ZXJBUEkudXBkYXRlQ29udGV4dChzZXNzaW9uSWQsIHsgdXJpLCB1cmw6IFwiY29udGV4dDovL1wiICsgdXJpIH0pIGFzIFByb21pc2U8dW5kZWZpbmVkPlxyXG59XHJcbiIsICJpbXBvcnQgeyBLRVlfTElTVCwgU25lYWtPdmVybGF5LCBtb3VzZXRyYXBJbnN0IH0gZnJvbSBcIi4vc25lYWsudHNcIlxyXG5pbXBvcnQgeyBCaW5kLCBhcHBTY3JvbGwsIGFwcFNjcm9sbFksIG9wZW5QYWdlLCByb3RhdGVTaWRlYmFyIH0gZnJvbSBcIi4vdXRpbC50c1wiXHJcbmltcG9ydCB7IHRvZ2dsZUxpa2VkIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC91dGlsLnRzXCJcclxuXHJcbmltcG9ydCBcIi4vYXNzZXRzL3N0eWxlcy5zY3NzXCJcclxuXHJcbmNvbnN0IHsgS0VZUyB9ID0gU3BpY2V0aWZ5LktleWJvYXJkXHJcblxyXG5sZXQgc25lYWtPdmVybGF5OiBTbmVha092ZXJsYXlcclxuXHJcbmNvbnN0IGJpbmRzID0gW1xyXG4gICAgbmV3IEJpbmQoXCJzXCIsICgpID0+IHtcclxuICAgICAgICBzbmVha092ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic25lYWstb3ZlcmxheVwiKVxyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kKHNuZWFrT3ZlcmxheSlcclxuICAgIH0pLFxyXG4gICAgbmV3IEJpbmQoXCJzXCIsIGFzeW5jICgpID0+IHtcclxuICAgICAgICAvLyBwcm9kdWN0X3N0YXRlIHdhcyByZW5hbWVkIHRvIHByb2R1Y3Rfc3RhdGVfc2VydmljZSBpbiBTcG90aWZ5IDEuMi4yMVxyXG4gICAgICAgIGNvbnN0IHByb2R1Y3RTdGF0ZSA9XHJcbiAgICAgICAgICAgIFNwaWNldGlmeS5QbGF0Zm9ybS5Vc2VyQVBJLl9wcm9kdWN0X3N0YXRlIHx8IFNwaWNldGlmeS5QbGF0Zm9ybS5Vc2VyQVBJLl9wcm9kdWN0X3N0YXRlX3NlcnZpY2VcclxuICAgICAgICBhd2FpdCBwcm9kdWN0U3RhdGUucHV0VmFsdWVzKHsgcGFpcnM6IHsgXCJhcHAtZGV2ZWxvcGVyXCI6IFwiMlwiIH0gfSlcclxuICAgICAgICBTcGljZXRpZnkuUGxhdGZvcm0uVXBkYXRlQVBJLmFwcGx5VXBkYXRlKClcclxuICAgIH0pLnNldFNoaWZ0KHRydWUpLFxyXG4gICAgbmV3IEJpbmQoXCJ0YWJcIiwgKCkgPT4gcm90YXRlU2lkZWJhcigxKSksXHJcbiAgICBuZXcgQmluZChcInRhYlwiLCAoKSA9PiByb3RhdGVTaWRlYmFyKC0xKSkuc2V0U2hpZnQodHJ1ZSksXHJcbiAgICBuZXcgQmluZChcImhcIiwgU3BpY2V0aWZ5LlBsYXRmb3JtLkhpc3RvcnkuZ29CYWNrKS5zZXRTaGlmdCh0cnVlKSxcclxuICAgIG5ldyBCaW5kKFwibFwiLCBTcGljZXRpZnkuUGxhdGZvcm0uSGlzdG9yeS5nb0ZvcndhcmQpLnNldFNoaWZ0KHRydWUpLFxyXG4gICAgbmV3IEJpbmQoXCJqXCIsICgpID0+IGFwcFNjcm9sbCgxKSksXHJcbiAgICBuZXcgQmluZChcImtcIiwgKCkgPT4gYXBwU2Nyb2xsKC0xKSksXHJcbiAgICBuZXcgQmluZChcImdcIiwgKCkgPT4gYXBwU2Nyb2xsWSgwKSksXHJcbiAgICBuZXcgQmluZChcImdcIiwgKCkgPT4gYXBwU2Nyb2xsWShOdW1iZXIuTUFYX1NBRkVfSU5URUdFUikpLnNldFNoaWZ0KHRydWUpLFxyXG4gICAgbmV3IEJpbmQoXCJtXCIsICgpID0+IHRvZ2dsZUxpa2VkKFtTcGljZXRpZnkuUGxheWVyLmRhdGEuaXRlbS51cmldKSksXHJcbiAgICBuZXcgQmluZChcIi9cIiwgZSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgb3BlblBhZ2UoXCIvc2VhcmNoXCIpXHJcbiAgICB9KSxcclxuXVxyXG5cclxuYmluZHMubWFwKGJpbmQgPT4gYmluZC5yZWdpc3RlcigpKVxyXG5cclxubW91c2V0cmFwSW5zdC5iaW5kKEtFWV9MSVNULCBlID0+IHNuZWFrT3ZlcmxheS51cGRhdGVfcHJvcHMoZS5rZXkpLCBcImtleXByZXNzXCIpXHJcbm1vdXNldHJhcEluc3QuYmluZChLRVlTLkVTQ0FQRSwgKCkgPT4gc25lYWtPdmVybGF5Py5yZW1vdmUoKSlcclxuIl0sCiAgIm1hcHBpbmdzIjogIndNQUVBLE9BQVMsU0FBU0EsRUFBRyxZQUFZQyxNQUFTLHVCQUUxQyxPQUFTLGNBQUFDLEVBQVksUUFBQUMsTUFBWSxxQkFDakMsT0FBUyxpQkFBQUMsRUFBZSxZQUFBQyxNQUFnQixtQ0FDeEMsT0FBUyxZQUFBQyxNQUFnQiw2Q0FDekIsT0FBUyxPQUFBQyxNQUFXLHVDQ1BwQixPQUFTLFlBQVlDLEVBQUcsVUFBVUMsRUFBRyxPQUFBQyxNQUFXLHVCQUNoRCxPQUFTLFFBQUFDLE1BQVksaUNBQ3JCLE9BQVMsT0FBQUMsTUFBVyxrQ0FHcEIsSUFBTUMsRUFBYyxHQUVkQyxFQUFhLElBQU0sU0FBUyxjQUF1QiwrQkFBK0Is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LENBQUMsQ0FBQyxFQUNqRSxJQUFJSixFQUFLLElBQUssR0FBSyxDQUNmLEVBQUUsZUFBZSxFQUNqQkssRUFBUyxTQUFTLENBQ3RCLENBQUMsQ0FDTCxFQUVBTixFQUFNLElBQUlPLEdBQVFBLEVBQUssU0FBUyxDQUFDLEVBRWpDQyxFQUFjLEtBQUtDLEVBQVUsR0FBS1YsRUFBYSxhQUFhLEVBQUUsR0FBRyxFQUFHLFVBQVUsRUFDOUVTLEVBQWMsS0FBS1YsRUFBSyxPQUFRLElBQU1DLEdBQWMsT0FBTyxDQUFDIiwKICAibmFtZXMiOiBbImEiLCAiZiIsICJMaXRFbGVtZW50IiwgImh0bWwiLCAiY3VzdG9tRWxlbWVudCIsICJwcm9wZXJ0eSIsICJzdHlsZU1hcCIsICJtYXAiLCAiZiIsICJuIiwgIm9yZCIsICJtZWFuIiwgIm1vZCIsICJTQ1JPTExfU1RFUCIsICJmb2N1c09uQXBwIiwgImFwcFNjcm9sbCIsICJzIiwgImFwcCIsICJzY3JvbGxJbnRlcnZhbElkIiwgImFwcFNjcm9sbFkiLCAieSIsICJvcGVuUGFnZSIsICJwYWdlIiwgInJvdGF0ZVNpZGViYXIiLCAib2Zmc2V0IiwgIm5hdkxpbmtzIiwgImYiLCAiYWN0aXZlIiwgImUiLCAiY3VyciIsICJtb2QiLCAidGFyZ2V0IiwgIkJpbmQiLCAia2V5IiwgImNhbGxiYWNrIiwgInJlcXVpcmVkIiwgImV2ZW50IiwgImxpc3RlbmluZ1RvU25lYWtCaW5kcyIsICJpc0VsZW1lbnRWaXNpYmxlIiwgImlzRWxlbWVudEluVmlld1BvcnQiLCAiYyIsICJib3VuZCIsICJ3aXRoaW4iLCAibSIsICJNIiwgIngiLCAib3JkIiwgIm4iLCAiZiIsICJtZWFuIiwgIkNMSUNLQUJMRV9FTE1FTlRfU0VMRUNUT1IiLCAibW91c2V0cmFwSW5zdCIsICJLRVlfTElTVCIsICJzaG91bGRMaXN0ZW5Ub1NuZWFrQmluZHMiLCAibGlzdGVuaW5nVG9TbmVha0JpbmRzIiwgIlNuZWFrS2V5IiwgIkxpdEVsZW1lbnQiLCAieCIsICJ5IiwgInN0eWxlcyIsICJodG1sIiwgInN0eWxlTWFwIiwgIl9fZGVjb3JhdGVDbGFzcyIsICJwcm9wZXJ0eSIsICJjdXN0b21FbGVtZW50IiwgIlNuZWFrT3ZlcmxheSIsICJrMSIsICJrMiIsICJmIiwgIkNMSUNLQUJMRV9FTE1FTlRfU0VMRUNUT1IiLCAiYSIsICJpc0VsZW1lbnRWaXNpYmxlIiwgImlzRWxlbWVudEluVmlld1BvcnQiLCAidGFyZ2V0IiwgImtleSIsICJwcm9wIiwgImtzIiwgIm1hcCIsICJpIiwgImEiLCAiZiIsICJTcG90aWZ5TG9jIiwgInVyaSIsICJ1aWQiLCAiaXNMaWtlZCIsICJ1cmlzIiwgInNldExpa2VkIiwgImxpa2VkIiwgInRvZ2dsZUxpa2VkIiwgImYiLCAiYSIsICJpIiwgImFjYyIsICJ1cmkiLCAidG9BZGQiLCAidG9SZW0iLCAicHMiLCAiS0VZUyIsICJzbmVha092ZXJsYXkiLCAiYmluZHMiLCAiQmluZCIsICJyb3RhdGVTaWRlYmFyIiwgImFwcFNjcm9sbCIsICJhcHBTY3JvbGxZIiwgInRvZ2dsZUxpa2VkIiwgIm9wZW5QYWdlIiwgImJpbmQiLCAibW91c2V0cmFwSW5zdCIsICJLRVlfTElTVCJdCn0K
(async () => {
    if (!document.getElementById("keyboard-shortcuts-css")) {
        const el = document.createElement("style")
        el.id = "keyboard-shortcuts-css"
        
        el.textContent = "#sneak-overlay{z-index:100000;position:absolute;width:100%;height:100%;display:none}#sneak-overlay>.sneak-key{position:fixed;padding:3px 6px;background-color:#000;border-radius:3px;border:solid 2px white;color:#fff;text-transform:lowercase;line-height:normal;font-size:14px;font-weight:500}\n/*# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vZXh0ZW5zaW9ucy9rZXlib2FyZC1zaG9ydGN1dHMvYXNzZXRzL3N0eWxlcy5jc3MiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIiNzbmVhay1vdmVybGF5e3otaW5kZXg6MTAwMDAwO3Bvc2l0aW9uOmFic29sdXRlO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7ZGlzcGxheTpub25lfSNzbmVhay1vdmVybGF5Pi5zbmVhay1rZXl7cG9zaXRpb246Zml4ZWQ7cGFkZGluZzozcHggNnB4O2JhY2tncm91bmQtY29sb3I6YmxhY2s7Ym9yZGVyLXJhZGl1czozcHg7Ym9yZGVyOnNvbGlkIDJweCB3aGl0ZTtjb2xvcjp3aGl0ZTt0ZXh0LXRyYW5zZm9ybTpsb3dlcmNhc2U7bGluZS1oZWlnaHQ6bm9ybWFsO2ZvbnQtc2l6ZToxNHB4O2ZvbnQtd2VpZ2h0OjUwMH0iXSwKICAibWFwcGluZ3MiOiAiQUFBQSxDQUFDLGNBQWMsUUFBUSxPQUFPLFNBQVMsU0FBUyxNQUFNLEtBQUssT0FBTyxLQUFLLFFBQVEsSUFBSSxDQUFDLENBQW5GLGFBQWlHLENBQUMsQ0FBQyxVQUFVLFNBQVMsTUFBdkgsUUFBcUksSUFBSSxJQUFJLGlCQUFpQixLQUE5SixjQUFrTCxJQUFJLE9BQU8sTUFBTSxJQUFJLE1BQU0sTUFBTSxLQUFNLGVBQWUsVUFBVSxZQUFZLE9BQU8sVUFBVSxLQUFLLFlBQVksR0FBRyIsCiAgIm5hbWVzIjogW10KfQo= */\n"
        document.head.appendChild(el)
    }
})()