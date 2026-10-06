const menu=document.querySelector('.menu');
const nav=document.querySelector('.nav-links');
if(menu) menu.addEventListener('click',()=>nav.classList.toggle('open'));

document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>nav?.classList.remove('open')));

document.querySelectorAll('#year').forEach(el=>el.textContent=new Date().getFullYear());

const observer=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')})
},{threshold:.08});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

const quote=document.querySelector('#quoteForm');
if(quote){
  quote.addEventListener('submit',e=>{
    e.preventDefault();
    const data=new FormData(quote);
    const text=`Hello Best Way Cargo, I would like a quote.%0AName: ${encodeURIComponent(data.get('name')||'')}%0AEmail: ${encodeURIComponent(data.get('email')||'')}%0APhone: ${encodeURIComponent(data.get('phone')||'')}%0ACargo: ${encodeURIComponent(data.get('cargo')||'')}%0APickup: ${encodeURIComponent(data.get('pickup')||'')}%0ADestination: ${encodeURIComponent(data.get('destination')||'')}%0AMessage: ${encodeURIComponent(data.get('message')||'')}`;
    window.open(`https://wa.me/971562034435?text=${text}`,'_blank');
    document.querySelector('#formMessage')?.classList.add('show');
  });
}
const track=document.querySelector('#trackForm');
if(track){
  track.addEventListener('submit',e=>{
    e.preventDefault();
    document.querySelector('#trackMessage').textContent='Tracking request received. Our team will contact you shortly with the latest shipment status.';
    document.querySelector('#trackMessage').style.display='block';
  });
}
