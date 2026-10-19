const anime = [
 {title:"Frieren: Beyond Journey's End",year:"2023",genres:["Adventure","Fantasy","Drama"],tag:"Fantasy journey",symbol:"✧",cover:"linear-gradient(135deg,#14532d,#0f766e 48%,#a7f3d0)",search:"frieren",query:"Frieren Beyond Journey's End official streaming"},
 {title:"Spy x Family",year:"2022",genres:["Action","Comedy"],tag:"Comedy • action",symbol:"✦",cover:"linear-gradient(135deg,#7f1d1d,#be123c 48%,#fda4af)",search:"spy x family",query:"Spy x Family official streaming"},
 {title:"Demon Slayer",year:"2019",genres:["Action","Adventure","Fantasy"],tag:"Supernatural action",symbol:"刃",cover:"linear-gradient(135deg,#064e3b,#15803d 48%,#f87171)",search:"demon slayer kimetsu",query:"Demon Slayer official streaming"},
 {title:"My Hero Academia",year:"2016",genres:["Action","Drama"],tag:"Hero story",symbol:"★",cover:"linear-gradient(135deg,#1e3a8a,#2563eb 50%,#facc15)",search:"my hero academia",query:"My Hero Academia official streaming"},
 {title:"One Piece",year:"1999",genres:["Action","Adventure","Comedy"],tag:"Epic adventure",symbol:"☠",cover:"linear-gradient(135deg,#0c4a6e,#0284c7 50%,#fbbf24)",search:"one piece",query:"One Piece anime official streaming"},
 {title:"Haikyu!!",year:"2014",genres:["Drama","Comedy"],tag:"Sports • teamwork",symbol:"🏐",cover:"linear-gradient(135deg,#7c2d12,#ea580c 50%,#fde68a)",search:"haikyu volleyball",query:"Haikyu official streaming"},
 {title:"Jujutsu Kaisen",year:"2020",genres:["Action","Fantasy"],tag:"Dark fantasy",symbol:"呪",cover:"linear-gradient(135deg,#312e81,#7e22ce 50%,#f0abfc)",search:"jujutsu kaisen",query:"Jujutsu Kaisen official streaming"},
 {title:"Your Name.",year:"2016",genres:["Drama","Fantasy"],tag:"Romantic fantasy",symbol:"☄",cover:"linear-gradient(135deg,#1d4ed8,#7c3aed 50%,#f9a8d4)",search:"your name kimi no na wa",query:"Your Name anime film official streaming"}
];
const grid = document.getElementById('animeGrid');
const searchInput = document.getElementById('searchInput');
let activeGenre = 'All';
function render(){
 const q = searchInput.value.trim().toLowerCase();
 const shown = anime.filter(a => (activeGenre==='All'||a.genres.includes(activeGenre)) && (a.title.toLowerCase().includes(q)||a.genres.join(' ').toLowerCase().includes(q)));
 grid.innerHTML = shown.length ? shown.map(a=>`
  <article class="anime-card">
   <div class="cover" style="--cover:${a.cover}"><span class="cover-symbol">${a.symbol}</span><span class="cover-tag">${a.tag}</span></div>
   <div class="card-body"><h3>${a.title}</h3><p class="meta">Anime · ${a.year}</p>
    <div class="genre-line">${a.genres.map(g=>`<span class="genre-pill">${g}</span>`).join('')}</div>
    <a class="watch-btn" href="https://www.google.com/search?q=${encodeURIComponent(a.query)}" target="_blank" rel="noopener noreferrer">Find official streams <span>↗</span></a>
   </div>
  </article>`).join('') : '<div class="empty">No anime found. Try another title or genre.</div>';
}
document.getElementById('filters').addEventListener('click',e=>{
 const btn=e.target.closest('button[data-genre]'); if(!btn)return;
 activeGenre=btn.dataset.genre;
 document.querySelectorAll('.filter').forEach(b=>b.classList.toggle('active',b===btn));
 render();
});
searchInput.addEventListener('input',render);
document.getElementById('menuBtn').addEventListener('click',()=>document.querySelector('nav').classList.toggle('open'));
document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>document.querySelector('nav').classList.remove('open')));
render();
