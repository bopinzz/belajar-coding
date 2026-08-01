// =====================================
// CYBER IT DASHBOARD | BOPINZZ
// =====================================

const tableBody = document.getElementById("tableData");
const search = document.getElementById("search");
const refreshBtn = document.getElementById("refreshBtn");
const deleteAll = document.getElementById("deleteAll");
const exportBtn = document.getElementById("exportData");
const clock = document.getElementById("clock");
const joinGroup = document.getElementById("joinGroup");

// ======================
// JAM DIGITAL
// ======================

function updateClock(){

const now = new Date();

clock.innerHTML = now.toLocaleTimeString("id-ID");

}

setInterval(updateClock,1000);

updateClock();

// ======================
// AMBIL DATA
// ======================

let member = JSON.parse(localStorage.getItem("member")) || [];

// ======================
// TAMPILKAN DATA
// ======================

function tampilkanData(data){

tableBody.innerHTML = "";

if(data.length===0){

tableBody.innerHTML=`
<tr>
<td colspan="9">
Belum ada member.
</td>
</tr>
`;

return;

}

data.forEach(function(item,index){

tableBody.innerHTML += `

<tr>

<td>${index+1}</td>

<td>${item.nama}</td>

<td>${item.umur}</td>

<td>${item.domisili}</td>

<td>${item.wa}</td>

<td>${item.nickname}</td>

<td>${item.alasan}</td>

<td>${item.tanggal}</td>

<td>

<button onclick="hapusMember(${index})">

❌

</button>

</td>

</tr>

`;

});

}

tampilkanData(member);

// ======================
// HAPUS SATU MEMBER
// ======================

function hapusMember(index){

if(confirm("Yakin ingin menghapus member ini?")){

member.splice(index,1);

localStorage.setItem(
"member",
JSON.stringify(member)
);

tampilkanData(member);

}

}

// ======================
// HAPUS SEMUA
// ======================

deleteAll.addEventListener("click",function(){

if(confirm("Hapus semua data member?")){

localStorage.removeItem("member");

member=[];

tampilkanData(member);

}

});

// ======================
// SEARCH
// ======================

search.addEventListener("keyup",function(){

const keyword=search.value.toLowerCase();

const hasil=member.filter(function(item){

return(

item.nama.toLowerCase().includes(keyword) ||

item.domisili.toLowerCase().includes(keyword) ||

(item.nickname || "").toLowerCase().includes(keyword)

);

});

tampilkanData(hasil);

});

// ======================
// REFRESH
// ======================

refreshBtn.addEventListener("click",function(){

member = JSON.parse(localStorage.getItem("member")) || [];

search.value="";

tampilkanData(member);

});

// ======================
// EXPORT JSON
// ======================

exportBtn.addEventListener("click",function(){

const dataStr = JSON.stringify(member,null,2);

const blob = new Blob([dataStr],{
type:"application/json"
});

const url = URL.createObjectURL(blob);

const a = document.createElement("a");

a.href = url;

a.download = "member.json";

a.click();

URL.revokeObjectURL(url);

});

// ======================
// CONSOLE
// ======================

console.log("%cCYBER IT DASHBOARD READY",
"color:#00ffff;font-size:20px;font-weight:bold;");

console.log("%cDeveloped By BOPINZZ",
"color:#00ff88;font-size:13px;");

// ======================
// JOIN GROUP
// ======================

joinGroup.addEventListener("click", function(){

window.open(
"https://chat.whatsapp.com/LINK_GROUP_KAMU",
"_blank"
);

}); 