var L=Object.defineProperty;var v=(s,e,o)=>e in s?L(s,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):s[e]=o;var n=(s,e,o)=>v(s,typeof e!="symbol"?e+"":e,o);import{a as b,S,i as l}from"./assets/vendor-Dy2ZTtfi.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function o(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(t){if(t.ep)return;t.ep=!0;const a=o(t);fetch(t.href,a)}})();const w=15,q="50948492-7a2c95c1e3ac536ddbec900a1";async function E(s,e){return(await b.get("https://pixabay.com/api/",{params:{key:q,q:s,page:e,per_page:w,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}const u=document.querySelector(".gallery"),I=new S(".gallery a"),h=document.querySelector(".loader"),p=document.querySelector(".load-more"),A=s=>{const e=s.map(({webformatURL:o,largeImageURL:r,tags:t,likes:a,views:i,comments:f,downloads:y})=>` 
  <li class="gallery-item">
        <a href="${r}">
        <img src="${o}" alt="${t}" width="360" height="200">
        </a>
        <div class="img-info">
            <div class="img-stat">
                <span class="sub-title">Likes</span>
                <span class="value">${a}</span>
            </div>
            <div class="img-stat">
                <span class="sub-title">Views</span>
                <span class="value">${i}</span>
            </div>
            <div class="img-stat">
                <span class="sub-title">Comments</span>
                <span class="value">${f}</span>
            </div>
            <div class="img-stat">
                <span class="sub-title">Downloads</span>
                <span class="value">${y}</span>
            </div>
        </div>
    </li>
  `).join("");u.insertAdjacentHTML("beforeend",e),I.refresh()};function H(){u.innerHTML=""}function M(){h.classList.remove("hidden")}function P(){h.classList.add("hidden")}const $=()=>{p.classList.remove("hidden")},d=()=>{p.classList.add("hidden")},c=1;class O{constructor(){n(this,"query");n(this,"page");n(this,"loadedImages");n(this,"totalHits");this.query="",this.page=c,this.loadedImages=0,this.totalHits=0}smoothScrollAfterLoad(){const e=document.querySelector(".gallery-item");if(!e)return;const o=e.getBoundingClientRect().height;window.scrollBy({top:o*2,behavior:"smooth"})}async handleSubmit(e){e.preventDefault();const o=g.querySelector('input[name="search-text"]').value.trim();if(this.query!==o&&(this.page=c),this.query=o,!this.query){l.warning({title:"Caution",message:"Input can't be empty!",position:"topRight"});return}this.page===c&&(this.loadedImages=0,this.totalHits=0,H()),M(),d();try{const r=await E(this.query,this.page);if(!r.hits.length){l.error({title:"Error",message:"Sorry, no images for your search",position:"topRight"});return}this.loadedImages+=r.hits.length,this.totalHits=r.totalHits,A(r.hits),this.page!==c&&this.smoothScrollAfterLoad(),this.loadedImages<this.totalHits?$():(d(),l.info({title:"Info",message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))}catch{l.error({title:"Error",message:"Sorry, something went wrong. Please try again later",position:"topRight"})}finally{P()}}async handleLoadMore(e){this.page+=1,await this.handleSubmit(e)}}const m=new O,g=document.querySelector(".form"),R=document.querySelector(".load-more");g.addEventListener("submit",s=>m.handleSubmit(s));R.addEventListener("click",s=>m.handleLoadMore(s));
//# sourceMappingURL=index.js.map
