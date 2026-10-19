// Episode guide data. Episode labels are guide entries, not hosted video files.
const shows = [
 {title:"Frieren: Beyond Journey's End",year:"2023",genres:["Adventure","Fantasy","Drama"],tag:"Fantasy journey",symbol:"✧",cover:"linear-gradient(135deg,#14532d,#0f766e 48%,#a7f3d0)",count:"28 episodes in Season 1",episodes:[["S1 · Episode 1","The Journey's End"],["S1 · Episode 2","It Didn't Have to Be Magic"],["S1 · Episode 3","Killing Magic"]],q:"Frieren Beyond Journey's End official episodes"},
 {title:"Spy x Family",year:"2022",genres:["Action","Comedy"],tag:"Comedy • action",symbol:"✦",cover:"linear-gradient(135deg,#7f1d1d,#be123c 48%,#fda4af)",count:"Multiple seasons",episodes:[["S1 · Episode 1","Operation Strix"],["S1 · Episode 2","Secure a Wife"],["S1 · Episode 3","Prepare for the Interview"]],q:"Spy x Family official episodes"},
 {title:"Demon Slayer",year:"2019",genres:["Action","Adventure","Fantasy"],tag:"Supernatural action",symbol:"刃",cover:"linear-gradient(135deg,#064e3b,#15803d 48%,#f87171)",count:"Multiple story arcs",episodes:[["S1 · Episode 1","Cruelty"],["S1 · Episode 2","Trainer Sakonji Urokodaki"],["S1 · Episode 3","Sabito and Makomo"]],q:"Demon Slayer official episodes"},
 {title:"My Hero Academia",year:"2016",genres:["Action","Drama"],tag:"Hero story",symbol:"★",cover:"linear-gradient(135deg,#1e3a8a,#2563eb 50%,#facc15)",count:"Multiple seasons",episodes:[["S1 · Episode 1","Izuku Midoriya: Origin"],["S1 · Episode 2","What It Takes to Be a Hero"],["S1 · Episode 3","Roaring Muscles"]],q:"My Hero Academia official episodes"},
 {title:"One Piece",year:"1999",genres:["Action","Adventure","Comedy"],tag:"Epic adventure",symbol:"☠",cover:"linear-gradient(135deg,#0c4a6e,#0284c7 50%,#fbbf24)",count:"Ongoing series",episodes:[["East Blue · Episode 1","I'm Luffy! The Man Who's Gonna Be King of the Pirates!"],["East Blue · Episode 2","Enter the Great Swordsman!"],["East Blue · Episode 3","Morgan vs. Luffy!"]],q:"One Piece anime official episodes"},
 {title:"Haikyu!!",year:"2014",genres:["Drama","Comedy"],tag:"Sports • teamwork",symbol:"🏐",cover:"linear-gradient(135deg,#7c2d12,#ea580c 50%,#fde68a)",count:"Multiple seasons",episodes:[["S1 · Episode 1","The End and the Beginning"],["S1 · Episode 2","Karasuno High School"],["S1 · Episode 3","The Formidable Ally"]],q:"Haikyu official episodes"},
 {title:"Jujutsu Kaisen",year:"2020",genres:["Action","Fantasy"],tag:"Dark fantasy",symbol:"呪",cover:"linear-gradient(135deg,#312e81,#7e22ce 50%,#f0abfc)",count:"Multiple seasons",episodes:[["S1 · Episode 1","Ryomen Sukuna"],["S1 · Episode 2","For Myself"],["S1 · Episode 3","Girl of Steel"]],q:"Jujutsu Kaisen official episodes"},
 {title:"Your Name.",year:"2016",genres:["Drama","Fantasy"],tag:"Animated film",symbol:"☄",cover:"linear-gradient(135deg,#1d4ed8,#7c3aed 50%,#f9a8d4)",count:"Feature film · not episodic",episodes:[["Feature film","Your Name."]],q:"Your Name official streaming"}
];
const grid=document.getElementById('grid'),search=document.getElementById('search');let active='All';
function officialSearch(q){return 'https://www.google.com/search?q='+encodeURIComponent(q+' official streaming site');}
function render(){
 const term=search.value.trim().toLowerCase();
 const filtered=shows.filter(s=>(active==='All'||s.genres.includes(active))&&(s.title.toLowerCase().includes(term)||s.genres.join(' ').toLowerCase().includes(term)));
 grid.innerHTML=filtered.length?filtered.map(s=>`<article class="card">
  <div class="cover" style="--cover:${s.cover}"><span class="symbol">${s.symbol}</span><span class="tag">${s.tag}</span></div>
  <div class="body"><h3>${s.title}</h3><p class="meta">Anime · ${s.year} · ${s.count}</p>
  <div class="pills">${s.genres.map(g=>`<span class="pill">${g}</span>`).join('')}</div>
  <div class="episode-box"><div class="episode-head">Episode guide <span>${s.episodes.length} sample entries</span></div>
  <div class="episodes">${s.episodes.map(e=>`<div class="episode"><div><b>${e[0]}</b><small>${e[1]}</small></div><a href="${officialSearch(s.q+' '+e[0])}" target="_blank" rel="noopener noreferrer">Find official stream ↗</a></div>`).join('')}</div></div>
  </div></article>`).join(''):'<div class="empty">No anime found. Try another title or genre.</div>';
}
document.getElementById('filters').addEventListener('click',e=>{const b=e.target.closest('button[data-genre]');if(!b)return;active=b.dataset.genre;document.querySelectorAll('.filter').forEach(x=>x.classList.toggle('active',x===b));render();});
search.addEventListener('input',render);document.getElementById('menuBtn').addEventListener('click',()=>document.querySelector('nav').classList.toggle('open'));document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>document.querySelector('nav').classList.remove('open')));render();
