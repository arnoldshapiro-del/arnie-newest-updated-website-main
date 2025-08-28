
const items = [
"Little interest or pleasure in doing things",
"Feeling down, depressed, or hopeless",
"Trouble falling or staying asleep, or sleeping too much",
"Feeling tired or having little energy",
"Poor appetite or overeating",
"Feeling bad about yourself—or that you are a failure or have let yourself or your family down",
"Trouble concentrating on things, such as reading or watching television",
"Moving or speaking so slowly that other people could have noticed; or the opposite—being so fidgety or restless that you have been moving around a lot more than usual",
"Thoughts that you would be better off dead, or of hurting yourself"
];
const opts = ["Not at all","Several days","More than half the days","Nearly every day"];
const map = {"Not at all":0,"Several days":1,"More than half the days":2,"Nearly every day":3};
function render(){ const form=document.getElementById("form"); items.forEach((q,i)=>{ const d=document.createElement("div"); d.className="card"; d.innerHTML=`<p><strong>${i+1}. ${q}</strong></p>`+opts.map(o=>`<label style='margin-right:10px'><input type='radio' name='q${i}' value='${o}' ${o==="Not at all"?"checked":""}/> ${o}</label>`).join(""); form.appendChild(d); });}
function score(){ let s=0; for(let i=0;i<items.length;i++){ const el=form.querySelector('input[name="q'+i+'"]:checked'); s+=map[el.value]; } let lvl="Minimal"; if(s>=20)lvl="Severe"; else if(s>=15)lvl="Moderately Severe"; else if(s>=10)lvl="Moderate"; else if(s>=5)lvl="Mild"; const red = form.querySelector('input[name="q8"]:checked').value!=="Not at all"; document.getElementById("out").innerHTML=`<div class='card'><strong>Your score: ${s} / 27 — ${lvl}</strong>${red?'<p style="color:#991b1b"><strong>Please contact a clinician promptly about question 9.</strong></p>':''}<p class='small'>Educational use only; not a diagnosis. If in crisis, call 988 or 911.</p></div>`; }
window.addEventListener("DOMContentLoaded",()=>{render(); document.getElementById("go").addEventListener("click",score)});
