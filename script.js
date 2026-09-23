"use strict";

// 1,000 generic first names used when Original Name is blank.
const RANDOM_FIRST_NAMES = [
  "Aada", "Aage", "Aaliyah", "Aapo", "Aarne", "Aaro", "Aaron", "Aatos", "Abbas", "Abbi",
  "Abbie", "Abby", "Abdi", "Abdirahman", "Abdul", "Abdullah", "Abel", "Abelone", "Abigail", "Abjrn",
  "Abraham", "Abram", "Abril", "Achille", "Achim", "Ada", "Adalbert", "Adalberto", "Adam", "Adamo",
  "Adan", "Adela", "Adelaida", "Adelaide", "Adelardo", "Adelasia", "Adelbert", "Adele", "Adelgunde", "Adelheid",
  "Adelia", "Adelina", "Adelinde", "Adeline", "Adelmo", "Adem", "Adina", "Adolf", "Adolfo", "Adora",
  "Adoracion", "Adrian", "Adriana", "Adriano", "Adrien", "Adrienne", "Aedan", "Afonso", "Africa", "Agapito",
  "Agata", "Agatha", "Agathe", "Age", "Agne", "Agnes", "Agneta", "Agnete", "Agnieszka", "Agnolo",
  "Agostino", "Agueda", "Agustin", "Agustina", "Ahmad", "Ahmed", "Ahmet", "Ahti", "Aidan", "Aideen",
  "Aiden", "Aila", "Aileen", "Aili", "Ailis", "Aime", "Aimee", "Aimo", "Aina", "Ainara",
  "Aine", "Aino", "Ainoa", "Airi", "Aisha", "Aisling", "Aislinn", "Aitana", "Aitor", "Ake",
  "Aki", "Aksel", "Akseli", "Alain", "Alan", "Alana", "Alanis", "Alanna", "Alannah", "Alastair",
  "Alba", "Alban", "Albano", "Alberico", "Albert", "Alberte", "Albertine", "Alberto", "Albin", "Albina",
  "Albino", "Albrecht", "Alcides", "Alderano", "Aldo", "Ale", "Alec", "Alejandra", "Alejandro", "Alejo",
  "Aleksandar", "Aleksander", "Aleksandr", "Aleksandra", "Aleksanteri", "Aleksej", "Aleksi", "Alena", "Alessandra", "Alessandro",
  "Alessia", "Alessio", "Alex", "Alexa", "Alexander", "Alexandra", "Alexandre", "Alexandria", "Alexandrie", "Alexandros",
  "Alexei", "Alexej", "Alexis", "Alf", "Alfio", "Alfons", "Alfonso", "Alfred", "Alfredo", "Algot",
  "Ali", "Alice", "Alicia", "Alicja", "Alida", "Alina", "Aline", "Alisa", "Alisha", "Alison",
  "Alistair", "Alister", "Alix", "Alla", "Allan", "Allegra", "Allen", "Allison", "Alma", "Almudena",
  "Almut", "Almuth", "Alonso", "Aloys", "Alphons", "Alphonse", "Alva", "Alvar", "Alvaro", "Alvin",
  "Alwin", "Alwina", "Alwine", "Alyssa", "Amada", "Amadeo", "Amadeus", "Amado", "Amador", "Amalia",
  "Amalie", "Amancio", "Amanda", "Amando", "Amarilis", "Amaro", "Amaya", "Ambar", "Amber", "Ambrosio",
  "Amedeo", "Amelia", "Amelie", "America", "Americo", "Amico", "Amie", "Amilcar", "Amin", "Amina",
  "Amir", "Amira", "Amleto", "Amor", "Amparo", "Amy", "Amy-Lee", "Amy-Leigh", "Ana", "AnaBelen",
  "AnaSofia", "Anabel", "Anacleto", "Anais", "Anas", "Anastasia", "Anastasie", "Anastasio", "Anastasios", "Anatol",
  "Anatoli", "Anatolij", "Anders", "Andre", "Andrea", "Andreas", "Andree", "Andrei", "Andreia", "Andrej",
  "Andres", "AndresFelipe", "Andrew", "Andrey", "Andrzej", "Andy", "Ane", "Aneta", "Anett", "Anette",
  "Angel", "Angela", "Angeles", "Angelica", "Angelika", "Angelina", "Angelino", "Angelique", "Angelita", "Angelo",
  "Angie", "Angus", "Ani", "Anibal", "Anika", "Anita", "Anja", "Anka", "Anke", "Ann",
  "Ann-Britt", "Ann-Charlott", "Ann-Charlotte", "Ann-Christin", "Ann-Kathrin", "Ann-Kristin", "Ann-Louise", "Ann-Sofi", "Ann-Sofie", "Anna",
  "Anna-Lena", "Anna-Liisa", "Anna-Lisa", "Anna-Luise", "Anna-Maria", "Anna-Marie", "Annabel", "Annaliese", "Annalisa", "Annalise",
  "Annamaria", "Anne", "Anne-Kathrin", "Anne-Katrin", "Anne-Marie", "Anne-Rose", "Annedore", "Annegret", "Annegrete", "Annekatrin",
  "Anneke", "Annelene", "Anneli", "Annelie", "Annelies", "Anneliese", "Annelise", "Annelore", "Annemarie", "Annemette",
  "Annemie", "Annemijn", "Annerose", "Annett", "Annetta", "Annette", "Anni", "Annibale", "Annica", "Annie",
  "Anniina", "Annika", "Annikki", "Annita", "Annukka", "Annunziata", "Anouk", "Ansaldo", "Anselm", "Anselma",
  "Anselmo", "Ansgar", "Anssi", "Ante", "Antero", "Anthony", "Antje", "Anto", "Antoin", "Antoine",
  "Antoinette", "Anton", "Antonella", "Antonello", "Antonia", "Antonie", "Antonietta", "Antonina", "Antonino", "Antonio",
  "Antonius", "Antony", "Antti", "Anu", "Anunciacion", "Aodhan", "Aoibheann", "Aoibhin", "Aoibhinn", "Aoife",
  "Apolinar", "Apollonia", "Apolonia", "Apostolos", "April", "Araceli", "Aranzazu", "Arcelia", "Ari", "Aria",
  "Ariadna", "Ariana", "Ariane", "Arianne", "Aribert", "Arie", "Ariel", "Arif", "Arild", "Aristides",
  "Arja", "Armando", "Armas", "Armida", "Armin", "Arnaldo", "Arnaude", "Arnd", "Arndt", "Arne",
  "Arnfried", "Arnim", "Arno", "Arnold", "Arnulf", "Arnulfo", "Aroa", "Aron", "Arran", "Arron",
  "Arsenio", "Artemio", "Arthur", "Arto", "Arttu", "Artturi", "Artur", "Arturo", "Arvid", "Arvo",
  "Arzu", "Asa", "Asbjrn", "Ascension", "Asdrubal", "Ase", "Asger", "Ashlee", "Ashleigh", "Ashlene",
  "Ashley", "Ashling", "Ashton", "Asko", "Asta", "Aston", "Astrid", "Asuncion", "Atenulf", "Athanasios",
  "Atilio", "Atte", "Attila", "Aud", "Audrey", "August", "Augusta", "Auguste", "Augustin", "Augusto",
  "Aukusti", "Aulikki", "Aulis", "Aune", "Aura", "Aurea", "Aurelia", "Aureliano", "Aurelie", "Aurelio",
  "Aurora", "Aurore", "Austin", "Autumn", "Axel", "Aya", "Ayden", "Ayesha", "Aylin", "Aynur",
  "Ayoub", "Ayse", "Ayten", "Azahar", "Azahara", "Azeglio", "Azeneth", "Aziz", "Azra", "Azucena",
  "Babett", "Babette", "Baccio", "Bailey", "Bailie", "Baldassare", "Baldomero", "Balduino", "Baldur", "Baltasar",
  "Balthasar", "Barbara", "Barbel", "Barbro", "Barry", "Bart", "Bartholomaus", "Bartolome", "Bartolomeo", "Bas",
  "Basilio", "Bastiaan", "Bastian", "Baudelio", "Bautista", "Bayram", "Beata", "Beate", "Beatrice", "Beatrix",
  "Beatriz", "Beau", "Becky", "Begona", "Bekir", "Bela", "Belen", "Belinda", "Bella", "Ben",
  "Benedetto", "Benedicte", "Benedikt", "Benedikte", "Benedita", "Bengt", "Benigna", "Benigno", "Benita", "Benito",
  "Benjamim", "Benjamin", "Benn", "Benno", "Benny", "Benoit", "Bent", "Bente", "Benthe", "Benvenuto",
  "Beppe", "Berat", "Berend", "Berenice", "Berit", "Bernabe", "Bernadette", "Bernard", "Bernarda", "Bernardino",
  "Bernardita", "Bernardo", "Bernd", "Bernd-Dieter", "Berndt", "Bernfried", "Bernhard", "Bernhardine", "Bernt", "Bernward",
  "Bert", "Berta", "Bertha", "Berthold", "Bertil", "Berto", "Bertold", "Bertram", "Bertrand", "Beth",
  "Bethan", "Bethany", "Betina", "Betti", "Bettina", "Betty", "Beverley", "Beverly", "Biagio", "Bianca",
  "Bianka", "Bibi", "Bibiana", "Bienvenida", "Bilal", "Bill", "Billie-Jo", "Billy", "Birger", "Birgid",
  "Birgit", "Birgitt", "Birgitta", "Birgitte", "Birte", "Birthe", "Bitten", "Bjarne", "Bje", "Bjorn",
  "Bjrg", "Bjrn", "Blaine", "Blake", "Blanaid", "Blanca", "Blanka", "Blas", "Bo", "Boaz",
  "Bob", "Bobby", "Bodil", "Bodo", "Boe", "Boel", "Bogdan", "Bonifacio", "Bonnie", "Boris",
  "Borja", "Borje", "Borris", "Bozena", "Brad", "Bradley", "Brady", "Bram", "Brandi", "Brandon",
  "Brandy", "Branka", "Branko", "Breandan", "Breanna", "Brenda", "Brendan", "Brent", "Brett", "Brge",
  "Brian", "Briana", "Brianna", "Bridget", "Brigid", "Brigida", "Brigitta", "Brigitte", "Brit", "Brita",
  "Britt", "Britt-Marie", "Britta", "Brittany", "Brittney", "Brogan", "Bronach", "Bronagh", "Brooke", "Brooklyn",
  "Bror", "Bruce", "Bruna", "Brunhild", "Brunhilde", "Bruni", "Brunilda", "Bruno", "Bryan", "Bryce",
  "Bryony", "Buenaventura", "Burckhard", "Burghard", "Burkard", "Burkhard", "Cacilia", "Cacilie", "Caetana", "Cahal",
  "Cahir", "Cailin", "Cailum", "Caitlin", "Caitlyn", "Caitriona", "Cal", "Calcedonio", "Caleb", "Calista",
  "Calisto", "Calixta", "Calixto", "Callan", "Callum", "Calogero", "Calum", "Calvin", "Cameron", "Camila",
  "Camilla", "Camille", "Camillo", "Camilo", "Canan", "Candace", "Candela", "Candelaria", "Candelario", "Candelas",
  "Candice", "Candida", "Candido", "Caoilfhionn", "Caoimhe", "Caoimhin", "Caolain", "Caolan", "Caomhan", "Capucine",
  "Cara", "Caragh", "Caren", "Caridad", "Carin", "Carina", "Carita", "Carl", "Carl-Heinz", "Carla",
  "Carlijn", "Carlito", "Carlo", "Carlos", "Carlota", "Carly", "Carmel", "Carmela", "Carmelita", "Carmelo",
  "Carmen", "Carmina", "Carmine", "Carminho", "Carol", "Carola", "Carole", "Carolin", "Carolina", "Caroline",
  "Carolyn", "Carrie", "Carsten", "Carter", "Cas", "Casandra", "Casemiro", "Casey", "Casper", "Cassandra",
  "Cassidy", "Cassie", "Catalina", "Catarina", "Caterina", "Cathal", "Catharina", "Catherine", "Cathleen", "Cathrine",
  "Cathy", "Cato", "Catrin", "Catrine", "Catriona", "Cayetana", "Cayetano", "Ceara", "Cebrian", "Cecile",
  "Cecilia", "Cecilie", "Cecilio", "Ceferino", "Celal", "Celestina", "Celestino", "Celia", "Celina", "Celine",
  "Celso", "Cemal", "Cemil", "Centa", "Cesar", "Cesare", "Cetin", "Ceylin", "Chad", "Chantal",
  "Chantel", "Chantelle", "Charis", "Charlene", "Charles", "Charlie", "Charlott", "Charlotta", "Charlotte", "Charo",
  "Chase", "Che", "Chelo", "Chelsea", "Chelsey", "Chema", "Cherie", "Cherith", "Cheryl", "Cheyenne",
  "Chiara", "Chita", "Chloe", "Chris", "Christa", "Christel", "Christelle", "Christer", "Christian", "Christiane",
  "Christie", "Christin", "Christina", "Christine", "Christl", "Christof", "Christofer", "Christoffer", "Christoph", "Christophe",
  "Christopher", "Christos", "Christy", "Chucho", "Chus", "Chuy", "Cianan", "Ciara", "Ciaran", "Ciarrai",
  "Cillian", "Cindy", "Cintia", "Cipriano", "Ciriaco", "Cirillo", "Cirino", "Cirkeline", "Ciro", "Claas",
  "Claes", "Claire", "Clara", "Clare", "Clarence", "Clarisa", "Clarissa", "Clark", "Clas", "Claude",
  "Claudia", "Claudine", "Claudio", "Claudius", "Claus", "Claus-Dieter", "Claus-Peter", "Clavs", "Clayton", "Clelia",
  "Clemence", "Clemens", "Clemente", "Clementina", "Cleto", "Clifford", "Climaco", "Clinton", "Cliodhna", "Cliona",
  "Clive", "Clodagh", "Cloe", "Clotilde", "Codie", "Cody", "Cole", "Colette", "Colin", "Colleen",
  "Collette", "Collin", "Colm", "Colton", "Coluccio", "Colum", "Conal", "Conall", "Conan", "Concepcion",
  "Concetta", "Concha", "Conchur", "Conn", "Connie", "Connor", "Conny", "Conor", "Conrad", "Conrado",
  "Constanca", "Constance", "Constantin", "Constanza", "Constanze", "Consuela", "Consuelo", "Cora", "Coral", "Cordula",
  "Corey", "Corina", "Corinna", "Corinne", "Coriolano", "Cormac", "Cornelia", "Cornelio", "Cornelis", "Cornelius",
  "Corona", "Corrado", "Corrie", "Cortney", "Cory", "Cosimo", "Cosme", "Costantino", "Costanzo", "Courteney",
  "Courtney", "Craig", "Crescencia", "Cristian", "Cristiano", "Cristina", "Cristobal", "Cruz", "Crystal", "Curro",
  "Curt", "Curtis", "Custodia", "Custodio", "Cynthia", "Czeslaw", "Daan", "Dafne", "Dag", "Dagmar",
  "Dagny", "Dagobert", "Daire", "Dairine", "Daisy", "Dajana", "Dakota", "Dale", "Dalila", "Dalton",
  "Damian", "Damiano", "Damien", "Damon", "Dan", "Dana", "Dani", "Danica", "Daniel", "Daniela",
  "Daniele", "Daniella", "Danielle", "Danilo", "Danique", "Danny", "Dante", "Danuta", "Daphne", "Dara"
];

