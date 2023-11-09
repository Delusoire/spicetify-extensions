var M=Object.defineProperty;var q=Object.getOwnPropertyDescriptor;var p=(e,r,t,o)=>{for(var n=o>1?void 0:o?q(r,t):r,i=e.length-1,a;i>=0;i--)(a=e[i])&&(n=(o?a(r,t,n):a(n))||n);return o&&n&&M(r,t,n),n};import{array as S,function as N}from"https://esm.sh/fp-ts";import{LitElement as R,html as k}from"https://esm.sh/lit";import{customElement as A,property as x}from"https://esm.sh/lit/decorators.js";import{styleMap as j}from"https://esm.sh/lit/directives/style-map.js";import{map as z}from"https://esm.sh/lit/directives/map.js";import{function as y,number as H,ord as O}from"https://esm.sh/fp-ts";import{mean as L}from"https://esm.sh/fp-ts-std/Array";import{mod as $}from"https://esm.sh/fp-ts-std/Number";var B=25,I=()=>document.querySelector(".Root__main-view .os-viewport"),b=e=>{let r=I(),t=setInterval(()=>r.scrollTop+=e*B,10);document.addEventListener("keyup",()=>clearInterval(t))},h=e=>I().scroll(0,e),P=e=>Spicetify.Platform.History.push({pathname:e}),g=e=>{let r=Array.from(Array.from(document.querySelectorAll(".main-yourLibraryX-navLink")).values());y.pipe(document.querySelector(".main-yourLibraryX-navLinkActive"),t=>r.findIndex(o=>o===t),t=>$(r.length)(t===-1&&e<=0?e:t+e),t=>r[t].click())};var s=class{constructor(r,t){this.key=r;this.callback=t;this.ctrl=!1;this.shift=!1;this.alt=!1;this.setCtrl=r=>(this.ctrl=r,this);this.setShift=r=>(this.shift=r,this);this.setAlt=r=>(this.alt=r,this);this.register=()=>Spicetify.Keyboard.registerShortcut({key:this.key,ctrl:this.ctrl,shift:this.shift,alt:this.alt},r=>void(!c&&this.callback(r)))}},w=e=>e.checkVisibility({checkOpacity:!0,checkVisibilityCSS:!0}),_=e=>{let r=document.body,t=e.getBoundingClientRect(),o=(n,i)=>a=>a===O.clamp(H.Ord)(n,i)(a);return y.pipe(L([t.top,t.bottom]),o(0,r.clientHeight))&&y.pipe(L([t.left,t.right]),o(0,r.clientWidth))},T='.Root__top-container [href]:not(link),.Root__top-container button,.Root__top-container [role="button"]';var E=Spicetify.Mousetrap(),u="abcdefghijklmnopqrstuvwxyz".split(""),f=!1,c=!1,l=class extends R{constructor(){super(...arguments);this.key="None";this.target=document.body}render(){let{x:t,y:o}=this.target.getBoundingClientRect(),n={top:t+"px",left:o+"px"};return k`<span style=${j(n)}>${this.key}</span>`}};p([x()],l.prototype,"key",2),p([x()],l.prototype,"target",2),l=p([A("sneak-key")],l);var m=class extends R{constructor(){super();this.props=[];requestAnimationFrame(()=>{let t=0,o=0;this.props=N.pipe(Array.from(document.querySelectorAll(T)),S.filter(w),S.filter(_),S.map(n=>{let i=u[t]+u[o++];return o>=u.length&&(t++,o=0),{target:n,key:i}})),t+o===0?this.remove():f=!0})}disconnectedCallback(){super.disconnectedCallback(),c=!1,f=!1}update_props(t){if(!c){f&&(f=!1,c=!0);return}this.props=this.props.filter(o=>{let[n,...i]=o.key.toLowerCase();return n!==t?!1:(o.key=i.join(""),!0)}),this.props.length===1&&this.props[0].target.click(),this.props.length<2&&this.remove()}render(){return k`${z(this.props,t=>k`<sneak-key key=${t.key} .target=${t.target} />`)}`}};p([x()],m.prototype,"props",2),m=p([A("sneak-overlay")],m);import{array as V,function as v}from"https://esm.sh/fp-ts";var pe={before:{start:v.constant({before:"start"}),fromUri:e=>({before:{uri:e}}),fromUid:e=>({before:{uid:e}})},after:{end:v.constant({after:"end"}),fromUri:e=>({after:{uri:e}}),fromUid:e=>({after:{uid:e}})}};var K=e=>Spicetify.Platform.LibraryAPI.contains(...e),C=(e,r)=>Spicetify.Platform.LibraryAPI[r?"add":"remove"](...e),U=async e=>{let r=await K(e);return await v.pipe(e,V.reduceWithIndex([[],[]],(t,o,n)=>(o[Number(r[t])].push(n),o)),([t,o])=>{let n=[];return t.length&&n.push(C(t,!0)),o.length&&n.push(C(o,!1)),Promise.all(n)})};debugger;var{KEYS:F}=Spicetify.Keyboard,d,Y=[new s("s",()=>{d=document.createElement("sneak-overlay"),document.body.append(d)}),new s("s",async()=>{await(Spicetify.Platform.UserAPI._product_state||Spicetify.Platform.UserAPI._product_state_service).putValues({pairs:{"app-developer":"2"}}),Spicetify.Platform.UpdateAPI.applyUpdate()}).setShift(!0),new s("tab",()=>g(1)),new s("tab",()=>g(-1)).setShift(!0),new s("h",Spicetify.Platform.History.goBack).setShift(!0),new s("l",Spicetify.Platform.History.goForward).setShift(!0),new s("j",()=>b(1)),new s("k",()=>b(-1)),new s("g",()=>h(0)),new s("g",()=>h(Number.MAX_SAFE_INTEGER)).setShift(!0),new s("m",()=>U([Spicetify.Player.data.item.uri])),new s("/",e=>{e.preventDefault(),P("/search")})];Y.map(e=>e.register());E.bind(u,e=>d.update_props(e.key),"keypress");E.bind(F.ESCAPE,()=>d?.remove());
//! Does location actually point to document.body?
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vZXh0ZW5zaW9ucy9rZXlib2FyZC1zaG9ydGN1dHMvc25lYWsudHMiLCAiLi4vLi4vZXh0ZW5zaW9ucy9rZXlib2FyZC1zaG9ydGN1dHMvdXRpbC50cyIsICIuLi8uLi9zaGFyZWQvdXRpbC50cyIsICIuLi8uLi9leHRlbnNpb25zL2tleWJvYXJkLXNob3J0Y3V0cy9hcHAudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7IGFycmF5IGFzIGEsIGZ1bmN0aW9uIGFzIGYgfSBmcm9tIFwiaHR0cHM6Ly9lc20uc2gvZnAtdHNcIlxyXG5cclxuaW1wb3J0IHsgTGl0RWxlbWVudCwgaHRtbCB9IGZyb20gXCJodHRwczovL2VzbS5zaC9saXRcIlxyXG5pbXBvcnQgeyBjdXN0b21FbGVtZW50LCBwcm9wZXJ0eSB9IGZyb20gXCJodHRwczovL2VzbS5zaC9saXQvZGVjb3JhdG9ycy5qc1wiXHJcbmltcG9ydCB7IHN0eWxlTWFwIH0gZnJvbSBcImh0dHBzOi8vZXNtLnNoL2xpdC9kaXJlY3RpdmVzL3N0eWxlLW1hcC5qc1wiXHJcbmltcG9ydCB7IG1hcCB9IGZyb20gXCJodHRwczovL2VzbS5zaC9saXQvZGlyZWN0aXZlcy9tYXAuanNcIlxyXG5cclxuaW1wb3J0IHsgQ0xJQ0tBQkxFX0VMTUVOVF9TRUxFQ1RPUiwgaXNFbGVtZW50SW5WaWV3UG9ydCwgaXNFbGVtZW50VmlzaWJsZSB9IGZyb20gXCIuL3V0aWwudHNcIlxyXG5cclxuZXhwb3J0IGNvbnN0IG1vdXNldHJhcEluc3QgPSBTcGljZXRpZnkuTW91c2V0cmFwKClcclxuZXhwb3J0IGNvbnN0IEtFWV9MSVNUID0gXCJhYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5elwiLnNwbGl0KFwiXCIpXHJcblxyXG5sZXQgc2hvdWxkTGlzdGVuVG9TbmVha0JpbmRzID0gZmFsc2VcclxuZXhwb3J0IGxldCBsaXN0ZW5pbmdUb1NuZWFrQmluZHMgPSBmYWxzZVxyXG5cclxuQGN1c3RvbUVsZW1lbnQoXCJzbmVhay1rZXlcIilcclxuY2xhc3MgU25lYWtLZXkgZXh0ZW5kcyBMaXRFbGVtZW50IHtcclxuICAgIEBwcm9wZXJ0eSgpXHJcbiAgICBrZXkgPSBcIk5vbmVcIlxyXG5cclxuICAgIEBwcm9wZXJ0eSgpXHJcbiAgICB0YXJnZXQgPSBkb2N1bWVudC5ib2R5XHJcblxyXG4gICAgcHJvdGVjdGVkIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7IHgsIHkgfSA9IHRoaXMudGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXHJcbiAgICAgICAgY29uc3Qgc3R5bGVzID0geyB0b3A6IHggKyBcInB4XCIsIGxlZnQ6IHkgKyBcInB4XCIgfVxyXG4gICAgICAgIHJldHVybiBodG1sYDxzcGFuIHN0eWxlPSR7c3R5bGVNYXAoc3R5bGVzKX0+JHt0aGlzLmtleX08L3NwYW4+YFxyXG4gICAgfVxyXG59XHJcblxyXG5AY3VzdG9tRWxlbWVudChcInNuZWFrLW92ZXJsYXlcIilcclxuZXhwb3J0IGNsYXNzIFNuZWFrT3ZlcmxheSBleHRlbmRzIExpdEVsZW1lbnQge1xyXG4gICAgQHByb3BlcnR5KClcclxuICAgIHByb3BzID0gW10gYXMgQXJyYXk8eyBrZXk6IHN0cmluZzsgdGFyZ2V0OiBIVE1MRWxlbWVudCB9PlxyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKClcclxuXHJcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcclxuICAgICAgICAgICAgbGV0IGsxID0gMCxcclxuICAgICAgICAgICAgICAgIGsyID0gMFxyXG5cclxuICAgICAgICAgICAgdGhpcy5wcm9wcyA9IGYucGlwZShcclxuICAgICAgICAgICAgICAgIEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MRWxlbWVudD4oQ0xJQ0tBQkxFX0VMTUVOVF9TRUxFQ1RPUikpLFxyXG4gICAgICAgICAgICAgICAgYS5maWx0ZXIoaXNFbGVtZW50VmlzaWJsZSksXHJcbiAgICAgICAgICAgICAgICBhLmZpbHRlcihpc0VsZW1lbnRJblZpZXdQb3J0KSxcclxuICAgICAgICAgICAgICAgIGEubWFwKHRhcmdldCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qga2V5ID0gS0VZX0xJU1RbazFdICsgS0VZX0xJU1RbazIrK11cclxuICAgICAgICAgICAgICAgICAgICBpZiAoazIgPj0gS0VZX0xJU1QubGVuZ3RoKSBrMSsrLCAoazIgPSAwKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7IHRhcmdldCwga2V5IH1cclxuICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICApXHJcblxyXG4gICAgICAgICAgICBpZiAoazEgKyBrMiA9PT0gMCkgdGhpcy5yZW1vdmUoKVxyXG4gICAgICAgICAgICBlbHNlIHNob3VsZExpc3RlblRvU25lYWtCaW5kcyA9IHRydWVcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xyXG4gICAgICAgIHN1cGVyLmRpc2Nvbm5lY3RlZENhbGxiYWNrKClcclxuICAgICAgICBsaXN0ZW5pbmdUb1NuZWFrQmluZHMgPSBmYWxzZVxyXG4gICAgICAgIHNob3VsZExpc3RlblRvU25lYWtCaW5kcyA9IGZhbHNlXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlX3Byb3BzKGtleTogS2V5Ym9hcmRFdmVudFtcImtleVwiXSkge1xyXG4gICAgICAgIGlmICghbGlzdGVuaW5nVG9TbmVha0JpbmRzKSB7XHJcbiAgICAgICAgICAgIGlmIChzaG91bGRMaXN0ZW5Ub1NuZWFrQmluZHMpIHtcclxuICAgICAgICAgICAgICAgIHNob3VsZExpc3RlblRvU25lYWtCaW5kcyA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBsaXN0ZW5pbmdUb1NuZWFrQmluZHMgPSB0cnVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnByb3BzID0gdGhpcy5wcm9wcy5maWx0ZXIocHJvcCA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IFtrMSwgLi4ua3NdID0gcHJvcC5rZXkudG9Mb3dlckNhc2UoKVxyXG4gICAgICAgICAgICBpZiAoazEgIT09IGtleSkgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgICAgIHByb3Aua2V5ID0ga3Muam9pbihcIlwiKVxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMubGVuZ3RoID09PSAxKSB0aGlzLnByb3BzWzBdLnRhcmdldC5jbGljaygpXHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMubGVuZ3RoIDwgMikgdGhpcy5yZW1vdmUoKVxyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIGh0bWxgJHttYXAodGhpcy5wcm9wcywgaSA9PiBodG1sYDxzbmVhay1rZXkga2V5PSR7aS5rZXl9IC50YXJnZXQ9JHtpLnRhcmdldH0gLz5gKX1gXHJcbiAgICB9XHJcbn1cclxuXHJcbmRlY2xhcmUgZ2xvYmFsIHtcclxuICAgIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xyXG4gICAgICAgIFwic25lYWsta2V5XCI6IFNuZWFrS2V5XHJcbiAgICAgICAgXCJzbmVhay1vdmVybGF5XCI6IFNuZWFrT3ZlcmxheVxyXG4gICAgfVxyXG59XHJcbiIsICJpbXBvcnQgeyBmdW5jdGlvbiBhcyBmLCBudW1iZXIgYXMgbiwgb3JkIH0gZnJvbSBcImh0dHBzOi8vZXNtLnNoL2ZwLXRzXCJcclxuaW1wb3J0IHsgbWVhbiB9IGZyb20gXCJodHRwczovL2VzbS5zaC9mcC10cy1zdGQvQXJyYXlcIlxyXG5pbXBvcnQgeyBtb2QgfSBmcm9tIFwiaHR0cHM6Ly9lc20uc2gvZnAtdHMtc3RkL051bWJlclwiXHJcbmltcG9ydCB7IGxpc3RlbmluZ1RvU25lYWtCaW5kcyB9IGZyb20gXCIuL3NuZWFrLnRzXCJcclxuXHJcbmNvbnN0IFNDUk9MTF9TVEVQID0gMjVcclxuXHJcbmNvbnN0IGZvY3VzT25BcHAgPSAoKSA9PiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEVsZW1lbnQ+KFwiLlJvb3RfX21haW4tdmlldyAub3Mtdmlld3BvcnRcIikhXHJcblxyXG5leHBvcnQgY29uc3QgYXBwU2Nyb2xsID0gKHM6IG51bWJlcikgPT4ge1xyXG4gICAgY29uc3QgYXBwID0gZm9jdXNPbkFwcCgpXHJcbiAgICBjb25zdCBzY3JvbGxJbnRlcnZhbElkID0gc2V0SW50ZXJ2YWwoKCkgPT4gKGFwcC5zY3JvbGxUb3AgKz0gcyAqIFNDUk9MTF9TVEVQKSwgMTApXHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgKCkgPT4gY2xlYXJJbnRlcnZhbChzY3JvbGxJbnRlcnZhbElkKSlcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGFwcFNjcm9sbFkgPSAoeTogbnVtYmVyKSA9PiBmb2N1c09uQXBwKCkuc2Nyb2xsKDAsIHkpXHJcblxyXG5leHBvcnQgY29uc3Qgb3BlblBhZ2UgPSAocGFnZTogc3RyaW5nKSA9PiBTcGljZXRpZnkuUGxhdGZvcm0uSGlzdG9yeS5wdXNoKHsgcGF0aG5hbWU6IHBhZ2UgfSlcclxuXHJcbmV4cG9ydCBjb25zdCByb3RhdGVTaWRlYmFyID0gKG9mZnNldDogbnVtYmVyKSA9PiB7XHJcbiAgICBjb25zdCBuYXZMaW5rcyA9IEFycmF5LmZyb20oXHJcbiAgICAgICAgQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PihcIi5tYWluLXlvdXJMaWJyYXJ5WC1uYXZMaW5rXCIpKS52YWx1ZXMoKSxcclxuICAgIClcclxuXHJcbiAgICBmLnBpcGUoXHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluLXlvdXJMaWJyYXJ5WC1uYXZMaW5rQWN0aXZlXCIpLFxyXG4gICAgICAgIGFjdGl2ZSA9PiBuYXZMaW5rcy5maW5kSW5kZXgoZSA9PiBlID09PSBhY3RpdmUpLFxyXG4gICAgICAgIGN1cnIgPT4gbW9kKG5hdkxpbmtzLmxlbmd0aCkoY3VyciA9PT0gLTEgJiYgb2Zmc2V0IDw9IDAgPyBvZmZzZXQgOiBjdXJyICsgb2Zmc2V0KSxcclxuICAgICAgICB0YXJnZXQgPT4gbmF2TGlua3NbdGFyZ2V0XS5jbGljaygpLFxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgcmVzaXplTGVmdFNpZGViYXIgPSAocHhzOiBudW1iZXIpID0+IHtcclxuICAgIGNvbnN0IGh0bWwgPSBkb2N1bWVudC5maXJzdEVsZW1lbnRDaGlsZCEgYXMgSFRNTEh0bWxFbGVtZW50LFxyXG4gICAgICAgIGh0bWxTdHlsZSA9IGh0bWwuc3R5bGVcclxuICAgIGh0bWxTdHlsZS5jc3NUZXh0ID0gaHRtbFN0eWxlLmNzc1RleHQucmVwbGFjZSgvKC0tbGVmdC1zaWRlYmFyLXdpZHRoOiApW147XSsvLCBgJDEke3B4c31weGApXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBCaW5kIHtcclxuICAgIHByaXZhdGUgY3RybCA9IGZhbHNlXHJcbiAgICBwcml2YXRlIHNoaWZ0ID0gZmFsc2VcclxuICAgIHByaXZhdGUgYWx0ID0gZmFsc2VcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUga2V5OiBzdHJpbmcsIHByaXZhdGUgY2FsbGJhY2s6IChldmVudDogS2V5Ym9hcmRFdmVudCkgPT4gdm9pZCkge31cclxuXHJcbiAgICBzZXRDdHJsID0gKHJlcXVpcmVkOiBib29sZWFuKSA9PiAoKHRoaXMuY3RybCA9IHJlcXVpcmVkKSwgdGhpcylcclxuICAgIHNldFNoaWZ0ID0gKHJlcXVpcmVkOiBib29sZWFuKSA9PiAoKHRoaXMuc2hpZnQgPSByZXF1aXJlZCksIHRoaXMpXHJcbiAgICBzZXRBbHQgPSAocmVxdWlyZWQ6IGJvb2xlYW4pID0+ICgodGhpcy5hbHQgPSByZXF1aXJlZCksIHRoaXMpXHJcblxyXG4gICAgcmVnaXN0ZXIgPSAoKSA9PlxyXG4gICAgICAgIFNwaWNldGlmeS5LZXlib2FyZC5yZWdpc3RlclNob3J0Y3V0KFxyXG4gICAgICAgICAgICB7IGtleTogdGhpcy5rZXksIGN0cmw6IHRoaXMuY3RybCwgc2hpZnQ6IHRoaXMuc2hpZnQsIGFsdDogdGhpcy5hbHQgfSxcclxuICAgICAgICAgICAgZXZlbnQgPT4gdm9pZCAoIWxpc3RlbmluZ1RvU25lYWtCaW5kcyAmJiB0aGlzLmNhbGxiYWNrKGV2ZW50KSksXHJcbiAgICAgICAgKVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgaXNFbGVtZW50VmlzaWJsZSA9IChlOiBIVE1MRWxlbWVudCkgPT4gZS5jaGVja1Zpc2liaWxpdHkoeyBjaGVja09wYWNpdHk6IHRydWUsIGNoZWNrVmlzaWJpbGl0eUNTUzogdHJ1ZSB9KVxyXG5leHBvcnQgY29uc3QgaXNFbGVtZW50SW5WaWV3UG9ydCA9IChlOiBIVE1MRWxlbWVudCkgPT4ge1xyXG4gICAgY29uc3QgYyA9IGRvY3VtZW50LmJvZHlcclxuICAgIGNvbnN0IGJvdW5kID0gZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxyXG4gICAgY29uc3Qgd2l0aGluID0gKG06IG51bWJlciwgTTogbnVtYmVyKSA9PiAoeDogbnVtYmVyKSA9PiB4ID09PSBvcmQuY2xhbXAobi5PcmQpKG0sIE0pKHgpXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIGYucGlwZShtZWFuKFtib3VuZC50b3AsIGJvdW5kLmJvdHRvbV0pLCB3aXRoaW4oMCwgYy5jbGllbnRIZWlnaHQpKSAmJlxyXG4gICAgICAgIGYucGlwZShtZWFuKFtib3VuZC5sZWZ0LCBib3VuZC5yaWdodF0pLCB3aXRoaW4oMCwgYy5jbGllbnRXaWR0aCkpXHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBDTElDS0FCTEVfRUxNRU5UX1NFTEVDVE9SID0gYC5Sb290X190b3AtY29udGFpbmVyIFtocmVmXTpub3QobGluayksLlJvb3RfX3RvcC1jb250YWluZXIgYnV0dG9uLC5Sb290X190b3AtY29udGFpbmVyIFtyb2xlPVwiYnV0dG9uXCJdYFxyXG4iLCAiLy8gZXhwb3J0IGludGVyZmFjZSBTcG90aWZ5SURcclxuLy8gICAgIGV4dGVuZHMgTmV3dHlwZTx7IHJlYWRvbmx5IFNwb3RpZnlJRDogdW5pcXVlIHN5bWJvbCB9LCBzdHJpbmc+IHt9XHJcbi8vIGV4cG9ydCBpbnRlcmZhY2UgU3BvdGlmeVVSSVxyXG4vLyAgICAgZXh0ZW5kcyBOZXd0eXBlPHsgcmVhZG9ubHkgU3BvdGlmeVVSSTogdW5pcXVlIHN5bWJvbCB9LCBzdHJpbmc+IHt9XHJcblxyXG5pbXBvcnQgeyBhcnJheSBhcyBhLCBmdW5jdGlvbiBhcyBmIH0gZnJvbSBcImh0dHBzOi8vZXNtLnNoL2ZwLXRzXCJcclxuXHJcbmV4cG9ydCB0eXBlIFNwb3RpZnlJRCA9IHN0cmluZ1xyXG5leHBvcnQgdHlwZSBTcG90aWZ5VVJJID0gc3RyaW5nXHJcblxyXG5leHBvcnQgdHlwZSBTcG90aWZ5TG9jT2JqID0ge1xyXG4gICAgYmVmb3JlPzogXCJzdGFydFwiIHwgeyB1cmk6IFNwb3RpZnlVUkkgfSB8IHsgdWlkOiBzdHJpbmcgfVxyXG4gICAgYWZ0ZXI/OiBcImVuZFwiIHwgeyB1cmk6IFNwb3RpZnlVUkkgfSB8IHsgdWlkOiBzdHJpbmcgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgU3BvdGlmeUxvYyA9IHtcclxuICAgIGJlZm9yZToge1xyXG4gICAgICAgIHN0YXJ0OiBmLmNvbnN0YW50KHsgYmVmb3JlOiBcInN0YXJ0XCIgfSBhcyBTcG90aWZ5TG9jT2JqKSxcclxuICAgICAgICBmcm9tVXJpOiAodXJpOiBTcG90aWZ5VVJJKSA9PiAoeyBiZWZvcmU6IHsgdXJpIH0gfSksXHJcbiAgICAgICAgZnJvbVVpZDogKHVpZDogc3RyaW5nKSA9PiAoeyBiZWZvcmU6IHsgdWlkIH0gfSksXHJcbiAgICB9LFxyXG4gICAgYWZ0ZXI6IHtcclxuICAgICAgICBlbmQ6IGYuY29uc3RhbnQoeyBhZnRlcjogXCJlbmRcIiB9IGFzIFNwb3RpZnlMb2NPYmopLFxyXG4gICAgICAgIGZyb21Vcmk6ICh1cmk6IFNwb3RpZnlVUkkpID0+ICh7IGFmdGVyOiB7IHVyaSB9IH0pLFxyXG4gICAgICAgIGZyb21VaWQ6ICh1aWQ6IHN0cmluZykgPT4gKHsgYWZ0ZXI6IHsgdWlkIH0gfSksXHJcbiAgICB9LFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZXNjYXBlUmVnZXggPSAoc3RyOiBzdHJpbmcpID0+IHN0ci5yZXBsYWNlKC9bLiorP14ke30oKXxbXFxdXFxcXF0vZywgYFxcXFwkJmApXHJcblxyXG5leHBvcnQgY29uc3QgdGl0bGVDYXNlID0gKHN0cjogc3RyaW5nKSA9PiBzdHIucmVwbGFjZSgvXFxiXFx3L2csIGwgPT4gbC50b1VwcGVyQ2FzZSgpKVxyXG5cclxuZXhwb3J0IGNvbnN0IG5vcm1hbGl6ZVN0ciA9IChzdHI6IHN0cmluZykgPT5cclxuICAgIHN0clxyXG4gICAgICAgIC5ub3JtYWxpemUoXCJORktEXCIpXHJcbiAgICAgICAgLnJlcGxhY2UoL1xcKC4qXFwpL2csIFwiXCIpXHJcbiAgICAgICAgLnJlcGxhY2UoL1xcWy4qXFxdL2csIFwiXCIpXHJcbiAgICAgICAgLnJlcGxhY2UoLy1fLC9nLCBcIiBcIilcclxuICAgICAgICAucmVwbGFjZSgvW15hLXpBLVowLTkgXS9nLCBcIlwiKVxyXG4gICAgICAgIC5yZXBsYWNlKC9cXHMrL2csIFwiIFwiKVxyXG4gICAgICAgIC50b0xvd2VyQ2FzZSgpXHJcbiAgICAgICAgLnRyaW0oKVxyXG5cclxuLy8hIERvZXMgbG9jYXRpb24gYWN0dWFsbHkgcG9pbnQgdG8gZG9jdW1lbnQuYm9keT9cclxuZXhwb3J0IGNvbnN0IHdhaXRGb3JFbGVtZW50ID0gPEUgZXh0ZW5kcyBFbGVtZW50PihcclxuICAgIHNlbGVjdG9yOiBzdHJpbmcsXHJcbiAgICB0aW1lb3V0ID0gMTAwMCxcclxuICAgIGxvY2F0aW9uID0gZG9jdW1lbnQuYm9keSxcclxuICAgIG5vdEVsPzogRSxcclxuKSA9PlxyXG4gICAgbmV3IFByb21pc2UoKHJlc29sdmU6ICh2YWx1ZTogRWxlbWVudCB8IG51bGwpID0+IHZvaWQpID0+IHtcclxuICAgICAgICBjb25zdCByZXMgPSAodjogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIG9ic2VydmVyLmRpc2Nvbm5lY3QoKVxyXG4gICAgICAgICAgICByZXNvbHZlKHYpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKCgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEU+KHNlbGVjdG9yKVxyXG4gICAgICAgICAgICBpZiAoZWwgJiYgKCFub3RFbCB8fCBlbCAhPT0gbm90RWwpKSByZXR1cm4gcmVzKGVsKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIG9ic2VydmVyLm9ic2VydmUobG9jYXRpb24sIHtcclxuICAgICAgICAgICAgY2hpbGRMaXN0OiB0cnVlLFxyXG4gICAgICAgICAgICBzdWJ0cmVlOiB0cnVlLFxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGlmICh0aW1lb3V0KSBzZXRUaW1lb3V0KCgpID0+IHJlcyhudWxsKSwgdGltZW91dClcclxuICAgIH0pXHJcblxyXG5leHBvcnQgY29uc3QgdHJhcEVsZW1lbnQgPSA8RSBleHRlbmRzIEVsZW1lbnQ+KFxyXG4gICAgc2VsZWN0b3I6IHN0cmluZyxcclxuICAgIGNhbGxiYWNrOiAoZWw6IEUgfCBudWxsLCBsYXN0RWw6IEUgfCBudWxsKSA9PiB2b2lkLFxyXG4gICAgbG9jYXRpb24gPSBkb2N1bWVudC5ib2R5LFxyXG4pID0+IHtcclxuICAgIGxldCBsYXN0RWw6IEUgfCBudWxsID0gbnVsbFxyXG5cclxuICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxFPihzZWxlY3RvcilcclxuICAgICAgICBpZiAoZWwgIT09IGxhc3RFbCkgY2FsbGJhY2soZWwsIGxhc3RFbClcclxuICAgICAgICBsYXN0RWwgPSBlbFxyXG4gICAgfSlcclxuXHJcbiAgICBvYnNlcnZlci5vYnNlcnZlKGxvY2F0aW9uLCB7XHJcbiAgICAgICAgY2hpbGRMaXN0OiB0cnVlLFxyXG4gICAgICAgIHN1YnRyZWU6IHRydWUsXHJcbiAgICB9KVxyXG59XHJcblxyXG5leHBvcnQgY29uc3Qgc2xlZXAgPSAobXM6IG51bWJlcikgPT4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIG1zKSlcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRSZWFjdFByb3BzID0gKGVsZW1lbnQ6IEVsZW1lbnQpID0+XHJcbiAgICBlbGVtZW50W09iamVjdC5rZXlzKGVsZW1lbnQpLmZpbmQoayA9PiBrLnN0YXJ0c1dpdGgoXCJfX3JlYWN0UHJvcHMkXCIpKSBhcyBrZXlvZiB0eXBlb2YgZWxlbWVudF1cclxuXHJcbmV4cG9ydCBjb25zdCBpc0xpa2VkID0gKHVyaXM6IFNwb3RpZnlVUklbXSkgPT4gU3BpY2V0aWZ5LlBsYXRmb3JtLkxpYnJhcnlBUEkuY29udGFpbnMoLi4udXJpcykgYXMgUHJvbWlzZTxib29sZWFuW10+XHJcblxyXG5leHBvcnQgY29uc3Qgc2V0TGlrZWQgPSAodXJpczogU3BvdGlmeVVSSVtdLCBsaWtlZDogYm9vbGVhbikgPT5cclxuICAgIFNwaWNldGlmeS5QbGF0Zm9ybS5MaWJyYXJ5QVBJW2xpa2VkID8gXCJhZGRcIiA6IFwicmVtb3ZlXCJdKC4uLnVyaXMpXHJcblxyXG5leHBvcnQgY29uc3QgdG9nZ2xlTGlrZWQgPSBhc3luYyAodXJpczogU3BvdGlmeVVSSVtdKSA9PiB7XHJcbiAgICBjb25zdCBsaWtlZCA9IGF3YWl0IGlzTGlrZWQodXJpcylcclxuXHJcbiAgICByZXR1cm4gYXdhaXQgZi5waXBlKFxyXG4gICAgICAgIHVyaXMsXHJcbiAgICAgICAgYS5yZWR1Y2VXaXRoSW5kZXgoXHJcbiAgICAgICAgICAgIFtbXSBhcyBTcG90aWZ5VVJJW10sIFtdIGFzIFNwb3RpZnlVUklbXV0gYXMgY29uc3QsXHJcbiAgICAgICAgICAgIChpLCBhY2MsIHVyaSkgPT4gKGFjY1tOdW1iZXIobGlrZWRbaV0pXS5wdXNoKHVyaSksIGFjYyksXHJcbiAgICAgICAgKSxcclxuICAgICAgICAoW3RvQWRkLCB0b1JlbV0pID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcHMgPSBbXVxyXG4gICAgICAgICAgICBpZiAodG9BZGQubGVuZ3RoKSBwcy5wdXNoKHNldExpa2VkKHRvQWRkLCB0cnVlKSlcclxuICAgICAgICAgICAgaWYgKHRvUmVtLmxlbmd0aCkgcHMucHVzaChzZXRMaWtlZCh0b1JlbSwgZmFsc2UpKVxyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwocHMpXHJcbiAgICAgICAgfSxcclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGNyZWF0ZVF1ZXVlSXRlbSA9IChxdWV1ZWQ6IGJvb2xlYW4pID0+ICh1cmk6IFNwb3RpZnlVUkkpID0+ICh7XHJcbiAgICBjb250ZXh0VHJhY2s6IHtcclxuICAgICAgICB1cmksXHJcbiAgICAgICAgdWlkOiBcIlwiLFxyXG4gICAgICAgIG1ldGFkYXRhOiB7XHJcbiAgICAgICAgICAgIGlzX3F1ZXVlZDogcXVldWVkLnRvU3RyaW5nKCksXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICByZW1vdmVkOiBbXSxcclxuICAgIGJsb2NrZWQ6IFtdLFxyXG4gICAgcHJvdmlkZXI6IHF1ZXVlZCA/IFwicXVldWVcIiA6IFwiY29udGV4dFwiLFxyXG59KVxyXG5cclxuZXhwb3J0IGNvbnN0IHNldFF1ZXVlID0gYXN5bmMgKG5leHRUcmFja3M6IEFycmF5PFJldHVyblR5cGU8UmV0dXJuVHlwZTx0eXBlb2YgY3JlYXRlUXVldWVJdGVtPj4+KSA9PiB7XHJcbiAgICBjb25zdCB7IF9xdWV1ZSwgX2NsaWVudCB9ID0gU3BpY2V0aWZ5LlBsYXRmb3JtLlBsYXllckFQSS5fcXVldWVcclxuICAgIGNvbnN0IHsgcHJldlRyYWNrcywgcXVldWVSZXZpc2lvbiB9ID0gX3F1ZXVlXHJcblxyXG4gICAgcmV0dXJuIF9jbGllbnQuc2V0UXVldWUoe1xyXG4gICAgICAgIG5leHRUcmFja3MsXHJcbiAgICAgICAgcHJldlRyYWNrcyxcclxuICAgICAgICBxdWV1ZVJldmlzaW9uLFxyXG4gICAgfSkgYXMgUHJvbWlzZTx7IGVycm9yOiBudW1iZXI7IHJlYXNvbnM6IHN0cmluZyB9PlxyXG59XHJcblxyXG5leHBvcnQgY29uc3Qgc2V0UGxheWluZ0NvbnRleHQgPSAodXJpOiBTcG90aWZ5VVJJKSA9PiB7XHJcbiAgICBjb25zdCB7IHNlc3Npb25JZCB9ID0gU3BpY2V0aWZ5LlBsYXRmb3JtLlBsYXllckFQSS5nZXRTdGF0ZSgpXHJcbiAgICByZXR1cm4gU3BpY2V0aWZ5LlBsYXRmb3JtLlBsYXllckFQSS51cGRhdGVDb250ZXh0KHNlc3Npb25JZCwgeyB1cmksIHVybDogXCJjb250ZXh0Oi8vXCIgKyB1cmkgfSkgYXMgUHJvbWlzZTx1bmRlZmluZWQ+XHJcbn1cclxuIiwgImRlYnVnZ2VyXHJcblxyXG5pbXBvcnQgeyBLRVlfTElTVCwgU25lYWtPdmVybGF5LCBtb3VzZXRyYXBJbnN0IH0gZnJvbSBcIi4vc25lYWsudHNcIlxyXG5pbXBvcnQgeyBCaW5kLCBhcHBTY3JvbGwsIGFwcFNjcm9sbFksIG9wZW5QYWdlLCByb3RhdGVTaWRlYmFyIH0gZnJvbSBcIi4vdXRpbC50c1wiXHJcbmltcG9ydCB7IHRvZ2dsZUxpa2VkIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC91dGlsLnRzXCJcclxuXHJcbmltcG9ydCBcIi4vYXNzZXRzL3N0eWxlcy5zY3NzXCJcclxuXHJcbmNvbnN0IHsgS0VZUyB9ID0gU3BpY2V0aWZ5LktleWJvYXJkXHJcblxyXG5sZXQgc25lYWtPdmVybGF5OiBTbmVha092ZXJsYXlcclxuXHJcbmNvbnN0IGJpbmRzID0gW1xyXG4gICAgbmV3IEJpbmQoXCJzXCIsICgpID0+IHtcclxuICAgICAgICBzbmVha092ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic25lYWstb3ZlcmxheVwiKVxyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kKHNuZWFrT3ZlcmxheSlcclxuICAgIH0pLFxyXG4gICAgbmV3IEJpbmQoXCJzXCIsIGFzeW5jICgpID0+IHtcclxuICAgICAgICAvLyBwcm9kdWN0X3N0YXRlIHdhcyByZW5hbWVkIHRvIHByb2R1Y3Rfc3RhdGVfc2VydmljZSBpbiBTcG90aWZ5IDEuMi4yMVxyXG4gICAgICAgIGNvbnN0IHByb2R1Y3RTdGF0ZSA9XHJcbiAgICAgICAgICAgIFNwaWNldGlmeS5QbGF0Zm9ybS5Vc2VyQVBJLl9wcm9kdWN0X3N0YXRlIHx8IFNwaWNldGlmeS5QbGF0Zm9ybS5Vc2VyQVBJLl9wcm9kdWN0X3N0YXRlX3NlcnZpY2VcclxuICAgICAgICBhd2FpdCBwcm9kdWN0U3RhdGUucHV0VmFsdWVzKHsgcGFpcnM6IHsgXCJhcHAtZGV2ZWxvcGVyXCI6IFwiMlwiIH0gfSlcclxuICAgICAgICBTcGljZXRpZnkuUGxhdGZvcm0uVXBkYXRlQVBJLmFwcGx5VXBkYXRlKClcclxuICAgIH0pLnNldFNoaWZ0KHRydWUpLFxyXG4gICAgbmV3IEJpbmQoXCJ0YWJcIiwgKCkgPT4gcm90YXRlU2lkZWJhcigxKSksXHJcbiAgICBuZXcgQmluZChcInRhYlwiLCAoKSA9PiByb3RhdGVTaWRlYmFyKC0xKSkuc2V0U2hpZnQodHJ1ZSksXHJcbiAgICBuZXcgQmluZChcImhcIiwgU3BpY2V0aWZ5LlBsYXRmb3JtLkhpc3RvcnkuZ29CYWNrKS5zZXRTaGlmdCh0cnVlKSxcclxuICAgIG5ldyBCaW5kKFwibFwiLCBTcGljZXRpZnkuUGxhdGZvcm0uSGlzdG9yeS5nb0ZvcndhcmQpLnNldFNoaWZ0KHRydWUpLFxyXG4gICAgbmV3IEJpbmQoXCJqXCIsICgpID0+IGFwcFNjcm9sbCgxKSksXHJcbiAgICBuZXcgQmluZChcImtcIiwgKCkgPT4gYXBwU2Nyb2xsKC0xKSksXHJcbiAgICBuZXcgQmluZChcImdcIiwgKCkgPT4gYXBwU2Nyb2xsWSgwKSksXHJcbiAgICBuZXcgQmluZChcImdcIiwgKCkgPT4gYXBwU2Nyb2xsWShOdW1iZXIuTUFYX1NBRkVfSU5URUdFUikpLnNldFNoaWZ0KHRydWUpLFxyXG4gICAgbmV3IEJpbmQoXCJtXCIsICgpID0+IHRvZ2dsZUxpa2VkKFtTcGljZXRpZnkuUGxheWVyLmRhdGEuaXRlbS51cmldKSksXHJcbiAgICBuZXcgQmluZChcIi9cIiwgZSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgb3BlblBhZ2UoXCIvc2VhcmNoXCIpXHJcbiAgICB9KSxcclxuXVxyXG5cclxuYmluZHMubWFwKGJpbmQgPT4gYmluZC5yZWdpc3RlcigpKVxyXG5cclxubW91c2V0cmFwSW5zdC5iaW5kKEtFWV9MSVNULCBlID0+IHNuZWFrT3ZlcmxheS51cGRhdGVfcHJvcHMoZS5rZXkpLCBcImtleXByZXNzXCIpXHJcbm1vdXNldHJhcEluc3QuYmluZChLRVlTLkVTQ0FQRSwgKCkgPT4gc25lYWtPdmVybGF5Py5yZW1vdmUoKSlcclxuIl0sCiAgIm1hcHBpbmdzIjogIndNQUFBLE9BQVMsU0FBU0EsRUFBRyxZQUFZQyxNQUFTLHVCQUUxQyxPQUFTLGNBQUFDLEVBQVksUUFBQUMsTUFBWSxxQkFDakMsT0FBUyxpQkFBQUMsRUFBZSxZQUFBQyxNQUFnQixtQ0FDeEMsT0FBUyxZQUFBQyxNQUFnQiw2Q0FDekIsT0FBUyxPQUFBQyxNQUFXLHVDQ0xwQixPQUFTLFlBQVlDLEVBQUcsVUFBVUMsRUFBRyxPQUFBQyxNQUFXLHVCQUNoRCxPQUFTLFFBQUFDLE1BQVksaUNBQ3JCLE9BQVMsT0FBQUMsTUFBVyxrQ0FHcEIsSUFBTUMsRUFBYyxHQUVkQyxFQUFhLElBQU0sU0FBUyxjQUF1QiwrQkFBK0IsRUFFM0VDLEVBQWFDLEdBQWMsQ0FD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SixFQUFLLElBQUssR0FBSyxDQUNmLEVBQUUsZUFBZSxFQUNqQkssRUFBUyxTQUFTLENBQ3RCLENBQUMsQ0FDTCxFQUVBTixFQUFNLElBQUlPLEdBQVFBLEVBQUssU0FBUyxDQUFDLEVBRWpDQyxFQUFjLEtBQUtDLEVBQVUsR0FBS1YsRUFBYSxhQUFhLEVBQUUsR0FBRyxFQUFHLFVBQVUsRUFDOUVTLEVBQWMsS0FBS1YsRUFBSyxPQUFRLElBQU1DLEdBQWMsT0FBTyxDQUFDIiwKICAibmFtZXMiOiBbImEiLCAiZiIsICJMaXRFbGVtZW50IiwgImh0bWwiLCAiY3VzdG9tRWxlbWVudCIsICJwcm9wZXJ0eSIsICJzdHlsZU1hcCIsICJtYXAiLCAiZiIsICJuIiwgIm9yZCIsICJtZWFuIiwgIm1vZCIsICJTQ1JPTExfU1RFUCIsICJmb2N1c09uQXBwIiwgImFwcFNjcm9sbCIsICJzIiwgImFwcCIsICJzY3JvbGxJbnRlcnZhbElkIiwgImFwcFNjcm9sbFkiLCAieSIsICJvcGVuUGFnZSIsICJwYWdlIiwgInJvdGF0ZVNpZGViYXIiLCAib2Zmc2V0IiwgIm5hdkxpbmtzIiwgImYiLCAiYWN0aXZlIiwgImUiLCAiY3VyciIsICJtb2QiLCAidGFyZ2V0IiwgIkJpbmQiLCAia2V5IiwgImNhbGxiYWNrIiwgInJlcXVpcmVkIiwgImV2ZW50IiwgImxpc3RlbmluZ1RvU25lYWtCaW5kcyIsICJpc0VsZW1lbnRWaXNpYmxlIiwgImlzRWxlbWVudEluVmlld1BvcnQiLCAiYyIsICJib3VuZCIsICJ3aXRoaW4iLCAibSIsICJNIiwgIngiLCAib3JkIiwgIm4iLCAiZiIsICJtZWFuIiwgIkNMSUNLQUJMRV9FTE1FTlRfU0VMRUNUT1IiLCAibW91c2V0cmFwSW5zdCIsICJLRVlfTElTVCIsICJzaG91bGRMaXN0ZW5Ub1NuZWFrQmluZHMiLCAibGlzdGVuaW5nVG9TbmVha0JpbmRzIiwgIlNuZWFrS2V5IiwgIkxpdEVsZW1lbnQiLCAieCIsICJ5IiwgInN0eWxlcyIsICJodG1sIiwgInN0eWxlTWFwIiwgIl9fZGVjb3JhdGVDbGFzcyIsICJwcm9wZXJ0eSIsICJjdXN0b21FbGVtZW50IiwgIlNuZWFrT3ZlcmxheSIsICJrMSIsICJrMiIsICJmIiwgIkNMSUNLQUJMRV9FTE1FTlRfU0VMRUNUT1IiLCAiYSIsICJpc0VsZW1lbnRWaXNpYmxlIiwgImlzRWxlbWVudEluVmlld1BvcnQiLCAidGFyZ2V0IiwgImtleSIsICJwcm9wIiwgImtzIiwgIm1hcCIsICJpIiwgImEiLCAiZiIsICJTcG90aWZ5TG9jIiwgInVyaSIsICJ1aWQiLCAiaXNMaWtlZCIsICJ1cmlzIiwgInNldExpa2VkIiwgImxpa2VkIiwgInRvZ2dsZUxpa2VkIiwgImYiLCAiYSIsICJpIiwgImFjYyIsICJ1cmkiLCAidG9BZGQiLCAidG9SZW0iLCAicHMiLCAiS0VZUyIsICJzbmVha092ZXJsYXkiLCAiYmluZHMiLCAiQmluZCIsICJyb3RhdGVTaWRlYmFyIiwgImFwcFNjcm9sbCIsICJhcHBTY3JvbGxZIiwgInRvZ2dsZUxpa2VkIiwgIm9wZW5QYWdlIiwgImJpbmQiLCAibW91c2V0cmFwSW5zdCIsICJLRVlfTElTVCJdCn0K
(async () => {
    if (!document.getElementById("keyboard-shortcuts-css")) {
        const el = document.createElement("style")
        el.id = "keyboard-shortcuts-css"
        
        el.textContent = "#sneak-overlay{z-index:100000;position:absolute;width:100%;height:100%;display:none}#sneak-overlay>.sneak-key{position:fixed;padding:3px 6px;background-color:#000;border-radius:3px;border:solid 2px white;color:#fff;text-transform:lowercase;line-height:normal;font-size:14px;font-weight:500}\n/*# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vZXh0ZW5zaW9ucy9rZXlib2FyZC1zaG9ydGN1dHMvYXNzZXRzL3N0eWxlcy5jc3MiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIiNzbmVhay1vdmVybGF5e3otaW5kZXg6MTAwMDAwO3Bvc2l0aW9uOmFic29sdXRlO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7ZGlzcGxheTpub25lfSNzbmVhay1vdmVybGF5Pi5zbmVhay1rZXl7cG9zaXRpb246Zml4ZWQ7cGFkZGluZzozcHggNnB4O2JhY2tncm91bmQtY29sb3I6YmxhY2s7Ym9yZGVyLXJhZGl1czozcHg7Ym9yZGVyOnNvbGlkIDJweCB3aGl0ZTtjb2xvcjp3aGl0ZTt0ZXh0LXRyYW5zZm9ybTpsb3dlcmNhc2U7bGluZS1oZWlnaHQ6bm9ybWFsO2ZvbnQtc2l6ZToxNHB4O2ZvbnQtd2VpZ2h0OjUwMH0iXSwKICAibWFwcGluZ3MiOiAiQUFBQSxDQUFDLGNBQWMsUUFBUSxPQUFPLFNBQVMsU0FBUyxNQUFNLEtBQUssT0FBTyxLQUFLLFFBQVEsSUFBSSxDQUFDLENBQW5GLGFBQWlHLENBQUMsQ0FBQyxVQUFVLFNBQVMsTUFBdkgsUUFBcUksSUFBSSxJQUFJLGlCQUFpQixLQUE5SixjQUFrTCxJQUFJLE9BQU8sTUFBTSxJQUFJLE1BQU0sTUFBTSxLQUFNLGVBQWUsVUFBVSxZQUFZLE9BQU8sVUFBVSxLQUFLLFlBQVksR0FBRyIsCiAgIm5hbWVzIjogW10KfQo= */\n"
        document.head.appendChild(el)
    }
})()