import{_ as b,o as v,c as m,e as r,d as s,n,F as p,M as g,m as _,r as l,g as c}from"./index-DAq5VBF8.js";const f={data(){return{activeTab:"10 Years",activeClass:"px-4 py-2 bg-inherit text-white rounded-md hover:bg-blue-950 hover:text-yellow-300  bg-blue-950 text-yellow-300 ring-4 ring-blue-300",inactiveClass:"px-4 py-2 bg-inherit text-white rounded-md hover:bg-blue-950 hover:text-yellow-300 "}},methods:{setActiveTab(i){this.activeTab=i}}},w={class:"border-[3px] bg-gradient-to-t xl:font-bold from-blue-700 to-blue-400 text-yellow-300 border-yellow-300 bg-blue-600 rounded-md max-w-md mx-auto p-4"},y={class:"flex justify-around"};function C(i,e,u,d,t,o){return v(),m(p,null,[r(" Tab Select "),s("div",w,[s("div",y,[s("button",{class:n([t.activeTab==="10 Years"?t.activeClass:t.inactiveClass]),onClick:e[0]||(e[0]=a=>o.setActiveTab("10 Years"))}," 10 Years ",2),s("button",{class:n([t.activeTab==="20 Years"?t.activeClass:t.inactiveClass]),onClick:e[1]||(e[1]=a=>o.setActiveTab("20 Years"))}," 20 Years ",2),s("button",{class:n([t.activeTab==="30+ Years"?t.activeClass:t.inactiveClass]),onClick:e[2]||(e[2]=a=>o.setActiveTab("30+ Years"))}," 30+ Years ",2)])])],2112)}const Y=b(f,[["render",C],["__file","/app/blockbuster-project/src/components/YearFilter.vue"]]),T={components:{MovieGrid:g,YearFilter:Y},data(){return{movieList:_}}},h={class:"container mx-auto flex-grow mt-8 px-6"},k={class:"container mx-auto px-6 my-8"};function F(i,e,u,d,t,o){const a=l("YearFilter"),x=l("MovieGrid");return v(),m("main",h,[s("section",k,[r(" Title and Subtitle "),e[0]||(e[0]=s("div",{class:"text-center mb-8"},[s("h1",{class:"text-xl md:text-4xl font-bold text-gray-800"}," Feeling Nostalgic? "),s("p",{class:"text-base text-gray-600 mt-2"}," Relive the classics from the golden years! ")],-1)),r(" Question "),e[1]||(e[1]=s("div",{class:"text-center mb-6"},[s("p",{class:"text-xs md:text-xl text-gray-700"}," How far in the past do you want to go? ")],-1)),c(a),r(" Movie Thumbnails Grid "),c(x,{movies:t.movieList},null,8,["movies"])])])}const M=b(T,[["render",F],["__file","/app/blockbuster-project/src/views/NostalgiaHubView.vue"]]);export{M as default};
