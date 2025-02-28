import{b as x,a as k,j as s,L as j,au as w,av as N,aw as y}from"./index-BIGqcniS.js";import{u as v}from"./useMutation-CFXNc7Zj.js";import{u as S}from"./index.esm-Dk9qpicv.js";const $="_heading_bdfrr_19",P="_label_bdfrr_29",E="_line_bdfrr_57",L="_check_bdfrr_63",U="_check__input_bdfrr_72",q="_check__box_bdfrr_79",A="_check__text_bdfrr_92",T="_footer_bdfrr_101",e={"create-account-form":"_create-account-form_bdfrr_2",heading:$,"fields-group":"_fields-group_bdfrr_24",label:P,"input-field":"_input-field_bdfrr_40","input-field--error":"_input-field--error_bdfrr_51","agreement-group":"_agreement-group_bdfrr_57",line:E,check:L,check__input:U,check__box:q,check__text:A,"check__input--error":"_check__input--error_bdfrr_97",footer:T,"submit-button":"_submit-button_bdfrr_107","sign-in-group":"_sign-in-group_bdfrr_120","sign-in-link":"_sign-in-link_bdfrr_124"},z=()=>{var u;const{setError:i,register:n,handleSubmit:p,watch:_,formState:{errors:a}}=S(),h=_(),l=x(),f=k(),g=v({mutationFn:r=>w(r),onSuccess:r=>{if(console.log("Account created successfully!",r),!(r!=null&&r.user.token))throw new Error("No token recieved");localStorage.setItem("authToken",r.user.token),l(N(r.user.token)),l(y(r.user)),f("/")},onError:r=>{var c,o,d,m;try{const t=JSON.parse(r.message);(o=(c=t==null?void 0:t.body)==null?void 0:c.errors)!=null&&o.username&&i("username",{type:"manual",message:"Username is already taken"}),(m=(d=t==null?void 0:t.body)==null?void 0:d.errors)!=null&&m.email&&i("email",{type:"manual",message:"Email is already taken"}),console.error("Status:",t.status),console.error("Server errors:",t.body.errors)}catch(t){console.error("Unexpected error format:",t)}}}),b=r=>{const{repeatPassword:c,...o}=r;g.mutate(o)};return s.jsxs("form",{onSubmit:p(b),className:e["create-account-form"],children:[s.jsx("h1",{className:e.heading,children:"Create new account"}),s.jsxs("div",{className:e["fields-group"],children:[s.jsxs("label",{className:e.label,children:["Username",s.jsx("input",{className:`${e["input-field"]} ${a.username?e["input-field--error"]:""}`,...n("username",{required:!0,minLength:{value:3,message:"The username must contain at least 3 characters"},maxLength:{value:20,message:"The username cannot be longer than 20 characters"}}),placeholder:"Username"}),a.username&&s.jsx("p",{children:a.username.message})]}),s.jsxs("label",{className:e.label,children:["Email address",s.jsx("input",{className:`${e["input-field"]} ${a.email?e["input-field--error"]:""}`,...n("email",{required:!0,pattern:{value:/^[\w.%+-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/,message:"Incorrect email"}}),type:"email",placeholder:"Email address"}),a.email&&s.jsx("p",{children:a.email.message})]}),s.jsxs("label",{className:e.label,children:["Password",s.jsx("input",{className:`${e["input-field"]} ${a.password?e["input-field--error"]:""}`,...n("password",{required:!0,minLength:{value:6,message:"Your password needs to be at least 6 characters."},maxLength:{value:40,message:"Your password cannot be longer than 40 characters"}}),type:"password",placeholder:"Password"}),a.password&&s.jsx("p",{children:a.password.message})]}),s.jsxs("label",{className:e.label,children:["Repeat password",s.jsx("input",{className:`${e["input-field"]} ${a.repeatPassword?e["input-field--error"]:""}`,...n("repeatPassword",{required:!0,validate:r=>r===h.password||"Passwords must match"}),type:"password",placeholder:"Password"}),((u=a.repeatPassword)==null?void 0:u.message)&&s.jsx("p",{children:a.repeatPassword.message})]})]}),s.jsxs("div",{className:e["agreement-group"],children:[s.jsx("div",{className:e.line}),s.jsxs("label",{className:e.check,children:[s.jsx("input",{className:`${e.check__input} ${a.agree?e["check__input--error"]:""}`,...n("agree",{required:!0}),type:"checkbox",defaultChecked:!0}),s.jsx("span",{className:e.check__box}),s.jsx("span",{className:e.check__text,children:" I agree to the processing of my personal information"})]})]}),s.jsxs("footer",{className:e.footer,children:[s.jsx("button",{className:e["submit-button"],type:"submit",children:"Create"}),s.jsxs("span",{className:e["sign-in-group"],children:["Already have an account?"," ",s.jsx(j,{to:"/sign-in",className:e["sign-in-link"],children:"Sign In"})]})]})]})};export{z as default};
