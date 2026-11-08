// Optional: add your email so the contact form can also open your email app.
var CONFIG={email:""};
(function(){
var bar=document.getElementById('prog');
function sc(){var h=document.documentElement;var m=h.scrollHeight-h.clientHeight;if(bar)bar.style.width=(m>0?h.scrollTop/m*100:0)+'%'}
window.addEventListener('scroll',sc,{passive:true});sc();
var els=document.querySelectorAll('.rv');
if('IntersectionObserver' in window){var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.12});els.forEach(function(x){io.observe(x)})}else{els.forEach(function(x){x.classList.add('in')})}
var f=document.getElementById('f');
if(f){f.addEventListener('submit',function(e){e.preventDefault();
var t='Hi Moyeed,\n\n'+document.getElementById('m').value+'\n\nWebsite to check: '+document.getElementById('s').value+'\nFrom: '+document.getElementById('n').value;
var s=document.getElementById('st');
function ok(){s.textContent=CONFIG.email?'Message ready. Your email app is opening.':'Message copied. Paste it into WhatsApp, email or LinkedIn and send it to me.'}
function fb(){var a=document.createElement('textarea');a.value=t;a.style.position='fixed';a.style.opacity='0';document.body.appendChild(a);a.select();var r=false;try{r=document.execCommand('copy')}catch(x){}document.body.removeChild(a);if(r)ok();else s.textContent='Copy failed. Please select your message and copy it manually.'}
if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(t).then(ok,fb)}else{fb()}
if(CONFIG.email)location.href='mailto:'+CONFIG.email+'?subject='+encodeURIComponent('Website speed check request')+'&body='+encodeURIComponent(t)})}
})();
