const movies = [
  {id:1,title:"The Truman Show",year:1998,rating:"8.2",category:"Western",genres:["Comedy","Drama"],desc:"A man discovers that his entire life has unknowingly become the center of a television show.",poster:"https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=700&q=85",watch:"https://www.justwatch.com/"},
  {id:2,title:"Interstellar",year:2014,rating:"8.7",category:"Western",genres:["Action","Drama"],desc:"A team travels beyond Earth in search of a future home for humanity.",poster:"https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=700&q=85",watch:"https://www.justwatch.com/"},
  {id:3,title:"La La Land",year:2016,rating:"8.0",category:"Western",genres:["Romance","Comedy"],desc:"Two ambitious artists fall in love while chasing their dreams in Los Angeles.",poster:"https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=700&q=85",watch:"https://www.justwatch.com/"},
  {id:4,title:"Parasite",year:2019,rating:"8.5",category:"K-Drama",genres:["Drama","Comedy"],desc:"An unexpected connection between two families reveals a sharp story about class and ambition.",poster:"https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=700&q=85",watch:"https://www.justwatch.com/"},
  {id:5,title:"Twenty Five Twenty One",year:2022,rating:"8.6",category:"K-Drama",genres:["Romance","Drama"],desc:"A hopeful coming-of-age story about friendship, dreams, love, and growing up.",poster:"https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=700&q=85",watch:"https://www.justwatch.com/"},
  {id:6,title:"Crash Landing on You",year:2019,rating:"8.7",category:"K-Drama",genres:["Romance","Comedy"],desc:"An unexpected encounter brings two people from very different worlds together.",poster:"https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=700&q=85",watch:"https://www.justwatch.com/"},
  {id:7,title:"Your Name",year:2016,rating:"8.4",category:"Anime",genres:["Romance","Drama"],desc:"Two teenagers mysteriously begin waking up in each other's bodies.",poster:"https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=700&q=85",watch:"https://www.justwatch.com/"},
  {id:8,title:"Spirited Away",year:2001,rating:"8.6",category:"Anime",genres:["Drama"],desc:"A young girl enters a mysterious world and must find courage to save her family.",poster:"https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=700&q=85",watch:"https://www.justwatch.com/"},
  {id:9,title:"The Dark Knight",year:2008,rating:"9.0",category:"Western",genres:["Action","Drama"],desc:"A determined hero faces a criminal mastermind who pushes the city into chaos.",poster:"https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?auto=format&fit=crop&w=700&q=85",watch:"https://www.justwatch.com/"},
  {id:10,title:"Business Proposal",year:2022,rating:"8.1",category:"K-Drama",genres:["Romance","Comedy"],desc:"A blind date turns into an unexpectedly complicated workplace romance.",poster:"https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=700&q=85",watch:"https://www.justwatch.com/"},
  {id:11,title:"Train to Busan",year:2016,rating:"7.6",category:"K-Drama",genres:["Action"],desc:"Passengers fight to survive when a sudden crisis spreads across a high-speed train.",poster:"https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=700&q=85",watch:"https://www.justwatch.com/"},
  {id:12,title:"10 Things I Hate About You",year:1999,rating:"7.3",category:"Western",genres:["Romance","Comedy"],desc:"A playful teen romantic comedy about unexpected feelings and finding your own voice.",poster:"https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?auto=format&fit=crop&w=700&q=85",watch:"https://www.justwatch.com/"}
];

let activeFilter = "All";
let favorites = JSON.parse(localStorage.getItem("tykaasFavorites") || "[]");
let selectedMovie = null;

