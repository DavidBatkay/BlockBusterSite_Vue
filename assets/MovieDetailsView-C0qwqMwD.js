import{_ as u,r,o as a,c as n,F as g,a as b,g as m,w as p,e as o,d as e}from"./index-DAq5VBF8.js";const x={__name:"SimilarMovies",setup(c,{expose:t}){t();const s={similarMovies:[{id:1,title:"Similar Movie 1",image:"path-to-image1.jpg"},{id:2,title:"Similar Movie 2",image:"path-to-image2.jpg"},{id:3,title:"Similar Movie 3",image:"path-to-image3.jpg"}]};return Object.defineProperty(s,"__isScriptSetup",{enumerable:!1,value:!0}),s}},h={class:"flex gap-4"},w={class:"w-full aspect-[3/4] bg-gray-300 rounded-md"},M=["src","alt"];function y(c,t,d,s,f,_){const l=r("router-link");return a(),n("div",h,[(a(),n(g,null,b(s.similarMovies,(i,v)=>m(l,{key:v,to:"/moviedetails/#",class:"w-1/3"},{default:p(()=>[o(' NOTE :to="`/moviedetails/${movie.id}`" '),e("div",w,[e("img",{src:i.image,alt:i.title,class:"w-full h-full object-cover rounded-md"},null,8,M)])]),_:2},1024)),64))])}const $=u(x,[["render",y],["__file","/app/blockbuster-project/src/components/SimilarMovies.vue"]]),S={components:{SimilarMovies:$}},j={class:"container mx-auto flex-grow mt-6 px-6"},k={class:"bg-gray-300 w-full h-auto rounded-md mb-8 s"},N={class:"relative w-full h-32 md:h-64 bg-gray-500 rounded-md"},T={class:"absolute bottom-4 left-24 md:left-44 text-white flex flex-row sm:space-x-4"},B={class:"grid-cols-1 lg:flex gap-6"},D={class:"w-full sm:w-2/3 md:justify-center lg:w-1/3 bg-gray-100 border border-gray-300 p-4 rounded-md"};function V(c,t,d,s,f,_){const l=r("router-link"),i=r("SimilarMovies");return a(),n("main",j,[e("section",k,[e("div",N,[o(" Movie Thumbnail (Overlayed) "),t[2]||(t[2]=e("div",{class:"absolute bottom-0 left-4 h-20 w-16 md:w-32 md:h-40 bg-gray-300 rounded aspect-[3/4]"},[e("img",{class:"w-full h-full object-cover rounded",alt:"Movie Thumbnail"})],-1)),o(" Title and Watch Now Button "),e("div",T,[o(" Movie Title and Year "),t[1]||(t[1]=e("div",{class:"flex flex-col items-start"},[e("h1",{class:"md:text-2xl text-lg font-semibold"},"Movie Title"),e("h2",{class:"md:text-xl text-sm"},"2024")],-1)),o(" Watch Now Button "),m(l,{to:"#",class:"flex flex-col items-start ml-5"},{default:p(()=>t[0]||(t[0]=[e("button",{class:"px-4 py-2 bg-blue-600 text-white text-xs border-transparent border-[3px] hover:border-yellow-300 hover:text-yellow-300 font-bold p-1 rounded-md hover:bg-gradient-to-t from-blue-700 to-blue-400"}," Watch Now ",-1)])),_:1})])])]),e("section",B,[t[4]||(t[4]=e("div",{class:"w-full lg:w-2/3"},[e("h3",{class:"text-2xl font-semibold mb-4"},"Movie Description"),e("p",{class:"text-lg text-gray-800"}," Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis efficitur enim. Aenean lacinia risus scelerisque eros convallis euismod. Suspendisse vitae scelerisque ipsum. Aliquam pulvinar, nunc a auctor sagittis, lorem sem semper orci, sodales pulvinar libero massa vel enim. Proin rutrum lectus eget rhoncus tempus. Fusce sed urna vel felis tempor porttitor. Donec ac dignissim lectus. Donec feugiat fermentum erat sit amet efficitur. ")],-1)),e("div",D,[t[3]||(t[3]=e("h3",{class:"text-xl font-semibold mb-4"},"Similar Titles",-1)),m(i)])])])}const C=u(S,[["render",V],["__file","/app/blockbuster-project/src/views/MovieDetailsView.vue"]]);export{C as default};
