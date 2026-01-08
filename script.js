// color toggle
function toggleColors(){
  const c=document.getElementById('colors');
  c.style.display = c.style.display==='flex'?'none':'flex';
}

function setGradient(c1,c2,c3,text){
  const r=document.documentElement.style;
  r.setProperty('--grad-1',c1);
  r.setProperty('--grad-2',c2);
  r.setProperty('--grad-3',c3);
  r.setProperty('--main-color',c1);
  r.setProperty('--text-color',text);
}
function logout(){
  if(confirm("   زۆر سوپاس بۆ سەردانی وێبسایت کاتێکی خۆش")){
    window.location.href="index.html";
  }
}

function toggleMenu(){
  document.getElementById("mobileMenu").classList.toggle("show");
}
document.querySelector(".contact-form").addEventListener("submit", e=>{
  e.preventDefault();
  alert("نامەکەت بە سەرکەوتوویی نێردرا 👌");
});

// QR
function showQR(){
  document.getElementById('qrBox').style.display='flex';
}
function hideQR(){
  document.getElementById('qrBox').style.display='none';
}

// typing text
const text="  سڵاو من مەتین ئایتی دەرچووی بەشی تەکنەلۆجیای زانیاری لێرەدا دەتوانی بەهرەکان ببینیت و داوای کار بکەیت لە بەشی پەیوەندی";
let i=0;
setInterval(()=>{
  if(i<text.length){
    document.getElementById("typeText").innerHTML+=text[i];
    i++;
  }
},120);

// ads slider
const ads=[
  {type:'image',src:'ads3.jpg'},
  {type:'image',src:'ads4.jpg'},
  {type:'image',src:'ads3.jpg'},
  
];
let adIndex=0;
setInterval(()=>{
  adIndex=(adIndex+1)%ads.length;
  const el=document.getElementById("adMedia");
  if(ads[adIndex].type==='video'){
    el.outerHTML=`<video id="adMedia" src="${ads[adIndex].src}" autoplay muted loop></video>`;
  }else{
    el.outerHTML=`<img id="adMedia" src="${ads[adIndex].src}">`;
  }
},4000);
