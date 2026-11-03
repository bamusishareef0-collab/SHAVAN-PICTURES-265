const grid=document.getElementById("galleryGrid");
function renderGallery(filter="All"){
  grid.innerHTML="";
  photos.filter(p=>filter==="All"||p.category===filter).forEach((p)=>{
    const card=document.createElement("article");card.className="photo-card";
    const img=document.createElement("img");img.src=p.src;img.alt=p.title;img.loading="lazy";
    const caption=document.createElement("div");caption.className="caption";caption.textContent=p.title;
    card.append(img,caption);card.addEventListener("click",()=>openLightbox(p));grid.appendChild(card);
  });
}
document.getElementById("filters").addEventListener("click",e=>{if(e.target.dataset.filter){document.querySelectorAll("#filters button").forEach(b=>b.classList.toggle("active",b===e.target));renderGallery(e.target.dataset.filter)}});
const lightbox=document.getElementById("lightbox");
function openLightbox(p){document.getElementById("lightboxImg").src=p.src;document.getElementById("lightboxCaption").textContent=p.title;lightbox.classList.add("open");lightbox.setAttribute("aria-hidden","false")}
function closeLightbox(){lightbox.classList.remove("open");lightbox.setAttribute("aria-hidden","true")}
document.getElementById("closeLightbox").addEventListener("click",closeLightbox);lightbox.addEventListener("click",e=>{if(e.target===lightbox)closeLightbox()});document.addEventListener("keydown",e=>{if(e.key==="Escape")closeLightbox()});
document.getElementById("whatsappBtn").href=`https://wa.me/${settings.whatsappNumber}?text=${encodeURIComponent("Hello Afoto Pictures, I would like to book a photoshoot.")}`;
document.getElementById("instagramLink").href=settings.instagramUrl;document.getElementById("facebookLink").href=settings.facebookUrl;
document.getElementById("menuBtn").addEventListener("click",()=>document.getElementById("nav").classList.toggle("open"));
document.querySelectorAll("#nav a").forEach(a=>a.addEventListener("click",()=>document.getElementById("nav").classList.remove("open")));
document.getElementById("year").textContent=new Date().getFullYear();renderGallery();
if("serviceWorker" in navigator)window.addEventListener("load",()=>navigator.serviceWorker.register("./sw.js").catch(()=>{}));