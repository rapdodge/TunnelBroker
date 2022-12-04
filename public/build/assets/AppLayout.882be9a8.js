import{o,e as a,a as e,d as T,j as x,k as L,l as F,h as i,n as f,f as p,t as y,m as k,p as D,q as E,r as g,s as C,v as B,x as z,b as d,w as n,T as I,c as v,L as S,H as O,g as c,F as $,i as A,y as N}from"./app.1b300981.js";import{_ as V}from"./_plugin-vue_export-helper.cdc0426e.js";const H={},R={viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg"},q=e("path",{d:"M11.395 44.428C4.557 40.198 0 32.632 0 24 0 10.745 10.745 0 24 0a23.891 23.891 0 0113.997 4.502c-.2 17.907-11.097 33.245-26.602 39.926z",fill:"#6875F5"},null,-1),U=e("path",{d:"M14.134 45.885A23.914 23.914 0 0024 48c13.255 0 24-10.745 24-24 0-3.516-.756-6.856-2.115-9.866-4.659 15.143-16.608 27.092-31.75 31.751z",fill:"#6875F5"},null,-1),G=[q,U];function J(l,r){return o(),a("svg",R,G)}const K=V(H,[["render",J]]),Q={class:"max-w-screen-xl mx-auto py-2 px-3 sm:px-6 lg:px-8"},W={class:"flex items-center justify-between flex-wrap"},X={class:"w-0 flex-1 flex items-center min-w-0"},Y={key:0,class:"h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},Z=e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1),ee=[Z],te={key:1,class:"h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},se=e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"},null,-1),oe=[se],re={class:"ml-3 font-medium text-sm text-white truncate"},ne={class:"shrink-0 sm:ml-3"},ae=e("svg",{class:"h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})],-1),ie=[ae],le={__name:"Banner",setup(l){const r=T(!0),s=x(()=>{var t;return((t=L().props.value.jetstream.flash)==null?void 0:t.bannerStyle)||"success"}),h=x(()=>{var t;return((t=L().props.value.jetstream.flash)==null?void 0:t.banner)||""});return F(h,async()=>{r.value=!0}),(t,_)=>(o(),a("div",null,[r.value&&i(h)?(o(),a("div",{key:0,class:f({"bg-indigo-500":i(s)=="success","bg-red-700":i(s)=="danger"})},[e("div",Q,[e("div",W,[e("div",X,[e("span",{class:f(["flex p-2 rounded-lg",{"bg-indigo-600":i(s)=="success","bg-red-600":i(s)=="danger"}])},[i(s)=="success"?(o(),a("svg",Y,ee)):p("",!0),i(s)=="danger"?(o(),a("svg",te,oe)):p("",!0)],2),e("p",re,y(i(h)),1)]),e("div",ne,[e("button",{type:"button",class:f(["-mr-1 flex p-2 rounded-md focus:outline-none sm:-mr-2 transition",{"hover:bg-indigo-600 focus:bg-indigo-600":i(s)=="success","hover:bg-red-600 focus:bg-red-600":i(s)=="danger"}]),"aria-label":"Dismiss",onClick:_[0]||(_[0]=k(u=>r.value=!1,["prevent"]))},ie,2)])])])],2)):p("",!0)]))}},de={class:"relative"},P={__name:"Dropdown",props:{align:{type:String,default:"right"},width:{type:String,default:"48"},contentClasses:{type:Array,default:()=>["py-1","bg-white"]}},setup(l){const r=l;let s=T(!1);const h=u=>{s.value&&u.key==="Escape"&&(s.value=!1)};D(()=>document.addEventListener("keydown",h)),E(()=>document.removeEventListener("keydown",h));const t=x(()=>({48:"w-48"})[r.width.toString()]),_=x(()=>r.align==="left"?"origin-top-left left-0":r.align==="right"?"origin-top-right right-0":"origin-top");return(u,m)=>(o(),a("div",de,[e("div",{onClick:m[0]||(m[0]=M=>C(s)?s.value=!i(s):s=!i(s))},[g(u.$slots,"trigger")]),B(e("div",{class:"fixed inset-0 z-40",onClick:m[1]||(m[1]=M=>C(s)?s.value=!1:s=!1)},null,512),[[z,i(s)]]),d(I,{"enter-active-class":"transition ease-out duration-200","enter-from-class":"transform opacity-0 scale-95","enter-to-class":"transform opacity-100 scale-100","leave-active-class":"transition ease-in duration-75","leave-from-class":"transform opacity-100 scale-100","leave-to-class":"transform opacity-0 scale-95"},{default:n(()=>[B(e("div",{class:f(["absolute z-50 mt-2 rounded-md shadow-lg",[i(t),i(_)]]),style:{display:"none"},onClick:m[2]||(m[2]=M=>C(s)?s.value=!1:s=!1)},[e("div",{class:f(["rounded-md ring-1 ring-black ring-opacity-5",l.contentClasses])},[g(u.$slots,"content")],2)],2),[[z,i(s)]])]),_:3})]))}},ue={key:0,type:"submit",class:"block w-full px-4 py-2 text-sm leading-5 text-gray-700 text-left hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition"},ce=["href"],w={__name:"DropdownLink",props:{href:String,as:String},setup(l){return(r,s)=>(o(),a("div",null,[l.as=="button"?(o(),a("button",ue,[g(r.$slots,"default")])):l.as=="a"?(o(),a("a",{key:1,href:l.href,class:"block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition"},[g(r.$slots,"default")],8,ce)):(o(),v(i(S),{key:2,href:l.href,class:"block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition"},{default:n(()=>[g(r.$slots,"default")]),_:3},8,["href"]))]))}},j={__name:"NavLink",props:{href:String,active:Boolean},setup(l){const r=l,s=x(()=>r.active?"inline-flex items-center px-1 pt-1 border-b-2 border-indigo-400 text-sm font-medium leading-5 text-gray-900 focus:outline-none focus:border-indigo-700 transition":"inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition");return(h,t)=>(o(),v(i(S),{href:l.href,class:f(i(s))},{default:n(()=>[g(h.$slots,"default")]),_:3},8,["href","class"]))}},b={__name:"ResponsiveNavLink",props:{active:Boolean,href:String,as:String},setup(l){const r=l,s=x(()=>r.active?"block pl-3 pr-4 py-2 border-l-4 border-indigo-400 text-base font-medium text-indigo-700 bg-indigo-50 focus:outline-none focus:text-indigo-800 focus:bg-indigo-100 focus:border-indigo-700 transition":"block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition");return(h,t)=>(o(),a("div",null,[l.as=="button"?(o(),a("button",{key:0,class:f([i(s),"w-full text-left"])},[g(h.$slots,"default")],2)):(o(),v(i(S),{key:1,href:l.href,class:f(i(s))},{default:n(()=>[g(h.$slots,"default")]),_:3},8,["href","class"]))]))}},he={class:"min-h-screen bg-gray-100"},pe={class:"bg-white border-b border-gray-100"},fe={class:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"},ge={class:"flex justify-between h-16"},me={class:"flex"},ve={class:"shrink-0 flex items-center"},_e={class:"hidden space-x-8 sm:-my-px sm:ml-10 sm:flex"},be={class:"hidden sm:flex sm:items-center sm:ml-6"},ye={class:"ml-3 relative"},we={class:"inline-flex rounded-md"},xe={type:"button",class:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:bg-gray-50 hover:text-gray-700 focus:outline-none focus:bg-gray-50 active:bg-gray-50 transition"},ke=e("svg",{class:"ml-2 -mr-0.5 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"},[e("path",{"fill-rule":"evenodd",d:"M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z","clip-rule":"evenodd"})],-1),$e={class:"w-60"},Se=e("div",{class:"block px-4 py-2 text-xs text-gray-400"}," Manage Team ",-1),Ce=e("div",{class:"border-t border-gray-100"},null,-1),je=e("div",{class:"block px-4 py-2 text-xs text-gray-400"}," Switch Teams ",-1),Te=["onSubmit"],Me={class:"flex items-center"},Le={key:0,class:"mr-2 h-5 w-5 text-green-400",fill:"none","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",stroke:"currentColor",viewBox:"0 0 24 24"},Be=e("path",{d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1),ze=[Be],Ae={class:"ml-3 relative"},Ne={key:0,class:"flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300 transition"},Pe=["src","alt"],Fe={key:1,class:"inline-flex rounded-md"},De={type:"button",class:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition"},Ee=e("svg",{class:"ml-2 -mr-0.5 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"},[e("path",{"fill-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","clip-rule":"evenodd"})],-1),Ie=e("div",{class:"block px-4 py-2 text-xs text-gray-400"}," Manage Account ",-1),Oe=e("div",{class:"border-t border-gray-100"},null,-1),Ve=["onSubmit"],He={class:"-mr-2 flex items-center sm:hidden"},Re={class:"h-6 w-6",stroke:"currentColor",fill:"none",viewBox:"0 0 24 24"},qe={class:"pt-2 pb-3 space-y-1"},Ue={class:"pt-4 pb-1 border-t border-gray-200"},Ge={class:"flex items-center px-4"},Je={key:0,class:"shrink-0 mr-3"},Ke=["src","alt"],Qe={class:"font-medium text-base text-gray-800"},We={class:"font-medium text-sm text-gray-500"},Xe={class:"mt-3 space-y-1"},Ye=["onSubmit"],Ze=e("div",{class:"border-t border-gray-200"},null,-1),et=e("div",{class:"block px-4 py-2 text-xs text-gray-400"}," Manage Team ",-1),tt=e("div",{class:"border-t border-gray-200"},null,-1),st=e("div",{class:"block px-4 py-2 text-xs text-gray-400"}," Switch Teams ",-1),ot=["onSubmit"],rt={class:"flex items-center"},nt={key:0,class:"mr-2 h-5 w-5 text-green-400",fill:"none","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",stroke:"currentColor",viewBox:"0 0 24 24"},at=e("path",{d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1),it=[at],lt={key:0,class:"bg-white shadow"},dt={class:"max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8"},ht={__name:"AppLayout",props:{title:String},setup(l){const r=T(!1),s=t=>{N.Inertia.put(route("current-team.update"),{team_id:t.id},{preserveState:!1})},h=()=>{N.Inertia.post(route("logout"))};return(t,_)=>(o(),a("div",null,[d(i(O),{title:l.title},null,8,["title"]),d(le),e("div",he,[e("nav",pe,[e("div",fe,[e("div",ge,[e("div",me,[e("div",ve,[d(i(S),{href:t.route("dashboard")},{default:n(()=>[d(K,{class:"block h-9 w-auto"})]),_:1},8,["href"])]),e("div",_e,[d(j,{href:t.route("dashboard"),active:t.route().current("dashboard")},{default:n(()=>[c(" Dashboard ")]),_:1},8,["href","active"]),d(j,{href:t.route("tunnels.index"),active:t.route().current("tunnels.index")},{default:n(()=>[c(" Tunnels ")]),_:1},8,["href","active"]),d(j,{href:t.route("bgp.validate"),active:t.route().current("bgp.validate")},{default:n(()=>[c(" ASN ")]),_:1},8,["href","active"])])]),e("div",be,[e("div",ye,[t.$page.props.jetstream.hasTeamFeatures?(o(),v(P,{key:0,align:"right",width:"60"},{trigger:n(()=>[e("span",we,[e("button",xe,[c(y(t.$page.props.user.current_team.name)+" ",1),ke])])]),content:n(()=>[e("div",$e,[t.$page.props.jetstream.hasTeamFeatures?(o(),a($,{key:0},[Se,d(w,{href:t.route("teams.show",t.$page.props.user.current_team)},{default:n(()=>[c(" Team Settings ")]),_:1},8,["href"]),t.$page.props.jetstream.canCreateTeams?(o(),v(w,{key:0,href:t.route("teams.create")},{default:n(()=>[c(" Create New Team ")]),_:1},8,["href"])):p("",!0),Ce,je,(o(!0),a($,null,A(t.$page.props.user.all_teams,u=>(o(),a("form",{key:u.id,onSubmit:k(m=>s(u),["prevent"])},[d(w,{as:"button"},{default:n(()=>[e("div",Me,[u.id==t.$page.props.user.current_team_id?(o(),a("svg",Le,ze)):p("",!0),e("div",null,y(u.name),1)])]),_:2},1024)],40,Te))),128))],64)):p("",!0)])]),_:1})):p("",!0)]),e("div",Ae,[d(P,{align:"right",width:"48"},{trigger:n(()=>[t.$page.props.jetstream.managesProfilePhotos?(o(),a("button",Ne,[e("img",{class:"h-8 w-8 rounded-full object-cover",src:t.$page.props.user.profile_photo_url,alt:t.$page.props.user.name},null,8,Pe)])):(o(),a("span",Fe,[e("button",De,[c(y(t.$page.props.user.name)+" ",1),Ee])]))]),content:n(()=>[Ie,d(w,{href:t.route("profile.show")},{default:n(()=>[c(" Profile ")]),_:1},8,["href"]),t.$page.props.jetstream.hasApiFeatures?(o(),v(w,{key:0,href:t.route("api-tokens.index")},{default:n(()=>[c(" API Tokens ")]),_:1},8,["href"])):p("",!0),Oe,e("form",{onSubmit:k(h,["prevent"])},[d(w,{as:"button"},{default:n(()=>[c(" Log Out ")]),_:1})],40,Ve)]),_:1})])]),e("div",He,[e("button",{class:"inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition",onClick:_[0]||(_[0]=u=>r.value=!r.value)},[(o(),a("svg",Re,[e("path",{class:f({hidden:r.value,"inline-flex":!r.value}),"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"},null,2),e("path",{class:f({hidden:!r.value,"inline-flex":r.value}),"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"},null,2)]))])])])]),e("div",{class:f([{block:r.value,hidden:!r.value},"sm:hidden"])},[e("div",qe,[d(b,{href:t.route("dashboard"),active:t.route().current("dashboard")},{default:n(()=>[c(" Dashboard ")]),_:1},8,["href","active"])]),e("div",Ue,[e("div",Ge,[t.$page.props.jetstream.managesProfilePhotos?(o(),a("div",Je,[e("img",{class:"h-10 w-10 rounded-full object-cover",src:t.$page.props.user.profile_photo_url,alt:t.$page.props.user.name},null,8,Ke)])):p("",!0),e("div",null,[e("div",Qe,y(t.$page.props.user.name),1),e("div",We,y(t.$page.props.user.email),1)])]),e("div",Xe,[d(b,{href:t.route("profile.show"),active:t.route().current("profile.show")},{default:n(()=>[c(" Profile ")]),_:1},8,["href","active"]),t.$page.props.jetstream.hasApiFeatures?(o(),v(b,{key:0,href:t.route("api-tokens.index"),active:t.route().current("api-tokens.index")},{default:n(()=>[c(" API Tokens ")]),_:1},8,["href","active"])):p("",!0),e("form",{method:"POST",onSubmit:k(h,["prevent"])},[d(b,{as:"button"},{default:n(()=>[c(" Log Out ")]),_:1})],40,Ye),t.$page.props.jetstream.hasTeamFeatures?(o(),a($,{key:1},[Ze,et,d(b,{href:t.route("teams.show",t.$page.props.user.current_team),active:t.route().current("teams.show")},{default:n(()=>[c(" Team Settings ")]),_:1},8,["href","active"]),t.$page.props.jetstream.canCreateTeams?(o(),v(b,{key:0,href:t.route("teams.create"),active:t.route().current("teams.create")},{default:n(()=>[c(" Create New Team ")]),_:1},8,["href","active"])):p("",!0),tt,st,(o(!0),a($,null,A(t.$page.props.user.all_teams,u=>(o(),a("form",{key:u.id,onSubmit:k(m=>s(u),["prevent"])},[d(b,{as:"button"},{default:n(()=>[e("div",rt,[u.id==t.$page.props.user.current_team_id?(o(),a("svg",nt,it)):p("",!0),e("div",null,y(u.name),1)])]),_:2},1024)],40,ot))),128))],64)):p("",!0)])])],2)]),t.$slots.header?(o(),a("header",lt,[e("div",dt,[g(t.$slots,"header")])])):p("",!0),e("main",null,[g(t.$slots,"default")])])]))}};export{ht as _};
