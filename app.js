// const rules = {
//   keywords: ["a", "c", "s"],
//   behave: {
//     name: "prefix",
//     value: "in",
//   },
// };
// let prefixes = rules.keywords;

// let prefix = rules.behave.name === "prefix" ? rules.behave.value : "idk";

let words = [
  "ability",
  "active",
  "accurate",
  "adequate",
  "applicable",
  "attentive",
  "appropriate",
  "capable",
  "correct",
  "complete",
  "conceivable",
  "conspicuous",
  "credible",
  "convenient",
  "consistent",
  "competent",
  "considerate",
  "credulous",
  "sane",
  "secured",
  "security",
  "significant",
  "solvent",
  "sensible",
  "mature"
];

// // ? filter words with rule 1
// let rule1 = [];
// words.filter((w) => {
//   prefixes.forEach((p) => {
//     if (w.startsWith(p)) {
//       rule1.push(w);
//     }
//   });
// });

// let finalWord = [];

// let msg = "";

// rule1.forEach((e) => {
//   finalWord.push(prefix + e);
//   msg += `
//     ========================
//     word: ${e}
//     prefix: ${prefix} + ${e}
//     final word: ${prefix + e}
//     =========================`;
// });




// console.log(msg);

class Rule {
  constructor(keywords = [], behave = { name: "", value: "" }) {
    this.keywords = keywords;
    this.behave = behave;
  }
  static dictionary = [
    new Rule(["a", "c", "s"], { name: "prefix", value: "in" }),
    new Rule(["m", 'p'], {name: "prefix", value: "im"}),
    new Rule(["l"], {name: "prefix", value: "il"})
];

}

const isPrefix = (value) => value === "prefix";
function renderAffix(
  rules = { keywords: [], behave: { name: "", value: "" } },
  words
) {
  let isPre = isPrefix(rules.behave.name);
  let affixes = rules.keywords;
  let flitteredWithRule = [];
  words.filter((w = "") => {
    affixes.forEach((afiix) => {
      if (isPre && w.startsWith(afiix)) {
          flitteredWithRule.push(w);
      } else if(!isPre && w.endsWith(afiix)) {
          flitteredWithRule.push(w);
      }
    });
  });


  let finalObj = {};
  finalObj[rules.behave.name] = rules.behave.value;
  finalObj.final = [];
  finalObj.formatted = [];
  flitteredWithRule.forEach(w => finalObj.final.push(rules.behave.value + w))
  flitteredWithRule.forEach(w => finalObj.formatted.push(`${rules.behave.value} + ${w}`))
  return finalObj;
}



// Rule.addToDictionary(
//     new Rule(["a", "c", "s"], { name: "prefix", value: "in" })
// );

// renderAffix(Rule.dictionary[0], words);


// rules.forEach(obj => console.log(renderAffix(obj,words)))

function getAffixWord(word) {
    let final = [];
    Rule.dictionary.forEach(r => {
        let affix = renderAffix(r,[word]).final;
        if(!affix.join(''))  return;
        final.push(affix.toString());
    })
    return final.toString()
}




// Dom Manipulation
function runDom() {
    let value = document.getElementById('in').value;
    let ot = document.getElementById('ot');
    
    ot.innerHTML = (getAffixWord(value))
    document.getElementById('in').value = "";
}
document.getElementById('run').addEventListener("click",() => {
runDom()
    
})


document.addEventListener("keypress", e => {
    if(e.keyCode === 13) {
        runDom();
    }
})