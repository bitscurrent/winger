"use strict";(()=>{var e={};e.id=770,e.ids=[770],e.modules={11185:e=>{e.exports=require("mongoose")},20399:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},30517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},6113:e=>{e.exports=require("crypto")},34697:(e,r,t)=>{t.r(r),t.d(r,{originalPathname:()=>y,patchFetch:()=>f,requestAsyncStorage:()=>g,routeModule:()=>m,serverHooks:()=>x,staticGenerationAsyncStorage:()=>h});var n={};t.r(n),t.d(n,{POST:()=>l});var s=t(49303),a=t(88716),i=t(60670),o=t(18896),u=t(5929),p=t(87070),d=t(42023),c=t.n(d);async function l(e){try{let{fullName:r,email:t,phone:n,password:s}=await e.json();if(!r||!t||!n||!s)return p.NextResponse.json({error:"All fields are required"},{status:400});if(await u.Z.findOne({email:t}))return p.NextResponse.json({error:"Email already in use"},{status:409});let a=await c().hash(s,10);return await u.Z.create({fullName:r,email:t,phone:n,password:a,isAdmin:!0}),p.NextResponse.json({success:!0,message:"Admin registered successfully"},{status:201})}catch(e){return console.error("Error registering admin:",e),p.NextResponse.json({error:"Registration failed"},{status:500})}}(0,o.Z)();let m=new s.AppRouteRouteModule({definition:{kind:a.x.APP_ROUTE,page:"/api/admin/auth/signup/route",pathname:"/api/admin/auth/signup",filename:"route",bundlePath:"app/api/admin/auth/signup/route"},resolvedPagePath:"/home/dilip/Desktop/winger/src/app/api/admin/auth/signup/route.js",nextConfigOutput:"",userland:n}),{requestAsyncStorage:g,staticGenerationAsyncStorage:h,serverHooks:x}=m,y="/api/admin/auth/signup/route";function f(){return(0,i.patchFetch)({serverHooks:x,staticGenerationAsyncStorage:h})}},18896:(e,r,t)=>{t.d(r,{Z:()=>a});var n=t(11185),s=t.n(n);let a=async()=>{s().connection.readyState>=1||s().connect(process.env.MONGODB_URI,{}).then(()=>console.log("MongoDB connected")).catch(e=>console.error("MongoDB connection error:",e))}},5929:(e,r,t)=>{t.d(r,{Z:()=>i});var n=t(11185),s=t.n(n);let a=new(s()).Schema({fullName:{type:String,required:!0},email:{type:String,required:!0,unique:!0},phone:{type:String,required:!0},password:{type:String,required:!0},isAdmin:{type:Boolean,default:!1}},{timestamps:!0}),i=s().models.User||s().model("User",a)}};var r=require("../../../../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),n=r.X(0,[948,972,23],()=>t(34697));module.exports=n})();