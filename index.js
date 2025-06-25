var L=Object.defineProperty;var v=(s,e,t)=>e in s?L(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var i=(s,e,t)=>v(s,typeof e!="symbol"?e+"":e,t);import{a as S,S as b,i as l}from"./assets/vendor-Dy2ZTtfi.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function t(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(a){if(a.ep)return;a.ep=!0;const o=t(a);fetch(a.href,o)}})();const w=15,q="50948492-7a2c95c1e3ac536ddbec900a1";async function E(s,e){return(await S.get("https://pixabay.com/api/",{params:{key:q,q:s,page:e,per_page:w,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}const u=document.querySelector(".gallery"),I=new b(".gallery a"),p=document.querySelector(".loader"),m=document.querySelector(".load-more"),A=s=>{const e=s.map(({webformatURL:t,largeImageURL:n,tags:a,likes:o,views:r,comments:f,downloads:y})=>` 
  <li class="gallery-item">
        <a href="${n}">
        <img src="${t}" alt="${a}" width="360" height="200">
        </a>
        <div class="img-info">
            <div class="img-stat">
                <span class="sub-title">Likes</span>
                <span class="value">${o}</span>
            </div>
            <div class="img-stat">
                <span class="sub-title">Views</span>
                <span class="value">${r}</span>
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
  `).join("");u.insertAdjacentHTML("beforeend",e),I.refresh()};function H(){u.innerHTML=""}function M(){p.classList.remove("hidden")}function P(){p.classList.add("hidden")}const $=()=>{m.classList.remove("hidden")},h=()=>{m.classList.add("hidden")},c=1;class O{constructor(){i(this,"query");i(this,"page");i(this,"loadedImages");i(this,"totalHits");this.query="",this.page=c,this.loadedImages=0,this.totalHits=0}smoothScrollAfterLoad(){const e=document.querySelector(".gallery-item");if(!e)return;const t=e.getBoundingClientRect().height;window.scrollBy({top:t*2,behavior:"smooth"})}handleSearchChange(e){const t=e.target.value.trim();this.query!==t&&(this.page=c),this.query=t}async handleSubmit(e){e.preventDefault(),this.query||l.warning({title:"Caution",message:"Input can't be empty!",position:"topRight"}),this.page===c&&(this.loadedImages=0,this.totalHits=0,H()),M(),h();try{const t=await E(this.query,this.page);if(!t.hits.length){l.error({title:"Error",message:"Sorry, no images for your search",position:"topRight"});return}this.loadedImages+=t.hits.length,this.totalHits=t.totalHits,A(t.hits),this.page!==c&&this.smoothScrollAfterLoad(),this.loadedImages<this.totalHits?$():(h(),l.info({title:"Info",message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))}catch{l.error({title:"Error",message:"Sorry, something went wrong. Please try again later",position:"topRight"})}finally{P()}}async handleLoadMore(e){this.page+=1,await this.handleSubmit(e)}}const d=new O,g=document.querySelector(".form"),R=g.querySelector('input[name="search-text"]'),_=document.querySelector(".load-more");R.addEventListener("change",s=>d.handleSearchChange(s));g.addEventListener("submit",s=>d.handleSubmit(s));_.addEventListener("click",s=>d.handleLoadMore(s));
//# sourceMappingURL=index.js.map
