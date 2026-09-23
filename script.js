"use strict";

const RANDOM_NAMES = [
"Aaron","Abigail","Adam","Adrian","Aiden","Alan","Albert","Alec","Alexa","Alexander",
"Alexis","Alice","Alicia","Alison","Allison","Amanda","Amber","Amelia","Amy","Andrea",
"Andrew","Angela","Angelina","Anna","Anthony","Aria","Arthur","Ashley","Austin","Ava",
"Barbara","Beatrice","Benjamin","Beth","Beverly","Bianca","Blake","Bradley","Brandon","Brenda",
"Brian","Brianna","Brittany","Brooke","Bruce","Bryan","Caleb","Cameron","Cara","Carl",
"Carla","Carlos","Carmen","Carol","Caroline","Carolyn","Carter","Catherine","Charles","Charlotte",
"Chase","Chelsea","Cheryl","Chloe","Chris","Christian","Christina","Christine","Christopher","Claire",
"Clara","Clarence","Cole","Colin","Connor","Courtney","Crystal","Curtis","Cynthia","Dakota",
"Daniel","Danielle","David","Dawn","Dean","Deborah","Dennis","Derek","Derrick","Diana",
"Dominic","Donna","Dylan","Edward","Elaine","Eleanor","Elena","Eli","Elijah","Elizabeth",
"Ella","Ellen","Emily","Emma","Eric","Erica","Erik","Erin","Ethan","Eugene",
"Eva","Evelyn","Faith","Felicia","Finn","Florence","Frances","Frank","Gabriel","Gail",
"Gary","Gavin","George","Georgia","Gerald","Gina","Grace","Grant","Gregory","Hannah",
"Harold","Harper","Hayden","Heather","Heidi","Helen","Henry","Holly","Hunter","Ian",
"Isabella","Isaac","Jack","Jackson","Jacob","Jake","James","Jamie","Jane","Jared",
"Jasmine","Jason","Jasper","Jayden","Jean","Jeffrey","Jenna","Jennifer","Jeremy","Jerry",
"Jesse","Jessica","Joan","Joe","Joel","John","Johnny","Jonathan","Jordan","Joseph",
"Joshua","Joyce","Juan","Judith","Julia","Julian","Julie","Justin","Kaitlyn","Karen",
"Katherine","Kathleen","Kathryn","Kayla","Keith","Kelly","Kenneth","Kevin","Kimberly","Kyle",
"Lance","Larry","Laura","Lauren","Leah","Leo","Leonard","Leslie","Levi","Liam",
"Lillian","Linda","Lindsay","Lisa","Logan","Lori","Louis","Lucas","Lucy","Luke",
"Madeline","Madison","Makayla","Marcus","Margaret","Maria","Marie","Marilyn","Marissa","Mark",
"Martha","Martin","Mary","Mason","Matthew","Megan","Melanie","Melissa","Michael","Michelle",
"Mila","Molly","Morgan","Nancy","Natalie","Nathan","Nathaniel","Neil","Nicholas","Nicole",
"Noah","Nolan","Nora","Norman","Olivia","Owen","Pamela","Patricia","Patrick","Paul",
"Paula","Peter","Philip","Rachel","Ralph","Randy","Raymond","Rebecca","Richard","Robert",
"Robin","Roger","Ronald","Rose","Russell","Ruth","Ryan","Samantha","Samuel","Sandra",
"Sara","Sarah","Scott","Sean","Shane","Shannon","Sharon","Shelby","Shirley","Sophia",
"Spencer","Stacy","Stephanie","Stephen","Steven","Susan","Sydney","Tammy","Taylor","Teresa",
"Terry","Thomas","Tiffany","Timothy","Todd","Tracy","Tristan","Tyler","Valerie","Vanessa",
"Veronica","Victoria","Vincent","Virginia","Walter","Wayne","Wendy","William","Wyatt","Xavier",
"Zachary","Zoe","Ariana","Ariel","Asher","Aspen","August","Aurora","Bella","Bentley",
"Braxton","Brody","Caden","Callie","Cash","Colton","Cooper","Declan","Easton","Elias",
"Emmett","Everly","Finnley","Gabriella","Grayson","Hadley","Hudson","Jaxon","Josiah","Kennedy",
"Kingston","Kinsley","Landon","Lincoln","Mackenzie","Maddox","Paisley","Parker","Peyton","Quinn",
"Riley","Rowan","Ryder","Sawyer","Skylar","Stella","Theodore","Violet","Weston","Willow",
"Wren","Zane","Adelaide","Anastasia","Arabella","Blair","Brielle","Camilla","Cassidy","Celeste",
"Cora","Delilah","Eliza","Eloise","Fiona","Freya","Genevieve","Hazel","Iris","Josephine",
"Juliette","Lydia","Maeve","Penelope","Rosalie","Savannah","Serenity","Vivian","Autumn","Brooklyn",
"Charlie","Daisy","Eden","Gemma","Juliana","Kendall","Liliana","Naomi","Phoebe","Reagan",
"Sienna","Valentina","Zara"
];

