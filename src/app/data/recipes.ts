import { Recipe } from '../models/recipe';

export const RECIPES: Recipe[] = [
  {
    id: 'bruschetta-al-pomodoro',
    title: { it: 'Bruschetta al pomodoro', en: 'Tomato bruschetta' },
    description: {
      it: 'Pane tostato con pomodori freschi, aglio, basilico e un filo di olio extravergine.',
      en: 'Toasted bread with fresh tomatoes, garlic, basil and a drizzle of extra virgin olive oil.',
    },
    category: 'antipasti',
    difficulty: 'facile',
    minutes: 15,
    servings: 4,
    emoji: '🍅',
    color: '#f7d6cf',
    publishedAt: '2026-01-12',
    ingredients: [
      { name: { it: 'Pane casereccio', en: 'Country-style bread' }, quantity: { it: '4 fette', en: '4 slices' } },
      { name: { it: 'Pomodori maturi', en: 'Ripe tomatoes' }, quantity: { it: '400 g', en: '14 oz' } },
      { name: { it: 'Aglio', en: 'Garlic' }, quantity: { it: '1 spicchio', en: '1 clove' } },
      { name: { it: 'Basilico fresco', en: 'Fresh basil' }, quantity: { it: '6 foglie', en: '6 leaves' } },
      { name: { it: 'Olio extravergine di oliva', en: 'Extra virgin olive oil' }, quantity: { it: '4 cucchiai', en: '4 tablespoons' } },
      { name: { it: 'Sale', en: 'Salt' }, quantity: { it: 'q.b.', en: 'to taste' } },
    ],
    steps: [
      {
        it: 'Taglia i pomodori a cubetti e mettili in una ciotola con sale, basilico spezzettato e metà dell’olio.',
        en: 'Dice the tomatoes and put them in a bowl with salt, torn basil and half the oil.',
      },
      {
        it: 'Tosta le fette di pane su una griglia o in forno finché diventano dorate.',
        en: 'Toast the bread slices on a grill or in the oven until golden.',
      },
      {
        it: 'Strofina lo spicchio d’aglio sul pane ancora caldo.',
        en: 'Rub the garlic clove over the warm bread.',
      },
      {
        it: 'Distribuisci i pomodori sul pane, condisci con l’olio rimasto e servi subito.',
        en: 'Top the bread with the tomatoes, dress with the remaining oil and serve right away.',
      },
    ],
  },
  {
    id: 'caprese',
    title: { it: 'Insalata caprese', en: 'Caprese salad' },
    description: {
      it: 'Mozzarella, pomodoro e basilico: il classico antipasto estivo che non ha bisogno di cottura.',
      en: 'Mozzarella, tomato and basil: the classic summer appetizer that needs no cooking.',
    },
    category: 'antipasti',
    difficulty: 'facile',
    minutes: 10,
    servings: 2,
    emoji: '🧀',
    color: '#e3efd3',
    publishedAt: '2026-01-20',
    ingredients: [
      { name: { it: 'Mozzarella di bufala', en: 'Buffalo mozzarella' }, quantity: { it: '250 g', en: '9 oz' } },
      { name: { it: 'Pomodori cuore di bue', en: 'Beefsteak tomatoes' }, quantity: { it: '2', en: '2' } },
      { name: { it: 'Basilico fresco', en: 'Fresh basil' }, quantity: { it: '8 foglie', en: '8 leaves' } },
      { name: { it: 'Olio extravergine di oliva', en: 'Extra virgin olive oil' }, quantity: { it: '3 cucchiai', en: '3 tablespoons' } },
      { name: { it: 'Origano e sale', en: 'Oregano and salt' }, quantity: { it: 'q.b.', en: 'to taste' } },
    ],
    steps: [
      {
        it: 'Affetta i pomodori e la mozzarella in fette dello stesso spessore.',
        en: 'Slice the tomatoes and the mozzarella into even slices.',
      },
      {
        it: 'Alterna le fette su un piatto da portata, inserendo le foglie di basilico.',
        en: 'Arrange the slices alternately on a serving platter, tucking in the basil leaves.',
      },
      {
        it: 'Condisci con olio, sale e un pizzico di origano.',
        en: 'Dress with oil, salt and a pinch of oregano.',
      },
      {
        it: 'Lascia riposare cinque minuti prima di portare in tavola.',
        en: 'Let it rest for five minutes before serving.',
      },
    ],
  },
  {
    id: 'spaghetti-alla-carbonara',
    title: { it: 'Spaghetti alla carbonara', en: 'Spaghetti alla carbonara' },
    description: {
      it: 'Uova, guanciale croccante e pecorino romano per un primo cremoso, senza panna.',
      en: 'Eggs, crispy cured pork cheek and pecorino romano for a creamy first course, no cream.',
    },
    category: 'primi',
    difficulty: 'media',
    minutes: 25,
    servings: 4,
    emoji: '🍝',
    color: '#fbe8b9',
    publishedAt: '2026-02-03',
    ingredients: [
      { name: { it: 'Spaghetti', en: 'Spaghetti' }, quantity: { it: '400 g', en: '14 oz' } },
      { name: { it: 'Guanciale', en: 'Cured pork cheek (guanciale)' }, quantity: { it: '150 g', en: '5 oz' } },
      { name: { it: 'Tuorli', en: 'Egg yolks' }, quantity: { it: '4', en: '4' } },
      { name: { it: 'Uovo intero', en: 'Whole egg' }, quantity: { it: '1', en: '1' } },
      { name: { it: 'Pecorino romano grattugiato', en: 'Grated pecorino romano' }, quantity: { it: '80 g', en: '3 oz' } },
      { name: { it: 'Pepe nero', en: 'Black pepper' }, quantity: { it: 'q.b.', en: 'to taste' } },
    ],
    steps: [
      {
        it: 'Taglia il guanciale a listarelle e rosolalo in padella a fuoco basso finché è croccante.',
        en: 'Cut the guanciale into strips and crisp it in a pan over low heat.',
      },
      {
        it: 'Sbatti i tuorli e l’uovo con il pecorino e abbondante pepe.',
        en: 'Whisk the yolks and the egg with the pecorino and plenty of pepper.',
      },
      {
        it: 'Lessa gli spaghetti in acqua salata e scolali al dente, conservando un mestolo di acqua di cottura.',
        en: 'Boil the spaghetti in salted water and drain al dente, keeping a ladle of cooking water.',
      },
      {
        it: 'Unisci la pasta al guanciale, spegni il fuoco e aggiungi la crema di uova mescolando, con un po’ di acqua di cottura.',
        en: 'Toss the pasta with the guanciale, turn off the heat and stir in the egg mixture with a little cooking water.',
      },
      {
        it: 'Servi subito con altro pecorino e pepe.',
        en: 'Serve immediately with more pecorino and pepper.',
      },
    ],
  },
  {
    id: 'risotto-ai-funghi',
    title: { it: 'Risotto ai funghi', en: 'Mushroom risotto' },
    description: {
      it: 'Un risotto mantecato con funghi porcini e un tocco di prezzemolo, perfetto per l’autunno.',
      en: 'A creamy risotto with porcini mushrooms and a touch of parsley, perfect for autumn.',
    },
    category: 'primi',
    difficulty: 'media',
    minutes: 45,
    servings: 4,
    emoji: '🍄',
    color: '#ead9c4',
    publishedAt: '2026-02-14',
    ingredients: [
      { name: { it: 'Riso Carnaroli', en: 'Carnaroli rice' }, quantity: { it: '320 g', en: '11 oz' } },
      { name: { it: 'Funghi porcini', en: 'Porcini mushrooms' }, quantity: { it: '300 g', en: '10 oz' } },
      { name: { it: 'Brodo vegetale caldo', en: 'Hot vegetable stock' }, quantity: { it: '1 litro', en: '4 cups' } },
      { name: { it: 'Cipolla', en: 'Onion' }, quantity: { it: '1 piccola', en: '1 small' } },
      { name: { it: 'Vino bianco secco', en: 'Dry white wine' }, quantity: { it: '1 bicchiere', en: '1 glass' } },
      { name: { it: 'Burro', en: 'Butter' }, quantity: { it: '40 g', en: '1.5 oz' } },
      { name: { it: 'Parmigiano reggiano', en: 'Parmigiano reggiano' }, quantity: { it: '50 g', en: '2 oz' } },
    ],
    steps: [
      {
        it: 'Pulisci i funghi e tagliali a fettine, poi saltali in padella con un filo d’olio e mettili da parte.',
        en: 'Clean and slice the mushrooms, then sauté them in a pan with a little oil and set aside.',
      },
      {
        it: 'Soffriggi la cipolla tritata, aggiungi il riso e tostalo per due minuti.',
        en: 'Sauté the chopped onion, add the rice and toast it for two minutes.',
      },
      {
        it: 'Sfuma con il vino bianco e lascia evaporare.',
        en: 'Deglaze with the white wine and let it evaporate.',
      },
      {
        it: 'Cuoci il riso aggiungendo il brodo un mestolo alla volta per circa 16 minuti.',
        en: 'Cook the rice, adding the stock one ladle at a time, for about 16 minutes.',
      },
      {
        it: 'A metà cottura unisci i funghi, poi manteca fuori dal fuoco con burro e parmigiano.',
        en: 'Halfway through add the mushrooms, then stir in butter and parmesan off the heat.',
      },
    ],
  },
  {
    id: 'lasagne-alla-bolognese',
    title: { it: 'Lasagne alla bolognese', en: 'Lasagna Bolognese' },
    description: {
      it: 'Strati di sfoglia, ragù, besciamella e parmigiano, per il pranzo della domenica.',
      en: 'Layers of pasta sheets, ragù, béchamel and parmesan, for the Sunday lunch.',
    },
    category: 'primi',
    difficulty: 'difficile',
    minutes: 120,
    servings: 6,
    emoji: '🥘',
    color: '#f3cdb5',
    publishedAt: '2026-03-01',
    ingredients: [
      { name: { it: 'Sfoglie di lasagne', en: 'Lasagna sheets' }, quantity: { it: '300 g', en: '10 oz' } },
      { name: { it: 'Macinato misto di manzo e maiale', en: 'Mixed ground beef and pork' }, quantity: { it: '400 g', en: '14 oz' } },
      { name: { it: 'Passata di pomodoro', en: 'Tomato passata' }, quantity: { it: '500 g', en: '18 oz' } },
      { name: { it: 'Sedano, carota e cipolla', en: 'Celery, carrot and onion' }, quantity: { it: '1 soffritto', en: '1 soffritto' } },
      { name: { it: 'Latte', en: 'Milk' }, quantity: { it: '750 ml', en: '3 cups' } },
      { name: { it: 'Burro e farina', en: 'Butter and flour' }, quantity: { it: '60 g ciascuno', en: '2 oz each' } },
      { name: { it: 'Parmigiano reggiano', en: 'Parmigiano reggiano' }, quantity: { it: '100 g', en: '3.5 oz' } },
    ],
    steps: [
      {
        it: 'Prepara il ragù facendo rosolare il soffritto, la carne e la passata e cuocendo a fuoco dolce per almeno un’ora.',
        en: 'Make the ragù by browning the soffritto, meat and passata, then simmer gently for at least an hour.',
      },
      {
        it: 'Prepara la besciamella sciogliendo il burro, aggiungendo la farina e poi il latte caldo senza smettere di mescolare.',
        en: 'Make the béchamel by melting the butter, adding the flour and then the hot milk, whisking constantly.',
      },
      {
        it: 'Sbollenta le sfoglie per un minuto, se non sono già pronte all’uso.',
        en: 'Blanch the sheets for a minute if they are not ready to use.',
      },
      {
        it: 'Componi la teglia alternando sfoglie, ragù, besciamella e parmigiano, terminando con besciamella e formaggio.',
        en: 'Assemble the dish alternating sheets, ragù, béchamel and parmesan, finishing with béchamel and cheese.',
      },
      {
        it: 'Cuoci in forno a 180 gradi per 35 minuti e lascia riposare prima di servire.',
        en: 'Bake at 180°C for 35 minutes and let it rest before serving.',
      },
    ],
  },
  {
    id: 'penne-all-arrabbiata',
    title: { it: 'Penne all’arrabbiata', en: 'Penne all’arrabbiata' },
    description: {
      it: 'Un sugo veloce di pomodoro, aglio e peperoncino per chi ama i sapori decisi.',
      en: 'A quick tomato, garlic and chili sauce for those who love bold flavors.',
    },
    category: 'primi',
    difficulty: 'facile',
    minutes: 20,
    servings: 4,
    emoji: '🌶️',
    color: '#f5c6c0',
    publishedAt: '2026-03-10',
    ingredients: [
      { name: { it: 'Penne rigate', en: 'Penne rigate' }, quantity: { it: '400 g', en: '14 oz' } },
      { name: { it: 'Pomodori pelati', en: 'Canned whole tomatoes' }, quantity: { it: '400 g', en: '14 oz' } },
      { name: { it: 'Aglio', en: 'Garlic' }, quantity: { it: '2 spicchi', en: '2 cloves' } },
      { name: { it: 'Peperoncino', en: 'Chili pepper' }, quantity: { it: '1', en: '1' } },
      { name: { it: 'Prezzemolo', en: 'Parsley' }, quantity: { it: '1 ciuffo', en: '1 bunch' } },
      { name: { it: 'Olio extravergine di oliva', en: 'Extra virgin olive oil' }, quantity: { it: '4 cucchiai', en: '4 tablespoons' } },
    ],
    steps: [
      {
        it: 'Scalda l’olio con l’aglio e il peperoncino spezzettato per un paio di minuti.',
        en: 'Warm the oil with the garlic and broken chili for a couple of minutes.',
      },
      {
        it: 'Aggiungi i pelati schiacciati e cuoci il sugo per 15 minuti.',
        en: 'Add the crushed tomatoes and cook the sauce for 15 minutes.',
      },
      {
        it: 'Lessa le penne al dente e saltale nel sugo per un minuto.',
        en: 'Boil the penne al dente and toss them in the sauce for a minute.',
      },
      {
        it: 'Completa con prezzemolo tritato e servi.',
        en: 'Finish with chopped parsley and serve.',
      },
    ],
  },
  {
    id: 'pollo-alla-cacciatora',
    title: { it: 'Pollo alla cacciatora', en: 'Hunter-style chicken' },
    description: {
      it: 'Pollo stufato con pomodoro, olive e rosmarino, ideale con una fetta di pane.',
      en: 'Chicken stewed with tomato, olives and rosemary, ideal with a slice of bread.',
    },
    category: 'secondi',
    difficulty: 'media',
    minutes: 60,
    servings: 4,
    emoji: '🍗',
    color: '#efd9b0',
    publishedAt: '2026-03-22',
    ingredients: [
      { name: { it: 'Pollo a pezzi', en: 'Chicken pieces' }, quantity: { it: '1,2 kg', en: '2.6 lb' } },
      { name: { it: 'Pomodori pelati', en: 'Canned whole tomatoes' }, quantity: { it: '400 g', en: '14 oz' } },
      { name: { it: 'Olive nere', en: 'Black olives' }, quantity: { it: '80 g', en: '3 oz' } },
      { name: { it: 'Vino rosso', en: 'Red wine' }, quantity: { it: '1 bicchiere', en: '1 glass' } },
      { name: { it: 'Cipolla', en: 'Onion' }, quantity: { it: '1', en: '1' } },
      { name: { it: 'Rosmarino', en: 'Rosemary' }, quantity: { it: '2 rametti', en: '2 sprigs' } },
    ],
    steps: [
      {
        it: 'Rosola i pezzi di pollo in una casseruola con un po’ d’olio finché sono dorati.',
        en: 'Brown the chicken pieces in a casserole with a little oil until golden.',
      },
      {
        it: 'Aggiungi la cipolla affettata e il rosmarino, poi sfuma con il vino rosso.',
        en: 'Add the sliced onion and rosemary, then deglaze with the red wine.',
      },
      {
        it: 'Unisci i pelati e le olive, copri e cuoci a fuoco basso per 40 minuti.',
        en: 'Add the tomatoes and olives, cover and simmer over low heat for 40 minutes.',
      },
      {
        it: 'Regola di sale e servi caldo con il sugo.',
        en: 'Season with salt and serve hot with the sauce.',
      },
    ],
  },
  {
    id: 'saltimbocca-alla-romana',
    title: { it: 'Saltimbocca alla romana', en: 'Saltimbocca alla romana' },
    description: {
      it: 'Fettine di vitello con prosciutto crudo e salvia, cotte in padella con il vino bianco.',
      en: 'Veal cutlets with prosciutto and sage, cooked in a pan with white wine.',
    },
    category: 'secondi',
    difficulty: 'media',
    minutes: 30,
    servings: 4,
    emoji: '🥩',
    color: '#f0cfc0',
    publishedAt: '2026-04-05',
    ingredients: [
      { name: { it: 'Fettine di vitello', en: 'Veal cutlets' }, quantity: { it: '8', en: '8' } },
      { name: { it: 'Prosciutto crudo', en: 'Prosciutto crudo' }, quantity: { it: '8 fette', en: '8 slices' } },
      { name: { it: 'Salvia', en: 'Sage' }, quantity: { it: '8 foglie', en: '8 leaves' } },
      { name: { it: 'Burro', en: 'Butter' }, quantity: { it: '40 g', en: '1.5 oz' } },
      { name: { it: 'Vino bianco', en: 'White wine' }, quantity: { it: '1/2 bicchiere', en: '1/2 glass' } },
      { name: { it: 'Farina', en: 'Flour' }, quantity: { it: 'q.b.', en: 'to taste' } },
    ],
    steps: [
      {
        it: 'Batti le fettine, sopra ognuna metti una fetta di prosciutto e una foglia di salvia e fissa con uno stuzzicadenti.',
        en: 'Pound the cutlets, top each with a slice of prosciutto and a sage leaf, and secure with a toothpick.',
      },
      {
        it: 'Infarina leggermente solo il lato della carne.',
        en: 'Lightly flour only the meat side.',
      },
      {
        it: 'Cuoci nel burro caldo un paio di minuti per lato, iniziando dal lato del prosciutto.',
        en: 'Cook in hot butter a couple of minutes per side, starting with the prosciutto side.',
      },
      {
        it: 'Sfuma con il vino, lascia ridurre il fondo e servi con il sugo.',
        en: 'Deglaze with the wine, reduce the pan juices and serve with the sauce.',
      },
    ],
  },
  {
    id: 'frittata-di-zucchine',
    title: { it: 'Frittata di zucchine', en: 'Zucchini frittata' },
    description: {
      it: 'Una frittata morbida con zucchine e parmigiano, buona calda e fredda.',
      en: 'A soft frittata with zucchini and parmesan, good hot or cold.',
    },
    category: 'secondi',
    difficulty: 'facile',
    minutes: 25,
    servings: 3,
    emoji: '🥒',
    color: '#dfeccc',
    publishedAt: '2026-04-18',
    ingredients: [
      { name: { it: 'Uova', en: 'Eggs' }, quantity: { it: '6', en: '6' } },
      { name: { it: 'Zucchine', en: 'Zucchini' }, quantity: { it: '3 medie', en: '3 medium' } },
      { name: { it: 'Parmigiano reggiano', en: 'Parmigiano reggiano' }, quantity: { it: '40 g', en: '1.5 oz' } },
      { name: { it: 'Olio extravergine di oliva', en: 'Extra virgin olive oil' }, quantity: { it: '2 cucchiai', en: '2 tablespoons' } },
      { name: { it: 'Sale e pepe', en: 'Salt and pepper' }, quantity: { it: 'q.b.', en: 'to taste' } },
    ],
    steps: [
      {
        it: 'Taglia le zucchine a rondelle e saltale in padella con l’olio finché si ammorbidiscono.',
        en: 'Slice the zucchini into rounds and sauté them in the oil until softened.',
      },
      {
        it: 'Sbatti le uova con parmigiano, sale e pepe e uniscile alle zucchine.',
        en: 'Whisk the eggs with parmesan, salt and pepper and combine with the zucchini.',
      },
      {
        it: 'Cuoci a fuoco medio-basso con il coperchio per circa 8 minuti.',
        en: 'Cook over medium-low heat with a lid for about 8 minutes.',
      },
      {
        it: 'Gira la frittata con l’aiuto di un piatto e cuoci ancora due minuti dall’altro lato.',
        en: 'Flip the frittata with the help of a plate and cook two more minutes on the other side.',
      },
    ],
  },
  {
    id: 'tiramisu',
    title: { it: 'Tiramisù', en: 'Tiramisù' },
    description: {
      it: 'Il dolce al cucchiaio più amato: savoiardi al caffè e crema di mascarpone.',
      en: 'The most beloved spoon dessert: coffee-soaked ladyfingers and mascarpone cream.',
    },
    category: 'dolci',
    difficulty: 'media',
    minutes: 30,
    servings: 6,
    emoji: '☕',
    color: '#e6d3c2',
    publishedAt: '2026-05-02',
    ingredients: [
      { name: { it: 'Savoiardi', en: 'Ladyfingers' }, quantity: { it: '300 g', en: '10 oz' } },
      { name: { it: 'Mascarpone', en: 'Mascarpone' }, quantity: { it: '500 g', en: '18 oz' } },
      { name: { it: 'Uova fresche', en: 'Fresh eggs' }, quantity: { it: '4', en: '4' } },
      { name: { it: 'Zucchero', en: 'Sugar' }, quantity: { it: '100 g', en: '3.5 oz' } },
      { name: { it: 'Caffè espresso freddo', en: 'Cold espresso coffee' }, quantity: { it: '300 ml', en: '1.25 cups' } },
      { name: { it: 'Cacao amaro in polvere', en: 'Unsweetened cocoa powder' }, quantity: { it: 'q.b.', en: 'to taste' } },
    ],
    steps: [
      {
        it: 'Monta i tuorli con lo zucchero fino a ottenere una crema chiara, poi incorpora il mascarpone.',
        en: 'Whisk the yolks with the sugar until pale and creamy, then fold in the mascarpone.',
      },
      {
        it: 'Monta gli albumi a neve ferma e uniscili delicatamente alla crema.',
        en: 'Whip the egg whites to stiff peaks and gently fold them into the cream.',
      },
      {
        it: 'Inzuppa rapidamente i savoiardi nel caffè e disponili in uno strato nella teglia.',
        en: 'Quickly dip the ladyfingers in the coffee and arrange them in a single layer in the dish.',
      },
      {
        it: 'Copri con metà crema, ripeti con un secondo strato e spolvera di cacao.',
        en: 'Cover with half the cream, repeat with a second layer and dust with cocoa.',
      },
      {
        it: 'Riponi in frigorifero per almeno 4 ore prima di servire.',
        en: 'Refrigerate for at least 4 hours before serving.',
      },
    ],
  },
  {
    id: 'panna-cotta',
    title: { it: 'Panna cotta ai frutti di bosco', en: 'Berry panna cotta' },
    description: {
      it: 'Un dolce delicato e setoso, servito con una salsa di frutti di bosco.',
      en: 'A delicate, silky dessert served with a berry sauce.',
    },
    category: 'dolci',
    difficulty: 'facile',
    minutes: 20,
    servings: 4,
    emoji: '🍓',
    color: '#f4d3dd',
    publishedAt: '2026-05-16',
    ingredients: [
      { name: { it: 'Panna fresca', en: 'Fresh cream' }, quantity: { it: '500 ml', en: '2 cups' } },
      { name: { it: 'Zucchero', en: 'Sugar' }, quantity: { it: '70 g', en: '2.5 oz' } },
      { name: { it: 'Gelatina in fogli', en: 'Gelatin sheets' }, quantity: { it: '8 g', en: '0.3 oz' } },
      { name: { it: 'Vaniglia', en: 'Vanilla' }, quantity: { it: '1 bacca', en: '1 pod' } },
      { name: { it: 'Frutti di bosco', en: 'Mixed berries' }, quantity: { it: '200 g', en: '7 oz' } },
    ],
    steps: [
      {
        it: 'Metti la gelatina in ammollo in acqua fredda per dieci minuti.',
        en: 'Soak the gelatin in cold water for ten minutes.',
      },
      {
        it: 'Scalda la panna con lo zucchero e la vaniglia senza farla bollire.',
        en: 'Warm the cream with the sugar and vanilla without boiling.',
      },
      {
        it: 'Fuori dal fuoco, sciogli nella panna la gelatina strizzata.',
        en: 'Off the heat, dissolve the squeezed gelatin into the cream.',
      },
      {
        it: 'Versa negli stampini e lascia rassodare in frigorifero per 4 ore.',
        en: 'Pour into molds and let set in the refrigerator for 4 hours.',
      },
      {
        it: 'Servi con i frutti di bosco cotti per qualche minuto con un cucchiaio di zucchero.',
        en: 'Serve with the berries cooked for a few minutes with a spoonful of sugar.',
      },
    ],
  },
  {
    id: 'crostata-di-marmellata',
    title: { it: 'Crostata di marmellata', en: 'Jam tart' },
    description: {
      it: 'Frolla friabile e marmellata a scelta: la torta da colazione per eccellenza.',
      en: 'Crumbly shortcrust and jam of your choice: the quintessential breakfast tart.',
    },
    category: 'dolci',
    difficulty: 'media',
    minutes: 60,
    servings: 8,
    emoji: '🥧',
    color: '#f2dcb8',
    publishedAt: '2026-06-01',
    ingredients: [
      { name: { it: 'Farina 00', en: 'All-purpose flour' }, quantity: { it: '300 g', en: '10 oz' } },
      { name: { it: 'Burro freddo', en: 'Cold butter' }, quantity: { it: '150 g', en: '5 oz' } },
      { name: { it: 'Zucchero', en: 'Sugar' }, quantity: { it: '120 g', en: '4 oz' } },
      { name: { it: 'Uova', en: 'Eggs' }, quantity: { it: '2', en: '2' } },
      { name: { it: 'Marmellata di albicocche', en: 'Apricot jam' }, quantity: { it: '350 g', en: '12 oz' } },
      { name: { it: 'Scorza di limone', en: 'Lemon zest' }, quantity: { it: '1', en: '1' } },
    ],
    steps: [
      {
        it: 'Impasta velocemente farina, burro a pezzetti, zucchero, uova e scorza di limone fino a formare un panetto.',
        en: 'Quickly knead the flour, cubed butter, sugar, eggs and lemon zest into a dough ball.',
      },
      {
        it: 'Avvolgi la frolla e fai riposare in frigorifero per 30 minuti.',
        en: 'Wrap the dough and let it rest in the refrigerator for 30 minutes.',
      },
      {
        it: 'Stendi due terzi della pasta e rivesti una tortiera, poi distribuisci la marmellata.',
        en: 'Roll out two-thirds of the dough and line a tart pan, then spread the jam.',
      },
      {
        it: 'Con la pasta rimasta forma delle strisce e disponile a griglia sopra la marmellata.',
        en: 'With the remaining dough form strips and lay them in a lattice over the jam.',
      },
      {
        it: 'Cuoci in forno a 180 gradi per 35 minuti e lascia raffreddare prima di sformare.',
        en: 'Bake at 180°C for 35 minutes and let cool before unmolding.',
      },
    ],
  },
];
