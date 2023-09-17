//questions object
const questions = [
    {
    'question':'What does BMW stand for (in english) ?',
    'answer':'bavarian motor works',
    'options':['be my wife', 'beemer motor works', 'bayerische motoren werke', 'bentego monro wheels'],
    'theme':'car',
    'hint':'Nicknamed Beamer'
    },
    {
    'question':'What car brand is known for its "mustang" model?',
    'answer':'ford',
    'options':['ford', 'dodge', 'volkswagen', 'tesla'],
    'theme':'car',
    'hint':'The brand is named after it founder henry'
    },
    {
    'question':'What luxury car brand features a logo with interlocking rings?',
    'answer':'audi',
    'options':['honda', 'mclaren', 'audi', 'ford'],
    'theme':'car',
    'hint':'The brand is german and got its name from the latin translation of the founder\'s surname August Horch, which means "listen".'
    },
    {
    'question':'What does "ABS" stand for in relation to car safety?',
    'answer':'anti-lock braking system',
    'options':['assured braking safety', 'anti-lock braking system', 'advanced braking system', 'accelerated braking solution'],
    'theme':'car',
    'hint':'It is a safety feature that keeps the wheels of a car from locking up.'
    },
    {
    'question':'What is the world\'s best-selling electric car model?',
    'answer':'nissan leaf',
    'options':['tesla', 'nissan leaf', 'chevrolet', 'toyota'],
    'theme':'car',
    'hint':'Partly named after its producer, which was founded by kwaishinsha motor car works.'
    },
    {
    'question':'What do the letters "GT" typically stand for in car model names?',
    'answer':'grand touring',
    'options':['grand theft', 'gas turbine', 'grand touring', 'grand tour'],
    'theme':'car',
    'hint':'Also known as a Gran Turismo vehicle.'
    },
    {
    'question':'What type of car has an open-top and two seats?',
    'answer':'roadster',
    'options':['roadster', 'convertible', 'coup', 'supercar'],
    'theme':'car',
    'hint':'Nicknamed the spider or spyder.'
    },
    {
    'question':'What type of transmission allows a driver to manually change gears?',
    'answer':'manual transmission',
    'options':['dual-clutch transmission', 'semi-automatic transmission', 'tiptronic transmission', 'manual transmission'],
    'theme':'car',
    'hint':'These vehicle are sometimes referred to as stick-shift.'
    },
    {
    'question':'Which British car manufacturer is famous for its luxurious "Phantom" model?',
    'answer':'rolls-royce',
    'options':['ariel', 'aston martin', 'lotus', 'rolls-royce'],
    'theme':'car',
    'hint':'Founded by Charles Rolls and Henry Royce.'
    },
    {
    'question':'Which company makes the "Model S" an electric luxury sedan?',
    'answer':'tesla',
    'options':['ferrari', 'tesla', 'nobel', 'rolls-royce'],
    'theme':'car',
    'hint':'It is an American electric vehisle (EV) and clean energy company.'
    },
    {
    'question':'What German car brand is known for its "beetle" model?',
    'answer':'volkswagen(VW)',
    'options':['porsche', 'audi', 'volkswagen(VW)', 'rolls-royce'],
    'theme':'car',
    'hint':'The brand name translates to "People\'s Car".'
    },
    {
    'question':'What do you call a car with a roof that can be folded down or removed?',
    'answer':'convertible',
    'options':['coup', 'off-road vehicle', 'luxury', 'convertible'],
    'theme':'car',
    'hint':'Convertibles are often associated with sunny and warm weather.'
    },
    {
    'question':'What Japanese automaker produces the "Civic" and "Accord" models ?',
    'answer':'honda',
    'options':['toyota', 'honda', 'nissan', 'convertible'],
    'theme':'car',
    'hint':'The two models are the automaker\'s most iconic and popular model.'
    },
    {
    'question':'What car brand features a logo with a T-shaped emblem?',
    'answer':'tesla',
    'options':['ferrari', 'tesla', 'volkswagen(VW)', 'audi'],
    'theme':'car',
    'hint':'The American car brand is an electric vehicle (EV) and clean energy company, known for its groundbreaking work in the automotive and energy sectors.'
    },
    {
    'question':'Which Italian car manufacturer is famous for producing the "LaFerrari"?',
    'answer':'ferrari',
    'options':['ferrari', 'pagani', 'abarth', 'lancia'],
    'theme':'car',
    'hint':'The company logo is a prancing horse.'
    },
    {
    'question':'What does "SUV" stand for in the context of cars?',
    'answer':'sport utility vehicle',
    'options':['status and utility vehicle', 'sport utility vehicle', 'small uber vehicle', 'suburban utility vehicle'],
    'theme':'car',
    'hint':'SUVs are usually all wheel drive(AWD) or four-wheel drive(4WD) systems.'
    },
    {
    'question':'Which car company produces the "Wrangler" and "Cherokee" models?',
    'answer':'jeep',
    'options':['maserati', 'alfa romeo', 'lancia', 'jeep'],
    'theme':'car',
    'hint':'In Nigeria people often use the company\'s name to refer to SUVs.'
    },
    {
    'question':'What car brand is famous for its "Polo" and "Golf" models?',
    'answer':'volkswagen (VW)',
    'options':['opei', 'morgan', 'volkswagen (VW)', 'bently'],
    'theme':'car',
    'hint':'Also the producer of the famous 504.'
    },
    {
    'question':'What is the term for the opening on a car\'s roof that can be covered or removed?',
    'answer':'sunroof',
    'options':['sunroof', 'convertible', 'sunscreen', 'coup'],
    'theme':'car',
    'hint':'its a small hatch at the top of the roof.'
    },
    {
    'question':'Which japanese car brand is known for its "Outlander" ams "lancer" models?',
    'answer':'mitsubishi',
    'options':['pagani', 'maserati', 'mitsubishi', 'lancia'],
    'theme':'car',
    'hint':'purpolar in nigeria for it\'s motor bikes'
    },
    {
    'question':'What is the term for a car that uses both a gasoline engine and an electric motor for power?',
    'answer':'hybrid',
    'options':['pickup truck', 'hybrid', 'plug-in hybrid', 'hyundia'],
    'theme':'car',
    'hint':'also means an offspring produced from a cross between parents of different species or sub-species.'
    },
    {
    'question':'Which singer\'s real name is Robyn Fenty ?',
    'answer':'rihana',
    'options':['rihana','drake','beyonce','helsey lu'],
    'theme':'fashion',
    'hint':'Also has a fashion brand by the same name.'
    },
    {
      'question': "What is the term for a small, decorative piece of jewelry often worn on a shirt's collar?",
      'answer': "A lapel pin",
      'options': ["A cufflink", "A lapel pin", "A necklace", "A brooch"],
      'theme':'fashion',
      'hint': "It adds a touch of style to formalwear."
    },
    {
      'question': "Which fashion designer is known for the creation of the little black dress (LBD)?",
      'answer': "Coco Chanel",
      'options': ["Versace", "Coco Chanel", "Calvin Klein", "Giorgio Armani"],
      'theme':'fashion',
      'hint': "She was a French icon of style."
    },
    {
      'question': "What type of clothing is characterized by a tartan pattern of vertical and horizontal stripes in various colors?",
      'answer': "A kilt",
      'options': ["A kimono", "A kilt", "A tuxedo", "A poncho"],
      'theme':'fashion',
      'hint': "It's traditional Scottish attire."
    },
    {
      'question': "Which accessory is a long, narrow piece of fabric typically worn around the neck as a fashion statement?",
      'answer': "A scarf",
      'options': ["A belt", "A scarf", "A tiara", "A glove"],
      'theme':'fashion',
      'hint': "It keeps you warm and stylish in cold weather."
    },
    {
      'question': "What type of footwear has a red sole and is famously associated with Christian Louboutin?",
      'answer': "Red-bottom heels",
      'options': ["Stiletto boots", "Platform sneakers", "Red-bottom heels", "Espadrilles"],
      'theme':'fashion',
      'hint': "They're considered a luxury fashion item."
    },
    {
      'question': "What type of hat is known for its round, flat crown and wide, flat brim?",
      'answer': "A fedora",
      'options': ["A baseball cap", "A sunhat", "A fedora", "A beanie"],
      'theme':'fashion',
      'hint': "It's often worn by stylish detectives in old movies."
    },
    {
      'question': "Which fashion brand uses a logo featuring two interlocking 'C's?",
      'answer': "Chanel",
      'options': ["Gucci", "Prada", "Chanel", "Louis Vuitton"],
      'theme':'fashion',
      'hint': "It's a famous French luxury brand."
    },
    {
      'question': "What type of handbag is shaped like a half-moon and often worn over the shoulder?",
      'answer': "A hobo bag",
      'options': ["A clutch", "A tote bag", "A hobo bag", "A backpack"],
      'theme':'fashion',
      'hint': "It's known for its slouchy, casual style."
    },
    {
      'question': "What is the term for the decorative metal or plastic fasteners used on clothing, especially for coats and jackets?",
      'answer': "Buttons",
      'options': ["Zippers", "Snaps", "Buttons", "Buckles"],
      'theme':'fashion',
      'hint': "They come in various shapes and sizes."
    },
    {
      'question': "What type of eyewear is characterized by its large, round lenses and is associated with the 1960s counterculture?",
      'answer': "John Lennon-style glasses",
      'options': ["Aviator sunglasses", "Cat-eye glasses", "John Lennon-style glasses", "Wayfarer glasses"],
      'theme':'fashion',
      'hint': "They were popularized by a famous musician."
    },
    {
      'question': "Which famous fashion designer is known for creating the wrap dress?",
      'answer': "Diane von Fürstenberg",
      'options': ["Coco Chanel", "Calvin Klein", "Diane von Fürstenberg", "Donatella Versace"],
      'theme':'fashion',
      'hint': "She's known for her iconic 1970s design."
    },
    {
      'question': "What is the traditional Scottish dress for men that includes a plaid kilt and knee-high socks?",
      'answer': "A Highland dress",
      'options': ["A Tuxedo", "A Kimono", "A Highland dress", "A Poncho"],
      'theme':'fashion',
      'hint': "It's often worn at formal Scottish events."
    },
    {
      'question': "Which fashion accessory became popular in the 1960s and is characterized by its psychedelic patterns and bright colors?",
      'answer': "A tie-dye shirt",
      'options': ["A leather jacket", "A tie-dye shirt", "A bowtie", "A pashmina"],
      'theme':'fashion',
      'hint': "It's associated with the hippie culture."
    },
    {
      'question': "What is the name of the traditional Japanese garment known for its colorful, intricate patterns?",
      'answer': "A kimono",
      'options': ["A sari", "A kimono", "A tunic", "A poncho"],
      'theme':'fashion',
      'hint': "It's often worn on special occasions in Japan."
    },
    {
      'question': "Which fashion designer is famous for introducing the \"Little Blue Dress\"?",
      'answer': "Ralph Lauren",
      'options': ["Vera Wang", "Ralph Lauren", "Tom Ford", "Stella McCartney"],
      'theme':'fashion',
      'hint': "He's known for his American fashion brand."
    },
    {
      'question': "What is the term for a fashion trend characterized by a revival of styles from a previous era?",
      'answer': "Retro fashion",
      'options': ["Vintage style", "Retro fashion", "Modern chic", "Boho fashion"],
      'theme':'fashion',
      'hint': "It's all about nostalgia."
    },
    {
      'question': "Which popular fashion accessory is worn around the neck and is often made of silk or polyester?",
      'answer': "A necktie",
      'options': ["A choker", "A scarf", "A necktie", "A locket"],
      'theme':'fashion',
      'hint': "It's commonly associated with formal attire."
    },
    {
      'question': "What type of footwear is designed for sports and physical activity, featuring cushioning and support?",
      'answer': "Sneakers",
      'options': ["Loafers", "Sneakers", "Espadrilles", "Mules"],
      'theme':'fashion',
      'hint': "They're comfortable for running and walking."
    },
    {
      'question': "Which fashion brand is famous for its red, white, and blue logo with an alligator?",
      'answer': "Lacoste",
      'options': ["Ralph Lauren", "Lacoste", "Hugo Boss", "Burberry"],
      'theme':'fashion',
      'hint': "It's known for its sportswear and casual clothing."
    },
    {
      'question': "What is the term for a type of hat with a wide brim that's often associated with beachwear?",
      'answer': "A sun hat",
      'options': ["A fedora", "A beanie", "A sun hat", "A beret"],
      'theme':'fashion',
      'hint': "It provides shade on sunny days."
    },    
    {
      'question': "Which river is the longest in the world?",
      'answer': "The Nile River",
      'options': ["The Amazon River", "The Nile River", "The Yangtze River", "The Mississippi River"],
      'theme':'geography',
      'hint': "It flows through northeastern Africa."
    },
    {
      'question': "What is the capital city of Japan?",
      'answer': "Tokyo",
      'options': ["Beijing", "Seoul", "Bangkok", "Tokyo"],
      'theme':'geography',
      'hint': "It hosted the 1964 Summer Olympics."
    },
    {
      'question': "Which continent is the driest, with vast desert regions?",
      'answer': "Africa",
      'options': ["Asia", "South America", "Africa", "Australia"],
      'theme':'geography',
      'hint': "It's home to the Sahara Desert."
    },
    {
      'question': "What is the largest country by land area?",
      'answer': "Russia",
      'options': ["Canada", "United States", "China", "Russia"],
      'theme':'geography',
      'hint': "It spans across Europe and Asia."
    },
    {
      'question': "Which mountain range forms the border between Europe and Asia?",
      'answer': "The Ural Mountains",
      'options': ["The Alps", "The Ural Mountains", "The Rocky Mountains", "The Andes"],
      'theme':'geography',
      'hint': "It's often considered the boundary."
    },
    {
      'question': "What is the world's smallest ocean?",
      'answer': "The Arctic Ocean",
      'options': ["The Atlantic Ocean", "The Pacific Ocean", "The Indian Ocean", "The Arctic Ocean"],
      'theme':'geography',
      'hint': "It surrounds the North Pole."
    },
    {
      'question': "Which country is known as the Land of the Rising Sun?",
      'answer': "Japan",
      'options': ["China", "South Korea", "Vietnam", "Japan"],
      'theme':'geography',
      'hint': "It's in East Asia."
    },
    {
      'question': "Which African country is famous for its pyramids?",
      'answer': "Egypt",
      'options': ["Sudan", "Nigeria", "Kenya", "Egypt"],
      'theme':'geography',
      'hint': "The Nile flows through it."
    },
    {
      'question': "What is the world's largest coral reef system?",
      'answer': "The Great Barrier Reef",
      'options': ["The Maldives", "The Galápagos Islands", "The Great Barrier Reef", "The Red Sea"],
      'theme':'geography',
      'hint': "It's located off the coast of Australia."
    },
    {
      'question': "Which city is known as the City of Seven Hills?",
      'answer': "Rome",
      'options': ["Istanbul", "Rio de Janeiro", "Rome", "Lisbon"],
      'theme':'geography',
      'hint': "It's the capital of Italy."
    },
    {
      'question': "Which African country is the most populous?",
      'answer': "Nigeria",
      'options': ["Egypt", "Nigeria", "South Africa", "Kenya"],
      'theme':'geography',
      'hint': "It's in West Africa."
    },
    {
      'question': "What is the world's highest mountain?",
      'answer': "Mount Everest",
      'options': ["K2", "Mount Kilimanjaro", "Mount McKinley", "Mount Everest"],
      'theme':'geography',
      'hint': "It's part of the Himalayas."
    },
    {
      'question': "Which river is often called the \"River of Sorrows\" due to its historical flooding?",
      'answer': "The Huang He (Yellow River)",
      'options': ["The Amazon River", "The Nile River", "The Mississippi River", "The Huang He (Yellow River)"],
      'theme':'geography',
      'hint': "It flows through China."
    },
    {
      'question': "What is the largest lake in Africa by surface area?",
      'answer': "Lake Victoria",
      'options': ["Lake Tanganyika", "Lake Malawi", "Lake Victoria", "Lake Chad"],
      'theme':'geography',
      'hint': "It's located in East Africa."
    },
    {
      'question': "Which country is the southernmost point of Africa?",
      'answer': "South Africa",
      'options': ["Namibia", "Botswana", "Zimbabwe", "South Africa"],
      'theme':'geography',
      'hint': "It's known for its diverse wildlife."
    },
    {
      'question': "What is the world's largest hot desert?",
      'answer': "The Sahara Desert",
      'options': ["The Atacama Desert", "The Arabian Desert", "The Sahara Desert", "The Gobi Desert"],
      'theme':'geography',
      'hint': "It spans across northern Africa."
    },
    {
      'question': "Which island nation is known as the \"Pearl of the Indian Ocean\"?",
      'answer': "Sri Lanka",
      'options': ["Maldives", "Madagascar", "Seychelles", "Sri Lanka"],
      'theme':'geography',
      'hint': "It's off the southeastern coast of India."
    },
    {
      'question': "What is the world's longest continental mountain range?",
      'answer': "The Andes",
      'options': ["The Rockies", "The Himalayas", "The Alps", "The Andes"],
      'theme':'geography',
      'hint': "It stretches along the western edge of South America."
    },
    {
      'question': "Which river flows through the Grand Canyon?",
      'answer': "The Colorado River",
      'options': ["The Mississippi River", "The Amazon River", "The Nile River", "The Colorado River"],
      'theme':'geography',
      'hint': "It's known for its dramatic landscapes."
    },
    {
      'question': "Which country is known as the Land Down Under?",
      'answer': "Australia",
      'options': ["New Zealand", "Australia", "Indonesia", "Fiji"],
      'theme':'geography',
      'hint': "It's also a continent."
    },
    {
    'question':'Which African counrty was formerly known as Abyssinia ?',
    'answer':'ethopia',
    'options':['ethopia','moroco','cameroon','russia'],
    'theme':['history','geography'],
    'hint':'Rhymes with uthopia.'
    },
    {
    'question':'Who was the first hausa sarauniya (queen) in history ?',
    'answer':'amina',
    'options':['aisha','zainab','amanirenas','amina'],
    'theme':'history',
    'hint':'She was a northern worrior.'
    },
    {
    'question':'He was a Nigerian activist, he fought for environmental justice in the Niger Delta ?',
    'answer':'ken saro-wiwa',
    'options':['fela kuti','ken saro-wiwa','nnimmo bassey','wole soyinka'],
    'theme':'history',
    'hint':'He was executed for his activism in the 1990.'
    },
    {
    'question':'He was a Nigerian activist, he fought for environmental justice in the Niger Delta ?',
    'answer':'ken saro-wiwa',
    'options':['fela kuti','ken saro-wiwa','nnimmo bassey','wole soyinka'],
    'theme':'history',
    'hint':'He was executed for his activism in the 1990.'
    },
    {
    'question':'What event is considered the starting point of world war 1 in 1914 ?',
    'answer':'assassination of archduke franz ferdinand',
    'options':['assassination of archduke franz ferdinand','treaty of versailles','shinking of lusitania','zimmermann telegram'],
    'theme':'history',
    'hint':'He was heir to the Austro-Hungarian throne.'
    },
    {
    'question':'It is a Nigerian state known as the "centre of excellence" ?',
    'answer':'lagos',
    'options':['lagos','abuja','rivers','kano'],
    'theme':'history',
    'hint':'Nigeria\'s most populous city is located here.'
    },
    {
    'question':'What war was fought between the Southern and Northern states of the United States from 1861 to 1865?',
    'answer':'civil war',
    'options':['american revolution','civil war','war of 1812','mexican-american war'],
    'theme':'history',
    'hint':'a conflict over slavery and states\' rights.'
    },
    {
    'question':'Which Nigerian Nobel laureate won the Nobel Prize in Literature ?',
    'answer':'wole soyinka',
    'options':['chinua achebe','wole soyinka','buchi emecheta','chimamanda ngozi adichie'],
    'theme':'history',
    'hint':'He is known for his Literature and Political Activism.'
    },
    {
    'question':'What ancient civilization built the city of petra in modern-day Jordan ?',
    'answer':'nabatean',
    'options':['nabatean','greek','roman','phoenician'],
    'theme':'history',
    'hint':'Known for its rock-cut architecture.'
    },
    {
    'question':'Who was the military leader known for his crossing of the Alps during the second Punic war ?',
    'answer':'hannibal barca',
    'options':['julius caesar','gaius marius','hannibal barca','alexander the great'],
    'theme':'history',
    'hint':'His use of elephants is legendary.'
    },
    {
    'question':'She was an egyptian queen known for her relationships with Julius Caesar and Mark Antony ?',
    'answer':'cleopatra',
    'options':['nefertiti','cleopatra','queen tiye','hatshepsut'],
    'theme':'history',
    'hint':'Her life is the stuff of legend.'
    },
    {
    'question':'Who was Nigeria\'s first female finance minister ?',
    'answer':'ngozi okonjo-iweala',
    'options':['ngozi okonjo-iweala','nenadi esther','kemi adeosun','nenadi usman'],
    'theme':'history',
    'hint':'She held this position during two different presidencies.'
    },
    {
    'question':'What was the primary source of income for Nigeria during the colonial period ?',
    'answer':'agriculture',
    'options':['oil','manufacturing','agriculture','mining'],
    'theme':'history',
    'hint':'A resource that remains crucial to Nigeria\'s economy.'
    },
    {
    'question':'He was the African leader and anti-apartheid revolutionary who became South Africa\'s first black president.',
    'answer':'nelson mandela',
    'options':['desmond tutu','steve biko','thabo mbeki','nelson mandela'],
    'theme':'history',
    'hint':'He spent 27 years in prison before his release and presidency.'
    },
    {
    'question':'Who was the first woman to fly solo across the Atlantic Ocean?',
    'answer':'amelia earhart',
    'options':['harriet quimby','amelia earhart','jacqueline cochran','bessie coleman'],
    'theme':'history',
    'hint':'She disappeared during her attempt to circumnavigate the globe.'
    },
    {
    'question':'The ship famous for sinking during its maiden voyage in 1912, was named?',
    'answer':'titanic',
    'options':['titanic','britannic','lusitania','queen mary'],
    'theme':'history',
    'hint':'The unsinkable ship.'
    },
    {
    'question':'Which year did Nigeria gain independence from British colonial rule?',
    'answer':'1960',
    'options':['1970','1960','1945','1956'],
    'theme':'history',
    'hint':'A significant year in Nigerian history.'
    },
    {
    'question':'Who was the Russian monk and mystic who influenced the Russina royal family and was later murdered?',
    'answer':'rasputin',
    'options':['rasputin','ivan the terrible','vladimir lenin','leon trotsky'],
    'theme':'history',
    'hint':'He had a controversial role in Russian history.'
    },
    {
    'question':'which Nigerian leader declared the "war against indiscipline" campaign?',
    'answer':'ibrahim babangida',
    'options':['goodluck jonathan','ibrahim babangida','muhammadu buhari','olusegun obasanjo'],
    'theme':'history',
    'hint':'Known for his strict anti-corruption stance.'
    },
    {
    'question':'which empire was ruled by Emperor Nero and is known for its grandeur and excesses?',
    'answer':'roman empire',
    'options':['roman empire','egyptian empire','byzantine empire','ottoman empire'],
    'theme':'history',
    'hint':'Associated with the Great Fire of Rome.'
    },
    {
      'question': "I speak without a mouth and hear without ears. I have no body, but I come alive with the wind. What am I?",
      'answer': "An echo",
      'options': ["A river", "A mountain", "An echo", "A tree"],
      'theme':'riddle',
      'hint': "I bounce back sound."
    },
    {
      'question': "What has keys but can't open locks?",
      'answer': "A piano",
      'options': ["A keyboard", "A piano", "A door", "A treasure chest"],
      'theme':'riddle',
      'hint': "It produces music."
    },
    {
      'question': "I'm not alive, but I can grow. I don't have lungs, but I need air. What am I?",
      'answer': "A fire",
      'options': ["A plant", "A fire", "A cloud", "A computer"],
      'theme':'riddle',
      'hint': "I give warmth and light."
    },
    {
      'question': "I'm black and white and loved all over the world. What am I?",
      'answer': "A panda",
      'options': ["A zebra", "A cow", "A panda", "A penguin"],
      'theme':'riddle',
      'hint': "I'm a rare bear."
    },
    {
      'question': "I'm a word of letters three, add two and fewer there will be. What am I?",
      'answer': "Few",
      'options': ["More", "Many", "Fewer", "None"],
      'theme':'riddle',
      'hint': "Think about the number of letters."
    },
    {
      'question': "I'm tall when I'm young and short when I'm old. What am I?",
      'answer': "A candle",
      'options': ["A tree", "A candle", "A person", "A mountain"],
      'theme':'riddle',
      'hint': "I melt as I burn."
    },
    {
      'question': "I'm full of keys, but I can't open any locks. What am I?",
      'answer': "A keyboard",
      'options': ["A treasure chest", "A door", "A keyboard", "A map"],
      'theme':'riddle',
      'hint': "I'm used for typing."
    },
    {
      'question': "I'm the beginning of the end and the end of time and space. What am I?",
      'answer': "The letter 'e'",
      'options': ["The letter 'a'", "The letter 'z'", "The letter 'e'", "The letter 'x'"],
      'theme':'riddle',
      'hint': "I'm a vowel."
    },
    {
      'question': "I'm always in front of you, but you will never see me. What am I?",
      'answer': "The future",
      'options': ["The past", "The future", "The present", "A mirror"],
      'theme':'riddle',
      'hint': "I haven't happened yet."
    },
    {
      'question': "I'm not alive, but I can die. What am I?",
      'answer': "A battery",
      'options': ["A rock", "A battery", "A cloud", "A book"],
      'theme':'riddle',
      'hint': "I power devices."
    },
    {
      'question': "I'm a word of letters three, add two and fewer there will be. What am I?",
      'answer': "Few",
      'options': ["More", "Many", "Fewer", "None"],
      'theme':'riddle',
      'hint': "Think about the number of letters."
    },
    {
      'question': "I'm tall when I'm young and short when I'm old. What am I?",
      'answer': "A candle",
      'options': ["A tree", "A candle", "A person", "A mountain"],
      'theme':'riddle',
      'hint': "I melt as I burn."
    },
    {
      'question': "I'm full of keys, but I can't open any locks. What am I?",
      'answer': "A keyboard",
      'options': ["A treasure chest", "A door", "A keyboard", "A map"],
      'theme':'riddle',
      'hint': "I'm used for typing."
    },
    {
      'question': "I'm the beginning of the end and the end of time and space. What am I?",
      'answer': "The letter 'e'",
      'options': ["The letter 'a'", "The letter 'z'", "The letter 'e'", "The letter 'x'"],
      'theme':'riddle',
      'hint': "I'm a vowel."
    },
    {
      'question': "I'm always in front of you, but you will never see me. What am I?",
      'answer': "The future",
      'options': ["The past", "The future", "The present", "A mirror"],
      'theme':'riddle',
      'hint': "I haven't happened yet."
    },
    {
      'question': "I'm not alive, but I can die. What am I?",
      'answer': "A battery",
      'options': ["A rock", "A battery", "A cloud", "A book"],
      'theme':'riddle',
      'hint': "I power devices."
    },
    {
      'question': "I have keys but open no locks, I have space but no room, you can enter but not go inside. What am I?",
      'answer': "A keyboard",
      'options': ["A keyboard", "A car", "A house", "A drawer"],
      'theme':'riddle',
      'hint': "You use me to type."
    },
    {
      'question': "I'm a fruit with a core, and I'm always counted in a group of twelve. What am I?",
      'answer': "A clock",
      'options': ["An apple", "A banana", "A clock", "A pear"],
      'theme':'riddle',
      'hint': "I tick and tock."
    },
    {
      'question': "I'm full of holes, yet I can still hold water. What am I?",
      'answer': "A sponge",
      'options': ["A sponge", "A bucket", "A sieve", "A cup"],
      'theme':'riddle',
      'hint': "I'm great for cleaning."
    },
    {
      'question': "I'm a container that can carry both liquid and knowledge. What am I?",
      'answer': "A book",
      'options': ["A bottle", "A book", "A suitcase", "A backpack"],
      'theme':'riddle',
      'hint': "I'm filled with words."
    },
    {
    'question':'He scored the fastest hat-trick in the premier league ?',
    'answer':'sadio mane',
    'options':['mohamed salah','sadio mane','ronaldo','drogba'],
    'theme':'sport',
    'hint':'His fellow country man goalkeeps for another purpolar football club.'
    },
    {
    'question':'He has the best goalkeeping record in the premier league with 202 clean sheets ?',
    'answer':'petr cech',
    'options':['david de gea','alisson','petr cech','giabluigi buffon'],
    'theme':'sport',
    'hint':'He was an arsenal goalkeeper.'
    },
    {
    'question':'which ballon d\'or winner had a galaxy named after him ?',
    'answer':'cristiano ronaldo -galaxy cosmos redshift 7 (CR7)',
    'options':['cristiano ronaldo -galaxy cosmos redshift 7 (CR7)','lionel messi -galaxy la pulga atomica ','michel platini -galaxy le roi','big lad -galaxy osun'],
    'theme':'sport',
    'hint':'He was a manchester united fc player.'
    },
    {
    'question':'whish NBA player holds the record for the highest career free-throw percentage?',
    'answer':'steve nash',
    'options':['lebron james','michael jordan','olympic goal','steve nash'],
    'theme':'sport',
    'hint':'He holds this record with a career free-throw percentage of 90.43%.'
    },
    {
    'question':'He left paris to play in the USA and he was one of the best soccer players in spain?',
    'answer':'messi',
    'options':['messi','ronaldo','neymar','roney'],
    'theme':'sport',
    'hint':'He lead his country to victroy in the qatar world cup.'
    },
    {
      'question': "In which sport do competitors perform tricks and flips on a trampoline?",
      'answer': "Trampolining",
      'options': ["Diving", "Gymnastics", "Trampolining", "Pole Vault"],
      'theme':'sport',
      'hint': "It involves acrobatics on a bouncy surface."
    },
    {
      'question': "Which country is famous for its 'All Blacks' rugby team?",
      'answer': "New Zealand",
      'options': ["Australia", "South Africa", "New Zealand", "England"],
      'theme':'sport',
      'hint': "They perform the haka dance before matches."
    },
    {
      'question': "Which board game, often associated with the beach, involves hitting a ball over a net with a paddle?",
      'answer': "Beach Tennis",
      'options': ["Beach Volleyball", "Beach Tennis", "Beach Frisbee", "Beach Soccer"],
      'theme':'sport',
      'hint': "It's a popular beach sport."
    },
    {
      'question': "Which country is famous for its 'Bullfighting' tradition?",
      'answer': "Spain",
      'options': ["Mexico", "Portugal", "Spain", "Italy"],
      'theme':'sport',
      'hint': "It's a controversial cultural event."
    },
    {
      'question': "In which sport do competitors throw a heavy metal ball for distance?",
      'answer': "Shot Put",
      'options': ["Discus Throw", "Hammer Throw", "Shot Put", "Javelin Throw"],
      'theme':'sport',
      'hint': "It's a track and field event."
    },
    {
      'question': "Which country is known for inventing the sport of 'Kabaddi'?",
      'answer': "India",
      'options': ["Pakistan", "Bangladesh", "India", "Sri Lanka"],
      'theme':'sport',
      'hint': "It's a contact team sport."
    },
    {
      'question': "In which sport do players attempt to sink balls into pockets on a rectangular table with a cue stick?",
      'answer': "Snooker",
      'options': ["Billiards", "Table Tennis", "Snooker", "Bowling"],
      'theme':'sport',
      'hint': "It's often played in a quiet atmosphere."
    },
    {
    'question':'Which player won the NBA MVP award while playing for a losing team?',
    'answer':'kareem abdul-jabbar',
    'options':['kareem abdul-jabbar','michael jordan','klay thompson','andrea bargnani'],
    'theme':'sport',
    'hint':'He won the award while playing for the Los Angeles Lakers, who had a losing record.'
    },
    {
    'question':'he won the NBA MVP award as a rookie',
    'answer':'wilt chamberlain',
    'options':['wilt chamberlain','michael jordan','Rasheed Wallace','lebron james'],
    'theme':'sport',
    'hint':'he won the MVP award for the 1959-1960 season'
    },
    {
    'question':'what stadium is known as the\'Theatre of Dreams\'?',
    'answer':'old trafford',
    'options':['mestalla','old trafford','camp nou','anfield'],
    'theme':'sport',
    'hint':'it belong to a premier league team.'
    },
    {
    'question':'which player holds the record for most goals scored in men\'s FIFA world cup tournaments?',
    'answer':'miroslv klose',
    'options':['messi','ronaldo','chritiano ronaldo','miroslv klose'],
    'theme':'sport',
    'hint':'He was the assistant coach at FC Bayern Munich from 2020 to 2021.'
    },
    {
    'question':'What player has the most back-shots in a single NBA game?',
    'answer':'elmore smith',
    'options':['lebron james','karl malone','michael jordan','elmore smith'],
    'theme':'sport',
    'hint':'He holds this record for blocking 17 shots in a game in 1973.'
    },
    {
    'question':'what national soccer team is nicknamed \'Die Mannschaft\'?',
    'answer':'garmany team',
    'options':['england team','garmany team','poland team','russia team'],
    'theme':'sport',
    'hint':'They were the chapions of the 2014 worldcup.'
    },
    {
    'question':'he was the shortest player to ever play in the NBA',
    'answer':'tyrone "muggsy" bogues',
    'options':['larry kenon','artis gilmore','tyrone "muggsy" bogues','steve nash'],
    'theme':'sport',
    'hint':'he was 5 feet 3 inches (160 com)'
    },
    {
    'question':'what english club did rock star Elton john own twice?',
    'answer':'watford',
    'options':['ajax','watford','liverpool fc','NW london Fc'],
    'theme':'sport',
    'hint':'Home stadium: vicarage stadium.'
    }
];

