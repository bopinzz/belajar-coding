// =====================================
// CYBER MEMBER REGISTER | BOPINZZ
// =====================================

const form = document.getElementById("registerForm");
const popup = document.getElementById("popup");
const closePopup = document.getElementById("closePopup");
const successSound = document.getElementById("successSound");

form.addEventListener("submit", function(e){

e.preventDefault();

// Ambil Data
const data={

nama:document.getElementById("nama").value.trim(),

umur:document.getElementById("umur").value.trim(),

domisili:document.getElementById("domisili").value.trim(),

wa:document.getElementById("wa").value.trim(),

nickname:document.getElementById("nickname").value.trim(),

alasan:document.getElementById("alasan").value,

tanggal:new Date().toLocaleString("id-ID")

};

// Validasi
if(data.nama=="" || data.umur=="" || data.domisili=="" || data.wa==""){

alert("Semua data wajib diisi!");

return;

}

if(data.wa.length<10){

alert("Nomor WhatsApp minimal 10 digit!");

return;

}

// Ambil Data Lama
let member=JSON.parse(localStorage.getItem("member"))||[];

// Simpan
member.push(data);

localStorage.setItem(
"member",
JSON.stringify(member)
);

// Mainkan suara
if(successSound){

successSound.play().catch(()=>{});

}

// Tampilkan Popup
popup.style.display="flex";

});

// =====================================
// CONTINUE BUTTON
// =====================================

closePopup.addEventListener("click", function(){

popup.style.display = "none";

form.reset();

window.location.href = "dashboard.html";

});

// =====================================
// ENTER KEY SUPPORT
// =====================================

document.addEventListener("keydown", function(e){

if(e.key === "Enter"){

const active = document.activeElement;

if(active.tagName !== "TEXTAREA"){

// Biarkan form submit normal
}

}

});

// =====================================
// ANIMASI INPUT
// =====================================

const inputs = document.querySelectorAll("input, select");

inputs.forEach(function(input){

input.addEventListener("focus", function(){

input.style.boxShadow = "0 0 20px rgba(0,255,255,.4)";

});

input.addEventListener("blur", function(){

input.style.boxShadow = "none";

});

});

// =====================================
// CONSOLE
// =====================================

console.log("%cREGISTER SYSTEM READY",
"color:#00ffff;font-size:18px;font-weight:bold;");

console.log("%cCyber Member By BOPINZZ",
"color:#00ff88;font-size:13px;");