const RANDOM_SURNAMES = [
  "Adams", "Allen", "Anderson", "Bailey", "Baker", "Barnes", "Bell", "Bennett", "Brooks", "Brown",
  "Bryant", "Butler", "Campbell", "Carter", "Clark", "Coleman", "Collins", "Cook", "Cooper", "Cox",
  "Davis", "Diaz", "Edwards", "Evans", "Fisher", "Flores", "Foster", "Garcia", "Gomez", "Gonzalez",
  "Gray", "Green", "Griffin", "Hall", "Harris", "Hayes", "Henderson", "Hernandez", "Hill", "Howard",
  "Hughes", "Jackson", "James", "Jenkins", "Johnson", "Jones", "Kelly", "King", "Lee", "Lewis",
  "Long", "Lopez", "Martin", "Martinez", "Miller", "Mitchell", "Moore", "Morgan", "Morris", "Murphy",
  "Nelson", "Parker", "Perez", "Perry", "Peterson", "Phillips", "Powell", "Price", "Ramirez", "Reed",
  "Richardson", "Rivera", "Roberts", "Robinson", "Rodriguez", "Rogers", "Ross", "Russell", "Sanchez", "Scott",
  "Smith", "Stewart", "Taylor", "Thomas", "Thompson", "Torres", "Turner", "Walker", "Ward", "Washington",
  "Watson", "White", "Williams", "Wilson", "Wood", "Wright", "Young"
];

