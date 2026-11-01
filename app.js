
// Add your verified, public Shopify storefront URL after the store is ready.
// Never put merchant credentials or API secrets in this HTML.
const SHOPIFY_STORE_URL = window.BITES_CARE_CONFIG.shopifyStoreUrl || '';
const APPS_SCRIPT_URL = window.BITES_CARE_CONFIG.appsScriptWebAppUrl || '';
const shopLink=document.querySelector('#shopify-link');
if(SHOPIFY_STORE_URL){try{const store=new URL(SHOPIFY_STORE_URL);if(store.protocol==='https:'){shopLink.href=store.href;shopLink.hidden=false}}catch{}}
const productDialog=document.querySelector('#product-dialog');let selectedProduct='';
document.querySelectorAll('[data-product]').forEach(button=>button.addEventListener('click',()=>{
 const card=button.closest('.product');selectedProduct=card.dataset.color+' — '+card.querySelector('h3').textContent;
 document.querySelector('#product-name').textContent=selectedProduct;document.querySelector('#product-description').textContent='Front: pets are family. Back: '+card.dataset.back;
 document.querySelector('#product-art').replaceChildren(card.querySelector('.shirt-image-window').cloneNode(true));productDialog.showModal();
}));
document.querySelector('.close-product').onclick=()=>productDialog.close();
document.querySelector('#product-interest').onclick=()=>{
 productDialog.close();document.querySelector('#connection-note').textContent='Interested in '+selectedProduct+'? Tell us more below.';document.querySelector('#public-inquiry select').value='T-shirt purchase interest';document.querySelector('#public-inquiry textarea').value='I am interested in the '+selectedProduct+' T-shirt. Please share the final details when ready.';
};

document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',e=>{e.preventDefault();const target=a.getAttribute('href');if(target==='#'){window.scrollTo({top:0,behavior:'smooth'});return;}document.querySelector(target)?.scrollIntoView({behavior:'smooth'});}));
const previewForm=document.querySelector('#public-inquiry');
previewForm.addEventListener('submit',event=>{
 event.preventDefault();previewForm.querySelector('.inquiry-result').textContent='Your inquiry has not been sent. Online submissions are not available yet. Please call 0917 502 0486.';
});
if(APPS_SCRIPT_URL){try{
 const url=new URL(APPS_SCRIPT_URL);
 if(url.protocol!=='https:'||url.hostname!=='script.google.com'||!/^\/macros\/s\/[^/]+\/exec$/.test(url.pathname))throw new Error('Invalid deployment');
 url.searchParams.set('page','inquiry');
 const frame=document.querySelector('#inquiry-frame');frame.src=url.href;frame.hidden=false;previewForm.hidden=true;
}catch{previewForm.querySelector('.inquiry-result').textContent='Online submissions are not available yet. Please call 0917 502 0486.';}}
const shareButton=document.querySelector('#share');if(shareButton)shareButton.onclick=async()=>{const status=document.querySelector('#share-status');try{await navigator.clipboard.writeText(location.href.split('#')[0]);status.textContent='Link copied. Share a little kindness.'}catch{status.textContent='Share this page: '+location.href.split('#')[0]}};


// Supplied pet profiles: crossfade, full-card viewing, and accessible controls.
const campaign=document.querySelector('.campaign-gallery');
if(campaign){
 const frames=[...campaign.querySelectorAll('.campaign-slide')];
 const toggle=campaign.querySelector('.gallery-toggle');
 const label=campaign.querySelector('.campaign-current');
 const viewer=document.querySelector('.pet-profile-dialog');
 const full=viewer.querySelector('.pet-profile-full');
 const title=viewer.querySelector('#pet-profile-title');
 const reduced=window.matchMedia('(prefers-reduced-motion: reduce)');
 let current=0,manualPause=reduced.matches,hover=false,focus=false;
 function updateViewer(){const image=frames[current].querySelector('img');full.src=image.currentSrc||image.src;full.alt=image.alt;title.textContent=frames[current].dataset.name;}
 function showFrame(index){
  current=(index+frames.length)%frames.length;
  frames.forEach((frame,i)=>{frame.classList.toggle('is-active',i===current);frame.setAttribute('aria-hidden',String(i!==current));});
  const nextImage=frames[(current+1)%frames.length].querySelector('img');nextImage.loading='eager';
  label.replaceChildren(document.createTextNode(frames[current].dataset.name+' '));
  const count=document.createElement('span');count.className='campaign-count';count.textContent=String(current+1).padStart(2,'0')+' / '+frames.length;label.append(count);
  if(viewer.open)updateViewer();
 }
 function syncButton(){toggle.textContent=manualPause?'Play':'Pause';toggle.setAttribute('aria-label',manualPause?'Play gallery':'Pause gallery');toggle.setAttribute('aria-pressed',String(manualPause));}
 function openProfile(){updateViewer();viewer.showModal()}
 toggle.addEventListener('click',()=>{manualPause=!manualPause;syncButton()});
 campaign.querySelector('.gallery-prev').onclick=()=>showFrame(current-1);
 campaign.querySelector('.gallery-next').onclick=()=>showFrame(current+1);
 campaign.querySelector('.view-pet-profile').onclick=openProfile;
 frames.forEach((frame,i)=>frame.querySelector('button').onclick=()=>{showFrame(i);openProfile()});
 viewer.querySelector('.close-pet-profile').onclick=()=>viewer.close();
 viewer.querySelector('.pet-dialog-prev').onclick=()=>showFrame(current-1);
 viewer.querySelector('.pet-dialog-next').onclick=()=>showFrame(current+1);
 viewer.addEventListener('keydown',e=>{if(e.key==='ArrowLeft')showFrame(current-1);if(e.key==='ArrowRight')showFrame(current+1)});
 campaign.addEventListener('mouseenter',()=>hover=true);campaign.addEventListener('mouseleave',()=>hover=false);
 campaign.addEventListener('focusin',()=>focus=true);campaign.addEventListener('focusout',()=>focus=false);
 reduced.addEventListener('change',e=>{manualPause=e.matches;syncButton()});
 setInterval(()=>{if(!manualPause&&!hover&&!focus&&!viewer.open&&!document.hidden)showFrame(current+1)},7000);
 showFrame(0);syncButton();
}
