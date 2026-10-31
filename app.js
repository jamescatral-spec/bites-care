
// Add your verified, public Shopify storefront URL after the store is ready.
// Never put merchant credentials or API secrets in this HTML.
const SHOPIFY_STORE_URL = window.BITES_CARE_CONFIG.shopifyStoreUrl || '';
const APPS_SCRIPT_URL = window.BITES_CARE_CONFIG.appsScriptWebAppUrl || '';
const shopLink=document.querySelector('#shopify-link');
if(SHOPIFY_STORE_URL){try{const store=new URL(SHOPIFY_STORE_URL);if(store.protocol==='https:'){shopLink.href=store.href;shopLink.hidden=false}}catch{}}
const productDialog=document.querySelector('#product-dialog');let selectedProduct='';
document.querySelectorAll('[data-product]').forEach(button=>button.addEventListener('click',()=>{
 const card=button.closest('.product');selectedProduct=card.querySelector('h3').textContent;
 document.querySelector('#product-name').textContent=selectedProduct;
 document.querySelector('#product-art').replaceChildren(card.querySelector('svg').cloneNode(true));productDialog.showModal();
}));
document.querySelector('.close-product').onclick=()=>productDialog.close();
document.querySelector('#product-interest').onclick=()=>{
 productDialog.close();document.querySelector('#connection-note').textContent='Interested in '+selectedProduct+'? Open the inquiry form and select T-shirt purchase interest. Mention this design in your message.';
};

document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',e=>{e.preventDefault();const target=a.getAttribute('href');if(target==='#'){window.scrollTo({top:0,behavior:'smooth'});return;}document.querySelector(target)?.scrollIntoView({behavior:'smooth'});}));
const guides=[['Look beyond the label.',['Ask the rescue team about the pet’s personality, history, and current care needs.','Discuss your household, schedule, other animals, and living space so the team can help assess a suitable match.','Ask how Ampon Alaga’s application, introduction, and follow-up process works.']],['A softer landing at home.',['Ask the rescue team what routines and surroundings the pet is familiar with.','Prepare a quiet space and discuss introductions to children and other pets with the team.','Arrange a veterinary consultation for an individual care and feeding plan.']],['Care beyond the first day.',['Plan a realistic budget for food, preventive care, grooming, and unexpected needs.','Discuss a routine for activity, enrichment, and companionship that suits the individual pet.','Ask your veterinarian about ongoing health needs and ask the rescue team about post-adoption support.']]];
document.querySelectorAll('[data-guide]').forEach(b=>b.onclick=()=>{const g=guides[+b.dataset.guide];document.querySelector('#guide-title').textContent=g[0];const list=document.querySelector('#guide-body');list.replaceChildren(...g[1].map(t=>{const li=document.createElement('li');li.textContent=t;return li}));document.querySelector('#guide').showModal()});document.querySelector('.close').onclick=()=>document.querySelector('#guide').close();document.querySelector('#guide-contact').onclick=()=>document.querySelector('#guide').close();document.querySelectorAll('[data-interest]').forEach(a=>a.onclick=()=>{document.querySelector('#connection-note').textContent='Open the inquiry form and select '+a.dataset.interest+'.';});
const appLink=document.querySelector('#apps-script-link');
if(APPS_SCRIPT_URL){
 try{const u=new URL(APPS_SCRIPT_URL);
 if(u.protocol==='https:' && u.hostname==='script.google.com' && /^\/macros\/s\/[^/]+\/exec$/.test(u.pathname)){
   appLink.href=u.href+'#support';appLink.hidden=false;
   document.querySelector('#connection-note').textContent='Open our Google-hosted form to send your inquiry. Your details are submitted there.';
 }else throw new Error('Invalid URL');
 }catch{document.querySelector('#connection-note').textContent='The inquiry form link is not configured correctly. Please contact the team by phone.';}
}
const shareButton=document.querySelector('#share');if(shareButton)shareButton.onclick=async()=>{const status=document.querySelector('#share-status');try{await navigator.clipboard.writeText(location.href.split('#')[0]);status.textContent='Link copied. Share a little kindness.'}catch{status.textContent='Share this page: '+location.href.split('#')[0]}};