const RANDOM_SURNAMES = [
"Smith","Johnson","Williams","Brown","Jones","Garcia","Miller","Davis","Rodriguez","Martinez",
"Hernandez","Lopez","Gonzalez","Wilson","Anderson","Thomas","Taylor","Moore","Jackson","Martin",
"Lee","Perez","Thompson","White","Harris","Sanchez","Clark","Ramirez","Lewis","Robinson",
"Walker","Young","Allen","King","Wright","Scott","Torres","Nguyen","Hill","Flores",
"Green","Adams","Nelson","Baker","Hall","Rivera","Campbell","Mitchell","Carter","Roberts"
];

const DATA = {
  dnd: {
    label: "D&D",
    secondaryLabel: "Class",
    races: {
      Human: { p: ["Al","Ar","Ben","Cal","Cor","Ed","Gar","Har","Jon","Mar","Ren","Val"], s: ["ald","an","ard","en","ian","ric","ton","ward"], n: ["Ashford","Blackwood","Brightwood","Hawthorne","Ironvale","Ravenwood","Stormward","Westbrook"] },
      Elf: { p: ["Ae","Ael","Cael","Ela","Fae","Ili","Lora","Nae","Syl","Tha"], s: ["ael","dell","iel","lith","nor","riel","thir","wyn"], n: ["Dawnbranch","Moonwhisper","Nightbreeze","Silverleaf","Starbloom","Willowshade"] },
      Dwarf: { p: ["Brom","Brun","Dorn","Dur","Kaz","Khar","Mor","Thor"], s: ["bek","din","dor","gar","grim","rik","rum"], n: ["Anvilborn","Deepforge","Goldmantle","Ironhammer","Stonebeard"] },
      Halfling: { p: ["Bim","Meri","Per","Pip","Ros","Sam","Tob","Wil"], s: ["bell","bin","bur","kin","ley","wick","wise"], n: ["Brushbrook","Goodbarrel","Greenhill","Softstep","Underbough"] },
      Gnome: { p: ["Bix","Fizz","Gim","Nib","Pip","Tink","Wob","Zan"], s: ["bit","fizz","gle","kin","nip","wick","zzle"], n: ["Brassbutton","Copperspark","Gearwhistle","Quickgear","Tinkertop"] },
      Tiefling: { p: ["Az","Bel","Khar","Mal","Nyx","Vael","Vor","Xan","Zar"], s: ["dros","ira","rax","thys","vex","zar"], n: ["Ashmark","Emberveil","Hellwhisper","Nightscar","Shadowbrand"] },
      Dragonborn: { p: ["Arj","Bal","Dra","Ghar","Kriv","Rhogar","Tor","Vrak"], s: ["ash","ax","ir","oth","rax","ur"], n: ["Emberscale","Flamecrest","Ironscale","Stormclaw","Wyrmblood"] },
      "Half-Orc": { p: ["Brak","Drog","Gar","Gor","Grak","Karg","Mog","Urz"], s: ["ak","gar","gash","mok","ruk","ug"], n: ["Bonebreaker","Ironjaw","Redfang","Skullsplitter","Wolfscar"] }
    },
    secondary: {
      Barbarian: { c: ["rage","wild","storm","blood"], t: ["the Unbroken","the Wild","Fury of the North","the Mountain's Roar"] },
      Bard: { c: ["song","verse","chime","tale"], t: ["the Silver-Tongued","Keeper of Tales","the Wandering Minstrel","Voice of the Vale"] },
      Cleric: { c: ["dawn","faith","light","grace"], t: ["the Blessed","Bearer of the Dawn","the Devout","Keeper of the Flame"] },
      Druid: { c: ["briar","grove","moss","thorn"], t: ["of the Ancient Grove","the Greenwarden","Friend of Beasts","the Rootbound"] },
      Fighter: { c: ["blade","guard","iron","steel"], t: ["the Resolute","Shield of the Realm","the Veteran","Master of Blades"] },
      Monk: { c: ["calm","echo","wind","spirit"], t: ["the Still Hand","Walker of the Quiet Path","the Centered","the Unshaken"] },
      Paladin: { c: ["oath","valor","light","justice"], t: ["the Oathbound","Hammer of Justice","the Radiant","Shield of the Innocent"] },
      Ranger: { c: ["arrow","trail","hawk","wood"], t: ["the Farstrider","Warden of the Wilds","the Keen-Eyed","Pathfinder"] },
      Rogue: { c: ["shade","whisper","night","quick"], t: ["the Unseen","Shadow of the Alley","the Quick-Handed","the Fox"] },
      Sorcerer: { c: ["spark","ember","arcane","flare"], t: ["the Spellborn","the Unbound","Heir of Magic","the Arcane Flame"] },
      Warlock: { c: ["void","hex","shadow","rune"], t: ["the Pactbound","Whisperer of the Void","the Marked","Keeper of Forbidden Runes"] },
      Wizard: { c: ["rune","spell","star","sage"], t: ["the Learned","Master of the Arcane","the Runekeeper","Sage of the Seven Towers"] }
    }
  },
  skyrim: {
    label: "Skyrim",
    secondaryLabel: "Archetype",
    races: {
      Nord: { p: ["Alf","Brynj","Eir","Falk","Hal","Hjal","Rag","Sven","Tor","Yng"], s: ["ar","eif","olf","rik","sten","var"], n: ["Battle-Born","Frost-Blood","Ice-Vein","Snow-Strider","Storm-Cloak","Wolf-Heart"] },
      Breton: { p: ["Ama","Cas","Cor","Elo","Gau","Luc","Mar","Ren","Seb","Tri"], s: ["ard","elle","ien","ier","mont","ric"], n: ["Beauchamp","Dufort","Montclair","Renoit","Varro"] },
      Imperial: { p: ["Ael","Cass","Dec","Gai","Jul","Mar","Oct","Ser","Tit","Val"], s: ["ian","io","ius","or","us","o"], n: ["Aventus","Carvain","Marcellus","Septima","Varian"] },
      Redguard: { p: ["Aza","Cas","Fari","Hak","Jal","Kem","Naz","Rai","Sam","Zaf"], s: ["ad","im","ir","ra","ud","za"], n: ["al-Akir","at-Fada","Rihad","Sahan","Sentinel"] },
      "High Elf": { p: ["Ael","Cal","Eli","Eran","Fal","Lau","Nar","Ond","Sin","Van"], s: ["amil","andil","ion","ir","or","we"], n: ["Aelorin","Calion","Larethor","Niranye","Valinor"] },
      "Wood Elf": { p: ["Aen","Brel","Cir","Erd","Fae","Gla","Lir","Mel","Nim","Thil"], s: ["adil","eth","iel","il","ir","las"], n: ["Green-Bough","Leaf-Runner","Mossfoot","Silverbark","Wildsong"] },
      "Dark Elf": { p: ["Aro","Dra","Ere","Fal","Gav","Mav","Nel","Rav","Seryn","Var"], s: ["as","eth","is","os","rys","yn"], n: ["Dren","Hlaalu","Indoril","Redoran","Sadras","Telvanni"] },
      Orc: { p: ["Bag","Baz","Borg","Dur","Ghor","Gro","Khar","Mog","Shag","Urz"], s: ["ak","ash","bul","dak","grub","zug"], n: ["gro-Batul","gro-Khazgur","gra-Malog","gro-Orsinium","gra-Shatul"] },
      Khajiit: { p: ["Dar","Do","J'","Jo","Khar","M'","Ra'","Ri'","S'","Za'"], s: ["dar","jo","kir","ra","rasha","zirr"], n: ["Bright-Claw","Dune-Walker","Moon-Sugar","Night-Paw","Soft-Step"] },
      Argonian: { p: ["Beem","Dee","Haj","Jaree","Keer","Mee","Neet","Ocheeva","Teeba","Veez"], s: ["eesh","ei","jeen","ra","us","za"], n: ["Hides-the-Ashes","Reads-the-Stars","Runs-With-Rivers","Sees-All-Colors","Walks-In-Mist"] }
    },
    secondary: {
      Warrior: { c: ["blade","iron","shield","war"], t: ["the Unbroken","Shield-Thane","the Battle-Hardened","Breaker of Foes"] },
      Mage: { c: ["rune","spell","frost","ember"], t: ["the Arcane","Master of the College","the Rune-Wise","Binder of Elements"] },
      Thief: { c: ["shadow","coin","quick","night"], t: ["the Unseen","Night's Hand","the Quick-Fingered","Walker in Shadow"] },
      Assassin: { c: ["silence","shade","dusk","venom"], t: ["the Silent","Listener in Darkness","the Veiled Blade","Shadow of Sithis"] },
      Companion: { c: ["wolf","honor","steel","mead"], t: ["of the Circle","the Shield-Sibling","Wolf of Jorrvaskr","the Honored"] },
      "Dragonborn": { c: ["voice","wyrm","sky","thu'um"], t: ["Dovahkiin","the Dragonborn","Stormcrown","Bearer of the Voice"] },
      "Vampire Hunter": { c: ["dawn","sun","silver","flame"], t: ["of the Dawnguard","Scourge of the Night","the Sun-Blessed","Hunter of the Undead"] },
      Necromancer: { c: ["grave","bone","soul","crypt"], t: ["the Death-Weaver","Speaker for the Dead","the Pale","Master of the Crypt"] },
      Knight: { c: ["oath","crown","guard","valor"], t: ["the Oathbound","Keeper of the Hold","the Stalwart","Sword of the Jarl"] },
      Ranger: { c: ["pine","arrow","trail","hawk"], t: ["the Far-Walker","Warden of the Reach","the Keen-Eyed","Pathfinder of Skyrim"] }
    }
  }
};

