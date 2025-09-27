// Countdown -- edit the deadline in index.html (data-deadline)
(function(){
  const el = document.getElementById('countdown');
  if(!el) return;
  const deadline = new Date(el.getAttribute('data-deadline'));
  const d=document.getElementById('d'), h=document.getElementById('h'), m=document.getElementById('m'), s=document.getElementById('s');
  const tick=()=>{
    const now = new Date();
    const diff = Math.max(0, deadline-now);
    const sec = Math.floor(diff/1000) % 60;
    const min = Math.floor(diff/1000/60) % 60;
    const hr  = Math.floor(diff/1000/60/60) % 24;
    const day = Math.floor(diff/1000/60/60/24);
    d.textContent=String(day).padStart(2,'0');
    h.textContent=String(hr).padStart(2,'0');
    m.textContent=String(min).padStart(2,'0');
    s.textContent=String(sec).padStart(2,'0');
  };
  tick();
  setInterval(tick,1000);
})();