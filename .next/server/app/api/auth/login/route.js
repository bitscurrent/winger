"use strict";(()=>{var e={};e.id=873,e.ids=[873],e.modules={11185:e=>{e.exports=require("mongoose")},20399:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},30517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},14300:e=>{e.exports=require("buffer")},6113:e=>{e.exports=require("crypto")},12781:e=>{e.exports=require("stream")},73837:e=>{e.exports=require("util")},1572:(e,r,t)=>{t.r(r),t.d(r,{originalPathname:()=>f,patchFetch:()=>y,requestAsyncStorage:()=>x,routeModule:()=>h,serverHooks:()=>v,staticGenerationAsyncStorage:()=>q});var o={};t.r(o),t.d(o,{POST:()=>m});var n=t(49303),s=t(88716),i=t(60670),a=t(18896),u=t(5929),p=t(87070),d=t(41482),c=t.n(d),l=t(42023),g=t.n(l);async function m(e){try{let{email:r,password:t}=await e.json();if(!r||!t)return p.NextResponse.json({error:"Email and password are required"},{status:400});let o=await u.Z.findOne({email:r});if(!o||!await g().compare(t,o.password))return p.NextResponse.json({error:"Invalid email or password"},{status:401});let n=c().sign({id:o._id},process.env.JWT_SECRET,{expiresIn:"1h"}),s=p.NextResponse.json({message:"Login successful"},{status:200});return s.cookies.set("authToken",n,{httpOnly:!0,secure:!1,sameSite:"strict",maxAge:3600}),s}catch(e){return console.error("Error logging in:",e),p.NextResponse.json({error:"Server error"},{status:500})}}(0,a.Z)();let h=new n.AppRouteRouteModule({definition:{kind:s.x.APP_ROUTE,page:"/api/auth/login/route",pathname:"/api/auth/login",filename:"route",bundlePath:"app/api/auth/login/route"},resolvedPagePath:"/home/dilip/Desktop/winger/src/app/api/auth/login/route.js",nextConfigOutput:"",userland:o}),{requestAsyncStorage:x,staticGenerationAsyncStorage:q,serverHooks:v}=h,f="/api/auth/login/route";function y(){return(0,i.patchFetch)({serverHooks:v,staticGenerationAsyncStorage:q})}},18896:(e,r,t)=>{t.d(r,{Z:()=>s});var o=t(11185),n=t.n(o);let s=async()=>{n().connection.readyState>=1||n().connect(process.env.MONGODB_URI,{}).then(()=>console.log("MongoDB connected")).catch(e=>console.error("MongoDB connection error:",e))}},5929:(e,r,t)=>{t.d(r,{Z:()=>i});var o=t(11185),n=t.n(o);let s=new(n()).Schema({fullName:{type:String,required:!0},email:{type:String,required:!0,unique:!0},phone:{type:String,required:!0},password:{type:String,required:!0},isAdmin:{type:Boolean,default:!1}},{timestamps:!0}),i=n().models.User||n().model("User",s)}};var r=require("../../../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),o=r.X(0,[948,972,23,482],()=>t(1572));module.exports=o})();