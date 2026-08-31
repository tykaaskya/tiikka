const nav=document.querySelector(".nav");
document.getElementById("menu").onclick=()=>nav.classList.toggle("open");
document.getElementById("lang").onclick=()=>{
 const e=document.getElementById("heroText");
 e.textContent=e.textContent.startsWith("Tempat")
 ? "A little space to share the things I love: music, movies, monkeys, KiiiKiii, and of course matcha."
 : "Tempat kecil untuk cerita tentang aku, hal-hal yang aku suka, musik, monkey, KiiiKiii, dan tentu saja matcha.";
};
const items=[...document.querySelectorAll(".profile,.colors,.song,.fav,.mood")];
const obs=new IntersectionObserver(entries=>entries.forEach(x=>{if(x.isIntersecting){x.target.classList.add("show");obs.unobserve(x.target)}}),{threshold:.12});
items.forEach(x=>obs.observe(x));