const DATA = {"dnd":{"label":"D&D","secondaryLabel":"Class","races":{"Human":{"p":["Al","Ar","Ben","Cal","Cor","Ed","Gar","Har","Jon","Mar","Ren","Val"],"s":["ald","an","ard","en","ian","ric","ton","ward"],"n":["Ashford","Blackwood","Brightwood","Hawthorne","Ironvale","Ravenwood","Stormward","Westbrook"]},"Elf":{"p":["Ae","Ael","Cael","Ela","Fae","Ili","Lora","Nae","Syl","Tha"],"s":["ael","dell","iel","lith","nor","riel","thir","wyn"],"n":["Dawnbranch","Moonwhisper","Nightbreeze","Silverleaf","Starbloom","Willowshade"]},"Dwarf":{"p":["Brom","Brun","Dorn","Dur","Kaz","Khar","Mor","Thor"],"s":["bek","din","dor","gar","grim","rik","rum"],"n":["Anvilborn","Deepforge","Goldmantle","Ironhammer","Stonebeard"]},"Halfling":{"p":["Bim","Meri","Per","Pip","Ros","Sam","Tob","Wil"],"s":["bell","bin","bur","kin","ley","wick","wise"],"n":["Brushbrook","Goodbarrel","Greenhill","Softstep","Underbough"]},"Gnome":{"p":["Bix","Fizz","Gim","Nib","Pip","Tink","Wob","Zan"],"s":["bit","fizz","gle","kin","nip","wick","zzle"],"n":["Brassbutton","Copperspark","Gearwhistle","Quickgear","Tinkertop"]},"Tiefling":{"p":["Az","Bel","Khar","Mal","Nyx","Vael","Vor","Xan","Zar"],"s":["dros","ira","rax","thys","vex","zar"],"n":["Ashmark","Emberveil","Hellwhisper","Nightscar","Shadowbrand"]},"Dragonborn":{"p":["Arj","Bal","Dra","Ghar","Kriv","Rhogar","Tor","Vrak"],"s":["ash","ax","ir","oth","rax","ur"],"n":["Emberscale","Flamecrest","Ironscale","Stormclaw","Wyrmblood"]},"Half-Orc":{"p":["Brak","Drog","Gar","Gor","Grak","Karg","Mog","Urz"],"s":["ak","gar","gash","mok","ruk","ug"],"n":["Bonebreaker","Ironjaw","Redfang","Skullsplitter","Wolfscar"]}},"secondary":{"Barbarian":{"c":["rage","wild","storm","blood"],"t":["the Unbroken","the Wild","Fury of the North","the Mountain's Roar"]},"Bard":{"c":["song","verse","chime","tale"],"t":["the Silver-Tongued","Keeper of Tales","the Wandering Minstrel","Voice of the Vale"]},"Cleric":{"c":["dawn","faith","light","grace"],"t":["the Blessed","Bearer of the Dawn","the Devout","Keeper of the Flame"]},"Druid":{"c":["briar","grove","moss","thorn"],"t":["of the Ancient Grove","the Greenwarden","Friend of Beasts","the Rootbound"]},"Fighter":{"c":["blade","guard","iron","steel"],"t":["the Resolute","Shield of the Realm","the Veteran","Master of Blades"]},"Monk":{"c":["calm","echo","wind","spirit"],"t":["the Still Hand","Walker of the Quiet Path","the Centered","the Unshaken"]},"Paladin":{"c":["oath","valor","light","justice"],"t":["the Oathbound","Hammer of Justice","the Radiant","Shield of the Innocent"]},"Ranger":{"c":["arrow","trail","hawk","wood"],"t":["the Farstrider","Warden of the Wilds","the Keen-Eyed","Pathfinder"]},"Rogue":{"c":["shade","whisper","night","quick"],"t":["the Unseen","Shadow of the Alley","the Quick-Handed","the Fox"]},"Sorcerer":{"c":["spark","ember","arcane","flare"],"t":["the Spellborn","the Unbound","Heir of Magic","the Arcane Flame"]},"Warlock":{"c":["void","hex","shadow","rune"],"t":["the Pactbound","Whisperer of the Void","the Marked","Keeper of Forbidden Runes"]},"Wizard":{"c":["rune","spell","star","sage"],"t":["the Learned","Master of the Arcane","the Runekeeper","Sage of the Seven Towers"]}}},"skyrim":{"label":"Skyrim","secondaryLabel":"Archetype","races":{"Nord":{"p":["Alf","Brynj","Eir","Falk","Hal","Hjal","Rag","Sven","Tor","Yng"],"s":["ar","eif","olf","rik","sten","var"],"n":["Battle-Born","Frost-Blood","Ice-Vein","Snow-Strider","Storm-Cloak","Wolf-Heart"]},"Breton":{"p":["Ama","Cas","Cor","Elo","Gau","Luc","Mar","Ren","Seb","Tri"],"s":["ard","elle","ien","ier","mont","ric"],"n":["Beauchamp","Dufort","Montclair","Renoit","Varro"]},"Imperial":{"p":["Ael","Cass","Dec","Gai","Jul","Mar","Oct","Ser","Tit","Val"],"s":["ian","io","ius","or","us","o"],"n":["Aventus","Carvain","Marcellus","Septima","Varian"]},"Redguard":{"p":["Aza","Cas","Fari","Hak","Jal","Kem","Naz","Rai","Sam","Zaf"],"s":["ad","im","ir","ra","ud","za"],"n":["al-Akir","at-Fada","Rihad","Sahan","Sentinel"]},"High Elf":{"p":["Ael","Cal","Eli","Eran","Fal","Lau","Nar","Ond","Sin","Van"],"s":["amil","andil","ion","ir","or","we"],"n":["Aelorin","Calion","Larethor","Niranye","Valinor"]},"Wood Elf":{"p":["Aen","Brel","Cir","Erd","Fae","Gla","Lir","Mel","Nim","Thil"],"s":["adil","eth","iel","il","ir","las"],"n":["Green-Bough","Leaf-Runner","Mossfoot","Silverbark","Wildsong"]},"Dark Elf":{"p":["Aro","Dra","Ere","Fal","Gav","Mav","Nel","Rav","Seryn","Var"],"s":["as","eth","is","os","rys","yn"],"n":["Dren","Hlaalu","Indoril","Redoran","Sadras","Telvanni"]},"Orc":{"p":["Bag","Baz","Borg","Dur","Ghor","Gro","Khar","Mog","Shag","Urz"],"s":["ak","ash","bul","dak","grub","zug"],"n":["gro-Batul","gro-Khazgur","gra-Malog","gro-Orsinium","gra-Shatul"]},"Khajiit":{"p":["Dar","Do","J'","Jo","Khar","M'","Ra'","Ri'","S'","Za'"],"s":["dar","jo","kir","ra","rasha","zirr"],"n":["Bright-Claw","Dune-Walker","Moon-Sugar","Night-Paw","Soft-Step"]},"Argonian":{"p":["Beem","Dee","Haj","Jaree","Keer","Mee","Neet","Ocheeva","Teeba","Veez"],"s":["eesh","ei","jeen","ra","us","za"],"n":["Hides-the-Ashes","Reads-the-Stars","Runs-With-Rivers","Sees-All-Colors","Walks-In-Mist"]}},"secondary":{"Warrior":{"c":["blade","iron","shield","war"],"t":["the Unbroken","Shield-Thane","the Battle-Hardened","Breaker of Foes"]},"Mage":{"c":["rune","spell","frost","ember"],"t":["the Arcane","Master of the College","the Rune-Wise","Binder of Elements"]},"Thief":{"c":["shadow","coin","quick","night"],"t":["the Unseen","Night's Hand","the Quick-Fingered","Walker in Shadow"]},"Assassin":{"c":["silence","shade","dusk","venom"],"t":["the Silent","Listener in Darkness","the Veiled Blade","Shadow of Sithis"]},"Companion":{"c":["wolf","honor","steel","mead"],"t":["of the Circle","the Shield-Sibling","Wolf of Jorrvaskr","the Honored"]},"Dragonborn":{"c":["voice","wyrm","sky","thu'um"],"t":["Dovahkiin","the Dragonborn","Stormcrown","Bearer of the Voice"]},"Vampire Hunter":{"c":["dawn","sun","silver","flame"],"t":["of the Dawnguard","Scourge of the Night","the Sun-Blessed","Hunter of the Undead"]},"Necromancer":{"c":["grave","bone","soul","crypt"],"t":["the Death-Weaver","Speaker for the Dead","the Pale","Master of the Crypt"]},"Knight":{"c":["oath","crown","guard","valor"],"t":["the Oathbound","Keeper of the Hold","the Stalwart","Sword of the Jarl"]},"Ranger":{"c":["pine","arrow","trail","hawk"],"t":["the Far-Walker","Warden of the Reach","the Keen-Eyed","Pathfinder of Skyrim"]}}}};

