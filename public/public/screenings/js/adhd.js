
const items = [
"I have trouble wrapping up the final details of a project once the challenging parts have been done.",
"I have difficulty getting things in order when I have to do a task that requires organization.",
"I have problems remembering appointments or obligations.",
"When a task requires a lot of thought, I avoid or delay getting started.",
"I fidget or squirm with my hands or feet when I have to sit down for a long time.",
"I feel overly active and compelled to do things, like a motor is driving me.",
"How often do you make careless mistakes when you have to work on a boring or difficult project?",
"How often do you have difficulty keeping your attention when you are doing boring or repetitive work?",
"How often do you have difficulty concentrating on what people say to you, even when they are speaking to you directly?",
"How often do you misplace or have difficulty finding things at home or at work?",
"How often are you distracted by activity or noise around you?",
"How often do you leave your seat in meetings or other situations in which you are expected to remain seated?",
"How often do you feel restless or fidgety?",
"How often do you have difficulty unwinding and relaxing when you have time to yourself?",
"How often do you find yourself talking too much when you are in social situations?",
"When you’re in a conversation, how often do you find yourself finishing the sentences of the people you are talking to, before they can finish them themselves?",
"How often do you have difficulty waiting your turn in situations when turn taking is required?",
"How often do you interrupt others when they are busy?"
];
const opts = ["Never","Rarely","Sometimes","Often","Very Often"];
const map = {"Never":0,"Rarely":1,"Sometimes":2,"Often":3,"Very Often":4};
function render(){
  const form = document.getElementById("form");
  items.forEach((q,i)=>{
    const div=document.createElement("div");div.className="card";
    div.innerHTML = `<p><strong>${i+1}. ${q}</strong></p>` + opts.map(o=>`
      <label style="margin-right:10px"><input type="radio" name="q${i}" value="${o}" ${o==="Never"?"checked":""}/> ${o}</label>`).join("");
    form.appendChild(div);
  });
}
function score(){
  let s=0; for(let i=0;i<items.length;i++){ const el = form.querySelector('input[name="q'+i+'"]:checked'); s += map[el.value]; }
  const level = s>=36? "High likelihood of ADHD — please discuss with a clinician."
              : s>=24? "Possible ADHD — consider a full evaluation."
              : "Low likelihood by this screener.";
  document.getElementById("out").innerHTML = `<div class="card"><strong>Your score: ${s} / 72</strong><p>${level}</p><p class="small">Educational use only—this is not a diagnosis.</p></div>`;
}
window.addEventListener("DOMContentLoaded",()=>{render(); document.getElementById("go").addEventListener("click",score)});
