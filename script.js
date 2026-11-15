(() => {
 const button=document.querySelector(".menu"),nav=document.querySelector("#nav");
 if(button&&nav){const close=()=>{button.setAttribute("aria-expanded","false");button.setAttribute("aria-label","Ouvrir le menu");nav.classList.remove("open")};button.addEventListener("click",()=>{const open=button.getAttribute("aria-expanded")!=="true";button.setAttribute("aria-expanded",String(open));button.setAttribute("aria-label",open?"Fermer le menu":"Ouvrir le menu");nav.classList.toggle("open",open)});nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",close));document.addEventListener("keydown",e=>{if(e.key==="Escape")close()})}
 const year=document.querySelector("#year");if(year)year.textContent=new Date().getFullYear();
 const items=document.querySelectorAll(".expertise-list article,.steps article,.gallery,.intro-grid>div,.heading");
 if("IntersectionObserver"in window&&!window.matchMedia("(prefers-reduced-motion: reduce)").matches){items.forEach(x=>x.classList.add("reveal"));const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add("visible");observer.unobserve(e.target)}}),{threshold:.12});items.forEach(x=>observer.observe(x))}
 // Add the studio's verified email here after confirmation. No guessed contact is published.
 const EMAIL="";const link=document.querySelector("#contact-link"),note=document.querySelector("#contact-note");
 if(EMAIL&&link){link.href="mailto:"+EMAIL+"?subject="+encodeURIComponent("Projet audiovisuel — MISTER J FILM MAKERS");note.hidden=true}
 else if(link)link.addEventListener("click",e=>{e.preventDefault();note.textContent="L'adresse e-mail officielle du studio reste à confirmer.";note.setAttribute("role","status")});
})();