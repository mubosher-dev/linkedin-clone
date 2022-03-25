var V=Object.defineProperty,G=Object.defineProperties;var q=Object.getOwnPropertyDescriptors;var C=Object.getOwnPropertySymbols;var K=Object.prototype.hasOwnProperty,X=Object.prototype.propertyIsEnumerable;var N=(t,r,o)=>r in t?V(t,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[r]=o,P=(t,r)=>{for(var o in r||(r={}))K.call(r,o)&&N(t,o,r[o]);if(C)for(var o of C(r))X.call(r,o)&&N(t,o,r[o]);return t},A=(t,r)=>G(t,q(r));import{f as w,s as n,c as m,u as z,r as p,j as i,a as e,d as Y,I as Z,b as Q,e as R,g as ee,h as te,i as ie,F as b,A as k,k as T,l as ne,m as re,n as oe,o as ae,R as D,p as E,q as de,t as se,v as le,w as ce,x as pe,y as he,z as ge,B as xe,C as ue,D as me,E as fe,G as be,H as we,J as ve,K as ye,L as U,M as ke,N as _e,O as Se,P as ze,Q as Le,S as $e,T as Ie}from"./vendor.6b7902a8.js";const je=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))c(a);new MutationObserver(a=>{for(const d of a)if(d.type==="childList")for(const h of d.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&c(h)}).observe(document,{childList:!0,subtree:!0});function o(a){const d={};return a.integrity&&(d.integrity=a.integrity),a.referrerpolicy&&(d.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?d.credentials="include":a.crossorigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function c(a){if(a.ep)return;a.ep=!0;const d=o(a);fetch(a.href,d)}};je();const O=t=>{const r=t;return document.title=r,()=>{document.title=r}},Ce={apiKey:"AIzaSyBlo6WswZ6npJ5JrDBIOs9rXiA8mtNJVL0",authDomain:"linkedin-clone-1ea82.firebaseapp.com",projectId:"linkedin-clone-1ea82",storageBucket:"linkedin-clone-1ea82.appspot.com",messagingSenderId:"174838083998",appId:"1:174838083998:web:a5e1841b3fe14567e8668f",measurementId:"G-CNMJYMXZE8"},Ne=w.initializeApp(Ce),v=Ne.firestore(),L=w.auth(),Pe=new w.auth.GoogleAuthProvider,Ae=w.storage(),H="SET_USER",_=t=>({type:H,user:t});function Re(){return t=>{L.signInWithPopup(Pe).then(r=>{t(_(r.user)),console.log(_.user)}).catch(r=>alert(r.message))}}function Te(){return t=>{L.onAuthStateChanged(async r=>{r&&t(_(r))})}}function Ue(){return t=>{L.signOut().then(()=>t(_(null))).catch(r=>alert(r.message))}}function Me(t){O("Linkedin Login");const r=z();return p.exports.useEffect(()=>{t.user&&r("/home")}),i(Be,{children:[i(De,{children:[e("a",{href:"#",children:e("img",{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/LinkedIn_Logo_2013.svg/2560px-LinkedIn_Logo_2013.svg.png",alt:"logo__img"})}),i("div",{children:[e(Ee,{children:" Join Now "}),e(Oe,{children:" Sign In "})]})]}),i(He,{children:[i(Fe,{children:[e("h1",{children:" Welcome to your professional community "}),e("img",{src:"https://static-exp1.licdn.com/sc/h/dxf91zhqd2z6b0bwg85ktm5s4",alt:"login__banner-img"})]}),e(We,{children:i(Je,{onClick:()=>t.signIn(),children:[e("img",{src:"https://freesvg.org/img/1534129544.png",alt:"google_img"}),"Sign In With Google"]})})]})]})}const Be=n.div``,De=n.nav`
    max-width: 100%;
    margin: auto;
    padding: 12px 15px;
    display: flex;
    align-items: center;
    position: relative;
    justify-content: space-between;
    flex-wrap: nowrap;

    & > a{
        width: 125px;
        height: 30px;
        margin-left: 20px;

        img{
            width:100%;
            object-fit: cover;
            height: 100%;
        }
        div{
            display: flex;
        }
        @media screen and (max-width:768px){
            padding: 0 5px;
            width: 140px;
        }
         @media screen and (max-width:450px){
            padding: 0 5px;
            width: 100px;
            margin-right: 10px;
            img{
                width: 100px;
                object-fit: contain;
            }
        }
    }
    @media screen and (max-width:450px){
            justify-content: center;
        }
`,Ee=n.a`
    font-size: 16px;
    padding: 10px 12px;
    color: rgba(0,0,0,0.6);
    margin-right: 13px;
    cursor: pointer;
    border-radius: 4px;

    &:hover{
        background-color: rgba(0,0,0,0.05);
        color: rgba(0,0,0,0.9);
    }

    @media screen and (max-width:450px){
     padding: 10px; 
     margin-right  :0 ;
    }
`,Oe=n.button`
    color: blue;
    padding: 10px 20px;
    font-size: 16px;
    outline: none;
    border: 1px solid blue;
    border-radius: 998px;
    cursor: pointer;

    &:hover{
        padding: 9.9px 20px;
        background-color: lightblue;
    }

    @media screen and (max-width:450px){
        padding: 5px 10px;
    }
`,He=n.section`
    display: flex;
    align-items: center;
    min-height:700px;
    padding-bottom: 130px;
    padding-top: 40px;
    padding: 60px 0;
    position: relative;
    flex-wrap: wrap;
    width: 100%;
    margin: auto;

    @media screen and (max-width:768px) {
     margin:auto ;
     margin-top: 0;
     min-height: 0;
     padding-top: 10px;
    }
`,Fe=n.div`
    width: 100%;
    display: flex;
    padding: 30px;
    align-items: flex-start;
    justify-content: space-between;
    h1{
        width: 50%;
        font-size: 50px;
        color:#2977c8;
        font-weight: 500;

        @media screen and (max-width:768px) {
            text-align:center;
            font-size: 20px;    
            width: 100%;
            font-weight: bold;
            margin-right: 0;
            line-height: 2;
      }
    }

    img{
        z-index: 10;
        width: 70%;
        height: 500px;
        margin-right: -15%;
        @media screen and (max-width:768px) {
            width: 100%;
            height: 300px;
      }
    }
    @media screen and (max-width:768px) {
            flex-direction: column;
      }
`,We=n.div`
    margin-top: -250px;
    padding: 30px;

    @media screen and (max-width:768px) {
     margin-top :15px ;
     width: 100%;
     display: flex;
     align-items: center;
     justify-content: center;
    }
`,Je=n.button`
    padding: 10px;
    display:flex;
    cursor: pointer;
    align-items: center;
    width: 350px;
    justify-content: center;
    border: 1px solid lightgray;
    font-size: 16px;
    border-radius: 45px;
    img{
        width: 40px;
        margin: 0 10px;
        object-fit: contain;
    }
    &:hover{
        border: 1px solid #000016;
    }

    @media screen and (max-width:458px) {
        width: 300px;
    }
`,Ve=t=>({user:t.userState.user}),Ge=t=>({signIn:()=>t(Re())});var qe=m(Ve,Ge)(Me);const Ke=t=>{const r=z(),o=()=>{t.signOut()};return p.exports.useEffect(()=>{t.user||r("/")},[t.user]),e(Xe,{children:i(Ye,{children:[e(Ze,{children:e("a",{href:"#",children:e("img",{src:"https://cdn-icons-png.flaticon.com/512/174/174857.png",alt:"home__logoImg"})})}),i(Qe,{children:[e(Y,{}),e(Z,{className:"header__input",placeholder:"enter your search"})]}),e(et,{children:i(tt,{children:[e(u,{children:i("a",{children:[e(Q,{}),"Home"]})}),e(u,{children:i("a",{children:[e(R,{}),"Online"]})}),e(u,{children:i("a",{children:[e(ee,{}),"Jobs"]})}),e(u,{children:i("a",{children:[e(te,{}),"Massage"]})}),e(u,{children:i("a",{children:[e(ie,{}),"Notifications"]})}),e(u,{className:"header__avatar",children:e("a",{children:t.user&&t.user.photoURL?i(b,{children:[e(k,{src:t.user.photoURL}),e(T,{className:"arrow__icon"}),e(M,{onClick:o,children:" Sign Out"})]}):i(b,{children:[e(k,{}),e(T,{className:"arrow__icon"}),e(M,{children:" Sign Up"})]})})}),e(u,{children:i("a",{children:[e(R,{}),"Works"]})})]})})]})})},Xe=n.header`
    background: #fff;
    border-bottom: 1px solid rgba(0,0,0,0.68);
    left: 0 !important;
    top: 0;
    padding: 3px 24px;
    position: sticky;
    position: -webkit-sticky;
    z-index: 10000;
    right:0 ;

    @media screen and (max-width:450px){
        .header__input{
            display:none !important;
        }
    }
`,Ye=n.div`
    display: flex;
    align-items: center;
`,Ze=n.span`
    margin-right: 8px;
    width: 30px;
    font-size: 8px;
    height: 100%;
    a{
        img{
            width: 100%;
            height: 100%;
            object-fit: contain;
        }
    }
`,Qe=n.div`
    display: inline-flex;
    align-items:center;
    background: lavender;
    padding: 3px;
    border:1px solid lightgray;
    border-radius: 2px;

    &:hover{
        border: 1px solid rgb(10,70,200);
    }
`,et=n.div`
    margin-left: auto;
    display: block;
    width: 50%;
    @media screen and (max-width:768px){
        position: fixed;
        bottom: 0;
        width: 100%;
        background-color: #fff;
        left: 0;
        padding: 10px;
    }
     @media screen and (max-width:450px){
        overflow-x: scroll;
        ::-webkit-scrollbar{
            display: none;
        }
        ul{
            width: 150%;
            button{
                margin: 0 15px;
            }
        }
    }
`,tt=n.ul`
    display: flex;
    list-style-type :none ;
    justify-content: space-between;
    width: 100%;
`,u=n.button`
        display:flex;
        align-items: center;
        flex:1;
        position: relative;
        justify-content: center;
        a{
            display: flex;
            align-items:center;
            flex-direction: column;
            font-size: 16px;
            color: rgba(0,0,0,0.5);
            text-decoration: none;
        }
        &::after{
            position:absolute;
            content:"";
            bottom: -5%;
            width: 50%;
            height:4px;
            border-radius: 10%;
            left: 25%;
            opacity: 0;
            background: #000;
            transition: .3s ease-in;
        }
        &:hover{
            a {
                color: #000;
            }
        }

        &:focus{
            &::after{
                width: 100%;
                left: 0;
                opacity: 1;
            }
             a {
                color: #000;
            }
        }
        &.header__avatar{
            a {
                flex-direction: row !important;
                .arrow__icon{
                    margin-bottom: -20px;
                }
            }
            &:hover{
                a{
                    div{
                        display:block;
                    }
                }
            }
            @media screen and (max-width:768px){
                position: fixed;
                top: 0%;
                left: 80%;
            }
            @media screen and (max-width:450px){
                position: fixed;
                right: 0;
                z-index: 1000;
                left:60%;
            }
        }
`,M=n.div`
    position: absolute;
    bottom:-95%;
    width:100px;
    background: #fff;
    padding: 10px;
    border: 1px solid #000016;
    font-size:16px;
    font-weight: bold;
    cursor: pointer;
    display:none;
`,it=t=>({user:t.userState.user}),nt=t=>({signOut:()=>t(Ue())});var rt=m(it,nt)(Ke);const ot=t=>{var r;return i(at,{className:"rightside",children:[i(dt,{children:[i(st,{children:[e(lt,{}),i("a",{children:[t.user?e("img",{src:t.user.photoURL}):"",i(pt,{children:[" Welcome ",t.user?(r=t.user)==null?void 0:r.displayName:""," "]})]}),e("a",{children:e(ct,{children:"Add Photo"})})]}),e(ht,{children:i("a",{children:[i("div",{children:[e("span",{children:"Connections"}),e("span",{children:"Check Your Network"})]}),e(ne,{})]})}),i(gt,{children:[e(re,{className:"itemIcon"}),e("span",{children:"My Works"})]})]}),i(xt,{children:[e("a",{children:e("span",{children:" Groups "})}),i("a",{children:[e("span",{children:" Events "}),e(oe,{})]}),e("a",{children:e("span",{children:" Follow Hashtags "})}),e("a",{children:e("span",{children:" Discover More "})})]})]})},at=n.div`
   flex:0.35;
`,dt=n.div`
    text-align:center;
    background: #fff;
    border-radius: 5px;
    margin-bottom: 5px;
    position: relative !important;
    width: 100%;
    box-shadow: 0 0 1px 1px var(--border-color);

`,st=n.div`
    border-bottom: 1px solid rgba(0,0,0,0.6);
    padding: 12px 12px 16px;
    position: relative;

    img {
        z-index: 10;
        position: relative;
        border-radius: 50%;
        width: 80px;
        object-fit: contain;
        margin-top: 20px;
    }
`,lt=n.div`
    height: 80px;
    background: linear-gradient(20deg,rgb(160,180,183),rgb(217,229,231),rgb(191,211,214));
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
`;n.div`
    background-image: url("https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/High-contrast-camera-photo.svg/2048px-High-contrast-camera-photo.svg.png");
    width: 72px;
    height: 73px;
    background-size: 50px;
    position: relative;
    z-index: 10;
    margin: auto;
    background-size: contain;
    background-repeat: no-repeat;
    margin-top: 30px !important;
    margin:0 auto;
    display: inline-block !important;
    background-color: #fff;
    border-radius: 5px;
`;const ct=n.div`
    color: rgb(50,50,200);
    margin-top: 4px;
    line-height: 3.33;
    font-weight: 400;
`,pt=n.div`
    font-size: 18px;
    color: rgba(0,0,0,0.9);
    font-weight: bold;
`,ht=n.div`
    padding: 15px;
    a {
        display: flex;
        align-items:center;
        justify-content: space-between;
        div{
             span:nth-child(2){
                font-weight: bold;
            }
            span{
                display: block;
                text-align: left;
            }
           
        }
    }
    &:hover{
        background: rgba(0,0,0,0.2);
    }
`,gt=n.div`
    display: flex;
    align-items: flex-start;
    padding: 15px;
    border-top:1px solid rgba(0,0,0,0.6);

    span {
        font-weight: bold;
    }

    &:hover{
        background: rgba(0,0,0,0.2);
    }
`,xt=n.div`
    padding: 12px 12px 16px;
    background: #fff;
    display:flex;
    border-radius: 5px;
    flex-direction: column;
    box-shadow: 0 0 1px 1px rgba(0,0,0,0.5);
    a{
        display:inline-flex;
        justify-content: space-between;
        padding: 4px 12px;

        &:hover{
            color: rgb(0,0,100);
        }
        &:last-child{
            color: rgba(0,0,0,0.4);
            padding: 12px;
            border-top:1px solid rgba(0,0,0,0.5);

            &:hover{
                color: rgba(0,0,0,0.4);
                background: rgba(0,0,0,0.3);
            }
        }
    }

`,ut=t=>({user:t.userState.user});var mt=m(ut)(ot);const ft=t=>{var I,j;const[r,o]=p.exports.useState(""),[c,a]=p.exports.useState(null),[d,h]=p.exports.useState(""),[s,g]=p.exports.useState(!1),y=l=>{const x=l.target.files[0];if(x===""||x===void 0){alert(`Not have image ${typeof x}`);return}a(x)},$=l=>{o(" "),h(null),a(null),t.handle(l)},W=()=>{g(!s)},J=l=>{if(console.log(l),l.preventDefault(),c!==null){const x=Ae.ref(`images/${c.name}`).put(c);x.on("state_changed",f=>{f.bytesTransferred/f.totalBytes*100},f=>alert(f),async()=>{const f=await x.snapshot.ref.getDownloadURL();v.collection("linkedin").add({username:t.user.displayName,userImg:t.user.photoURL,email:t.user.email,date:w.firestore.FieldValue.serverTimestamp(),description:r,like:0,video:d,postImg:f})})}else v.collection("linkedin").add({username:t.user.displayName,userImg:t.user.photoURL,email:t.user.email,date:w.firestore.FieldValue.serverTimestamp(),description:r,like:0,video:d,postImg:""}),g(!1);$(l)};return e(b,{children:e(bt,{className:t.modal==="open"?"show":"",children:i(wt,{children:[i(vt,{children:[e("h2",{children:" Create a post "}),e("button",{onClick:l=>$(l),children:e(ae,{})})]}),i(yt,{children:[i(kt,{children:[e(k,{src:(I=t.user)==null?void 0:I.photoURL}),e("span",{children:(j=t.user)==null?void 0:j.displayName})]}),i(Lt,{children:[e("textarea",{value:r,placeholder:"write a post",onChange:l=>o(l.target.value)}),e($t,{children:e("input",{type:"file",accept:"image/gif, image/jpeg,  image/png",name:"image",onChange:y,id:"file",style:{display:"none"}})})]}),c&&e("img",{className:"upload__img",src:URL.createObjectURL(c)}),s?e(b,{children:e("input",{type:"text",className:"videoInput",value:d,placeholder:"enter a video url",onChange:l=>h(l.target.value)})}):e(b,{}),d&&e(D,{url:d,width:"100%"})]}),i(_t,{children:[i(St,{children:[e(S,{children:e("label",{htmlFor:"file",style:{zIndex:"10000"},children:e(E,{})})}),e(S,{onClick:W,children:e(de,{})})]}),e(zt,{children:i(S,{children:[e(se,{}),"Anyone"]})}),e("p",{className:"addBtn",onClick:l=>J(l),children:"Post"})]})]})})})},bt=n.div`
    position:fixed;
    top:-400%;
    left:0;
    right:0;
    z-index:90900;
    height:100vh;
    color: #000;
    background-color:rgba(0,0,0,0.7);

    &.show {
        top:0;
    }
`,wt=n.div`
    width:100%;
    max-width:80%;
    max-height:90%;
    background-color: #fff;
    margin:20px auto;
    overflow:initial;
    border-radius:5px;
    position:relative;
    display:flex;
    flex-direction: column;
    box-shadow:0 0 1px var(--border-color);

    @media screen and (max-width:450px){
        width: 100%;
        max-width:98% !important;
        margin: 20px 5px !important;
    }
`,vt=n.div`
    display: flex;
    padding:14px 26px;
    border-bottom: 1px solid var(--border-color);
    font-size:16px;
    justify-content: space-between;
    align-items:center;

    button {
        font-size:16px !important;
        color:#000016;
        cursor:pointer;
    }
`,yt=n.div`
    display: flex;
    flex-direction:column;
    overflow-y:auto;
    padding:8px 12px;
    position: relative;
    .upload__img {
        padding:1rem 1.5rem;
        width:100%;
        height: 300px;
        object-fit: fill;
        object-position:center;

        @media screen and (max-width:768px) {
         object-fit:contain;
        }
    }

    .videoInput {
        border:1px solid var(--border-color);
        padding:10px 15px;
        color:#000;
        width: 95%;
        font-size:16px;
        margin:10px auto;

        @media screen and (max-width:768px){
            max-width: 500px;
        }
    }
`,kt=n.div`
    display:flex;
    align-items:center;
    padding:12px 24px;

    span {
        font-weight:700;
        font-size: 17px;
        margin:0 10px;
    }
`,_t=n.div`
    display:flex;
    justify-content:space-between;
    align-items: center;
    padding:12px 2px 12px 14px;


    .addBtn{
        width: 100px;
        text-align:center;
        margin-right: 100px;
        border-radius: 20px;
        border:1px solid var(--border-color);
    }
    @media screen and (max-width:768px) {
        justify-content:center;
    }
`,St=n.div`
    display:flex;
    align-items:center;
    padding:10px 20px;

    @media screen and (max-width:768px){
        padding:0;
    }
`,S=n.button`
    font-size:20px;
    border:1px solid var(--border-color);
    width:100px;
    cursor:pointer;

       @media screen and (max-width:768px){
           flex:0.3;
           width: inherit;
           border:none;
           margin:0 10px;
    }
`,zt=n.div`
    padding-right:10px;
    border-left: 1px solid var(--border-color);
    button {
        display:flex;
        align-items: center;
    }
`;n.button`
    padding:10px 20px;
    background-color:${t=>t.disabled?"rgb(0,0,200)":"grey"};
    color: ${t=>t.disabled?"#fff":"#000"};
    font-size:16px;
    border-radius:45px;
    min-width: 60px;
    margin: 0 20px;
    cursor:pointer;
`;const Lt=n.div`
    width:100%;
    padding:10px 25px;
    display: flex;
    justify-content: center;
    textarea{
        font-size: 16px;
        border:1px solid var(--border-color);
        height: 90px !important;
        width:100% !important;
        padding: 5px 10px;

        &:focus {
            border: 1px solid blue;
        }
    }
`,$t=n.div``,It=t=>({user:t.userState.user}),jt=t=>({});var Ct=m(It,jt)(ft);function Nt(t){const[r,o]=p.exports.useState(!1);return i(Pt,{children:[e(le,{className:r?"blue":"#000",onClick:()=>{r?(v.collection("linkedin").doc(t.id).update({like:t.like-1}),o(!1)):(v.collection("linkedin").doc(t.id).update({like:t.like+1}),o(!0))}}),i("sub",{children:[" ",t.like," like "]})]})}const Pt=n.span`
    .blue{
        color:blue !important;
    }
`,At=t=>{var h;const[r,o]=p.exports.useState("close"),c=s=>{switch(s.preventDefault(),r){case"open":o("close");break;case"close":o("open");break;default:o("close")}},[a,d]=p.exports.useState([]);return p.exports.useEffect(()=>{v.collection("linkedin").orderBy("date","asc").onSnapshot(s=>{d(s.docs.map(g=>({id:g.id,name:g.data()})))})},[]),console.log(a),i(Rt,{children:[i(Tt,{children:[i("div",{className:"header",children:[e("img",{src:(h=t.user)==null?void 0:h.photoURL}),e("button",{onClick:c,children:"Create a post"})]}),i("div",{children:[i("button",{children:[e(E,{style:{color:"blue"}}),e("span",{children:" Photo "})]}),i("button",{children:[e(ce,{style:{color:"green"}}),e("span",{children:" Video "})]}),i("button",{children:[e(pe,{style:{color:"orange"}}),e("span",{children:" Date "})]}),i("button",{children:[e(he,{style:{color:"pink"}}),e("span",{children:" Write a article "})]})]})]}),e("div",{children:a.map((s,g)=>{var y;return i(Ut,{children:[i(Mt,{children:[i("a",{children:[e(k,{src:s.name.userImg,alt:"Logo"}),i("div",{children:[i("span",{children:[" ",s.name.username," "]}),i("span",{children:[" ",s.name.email," "]}),i("span",{children:[" ",new Date((y=s.name.date)==null?void 0:y.toDate()).toUTCString()," "]})]})]}),e("button",{children:e(ge,{})})]}),i(Bt,{children:[" ",s.name.description," "]}),e(Dt,{children:e("a",{children:s.name.postImg?e("img",{src:s.name.postImg,alt:"shared__img"}):e(D,{width:"100%",url:s.name.video})})}),i(Et,{children:[e("li",{children:e("button",{children:e(Nt,{id:s.id,like:s.name.like})})}),e("li",{children:i("a",{children:[e(xe,{}),i("sub",{children:[" ",s.name.comment," comment "]})]})}),e("li",{children:i("button",{children:[e(ue,{}),e("sub",{children:" Shared "})]})}),e("li",{children:i("button",{children:[e(me,{className:"send__icon"}),e("sub",{children:" Send "})]})})]})]},g)})}),e(Ct,{modal:r,handle:c})]})},Rt=n.div`
    flex:0.6;
    margin:0 20px;
    @media screen and (max-width:768px){
        width:100%;
        margin:10px 0;
    }
`,F=n.div`
    text-align:center;
    margin-bottom:8px;
    background-color:#fff;
    position:relative;
    border-radius:5px;
    box-shadow: 0 0 1px 1px var(--border-color);
`,Tt=n(F)`
    display:flex;
    flex-direction: column;
    margin: 0 0 8px;
    border-radius:5px;
    div:nth-child(1){
        display:flex;
        align-items:center;
        img{
            width: 100px;
            height: 100px;
            border-radius:100%;
            padding:10px;
            object-fit: contain;
        }
        button{
            width:80%;
            padding:10px 13px;
            border:1px solid #000;
            border-radius:45px;
            margin:0 10px;
            font-size:16px;
            text-align: left !important;
        }
    }

    div:nth-child(2){
        display:flex;
        align-items: center;
        justify-content:space-between;
        padding: 10px 20px;

        button {
            display: flex;
            align-items:center;
            font-size: 16px !important;
            justify-content:center;
            border-radius: 5px;
            span {
                cursor:pointer;
                border-radius:45px;
                color:rgb(40,40,200);
                font-size:15px;
            }
        }
    }
    @media screen and (max-width:768px){
         div:nth-child(2){
             padding: 10px 10px;
         }
    }
    @media screen and (max-width:450px){
         div:nth-child(2){
             overflow-x:scroll;
         }
    }
    
`,Ut=n(F)`
    padding:0;
    margin:0 0 8px;
`,Mt=n.div`
    padding:10px;
    display:flex;
    border-radius:5px;
    box-shadow: 0 0 1px var(--border-color);
    align-items:center;
    a{
        flex-grow:1;
        display:flex;
        align-items:center;
          
          img{
              width:70px;
              object-fit:contain;
          }
          & > div {
            display:flex;
            flex-direction:column;
            margin-left:8px;

            span {
                text-align:left;
                font-size:14px;
                color:rgba(0,0,0,0.7);
                &:first-child{
                    font-size:14px;
                    font-weight: 700;
                    color:rgba(0,0,0,1)
                }
            }
        }
    }
    button{
        align-self:flex-start !important;
        font-size:16px !important;
    }
`,Bt=n.div`
    padding: 10px;
    color:#000;
    font-size:14px;
    text-align:left;
    font-weight: bold;
`,Dt=n.div`
    margin-top:8px;
    display:block;
    background-color:#f9fafb;

    img{
        object-fit: contain;
        width:100%;
        height:100%;
    }
`,Et=n.ul`
    list-style-type:none;
    display: flex;
    align-items:center;
    margin:0 16px;
    justify-content:space-between;
    padding:8px 0;

    li{
        margin-right:5px;
        font-size:20px;
        sub {
            font-size:16px;
        }
        button {
            display:flex;
            align-items:center;
         & > .send__icon{
             transform:rotate(-50deg) !important;
         }
        }
        a{
            display:flex;
            align-items:center;
        }
    }
`,Ot=t=>({user:t.userState.user}),Ht=t=>({});var Ft=m(Ot,Ht)(At);const Wt=t=>e(Jt,{children:i(Vt,{children:[i(Gt,{children:[e("h2",{children:" Add to your feed "}),e(be,{})]}),i(qt,{children:[i("li",{children:[e("a",{children:e(B,{})}),i("div",{children:[e("span",{children:"#Linkedin"}),e("button",{children:"Follow"})]})]}),i("li",{children:[e("a",{children:e(B,{})}),i("div",{children:[e("span",{children:"#Video"}),e("button",{children:"Follow"})]})]})]}),i(Kt,{children:["View all recomendition",e(we,{style:{color:"blue"}})]}),e(Xt,{})]})}),Jt=n.div`
    flex:0.35;
    @media screen and (max-width:768px){
     width :100% ;
    }
`,Vt=n.div`
    text-align: center;
    border-radius:5px;
    padding: 12px;
    margin-bottom: 50px;
    width: 100%;
    box-shadow: 0 0 1px 1px var(--border-color);
    background: #fff;
`,Gt=n.div`
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    h2{ 
        font-size: 16px;
        font-weight: 400;
    }
`,qt=n.ul`
    margin-top: 10px;
    li{ 
        border-top: 1px solid rgba(0,0,0,0.3);
        display: flex;
        align-items: center;
        margin:12px 0;
        font-size: 14px;
        justify-content: space-between;
        & > div {
            display:flex;
            flex-direction: column;
            align-items:center;

            button {
                border: 1px solid rgba(0,0,0,0.5);
                margin-top:10px;
                padding: 10px 20px;
                border-radius: 45px;
                cursor: pointer;
                font-size: 16px;
                &:hover{
                    padding:9.9px 20px ;
                    background: rgba(0,0,0,0.3);
                }
            }
        }
    }
`,B=n(fe)`
    font-size: 20px;
`,Kt=n.a`
    display: flex;
    align-items: center;
    color:blue;
    justify-content: center;
`,Xt=n.div`
    background: url("https://d1csarkz8obe9u.cloudfront.net/posterpreviews/digital-marketing-banner-template-design-41201d18578c3cd781702fa8b1203dcf_screen.jpg?ts=1617890111");
    background-size: cover;
    background-repeat:no-repeat;
    background-position: center;
    height: 200px;
    width: 100%;

`,Yt=t=>{O("Linkedin Home");const r=z();return p.exports.useEffect(()=>{t.user||r("/")},[]),i(b,{children:[e(rt,{}),i(Zt,{children:[i(Qt,{children:[e("h3",{children:"Hiring a happy"}),e("p",{children:"Find a talented props time with Upwork and keep business moving"})]}),i(ei,{children:[e(mt,{}),e(Ft,{}),e(Wt,{})]})]})]})},Zt=n.div``,Qt=n.section`
        padding-top: 5%;
        max-width: 100%;
        box-sizing: content-box;
        display: flex;
        justify-content: center;
        text-decoration: underline;
        align-items: center;
        h3{
            color: blue;
            margin: 0 10px;
        }
        p{
            font-weight: 700;
        }

        @media screen and (max-width:768px){
            padding-top: 52px !important;
            flex-direction: column;
            padding: 0 30px;
            p{
                text-align: center;
            }
        }
    `,ei=n.div`
    display: flex;
    margin: 25px 0;
    padding: 20px;
    @media screen and (max-width:768px){
        display: flex;
        align-items:center;
        flex-direction: column;
        padding: 1rem;
        .rightside {
            width: 100% !important;
            margin:20px 0;
        }
        div {
            border-radius:0 !important;
        }
    }

    @media screen and (max-width:450px){
        padding:0 !important;
    }
`,ti=t=>({user:t.userState.user});var ii=m(ti)(Yt);function ni(t){return p.exports.useEffect(()=>{t.getUserAuth()},[]),e(ve,{children:e("div",{className:"app",children:i(ye,{children:[e(U,{exact:!0,path:"/",element:e(qe,{})}),e(U,{exact:!0,path:"/home",element:e(ii,{})})]})})})}const ri=t=>({}),oi=t=>({getUserAuth:()=>t(Te())});var ai=m(ri,oi)(ni);const di={user:null},si=(t=di,r)=>{switch(r.type){case H:return A(P({},t),{user:r.user});default:return t}},li=ke({userState:si}),ci=_e(li,Se(ze));Le.render(e($e.StrictMode,{children:e(Ie,{store:ci,children:e(ai,{})})}),document.getElementById("root"));
