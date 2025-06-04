import{i as d,S as f}from"./vendor-DpVPnhEv.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function n(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(t){if(t.ep)return;t.ep=!0;const r=n(t);fetch(t.href,r)}})();function l(s){d.error({message:s,position:"topRight",maxWidth:"400px"})}function p(s){const e="https://pixabay.com/api/",n="50658945-6d505dd3b22d0da0b5135219d",a=new URLSearchParams({key:n,q:s,orientation:"horizontal",safesearch:!0,image_type:"photo"}),t=`${e}?${a.toString()}`;return fetch(t)}const i=document.querySelector(".gallery"),c=document.querySelector(".loader");function y(s){const e=s.map(({largeImageURL:n,webformatURL:a,tags:t,views:r,likes:o,comments:u,downloads:m})=>`<li class="gallery-item">
        <a class="img-link" href="${n}">
          <img
            class="gall-img"
            src="${a}"
            alt="${t}"
        />
          <div class="stats-wrapper">
            <ul class="stats-list">
              <li class="stats-item">Views </br><span class="stats-number">${r}</span></li>
              <li class="stats-item">Likes </br><span class="stats-number">${o}</span></li>
              <li class="stats-item">Comments </br><span class="stats-number">${u}</span></li>
              <li class="stats-item">Downloads </br><span class="stats-number">${m}</span></li>
          </ul>
          </div>
        </a>
      </li>`).join("");i.innerHTML=e,new f(".gallery a",{captionsData:"alt",captionDelay:250})}function h(s){g(),b(),p(s).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()}).then(e=>{if(!e.hits.length){l("Sorry, there are no images matching your search query. Please try again!"),i.innerHTML="";return}y(e.hits)}).catch(e=>console.log(e)).finally(()=>{L()})}function g(){i.innerHTML=""}function b(){c.style.display="inline-block"}function L(){c.style.display="none"}const S=document.querySelector(".form");S.addEventListener("submit",w);function w(s){s.preventDefault();const e=s.currentTarget,n=e.elements["search-text"].value.trim();if(!n){l("Please, fill search field"),e.reset();return}h(n),e.reset()}
//# sourceMappingURL=main-DGiVxyJa.js.map
