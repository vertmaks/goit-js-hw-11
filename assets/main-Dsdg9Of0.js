import{i as d,a as p,S as f}from"./vendor-QQhsBNEi.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();function i(a){d.error({message:a,position:"topRight",maxWidth:"400px"})}async function y(a){const s="https://pixabay.com/api/",o="50658945-6d505dd3b22d0da0b5135219d",r=new URLSearchParams({key:o,q:a,orientation:"horizontal",safesearch:!0,image_type:"photo"}),e=`${s}?${r.toString()}`;try{return(await p.get(e)).data}catch(t){throw i("Failed to fetch images"),t}}const l=document.querySelector(".gallery"),c=document.querySelector(".loader");function h(a){const s=a.map(({largeImageURL:o,webformatURL:r,tags:e,views:t,likes:n,comments:u,downloads:m})=>`<li class="gallery-item">
        <a class="img-link" href="${o}">
          <img
            class="gall-img"
            src="${r}"
            alt="${e}"
        />
          <div class="stats-wrapper">
            <ul class="stats-list">
              <li class="stats-item">Views </br><span class="stats-number">${t}</span></li>
              <li class="stats-item">Likes </br><span class="stats-number">${n}</span></li>
              <li class="stats-item">Comments </br><span class="stats-number">${u}</span></li>
              <li class="stats-item">Downloads </br><span class="stats-number">${m}</span></li>
          </ul>
          </div>
        </a>
      </li>`).join("");l.innerHTML=s,new f(".gallery a",{captionsData:"alt",captionDelay:250})}function g(){l.innerHTML=""}function b(){c.style.display="inline-block"}function L(){c.style.display="none"}const w=document.querySelector(".form");w.addEventListener("submit",S);async function S(a){a.preventDefault();const s=a.currentTarget,o=s.elements["search-text"].value.trim();if(!o){i("Please, fill search field"),s.reset();return}g(),b();try{const r=await y(o);if(!r.hits.length){i("Sorry, there are no images matching your search query. Please try again!");return}h(r.hits)}catch(r){console.log(r),i("Ooops... Something went wrong. Please try again.")}finally{L(),s.reset()}}
//# sourceMappingURL=main-Dsdg9Of0.js.map
