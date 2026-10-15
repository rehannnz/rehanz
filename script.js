const WA_NUMBER = "6287884106346"; // Nomor WhatsApp format internasional
const products = [
 {name:"Kaos Essential",category:"baju",tag:"BAJU",desc:"Kaos kasual untuk sehari-hari",price:"Rp 89.000",tone:"#e2d5c5",cloth:"#e9e1d5",type:"shirt"},
 {name:"Kemeja Relaxed",category:"baju",tag:"BAJU",desc:"Potongan santai, mudah dipadukan",price:"Rp 149.000",tone:"#d7d9c7",cloth:"#f1eee4",type:"shirt"},
 {name:"Kaos Earth Tone",category:"baju",tag:"BAJU",desc:"Warna netral untuk gaya simpel",price:"Rp 99.000",tone:"#ddc5b5",cloth:"#a45f43",type:"shirt"},
 {name:"Outer Daily",category:"baju",tag:"BAJU",desc:"Layer tambahan untuk outfit",price:"Rp 179.000",tone:"#c8c4b6",cloth:"#56584a",type:"shirt"},
 {name:"Celana Chino",category:"celana",tag:"CELANA",desc:"Rapi untuk kasual maupun semi-formal",price:"Rp 169.000",tone:"#ded5c8",cloth:"#9b866d",type:"pants"},
 {name:"Celana Cargo",category:"celana",tag:"CELANA",desc:"Gaya utilitarian yang santai",price:"Rp 189.000",tone:"#d3d8c7",cloth:"#626b52",type:"pants"},
 {name:"Celana Jeans",category:"celana",tag:"CELANA",desc:"Pilihan klasik untuk berbagai gaya",price:"Rp 199.000",tone:"#c8d1d4",cloth:"#526a7c",type:"pants"},
 {name:"Celana Relaxed",category:"celana",tag:"CELANA",desc:"Potongan longgar untuk kenyamanan",price:"Rp 159.000",tone:"#d8cbbd",cloth:"#383832",type:"pants"}
];
const grid = document.getElementById("productGrid");
function renderProducts(filter="all") {
 grid.innerHTML = "";
 products.filter(p=>filter==="all"||p.category===filter).forEach(p=>{
   const card=document.createElement("article");
   card.className="product-card";
   card.innerHTML=`<div class="product-art" style="--tone:${p.tone};--cloth:${p.cloth}"><div class="garment ${p.type==="shirt"?"shirt-item":"pants-item"}"></div></div><div class="product-info"><span class="category">${p.tag} / REHAN</span><h3>${p.name}</h3><p>${p.desc}</p><div class="product-bottom"><span class="price">${p.price}</span><button class="ask-btn" data-wa="Halo Rehan Fashion! Saya tertarik dengan ${p.name}. Apakah stok tersedia? Mohon info ukuran, warna, dan harga terbarunya.">Tanya Produk ↗</button></div></div>`;
   grid.appendChild(card);
 });
}
renderProducts();
document.querySelectorAll(".filter").forEach(button=>button.addEventListener("click",()=>{
 document.querySelectorAll(".filter").forEach(b=>b.classList.remove("active"));
 button.classList.add("active");renderProducts(button.dataset.filter);
}));
document.addEventListener("click",event=>{
 const link=event.target.closest("[data-wa]");
 if(link){event.preventDefault();const message=link.getAttribute("data-wa")||"Halo Rehan Fashion! Saya ingin bertanya tentang produk.";window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`,"_blank","noopener,noreferrer");}
});
const menuToggle=document.getElementById("menuToggle"), nav=document.getElementById("nav");
menuToggle.addEventListener("click",()=>nav.classList.toggle("open"));
nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));
document.getElementById("year").textContent=new Date().getFullYear();
