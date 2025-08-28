
const items = [
"Feeling nervous, anxious, or on edge",
"Not being able to stop or control worrying",
"Worrying too much about different things",
"Trouble relaxing",
"Being so restless that it is hard to sit still",
"Becoming easily annoyed or irritable",
"Feeling afraid, as if something awful might happen"
];
const opts = ["Not at all","Several days","More than half the days","Nearly every day"];
const map = {"Not at all":0,"Several days":1,"More than half the days":2,"Nearly every day":3};
function render(){ const form=document.getElementById("form"); items.forEach((q,i)=>{ const d=document.createElement("div"); d.className="card"; d.innerHTML=`<p><strong>${i+1}. ${q}</strong></p>`+opts.map(o=>`<label style='margin-right:10px'><input type='radio' name='q${i}' value='${o}' ${o==="Not at all"?"checked":""}/> ${o}</label>`).join(""); form.appendChild(d); });}
function score(){ let s=0; for(let i=0;i<items.length;i++){ const el=form.querySelector('input[name="q'+i+'"]:checked'); s+=map[el.value]; } let lvl="Minimal"; if(s>=15)lvl="Severe"; else if(s>=10)lvl="Moderate"; else if(s>=5)lvl="Mild"; document.getElementById("out").innerHTML=`<div class='card'><strong>Your score: ${s} / 21 — ${lvl}</strong><p class='small'>Educational use only; not a diagnosis. If in crisis, call 988 or 911.</p></div>`; }
window.addEventListener("DOMContentLoaded",()=>{render(); document.getElementById("go").addEventListener("click",score)});