const $ = id => document.getElementById(id);
const elements = { tabs:[...document.querySelectorAll(".tab")], name:$("originalName"), race:$("race"), secondary:$("characterClass"), style:$("nameStyle"), randomRace:$("randomRace"), randomClass:$("randomClass"), includeTitle:$("includeTitle"), classLabel:$("classLabel"), generate:$("generateButton"), output:$("generatedName"), details:$("generatedDetails"), copy:$("copyButton"), favorite:$("favoriteButton"), favoritesList:$("favoritesList"), emptyFavorites:$("emptyFavorites"), clearFavorites:$("clearFavorites") };
let game="dnd", currentResult=null, favorites=loadFavorites();
const pick = items => items[Math.floor(Math.random()*items.length)];
const titleCase = value => value ? value.charAt(0).toUpperCase()+value.slice(1).toLowerCase() : "";
const cleanWords = value => value.replace(/[^A-Za-zÀ-ÖØ-öø-ÿ' -]/g," ").trim().split(/\s+/).filter(Boolean);
const clampWord = (value,max) => value.length<=max ? value : value.slice(0,max);
const randomKey = object => pick(Object.keys(object));
function fragment(word,min,max){const clean=word.replace(/[^A-Za-z]/g,"");if(!clean)return "";const limit=Math.min(clean.length,Math.max(min,Math.floor(Math.random()*(max-min+1))+min));return titleCase(clean.slice(0,limit));}
function populateControls(){const c=DATA[game];elements.race.innerHTML=Object.keys(c.races).map(v=>`<option>${v}</option>`).join("");elements.secondary.innerHTML=Object.keys(c.secondary).map(v=>`<option>${v}</option>`).join("");elements.classLabel.textContent=c.secondaryLabel;elements.randomClass.parentElement.lastChild.textContent=` Random ${c.secondaryLabel.toLowerCase()}`;}
function buildName(){
  const config=DATA[game];

  // If the field is blank, create a random two-word seed.
  // If the user enters one or more words, use only those words.
  let inputName=elements.name.value.trim();
  const usedRandomSeed=inputName.length===0;
  if(usedRandomSeed){
    inputName=`${pick(RANDOM_FIRST_NAMES)} ${pick(RANDOM_SURNAMES)}`;
  }

  const words=cleanWords(inputName);
  const normalizedWords=words.map(titleCase);
  const race=elements.randomRace.checked?randomKey(config.races):elements.race.value;
  const secondary=elements.randomClass.checked?randomKey(config.secondary):elements.secondary.value;
  const style=elements.style.value;
  const raceData=config.races[race];
  const secondaryData=config.secondary[secondary];
  const settings={
    short:{min:2,max:3,firstCap:9,middleCap:10,lastCap:11,titleChance:.62},
    normal:{min:3,max:4,firstCap:12,middleCap:13,lastCap:15,titleChance:.82},
    epic:{min:4,max:5,firstCap:18,middleCap:18,lastCap:22,titleChance:1}
  }[style];

  function transformGivenName(word,index){
    const frag=fragment(word,settings.min,settings.max);
    const prefix=pick(raceData.p);
    const suffix=pick(raceData.s);
    const connector=pick(secondaryData.c);
    let patterns;
    if(style==="short"){
      patterns=[frag,`${frag}${suffix}`,`${prefix}${frag}`];
    }else if(style==="normal"){
      patterns=[`${frag}${suffix}`,`${prefix}${frag}`,`${frag}${connector}`,`${prefix}${frag}${suffix}`,`${word}${suffix}`];
    }else{
      patterns=[`${prefix}${frag}${suffix}`,`${frag}${connector}${suffix}`,`${prefix}${word}`,`${word}${connector}`,`${prefix}${frag}${connector}${suffix}`];
    }
    return clampWord(titleCase(pick(patterns)),index===0?settings.firstCap:settings.middleCap);
  }

  function transformLastName(word){
    const frag=fragment(word,settings.min,settings.max);
    const generatedRaceSurname=pick(raceData.n);
    const patterns=style==="short"
      ? [frag,`${frag}${pick(raceData.s)}`,generatedRaceSurname]
      : [`${frag}${pick(raceData.s)}`,generatedRaceSurname,`${pick(raceData.p)}${frag}`];
    return clampWord(titleCase(pick(patterns)),settings.lastCap);
  }

  let transformedWords=[];
  if(normalizedWords.length===1){
    // A provided single first name remains a single generated name.
    // No random or race surname is added.
    transformedWords=[transformGivenName(normalizedWords[0],0)];
  }else{
    // Support first, middle, and last names of any length.
    // Every middle word is transformed instead of being discarded.
    const first=transformGivenName(normalizedWords[0],0);
    const middle=normalizedWords.slice(1,-1).map((word,index)=>transformGivenName(word,index+1));
    const last=transformLastName(normalizedWords[normalizedWords.length-1]);
    transformedWords=[first,...middle,last];
  }

  const title=elements.includeTitle.checked&&Math.random()<settings.titleChance?pick(secondaryData.t):"";
  const baseName=transformedWords.join(" ");
  const fullName=title?`${baseName}, ${title}`:baseName;

  return {
    fullName,
    game:config.label,
    race,
    secondary,
    style:titleCase(style),
    original:normalizedWords.join(" "),
    usedRandomSeed
  };
}
function displayResult(r){currentResult=r;elements.output.textContent=r.fullName;const note=r.usedRandomSeed?` • Random seed: ${r.original}`:"";elements.details.textContent=`${r.game} • ${r.race} • ${r.secondary} • ${r.style}${note}`;elements.copy.disabled=false;elements.favorite.disabled=false;}
function generate(){displayResult(buildName());}
async function copyCurrent(){if(!currentResult)return;try{await navigator.clipboard.writeText(currentResult.fullName);elements.copy.textContent="Copied";}catch{const a=document.createElement("textarea");a.value=currentResult.fullName;document.body.appendChild(a);a.select();document.execCommand("copy");a.remove();elements.copy.textContent="Copied";}setTimeout(()=>elements.copy.textContent="Copy",1200);}
function loadFavorites(){try{return JSON.parse(localStorage.getItem("fantasyNameForgeFavorites")||"[]");}catch{return [];}}
function saveFavorites(){localStorage.setItem("fantasyNameForgeFavorites",JSON.stringify(favorites));}
function addFavorite(){if(!currentResult||favorites.some(i=>i.fullName===currentResult.fullName))return;favorites.unshift(currentResult);favorites=favorites.slice(0,50);saveFavorites();renderFavorites();elements.favorite.textContent="Saved";setTimeout(()=>elements.favorite.textContent="Add favorite",1200);}
function removeFavorite(i){favorites.splice(i,1);saveFavorites();renderFavorites();}
function renderFavorites(){elements.favoritesList.innerHTML="";elements.emptyFavorites.hidden=favorites.length>0;favorites.forEach((item,index)=>{const li=document.createElement("li");li.className="favorite-item";const content=document.createElement("div"),name=document.createElement("span"),meta=document.createElement("div"),remove=document.createElement("button");name.className="favorite-name";name.textContent=item.fullName;meta.className="favorite-meta";meta.textContent=`${item.game} • ${item.race} • ${item.secondary} • ${item.style}`;remove.className="remove-favorite";remove.type="button";remove.textContent="Remove";remove.setAttribute("aria-label",`Remove ${item.fullName}`);remove.addEventListener("click",()=>removeFavorite(index));content.append(name,meta);li.append(content,remove);elements.favoritesList.appendChild(li);});}
function switchGame(next){game=next;elements.tabs.forEach(tab=>{const selected=tab.dataset.game===game;tab.classList.toggle("active",selected);tab.setAttribute("aria-selected",String(selected));tab.setAttribute("tabindex",selected?"0":"-1");});populateControls();currentResult=null;elements.output.textContent="Your name will appear here";elements.details.textContent="Choose your options and press Generate name.";elements.copy.disabled=true;elements.favorite.disabled=true;}
elements.tabs.forEach(tab=>tab.addEventListener("click",()=>switchGame(tab.dataset.game)));elements.generate.addEventListener("click",generate);elements.name.addEventListener("keydown",e=>{if(e.key==="Enter")generate();});elements.copy.addEventListener("click",copyCurrent);elements.favorite.addEventListener("click",addFavorite);elements.clearFavorites.addEventListener("click",()=>{favorites=[];saveFavorites();renderFavorites();});elements.randomRace.addEventListener("change",()=>elements.race.disabled=elements.randomRace.checked);elements.randomClass.addEventListener("change",()=>elements.secondary.disabled=elements.randomClass.checked);populateControls();renderFavorites();
