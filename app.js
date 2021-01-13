class Rule {
  constructor(keywords = [], behave = { name: "", value: "" }) {
    this.keywords = keywords;
    this.behave = behave;
  }
  static dictionary = [];
}
let rules = [
  new Rule(["a", "c", "s"], { name: "prefix", value: "in" }), //Rules 1
  new Rule(["m", "p"], { name: "prefix", value: "im" }), // Rules 2
  new Rule(["l"], { name: "prefix", value: "il" }), // Rules 3
  new Rule(["r"], { name: "prefix", value: "ir" }),

  new Rule(["f"], { name: "prefix", value: "un" }),
  new Rule(["h"], { name: "suffix", value: "ful" }),
];

Rule.dictionary = rules;
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
  "mature",
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
      } else if (!isPre && w.endsWith(afiix)) {
        flitteredWithRule.push(w);
      }
    });
  });
  let finalObj = {};
  finalObj[rules.behave.name] = rules.behave.value;
  finalObj.name = rules.behave.name;
  if (isPre) {
    finalObj.final = [];
    finalObj.formatted = [];
    flitteredWithRule.forEach((w) =>
      finalObj.final.push(rules.behave.value + w)
    );
    flitteredWithRule.forEach((w) =>
      finalObj.formatted.push(`${rules.behave.value} + ${w}`)
    );
    return finalObj;
  } else {
    finalObj.final = [];
    finalObj.formatted = [];
    flitteredWithRule.forEach((w) =>
      finalObj.final.push(w + rules.behave.value)
    );
    flitteredWithRule.forEach((w) =>
      finalObj.formatted.push(`${w} + ${rules.behave.value}`)
    );
    return finalObj;
  }
}

// Rule.addToDictionary(
//     new Rule(["a", "c", "s"], { name: "prefix", value: "in" })
// );

// renderAffix(Rule.dictionary[0], words);

// rules.forEach(obj => console.log(renderAffix(obj,words)))

function getAffixWord(word, type = "") {
  let final = [];
  Rule.dictionary.forEach((r) => {
    let affixes = renderAffix(r, [word]);
    // console.log(affixes)
    if (!affixes.final.join("")) return;
    // if(!affix.join(''))  return;
    if (!(affixes.name === type)) return;
    final.push(affixes.final.toString());
  });
  return final.toString();
}

// Dom Manipulation
function runDom() {
  let value = document.getElementById("in").value;
  let ot = document.getElementById("ot");
  let selection = document.getElementById("affixOption").value;
  let isSelectedClear = document.getElementById("clear");
  if (!value) {
    document.getElementById("in").classList.add("bg-danger", "white");
    ot.textContent = "Please Enter A Word!";
    return;
  } else {
    document.getElementById("in").classList.remove("bg-danger", "white");
  }
  if (!selection) {
    document.getElementById("affixOption").classList.remove("bg-light");
    document.getElementById("affixOption").classList.add("bg-danger", "white");
    ot.textContent = "Please Select Affix Type!!";
    return;
  } else {
    document.getElementById("affixOption").classList.add("bg-light");
    document
      .getElementById("affixOption")
      .classList.remove("bg-danger", "white");
  }

  let word = getAffixWord(value, selection);
  ot.innerHTML = word;
  console.log(word);
  if (isSelectedClear.checked) {
    document.getElementById("in").value = "";
  }
}
document.getElementById("run").addEventListener("click", () => {
  runDom();
});

document.addEventListener("keypress", (e) => {
  if (e.keyCode === 13) {
    runDom();
  }
});

document
  .getElementById("in")
  .addEventListener("click", () =>
    document.getElementById("in").classList.remove("bg-danger", "white")
  );