function renderMovies(){
  const q = document.getElementById("searchInput").value.toLowerCase().trim();
  const filtered = movies.filter(m => {
    const matchFilter = activeFilter === "All" || m.category === activeFilter || m.genres.includes(activeFilter);
    const matchSearch = !q || `${m.title} ${m.category} ${m.genres.join(" ")}`.toLowerCase().includes(q);
    return matchFilter && matchSearch;
  });
  const grid = document.getElementById("movieGrid");
  grid.innerHTML = filtered.map(movieCard).join("");
  document.getElementById("emptyState").hidden = filtered.length !== 0;
}
function movieCard(m){
  const saved = favorites.includes(m.id);
  return `<article class="movie-card">
    <div class="poster" style="background-image:url('${m.poster}')" onclick="openModal(${m.id})">
      <span class="rating">★ ${m.rating}</span>
      <button class="fav ${saved ? "saved":""}" onclick="toggleFavorite(event,${m.id})">${saved?"♥":"♡"}</button>
    </div>
    <div class="card-body" onclick="openModal(${m.id})">
      <h3>${m.title}</h3><p>${m.year} · ${m.genres.join(" · ")}</p>
      <span class="tag">${m.category}</span>
    </div>
  </article>`;
}
function setFilter(filter){
  activeFilter = filter;
  document.querySelectorAll(".filter").forEach(b => b.classList.toggle("active",b.dataset.filter===filter));
  renderMovies();
}
document.querySelectorAll(".filter").forEach(b => b.addEventListener("click",()=>setFilter(b.dataset.filter)));

function toggleFavorite(e,id){
  e.stopPropagation();
  favorites = favorites.includes(id) ? favorites.filter(x=>x!==id) : [...favorites,id];
  localStorage.setItem("tykaasFavorites",JSON.stringify(favorites));
  renderMovies(); renderFavorites();
  if(selectedMovie?.id===id) updateModalFav();
}
function renderFavorites(){
  const box=document.getElementById("favoriteStrip");
  document.getElementById("favCount").textContent=`${favorites.length} saved`;
  if(!favorites.length){box.innerHTML='<p class="empty">Tap the ♡ on a movie to save it here.</p>';return;}
  box.innerHTML=favorites.map(id=>movies.find(m=>m.id===id)).filter(Boolean).map(m=>`
    <div class="fav-mini" onclick="openModal(${m.id})">
      <div class="mini-poster" style="background-image:url('${m.poster}')"></div>
      <div>${m.title}</div>
    </div>`).join("");
}
function openModal(id){
  selectedMovie=movies.find(m=>m.id===id);
  if(!selectedMovie)return;
  document.getElementById("modalPoster").style.backgroundImage=`url('${selectedMovie.poster}')`;
  document.getElementById("modalCategory").textContent=selectedMovie.category;
  document.getElementById("modalTitle").textContent=selectedMovie.title;
  document.getElementById("modalMeta").textContent=`${selectedMovie.year} · ⭐ ${selectedMovie.rating} · ${selectedMovie.genres.join(" · ")}`;
  document.getElementById("modalDescription").textContent=selectedMovie.desc;
  document.getElementById("watchButton").onclick=()=>window.open(selectedMovie.watch,"_blank");
  updateModalFav();
  const modal=document.getElementById("movieModal");
  modal.classList.add("open");modal.setAttribute("aria-hidden","false");document.body.style.overflow="hidden";
}
function updateModalFav(){
  const b=document.getElementById("modalFav");
  const saved=favorites.includes(selectedMovie.id);
  b.textContent=saved?"♥ Saved":"♡ Add to favorites";
  b.onclick=()=>toggleFavorite({stopPropagation:()=>{}},selectedMovie.id);
}
function closeModal(){
  document.getElementById("movieModal").classList.remove("open");
  document.getElementById("movieModal").setAttribute("aria-hidden","true");
  document.body.style.overflow="";
}
function recommendMovie(){
  const m=movies[Math.floor(Math.random()*movies.length)];
  openModal(m.id);
}
function focusSearch(){document.getElementById("searchInput").focus();document.getElementById("discover").scrollIntoView({behavior:"smooth"});}
document.addEventListener("keydown",e=>{if(e.key==="Escape")closeModal()});

document.getElementById("heroPoster").style.backgroundImage=`url('${movies[0].poster}')`;
document.getElementById("heroTitle").textContent=movies[0].title;
renderMovies();renderFavorites();
