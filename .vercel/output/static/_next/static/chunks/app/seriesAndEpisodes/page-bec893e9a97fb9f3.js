(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1597],{3971:function(e,l,s){Promise.resolve().then(s.bind(s,4350))},4350:function(e,l,s){"use strict";s.r(l),s.d(l,{default:function(){return h}});var t=s(7437),a=s(2265),i=s(6328),o=s(6393),n=s(2954),r=s(705),c=s(8737),d=s(8827),m=s(3145),u=s(4312),x=s(6653);function h(){let[e,l]=(0,a.useState)([]),[s,h]=(0,a.useState)(1),[p,f]=(0,a.useState)(!1),[g,w]=(0,a.useState)(""),[j,v]=(0,a.useState)(""),[N,b]=(0,a.useState)(!1),[y,S]=(0,a.useState)(!0);(0,a.useRef)();let[k,C]=(0,a.useState)(!0);(0,a.useEffect)(()=>{let e=new URLSearchParams(window.location.search).get("seriesName");e&&E(e),w(e)},[]),(0,a.useEffect)(()=>{g&&y&&I()},[g,s]);let I=(0,a.useCallback)(async()=>{f(!0);try{let e="".concat(g," الحلقة ").concat(s),t=await fetch("/api/showSeries?seriesName=".concat(g,"&episodeName=").concat(encodeURIComponent(e)));if(t.ok){let e=await t.json();if(e.length>0){l([e[0]]);let t="".concat(g," الحلقة ").concat(s+1),a=await fetch("/api/showSeries?seriesName=".concat(g,"&episodeName=").concat(encodeURIComponent(t)));a.ok&&0!==(await a.json()).length||S(!1)}else S(!1)}}catch(e){console.error("Error fetching episode:",e)}finally{f(!1)}},[g,s]);async function E(e){let l=await fetch("/api/serieses?seriesName=".concat(e)),s=await (null==l?void 0:l.json());l.ok&&v(s[0])}(0,a.useEffect)(()=>{let e=new URLSearchParams(window.location.search).get("seriesName"),l=localStorage.getItem("episodeNumber");e&&(E(e),w(e),h(l?parseInt(l):1))},[]);let _=()=>{let e=s+1;h(e),localStorage.setItem("episodeNumber",e),window.location.reload()};return(0,t.jsxs)("div",{className:"relative w-full h-[1000px] sm:p-4 lg:p-8 rounded-lg bg-one overflow-y-auto",children:[(0,t.jsxs)("div",{className:"absolute flex flex-col items-start gap-2 z-40 top-2 right-2 sm:top-4 sm:right-4 xl:right-12 xl:top-12",children:[(0,t.jsx)(c.Ogj,{className:"p-1 rounded-lg text-3xl lg:text-5xl text-white cursor-pointer z-50  bg-two",onClick:()=>b(!N)}),N&&(0,t.jsx)(r.Z,{setIsOpen:b})]}),(0,t.jsx)("div",{className:"hidden lg:block"}),(0,t.jsxs)("div",{className:"relative w-full",children:[(0,t.jsx)("div",{className:"relative w-full h-44 sm:h-[500px] overflow-hidden shadow-lg ",children:(null==j?void 0:j.seriesImage)?(0,t.jsx)(m.default,{priority:!0,src:null==j?void 0:j.seriesImage,layout:"fill",objectFit:"cover",alt:"photo"}):(0,t.jsx)(d.Z,{})}),(0,t.jsx)("div",{className:"absolute w-full h-44 sm:h-[500px] overflow-hidden shadow-lg top-0",children:(null==j?void 0:j.seriesImage)?(0,t.jsx)(m.default,{priority:!0,src:null==j?void 0:j.seriesImage,layout:"fill",objectFit:"contain",alt:"photo"}):(0,t.jsx)(d.Z,{})})]}),(0,t.jsxs)("div",{className:"flex flex-col justify-start items-center w-full gap-4 my-8",children:[(0,t.jsx)("div",{onClick:()=>{localStorage.removeItem("episodeNumber"),C(!1)},children:(0,t.jsx)(n.Z,{})}),(0,t.jsxs)("h1",{className:"grow text-lg lg:text-2xl w-full text-white",children:[(0,t.jsx)("span",{className:"text-gray-500 ml-2",children:"#"}),"اسم المسلسل ",(0,t.jsx)("span",{children:g})]})]}),(0,t.jsxs)("div",{className:"flex justify-between w-full p-4 items-start",children:[(0,t.jsx)("button",{onClick:_,className:"btn p-1 sm:px-4 sm:py-2 shadow-lg text-white rounded-lg disabled:opacity-50",disabled:!y,children:"الحلقة التالية"}),(0,t.jsx)("button",{onClick:()=>{if(s>1){let e=s-1;h(e),localStorage.setItem("episodeNumber",e),window.location.reload()}},className:"btn p-1 sm:px-4 sm:py-2 shadow-lg text-white rounded-lg disabled:opacity-50",disabled:1===s,children:"الحلقة السابقة"})]}),(0,t.jsxs)("div",{className:"my-2 p-2",children:[0===e.length&&!p&&(0,t.jsx)(o.Z,{myMessage:"\uD83D\uDE09لا يوجد نتائج لعرضها"}),(0,t.jsxs)("div",{children:[e.map(e=>(0,t.jsx)("div",{className:"flex flex-col items-center justify-start rounded-lg overflow-hidden ",children:(0,t.jsxs)("div",{className:"w-full",children:[(0,t.jsx)(x.default,{render:e.id}),(0,t.jsxs)("h1",{className:"text-white text-center p-2",children:[null==e?void 0:e.episodeName,(0,t.jsx)(x.default,{render:null==e?void 0:e.episodeName})]}),(0,t.jsx)(i.Z,{videoUrl:null==e?void 0:e.episodeLink,image:null==j?void 0:j.seriesImage,episodeName:null==e?void 0:e.episodeName,showAd:k,onNextEpisode:_})]})},e.id)),(0,t.jsx)(u.U,{})]})]})]})}},4312:function(e,l,s){"use strict";s.d(l,{U:function(){return r}});var t=s(7437),a=s(2265),i=s(6595),o=s(9064),n=s(1759);let r=()=>{let[e,l]=(0,a.useState)(!1),[s,r]=(0,a.useState)({name:"",email:"",message:""}),c=(0,a.useRef)();return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("h1",{className:" btn w-fit tex-lg sm:text-xl text-white p-2 cursor-pointer rounded-lg shadow-lg",onClick:()=>l(!e),children:e?"إغلاق":"الإبلاغ عن رابط لا يعمل"}),(0,t.jsx)("div",{className:"w-full bg-one",children:e&&(0,t.jsxs)("form",{ref:c,onSubmit:e=>{e.preventDefault();let l=new Promise(async(e,l)=>{i.ZP.sendForm("service_1kwdc1b","template_ob2d528",c.current,{publicKey:"sz-p0MH13eKBG6rFP"}).then(()=>{console.log("SUCCESS!")},e=>{console.log("FAILED...",e.text)})?(e(),r({name:"",email:"",message:""})):l()});o.ZP.promise(l,{loading:"Sending ...",success:"تم إرسال رسالتك بنجاح",error:"حدث خطأ ما حاول مرة أخرى"})},className:"flex flex-col items-center gap-4",children:[(0,t.jsxs)("div",{className:" w-full flex flex-col sm:flex-row justify-between items-center lg:gap-16 sm:gap-8",children:[(0,t.jsxs)("div",{className:"w-full flex flex-col grow",children:[(0,t.jsxs)("label",{className:"tex-lg sm:text-xl text-white p-2 ",children:["الإسم:"," "]}),(0,t.jsx)("input",{value:null==s?void 0:s.name,onChange:e=>r({...s,name:e.target.value}),required:!0,type:"text",name:"user_name",placeholder:"اسمك",className:"p-2 rounded-lg outline-none shadow-none border-2 focus:border-primary border-solid tex-lg sm:text-xl "})]}),(0,t.jsxs)("div",{className:"w-full flex flex-col grow",children:[(0,t.jsxs)("label",{className:"tex-lg sm:text-xl text-white p-2 ",children:["الإيميل:"," "]}),(0,t.jsx)("input",{value:null==s?void 0:s.email,onChange:e=>r({...s,email:e.target.value}),required:!0,type:"email",name:"user_email",placeholder:"عنوان البريد الإلكتروني",className:"w-full rounded-lg p-2 outline-none shadow-none focus:border-primary border-secondary tex-lg sm:text-xl placeholder:text-sm placeholder:sm:text-lg"})]})]}),(0,t.jsxs)("div",{className:"flex flex-col items-center w-full",children:[(0,t.jsx)("label",{className:"tex-lg sm:text-xl my-2 text-white p-2 ",children:"الرسالة:"}),(0,t.jsx)("textarea",{value:null==s?void 0:s.message,placeholder:"اكتب اسم المسلسل و رقم الحلقة أو اسم الفيلم الذي يحتوي على أشياء مخالفة للعقيدة الإسلامية ليتم حذفه فورا\nاكتب اسم المسلسل ورقم الحلقة أو اسم الفيلم الذي لا يعمل لنقوم بإصلاحه إن شاء الله",onChange:e=>r({...s,message:e.target.value}),required:!0,name:"message",className:"w-full rounded-lg p-2 outline-none shadow-none focus:border-primary border-secondary tex-lg sm:text-xl min-h-[200px] placeholder:text-sm placeholder:sm:text-lg"})]}),(0,t.jsx)("div",{children:(0,t.jsx)(n.Z,{title:"إرسال",type:"submit",style:" "})})]})})," "]})}}},function(e){e.O(0,[7240,5027,6950,2972,605,5726,9064,7562,2986,7037,2971,5030,1744],function(){return e(e.s=3971)}),_N_E=e.O()}]);