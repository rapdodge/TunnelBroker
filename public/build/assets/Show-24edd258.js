import{_ as c}from"./AppLayout-bc96cba4.js";import p from"./DeleteUserForm-19c54243.js";import l from"./LogoutOtherBrowserSessionsForm-aadc2bf5.js";import{S as s}from"./SectionBorder-a38fa604.js";import f from"./TwoFactorAuthenticationForm-efefe80e.js";import u from"./UpdatePasswordForm-4ef3df62.js";import _ from"./UpdateProfileInformationForm-0ccbf044.js";import{o,c as d,w as n,a as i,e as r,b as t,f as a,F as h}from"./app-29e4dbf0.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./DialogModal-46c0c625.js";import"./SectionTitle-8710607c.js";import"./DangerButton-06d3e0e2.js";import"./InputError-9857b6e5.js";import"./SecondaryButton-8af677e6.js";import"./TextInput-cb703895.js";import"./ActionMessage-e48ea84c.js";import"./PrimaryButton-5b8e2c49.js";import"./InputLabel-45914348.js";import"./FormSection-704b3603.js";const g=i("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"}," Profile ",-1),$={class:"max-w-7xl mx-auto py-10 sm:px-6 lg:px-8"},w={key:0},k={key:1},y={key:2},G={__name:"Show",props:{confirmsTwoFactorAuthentication:Boolean,sessions:Array},setup(m){return(e,x)=>(o(),d(c,{title:"Profile"},{header:n(()=>[g]),default:n(()=>[i("div",null,[i("div",$,[e.$page.props.jetstream.canUpdateProfileInformation?(o(),r("div",w,[t(_,{user:e.$page.props.user},null,8,["user"]),t(s)])):a("",!0),e.$page.props.jetstream.canUpdatePassword?(o(),r("div",k,[t(u,{class:"mt-10 sm:mt-0"}),t(s)])):a("",!0),e.$page.props.jetstream.canManageTwoFactorAuthentication?(o(),r("div",y,[t(f,{"requires-confirmation":m.confirmsTwoFactorAuthentication,class:"mt-10 sm:mt-0"},null,8,["requires-confirmation"]),t(s)])):a("",!0),t(l,{sessions:m.sessions,class:"mt-10 sm:mt-0"},null,8,["sessions"]),e.$page.props.jetstream.hasAccountDeletionFeatures?(o(),r(h,{key:3},[t(s),t(p,{class:"mt-10 sm:mt-0"})],64)):a("",!0)])])]),_:1}))}};export{G as default};