const $ = id => document.getElementById(id);
const elements = {
  tabs: [...document.querySelectorAll(".tab")],
  name: $("originalName"), race: $("race"), secondary: $("characterClass"), style: $("nameStyle"),
  randomRace: $("randomRace"), randomClass: $("randomClass"), includeTitle: $("includeTitle"),
  classLabel: $("classLabel"), generate: $("generateButton"), output: $("generatedName"),
  details: $("generatedDetails"), copy: $("copyButton"), favorite: $("favoriteButton"),
  favoritesList: $("favoritesList"), emptyFavorites: $("emptyFavorites"), clearFavorites: $("clearFavorites")
};

let game = "dnd";
let currentResult = null;
let favorites = loadFavorites();

function pick(items) { return items[Math.floor(Math.random() * items.length)]; }
function titleCase(value) { return value ? value.charAt(0).toUpperCase() + value.slice(1).toLowerCase() : ""; }
function cleanWords(value) { return value.replace(/[^A-Za-zÀ-ÖØ-öø-ÿ' -]/g, " ").trim().split(/\s+/).filter(Boolean); }
function clampWord(value, max) { return value.length <= max ? value : value.slice(0, max); }
function randomKey(object) { return pick(Object.keys(object)); }

function fragment(word, min, max) {
  const clean = word.replace(/[^A-Za-z]/g, "");
  if (!clean) return "";
  const limit = Math.min(clean.length, Math.max(min, Math.floor(Math.random() * (max - min + 1)) + min));
  return titleCase(clean.slice(0, limit));
}

function populateControls() {
  const config = DATA[game];
  elements.race.innerHTML = Object.keys(config.races).map(v => `<option>${v}</option>`).join("");
  elements.secondary.innerHTML = Object.keys(config.secondary).map(v => `<option>${v}</option>`).join("");
  elements.classLabel.textContent = config.secondaryLabel;
  elements.randomClass.nextSibling.textContent = ` Random ${config.secondaryLabel.toLowerCase()}`;
}

function buildName() {
  const config = DATA[game];
  let inputName = elements.name.value.trim();

  if (!inputName) {
    inputName =
        `${pick(RANDOM_NAMES)} ${pick(RANDOM_SURNAMES)}`;
}

  const words = cleanWords(inputName);
  const originalFirst = titleCase(words[0]);
  const originalLast = titleCase(words.length > 1 ? words[words.length - 1] : "");
  const race = elements.randomRace.checked ? randomKey(config.races) : elements.race.value;
  const secondary = elements.randomClass.checked ? randomKey(config.secondary) : elements.secondary.value;
  const style = elements.style.value;
  const raceData = config.races[race];
  const secondaryData = config.secondary[secondary];
  const settings = {
    short: { min: 2, max: 3, firstCap: 9, lastCap: 11, titleChance: 0.62, surnameChance: 0.72 },
    normal: { min: 3, max: 4, firstCap: 12, lastCap: 15, titleChance: 0.82, surnameChance: 0.9 },
    epic: { min: 4, max: 5, firstCap: 18, lastCap: 22, titleChance: 1, surnameChance: 1 }
  }[style];

  const firstFrag = fragment(originalFirst, settings.min, settings.max);
  const lastFrag = fragment(originalLast || originalFirst, settings.min, settings.max);
  const prefix = pick(raceData.p), suffix = pick(raceData.s), connector = pick(secondaryData.c);

  let firstPatterns;
  if (style === "short") {
    firstPatterns = [`${firstFrag}${suffix}`, `${prefix}${firstFrag}`, firstFrag, originalFirst];
  } else if (style === "normal") {
    firstPatterns = [`${firstFrag}${suffix}`, `${prefix}${firstFrag}`, `${firstFrag}${connector}`, `${prefix}${firstFrag}${suffix}`, `${originalFirst}${suffix}`];
  } else {
    firstPatterns = [`${prefix}${firstFrag}${suffix}`, `${firstFrag}${connector}${suffix}`, `${prefix}${originalFirst}`, `${originalFirst}${connector}`, `${prefix}${firstFrag}${connector}${suffix}`];
  }

  let fantasyFirst = clampWord(titleCase(pick(firstPatterns)), settings.firstCap);
  const generatedSurname = pick(raceData.n);
  const blendedSurname = originalLast && Math.random() < .38 ? `${lastFrag}${pick(raceData.s)}` : generatedSurname;
  const surname = Math.random() < settings.surnameChance ? clampWord(blendedSurname, settings.lastCap) : "";
  const title = elements.includeTitle.checked && Math.random() < settings.titleChance ? pick(secondaryData.t) : "";
  const fullName = [fantasyFirst, surname, title ? `, ${title}` : ""].filter(Boolean).join(" ").replace(" ,", ",");

  return { fullName, game: config.label, race, secondary, style: titleCase(style), original: words.join(" ") || "Random seed" };
}

function displayResult(result) {
  currentResult = result;
  elements.output.textContent = result.fullName;
  elements.details.textContent = `${result.game} • ${result.race} • ${result.secondary} • ${result.style}`;
  elements.copy.disabled = false;
  elements.favorite.disabled = false;
}

function generate() { displayResult(buildName()); }

async function copyCurrent() {
  if (!currentResult) return;
  try {
    await navigator.clipboard.writeText(currentResult.fullName);
    elements.copy.textContent = "Copied";
  } catch {
    const area = document.createElement("textarea");
    area.value = currentResult.fullName;
    document.body.appendChild(area);
    area.select();
    document.execCommand("copy");
    area.remove();
    elements.copy.textContent = "Copied";
  }
  window.setTimeout(() => { elements.copy.textContent = "Copy"; }, 1200);
}

function loadFavorites() {
  try { return JSON.parse(localStorage.getItem("fantasyNameForgeFavorites") || "[]"); }
  catch { return []; }
}
function saveFavorites() { localStorage.setItem("fantasyNameForgeFavorites", JSON.stringify(favorites)); }
function addFavorite() {
  if (!currentResult || favorites.some(item => item.fullName === currentResult.fullName)) return;
  favorites.unshift(currentResult);
  favorites = favorites.slice(0, 50);
  saveFavorites();
  renderFavorites();
  elements.favorite.textContent = "Saved";
  window.setTimeout(() => { elements.favorite.textContent = "Add favorite"; }, 1200);
}
function removeFavorite(index) { favorites.splice(index, 1); saveFavorites(); renderFavorites(); }
function renderFavorites() {
  elements.favoritesList.innerHTML = "";
  elements.emptyFavorites.hidden = favorites.length > 0;
  favorites.forEach((item, index) => {
    const li = document.createElement("li");
    li.className = "favorite-item";
    const content = document.createElement("div");
    const name = document.createElement("span");
    name.className = "favorite-name";
    name.textContent = item.fullName;
    const meta = document.createElement("div");
    meta.className = "favorite-meta";
    meta.textContent = `${item.game} • ${item.race} • ${item.secondary} • ${item.style}`;
    const remove = document.createElement("button");
    remove.className = "remove-favorite";
    remove.type = "button";
    remove.textContent = "Remove";
    remove.setAttribute("aria-label", `Remove ${item.fullName}`);
    remove.addEventListener("click", () => removeFavorite(index));
    content.append(name, meta);
    li.append(content, remove);
    elements.favoritesList.appendChild(li);
  });
}

function switchGame(nextGame) {
  game = nextGame;
  elements.tabs.forEach(tab => {
    const selected = tab.dataset.game === game;
    tab.classList.toggle("active", selected);
    tab.setAttribute("aria-selected", String(selected));
    tab.setAttribute("tabindex", selected ? "0" : "-1");
  });
  populateControls();
  currentResult = null;
  elements.output.textContent = "Your name will appear here";
  elements.details.textContent = "Choose your options and press Generate name.";
  elements.copy.disabled = true;
  elements.favorite.disabled = true;
}

elements.tabs.forEach(tab => tab.addEventListener("click", () => switchGame(tab.dataset.game)));
elements.generate.addEventListener("click", generate);
elements.name.addEventListener("keydown", event => { if (event.key === "Enter") generate(); });
elements.copy.addEventListener("click", copyCurrent);
elements.favorite.addEventListener("click", addFavorite);
elements.clearFavorites.addEventListener("click", () => { favorites = []; saveFavorites(); renderFavorites(); });
elements.randomRace.addEventListener("change", () => { elements.race.disabled = elements.randomRace.checked; });
elements.randomClass.addEventListener("change", () => { elements.secondary.disabled = elements.randomClass.checked; });

populateControls();
renderFavorites();
