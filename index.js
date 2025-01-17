import{S as u,i as o}from"./assets/vendor-5ObWk2rO.js";(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();function m(t){return fetch(`https://pixabay.com/api/?q=${t}&key=48211636-c2e7af5b30d3e402d83d1fb79&image_type=photo&orientation=horizontal&safesearch=true&per_page=9`)}const p=t=>`<li class="gallery-card">
  <a class="gallery-link" href="${t.largeImageURL}">
  <img class="gallery-img" src="${t.webformatURL}" alt="${t.tags}" width="360" height="200"/>
  </a>
      <ul class="descr">
      <li class="descr-item">
      <h2 class="descr-title">Likes</h2>
      <p class="descr-title-item">${t.likes}</p>
      </li>
      <li class="descr-item">
      <h2 class="descr-title">Views</h2>
      <p class="descr-title-item">${t.views}</p>
      </li>
      <li class="descr-item">
      <h2 class="descr-title">Comments</h2>
      <p class="descr-title-item">${t.comments}</p>
      </li>
      <li class="descr-item">
      <h2 class="descr-title">Downloads</h2>
      <p class="descr-title-item">${t.downloads}</p>
      </li>
      </ul>
    </li>`,n=document.querySelector(".js-search-form"),h=document.querySelector(".js-search-input"),d=document.querySelector(".js-gallery"),c=document.querySelector(".loader");c.style.display="none";const f=new u(".gallery a",{captions:!0,captionsData:"alt",captionsDelay:250,animationSpeed:500,fadeSpeed:500,zoom:!0,scaleImageToRatio:!0,enableKeyboard:!0});n.addEventListener("submit",t=>{t.preventDefault(),c.style.display="inline-block";const l=h.value.trim();if(l==="")return o.error({title:"Error",message:"Sorry, there are no empty strings allowed in search field. Please, try again!",messageColor:"#fafafb;",position:"topRight",backgroundColor:"#ef4040"});m(l).then(s=>{if(!s.ok)throw new Error(s.status);return s.json()}).then(s=>{s.hits.length===0&&(o.show({title:"Error",message:"Sorry, there are no images matching your search query. Please, try again!",messageColor:"#fafafb;",position:"topRight",backgroundColor:"#ef4040"}),d.innerHTML="");const a=s.hits.map(e=>p(e)).join("");d.innerHTML=a,f.refresh()}).catch(s=>{o.error({message:"Error fetching images. Please try again later.",position:"topRight"})}).finally(()=>{n.reset(),c.style.display="none"})});
//# sourceMappingURL=index.js.map
