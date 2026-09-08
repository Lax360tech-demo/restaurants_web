export interface StorySection {
  title: string;
  subtitle: string;
  description: string;
  image?: string;
  iconName?: string;
}

export interface DetailsSection {
  prepTime: string;
  spiceLevel: "Mild" | "Medium" | "Hot" | "Extra Spicy";
  serves: string;
  calories: string;
  allergens: string[];
  chefNote: string;
}

export interface FreshnessSection {
  title: string;
  highlights: {
    item: string;
    source: string;
    benefit: string;
  }[];
}

export interface OrderSection {
  badge: string;
  estimatedDelivery: string;
  deliveryPromise: string;
  cancellationPolicy: string;
  availablePortions: { size: string; priceMultiplier: number; description: string }[];
}

export interface MenuItem {
  id: string;
  name: string;
  category: "Signature" | "Starters" | "Biryani" | "Main Course" | "Grills" | "South Indian" | "Desserts" | "Beverages";
  tagline: string;
  price: string;
  numericPrice: number;
  description: string;
  image: string;
  isVeg: boolean;
  isBestseller?: boolean;
  themeColor: string;
  gradient: string;
  ingredients: string[];
  features: string[];
  storySections: StorySection[];
  detailsSection: DetailsSection;
  freshnessSection: FreshnessSection;
  orderSection: OrderSection;
}

export interface ReviewItem {
  id: string;
  author: string;
  role: string;
  rating: number;
  comment: string;
  dish: string;
  date: string;
  avatar?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: "Dishes" | "Ambiance" | "Craft" | "Events";
  image: string;
  description: string;
}

export const SIGNATURE_ITEMS: MenuItem[] = [
  {
    id: "royal-biryani",
    name: "Royal Chicken Biryani",
    category: "Signature",
    tagline: "Aromatic. Rich. Legendary.",
    price: "₹280",
    numericPrice: 280,
    description: "Aged long-grain basmati rice dum-cooked with tender spiced bone-in chicken, infused with pure Kashmiri saffron, fried caramelized onions, and slow-roasted royal spices.",
    image: "/images/food/biryani.webp",
    isVeg: false,
    isBestseller: true,
    themeColor: "#C77A24",
    gradient: "linear-gradient(135deg, #3A1608 0%, #9A4B16 50%, #D89A3A 100%)",
    ingredients: [
      "2-Year Aged Basmati Rice",
      "Organic Farm Tender Chicken",
      "Kashmiri Mongra Saffron",
      "Shahi Jeera & Green Cardamom",
      "Caramelized Birista Onions",
      "Desi A2 Ghee & Fresh Mint",
    ],
    features: [
      "Traditional Handi Dum Cooking",
      "Slow Cooked for 4.5 Hours",
      "Zero Artificial Aromas",
      "Served with Burani Raita & Salan",
    ],
    storySections: [
      {
        title: "The Saffron Crown",
        subtitle: "Harvested from the valleys of Kashmir",
        description: "Every grain of rice is kissed with handpicked saffron strands, giving it that unmistakable sunset glow and intoxicating aroma.",
      },
      {
        title: "Slow Dum Alchemy",
        subtitle: "Sealed with dough in heavy copper handis",
        description: "By trapping the steam, flavors from cinnamon bark, star anise, and succulent chicken meld together in an orchestra of luxury.",
      },
      {
        title: "The Crispy Birista",
        subtitle: "Thinly sliced shallots fried to amber perfection",
        description: "Layered between scented rice, delivering a delicate crunch and sweet, savory depth in every single bite.",
      },
    ],
    detailsSection: {
      prepTime: "30-40 Mins",
      spiceLevel: "Medium",
      serves: "1-2 Persons (750g)",
      calories: "680 kcal",
      allergens: ["Dairy", "Nuts (Cashew Garnish)"],
      chefNote: "We recommend gently tossing the layers together with the accompanying spiced yogurt raita for the full sensory experience.",
    },
    freshnessSection: {
      title: "Purity In Every Grain",
      highlights: [
        {
          item: "Basmati Rice",
          source: "Aged in Himalayan foothills",
          benefit: "Extra-long grain elongation with non-sticky fluffiness",
        },
        {
          item: "Fresh Poultry",
          source: "Ethically farmed daily",
          benefit: "Unmatched tenderness and deep natural juiciness",
        },
        {
          item: "Whole Spices",
          source: "Stone-ground in small batches",
          benefit: "Preserves volatile essential oils and rich flavors",
        },
      ],
    },
    orderSection: {
      badge: "Chef's Signature No. 1",
      estimatedDelivery: "25 - 35 mins",
      deliveryPromise: "Freshly prepared and delivered piping hot in sealed thermal packaging with care.",
      cancellationPolicy: "Full instant refund if canceled before the dish enters the dum oven.",
      availablePortions: [
        { size: "Regular Handi", priceMultiplier: 1.0, description: "Serves 1-2 hungry royalty" },
        { size: "Royal Feast Pot", priceMultiplier: 1.85, description: "Serves 3-4 with extra chicken & boiled eggs" },
        { size: "Maharaja Banquet", priceMultiplier: 3.5, description: "Grand clay pot for 6-8 guests with shahi sides" },
      ],
    },
  },
  {
    id: "tandoori-chicken",
    name: "Tandoori Chicken",
    category: "Grills",
    tagline: "Smoky. Juicy. Charred.",
    price: "₹320",
    numericPrice: 320,
    description: "Plump chicken leg quarters steeped in hung curd, smoked mustard oil, Degi red chilies, and roasted garam masala, flash-roasted in a 500°C clay tandoor.",
    image: "/images/food/tandoori.webp",
    isVeg: false,
    isBestseller: true,
    themeColor: "#B91C1C",
    gradient: "linear-gradient(135deg, #3A0A0A 0%, #9A1C16 50%, #E5583C 100%)",
    ingredients: [
      "Fresh Bone-in Chicken Quarters",
      "Mathania & Degi Red Chilies",
      "Cold-Pressed Mustard Oil",
      "Greek-Style Hung Yogurt",
      "Kasturi Methi & Black Salt",
      "Charcoal-Roasted Spices",
    ],
    features: [
      "24-Hour Double Marinade",
      "Live Charcoal Clay Oven Roasted",
      "Crispy Charred Skin & Juicy Core",
      "Served with Mint Chutney & Pickled Onions",
    ],
    storySections: [
      {
        title: "The Fire Chamber",
        subtitle: "500°C Live Charcoal Tandoor",
        description: "Extreme radiant heat creates a delicate smoky crust while sealing inside all the natural juices of the meat.",
      },
      {
        title: "The Double Marinade",
        subtitle: "Infused twice over 24 hours",
        description: "First rested with ginger-garlic and lemon, followed by hung curd infused with smoked spices and crushed fenugreek leaves.",
      },
    ],
    detailsSection: {
      prepTime: "25-30 Mins",
      spiceLevel: "Hot",
      serves: "2 Persons (Full / 4 Pcs)",
      calories: "520 kcal",
      allergens: ["Dairy (Yogurt Marinade)"],
      chefNote: "Squeeze fresh lemon over the charred crust right before taking your first bite to awaken the smoky paprika notes.",
    },
    freshnessSection: {
      title: "Artisanal Charcoal Grilling",
      highlights: [
        {
          item: "Natural Charcoal",
          source: "Hardwood coals",
          benefit: "Deep, authentic woodsmoke flavor without chemical aftertaste",
        },
        {
          item: "Spiced Hung Curd",
          source: "Farm fresh milk strained in muslin",
          benefit: "Thick velvety adhesion that caramelizes exquisitely",
        },
      ],
    },
    orderSection: {
      badge: "Tandoori Masterpiece",
      estimatedDelivery: "30 - 40 mins",
      deliveryPromise: "Packed in ventilated thermal foil boxes to preserve that crisp, smoky exterior.",
      cancellationPolicy: "Orders can be modified within 5 minutes of placement.",
      availablePortions: [
        { size: "Half (2 Quarters)", priceMultiplier: 0.6, description: "Perfect personal protein meal" },
        { size: "Full (4 Quarters)", priceMultiplier: 1.0, description: "Classic portion for two" },
      ],
    },
  },
  {
    id: "butter-chicken",
    name: "Butter Chicken",
    category: "Main Course",
    tagline: "Creamy. Bold. Irresistible.",
    price: "₹290",
    numericPrice: 290,
    description: "Tender tandoori-grilled chicken morsels simmered in a luscious gravy of vine-ripened San Marzano tomatoes, white makhan butter, cashews, and aromatic fenugreek.",
    image: "/images/food/butter-chicken.webp",
    isVeg: false,
    isBestseller: true,
    themeColor: "#EA580C",
    gradient: "linear-gradient(135deg, #381206 0%, #B84714 50%, #F59E0B 100%)",
    ingredients: [
      "Tandoor-Charred Chicken Tikka",
      "Sun-Ripened Roma Tomatoes",
      "Pure Cultured White Butter",
      "Slow-Boiled Cashew Cream",
      "Sun-Dried Kasuri Methi",
      "Wild Forest Blossom Honey",
    ],
    features: [
      "Velvety Silk-Strained Gravy",
      "Balanced Sweet-Tangy-Smoky Notes",
      "Finished with Fresh Clotted Cream",
      "Best Paired with Butter Garlic Naan",
    ],
    storySections: [
      {
        title: "The Silk Texture",
        subtitle: "Strained three times for supreme smoothness",
        description: "No coarse tomato skins or gritty spices — only pure, velvety luxury that glides effortlessly on your palate.",
      },
      {
        title: "The Makhan Balance",
        subtitle: "Churned organic white butter",
        description: "A gentle touch of mountain honey offsets the tangy tomato acidity, creating our world-famous addictive flavor.",
      },
    ],
    detailsSection: {
      prepTime: "20-25 Mins",
      spiceLevel: "Mild",
      serves: "1-2 Persons (450ml)",
      calories: "610 kcal",
      allergens: ["Dairy", "Nuts (Cashew Puree)"],
      chefNote: "Pair with our charcoal-baked Garlic Naan or fluffy steamed Jeera Rice for absolute gastronomic bliss.",
    },
    freshnessSection: {
      title: "Real Farm Makhan & Honey",
      highlights: [
        {
          item: "Cultured Butter",
          source: "Locally churned cream",
          benefit: "Ultra-rich mouthfeel and delicate buttery aromatics",
        },
        {
          item: "Vine Tomatoes",
          source: "Direct farm-to-table harvests",
          benefit: "High natural sweetness and bright, vibrant acidity",
        },
      ],
    },
    orderSection: {
      badge: "All-Time Classic",
      estimatedDelivery: "20 - 30 mins",
      deliveryPromise: "Shipped in spill-proof microwave-safe luxury bowls with separate naan packs.",
      cancellationPolicy: "Instant cancellation available within 5 minutes of ordering.",
      availablePortions: [
        { size: "Single Bowl (350ml)", priceMultiplier: 0.8, description: "Great for 1 person" },
        { size: "Royal Handi (500ml)", priceMultiplier: 1.0, description: "Standard portion for 2" },
      ],
    },
  },
  {
    id: "south-indian-meals",
    name: "Royal South Indian Meals",
    category: "South Indian",
    tagline: "Fresh. Authentic. Comforting.",
    price: "₹220",
    numericPrice: 220,
    description: "A grand 14-item traditional banana leaf thali featuring aromatic Sona Masoori rice, Chettinad gravies, drumstick sambar, pepper rasam, payasam, and homemade pickles.",
    image: "/images/food/meals.webp",
    isVeg: true,
    isBestseller: true,
    themeColor: "#84CC16",
    gradient: "linear-gradient(135deg, #1C2E0B 0%, #4D7C0F 50%, #A3E635 100%)",
    ingredients: [
      "Organic Sona Masoori Rice",
      "Shallot & Drumstick Sambar",
      "Tamarind & Black Pepper Rasam",
      "Raw Mango Pickle & Crispy Appalam",
      "Avial with Coconut & Curd",
      "Elaneer / Jaggery Payasam",
    ],
    features: [
      "Traditional 14-Item Grand Spread",
      "Served on Sanitized Fresh Banana Leaf",
      "Unlimited Rasam & Sambar in Dine-In",
      "Authentic Heritage Grandmother Recipes",
    ],
    storySections: [
      {
        title: "The Six Rasas",
        subtitle: "Sweet, Sour, Salty, Bitter, Pungent, Astringent",
        description: "Crafted to balance the Ayurvedic doshas, revitalizing the body while satisfying every sensory craving.",
      },
      {
        title: "The Banana Leaf Ritual",
        subtitle: "Naturally infused herbal dining",
        description: "Hot rice placed on fresh banana leaf absorbs polyphenols and pleasant vegetal aromas that aid digestion.",
      },
    ],
    detailsSection: {
      prepTime: "15-20 Mins",
      spiceLevel: "Medium",
      serves: "1 Grand Feast",
      calories: "740 kcal",
      allergens: ["Dairy (Ghee/Payasam)", "Mustard Seeds"],
      chefNote: "Start with the hot rasam to awaken the taste buds, proceed to the rich sambar and avial, and conclude with sweet payasam.",
    },
    freshnessSection: {
      title: "Southern Spice Coast Heritage",
      highlights: [
        {
          item: "Cold-Pressed Coconut Oil",
          source: "Kerala plantations",
          benefit: "Deep authentic aroma with incredible digestive properties",
        },
        {
          item: "Curry Leaves & Mustard",
          source: "Harvested at dawn",
          benefit: "Crackle-tempered in ghee for bursting zest",
        },
      ],
    },
    orderSection: {
      badge: "Pure Vegetarian Delight",
      estimatedDelivery: "25 - 35 mins",
      deliveryPromise: "Packaged in an eco-friendly partitioned luxury meal box with banana leaf lining.",
      cancellationPolicy: "Instant cancellation available before dispatch.",
      availablePortions: [
        { size: "Standard Thali Box", priceMultiplier: 1.0, description: "14 items + 2 starters" },
        { size: "Maharaja Feast Box", priceMultiplier: 1.4, description: "Includes Paneer Tikka, Mini Uttapam & 2 Desserts" },
      ],
    },
  },
];

export const ALL_MENU_ITEMS: MenuItem[] = [
  ...SIGNATURE_ITEMS,
  {
    id: "galouti-kebab",
    name: "Awadhi Galouti Kebab",
    category: "Starters",
    tagline: "Melt-In-The-Mouth Royalty.",
    price: "₹340",
    numericPrice: 340,
    description: "Finely minced smoked lamb patties infused with 32 secret Lucknowi herbs, pan-seared in ghee and served on mini Mughlai parathas.",
    image: "/images/food/galouti-kebab.webp",
    isVeg: false,
    isBestseller: true,
    themeColor: "#C77A24",
    gradient: "linear-gradient(135deg, #2E150B 0%, #854016 50%, #C77A24 100%)",
    ingredients: ["Minced Lamb", "32 Awadhi Spices", "Raw Papaya", "Saffron Ghee", "Mughlai Paratha"],
    features: ["Silken Texture", "Historic Royal Recipe", "Smoked with Clove Charcoal"],
    storySections: [],
    detailsSection: {
      prepTime: "25 Mins",
      spiceLevel: "Medium",
      serves: "2 Persons (4 Kebabs)",
      calories: "490 kcal",
      allergens: ["Gluten", "Dairy"],
      chefNote: "No chewing required — simply press against the palate to experience the explosion of spices.",
    },
    freshnessSection: {
      title: "Lucknow Heritage",
      highlights: [{ item: "Spices", source: "Old Delhi spice market", benefit: "Unmatched aromatic nuance" }],
    },
    orderSection: {
      badge: "Awadhi Special",
      estimatedDelivery: "25 - 35 mins",
      deliveryPromise: "Packed hot with mint chutney.",
      cancellationPolicy: "Cancel within 5 mins.",
      availablePortions: [{ size: "Standard Plate (4 Pcs)", priceMultiplier: 1.0, description: "Served with 2 mini parathas" }],
    },
  },
  {
    id: "paneer-tikka",
    name: "Angaara Paneer Tikka",
    category: "Starters",
    tagline: "Charcoal Kissed. Velvety Soft.",
    price: "₹260",
    numericPrice: 260,
    description: "Cubes of farm-fresh cottage cheese marinated in crushed ajwain, yellow chili, hung curd, and bell peppers, grilled over glowing embers.",
    image: "/images/food/paneer-tikka.webp",
    isVeg: true,
    isBestseller: false,
    themeColor: "#EA580C",
    gradient: "linear-gradient(135deg, #2D1408 0%, #9A3412 50%, #FB923C 100%)",
    ingredients: ["Fresh Malai Paneer", "Carom Seeds (Ajwain)", "Yellow Chili Powder", "Charred Capsicum & Onion"],
    features: ["Pitted in Live Tandoor", "Soft Non-Rubber Texture", "Gluten-Free"],
    storySections: [],
    detailsSection: {
      prepTime: "20 Mins",
      spiceLevel: "Medium",
      serves: "2 Persons (6 Large Cubes)",
      calories: "410 kcal",
      allergens: ["Dairy"],
      chefNote: "Made using only milk collected within 12 hours for absolute silkiness.",
    },
    freshnessSection: {
      title: "Artisanal Malai Paneer",
      highlights: [{ item: "Paneer", source: "Farm Dairy", benefit: "Super spongy, juicy texture" }],
    },
    orderSection: {
      badge: "Veg Favorite",
      estimatedDelivery: "20 - 30 mins",
      deliveryPromise: "Ventilated container for crisp exterior.",
      cancellationPolicy: "Cancel within 5 mins.",
      availablePortions: [{ size: "Standard (6 Pcs)", priceMultiplier: 1.0, description: "Served with spiced dips" }],
    },
  },
  {
    id: "lamb-rogan-josh",
    name: "Kashmiri Lamb Shank Rogan Josh",
    category: "Main Course",
    tagline: "Slow-Braised. Deep. Intoxicating.",
    price: "₹420",
    numericPrice: 420,
    description: "Prime bone-in lamb shank slow-braised for 6 hours in a rich crimson reduction of Kashmiri chilies, ratanjot bark, and whole spices.",
    image: "/images/food/lamb-shank.webp",
    isVeg: false,
    isBestseller: true,
    themeColor: "#991B1B",
    gradient: "linear-gradient(135deg, #300A0A 0%, #7F1D1D 50%, #EF4444 100%)",
    ingredients: ["Tender Lamb Shank", "Kashmiri Ratanjot", "Fennel Powder", "Dry Ginger (Sonth)", "Asafoetida"],
    features: ["Fall-off-the-bone tender", "Natural ruby red color", "Zero artificial colors"],
    storySections: [],
    detailsSection: {
      prepTime: "35 Mins",
      spiceLevel: "Medium",
      serves: "1-2 Persons",
      calories: "720 kcal",
      allergens: ["Dairy"],
      chefNote: "The marrow from the shank enriches the gravy as it simmers over embers.",
    },
    freshnessSection: {
      title: "Valley of Kashmir",
      highlights: [{ item: "Ratanjot Bark", source: "Himalayan Forests", benefit: "Authentic herbal crimson hue" }],
    },
    orderSection: {
      badge: "Royal Delicacy",
      estimatedDelivery: "30 - 45 mins",
      deliveryPromise: "Delivered in temperature-locked container.",
      cancellationPolicy: "Cancel within 5 mins.",
      availablePortions: [{ size: "Standard Shank Handi", priceMultiplier: 1.0, description: "Includes one whole shank + gravy" }],
    },
  },
  {
    id: "dal-makhani",
    name: "24-Hour Dal Makhani",
    category: "Main Course",
    tagline: "Slow-Simmered. Velvety. Legendary.",
    price: "₹240",
    numericPrice: 240,
    description: "Black lentils and kidney beans slow-simmered over live charcoal embers for 24 hours with tomato puree, white butter, and gentle spices.",
    image: "/images/food/dal-makhani.webp",
    isVeg: true,
    isBestseller: true,
    themeColor: "#D89A3A",
    gradient: "linear-gradient(135deg, #2A1808 0%, #78350F 50%, #F59E0B 100%)",
    ingredients: ["Urad Dal (Black Lentils)", "Rajma", "Tomato Concasse", "Cultured Butter", "Fenugreek"],
    features: ["24-Hour Continuous Simmer", "Naturally Creamy", "Mildly Spiced"],
    storySections: [],
    detailsSection: {
      prepTime: "15 Mins",
      spiceLevel: "Mild",
      serves: "2 Persons (400ml)",
      calories: "460 kcal",
      allergens: ["Dairy"],
      chefNote: "No cornstarch or artificial thickeners. The creaminess comes purely from the breakdown of lentils over 24 hours.",
    },
    freshnessSection: {
      title: "Embers of Tradition",
      highlights: [{ item: "Black Urad", source: "Punjab Farms", benefit: "Nutrient rich and earthy aroma" }],
    },
    orderSection: {
      badge: "Customer Favorite",
      estimatedDelivery: "20 - 30 mins",
      deliveryPromise: "Sealed hot bowl with butter swirl.",
      cancellationPolicy: "Cancel within 5 mins.",
      availablePortions: [{ size: "Full Bowl (400ml)", priceMultiplier: 1.0, description: "Best with garlic naan" }],
    },
  },
  {
    id: "shahi-gulab-jamun",
    name: "Shahi Pistachio Gulab Jamun",
    category: "Desserts",
    tagline: "Warm. Golden. Euphoric.",
    price: "₹160",
    numericPrice: 160,
    description: "House-made khoya dumplings stuffed with Iranian pistachios and cardamom, fried golden in ghee and soaked in saffron-rose nectar.",
    image: "/images/food/gulab-jamun.webp",
    isVeg: true,
    isBestseller: true,
    themeColor: "#C77A24",
    gradient: "linear-gradient(135deg, #2E150B 0%, #854016 50%, #F59E0B 100%)",
    ingredients: ["Pure Milk Khoya", "Green Cardamom", "Iranian Pistachio Flakes", "Edible Silver Leaf (Vark)", "Kashmiri Rose Water"],
    features: ["Melt-in-mouth core", "Served Warm with Silver Leaf", "Zero artificial sweetening"],
    storySections: [],
    detailsSection: {
      prepTime: "10 Mins",
      spiceLevel: "Mild",
      serves: "1-2 Persons (2 Large Pcs)",
      calories: "320 kcal",
      allergens: ["Dairy", "Nuts"],
      chefNote: "We serve this warm right at 45°C for the ultimate heavenly texture.",
    },
    freshnessSection: {
      title: "Sweet Artistry",
      highlights: [{ item: "Mawa / Khoya", source: "Prepared fresh daily", benefit: "No flour fillers" }],
    },
    orderSection: {
      badge: "Royal Sweet",
      estimatedDelivery: "15 - 25 mins",
      deliveryPromise: "Shipped in thermal sealed syrup cups.",
      cancellationPolicy: "Cancel within 5 mins.",
      availablePortions: [{ size: "Twin Portion (2 Pcs)", priceMultiplier: 1.0, description: "With saffron syrup" }],
    },
  },
  {
    id: "kesar-rasmalai",
    name: "Kesar Pista Rasmalai",
    category: "Desserts",
    tagline: "Spongy. Chilled. Heavenly.",
    price: "₹180",
    numericPrice: 180,
    description: "Delicate chenna discs immersed in thickened saffron rabri, garnished with slivered almonds, pistachios, and dried rose petals.",
    image: "/images/food/rasmalai.webp",
    isVeg: true,
    isBestseller: false,
    themeColor: "#EAB308",
    gradient: "linear-gradient(135deg, #291C05 0%, #A16207 50%, #FDE047 100%)",
    ingredients: ["Fresh Cow Milk Chenna", "Slow-Reduced Saffron Rabri", "Cardamom", "Pistachio & Almond Crunch"],
    features: ["Chilled to 4°C", "Light & airy sponge", "Real saffron infused"],
    storySections: [],
    detailsSection: {
      prepTime: "10 Mins",
      spiceLevel: "Mild",
      serves: "1-2 Persons (2 Pcs)",
      calories: "280 kcal",
      allergens: ["Dairy", "Nuts"],
      chefNote: "Best enjoyed thoroughly chilled right after a spicy main course.",
    },
    freshnessSection: {
      title: "Pure Chenna",
      highlights: [{ item: "Rabri", source: "Simmered 4 hours", benefit: "Golden saffron sweetness" }],
    },
    orderSection: {
      badge: "Chilled Sweet",
      estimatedDelivery: "15 - 25 mins",
      deliveryPromise: "Kept chilled in insulated thermal packs.",
      cancellationPolicy: "Cancel within 5 mins.",
      availablePortions: [{ size: "Standard (2 Pcs)", priceMultiplier: 1.0, description: "Served with generous rabri" }],
    },
  },
  {
    id: "saffron-royale-elixir",
    name: "Saffron Royale Sparkler",
    category: "Beverages",
    tagline: "Golden. Refreshing. Exquisite.",
    price: "₹190",
    numericPrice: 190,
    description: "An intoxicating concoction of infused Kashmiri saffron, crushed cardamom pods, basil seeds, fresh lime, and sparkling Himalayan mineral soda.",
    image: "/images/food/royal-cocktail.webp",
    isVeg: true,
    isBestseller: true,
    themeColor: "#E5A93C",
    gradient: "linear-gradient(135deg, #2E1906 0%, #B45309 50%, #FBBF24 100%)",
    ingredients: ["Kashmiri Saffron Infusion", "Sweet Basil Seeds (Sabja)", "Fresh Tahitian Lime", "Sparkling Water", "Wild Honey"],
    features: ["Refreshing Palate Cleanser", "Natural Detox Qualities", "Served Over Clear Ice"],
    storySections: [],
    detailsSection: {
      prepTime: "5 Mins",
      spiceLevel: "Mild",
      serves: "1 Person (350ml)",
      calories: "95 kcal",
      allergens: [],
      chefNote: "Stir gently to distribute the saffron essence and sabja pearls.",
    },
    freshnessSection: {
      title: "Botanical Elixir",
      highlights: [{ item: "Sabja Seeds", source: "Organic harvest", benefit: "Cooling and soothing effect" }],
    },
    orderSection: {
      badge: "Signature Drink",
      estimatedDelivery: "15 - 20 mins",
      deliveryPromise: "Shipped cold in sealed glass bottle with separate ice sleeve.",
      cancellationPolicy: "Cancel within 5 mins.",
      availablePortions: [{ size: "Bottle (350ml)", priceMultiplier: 1.0, description: "Chilled ready to serve" }],
    },
  },
  {
    id: "masala-chai",
    name: "Dum Kulhad Masala Chai",
    category: "Beverages",
    tagline: "Earthy. Spiced. Soulful.",
    price: "₹90",
    numericPrice: 90,
    description: "Strong Assam CTC tea leaves brewed with crushed ginger, green cardamom, cloves, cinnamon, and whole milk, poured into smoked terracotta kulhads.",
    image: "/images/food/masala-chai.webp",
    isVeg: true,
    isBestseller: true,
    themeColor: "#C77A24",
    gradient: "linear-gradient(135deg, #38190B 0%, #9A4B16 50%, #D89A3A 100%)",
    ingredients: ["Assam CTC Tea", "Fresh Mountain Ginger", "Green Cardamom & Clove", "Whole Cream Milk", "Terracotta Smoke"],
    features: ["Smoked Clay Pot Experience", "Brewed with Crushed Spices", "Served Piping Hot"],
    storySections: [],
    detailsSection: {
      prepTime: "8 Mins",
      spiceLevel: "Mild",
      serves: "1 Person (200ml)",
      calories: "110 kcal",
      allergens: ["Dairy"],
      chefNote: "The porous terracotta vessel imparts a pleasant earthy mineral note to every sip.",
    },
    freshnessSection: {
      title: "Tea Gardens of Assam",
      highlights: [{ item: "Tea Leaf", source: "First Flush Assam", benefit: "Robust malty body" }],
    },
    orderSection: {
      badge: "Comfort Drink",
      estimatedDelivery: "15 - 20 mins",
      deliveryPromise: "Vacuum insulated thermo flask with clay kulhads included.",
      cancellationPolicy: "Cancel within 5 mins.",
      availablePortions: [{ size: "Single Kulhad (200ml)", priceMultiplier: 1.0, description: "Includes clay cup" }],
    },
  },
  {
    id: "royal-mutton-biryani",
    name: "Shahi Gosht Mutton Biryani",
    category: "Biryani",
    tagline: "Slow-Dum Lamb. Saffron Royalty.",
    price: "₹380",
    numericPrice: 380,
    description: "Tender bone-in prime lamb cuts marinated in aged yogurt, fried shallots, and crushed whole spices, layered with saffron basmati rice and slow dum-cooked in copper handis.",
    image: "/images/food/mutton-biryani.webp",
    isVeg: false,
    isBestseller: true,
    themeColor: "#C77A24",
    gradient: "linear-gradient(135deg, #3A1608 0%, #9A4B16 50%, #D89A3A 100%)",
    ingredients: [
      "Prime Grass-Fed Lamb Mutton",
      "Kashmiri Mongra Saffron",
      "2-Year Aged Basmati Rice",
      "Fried Crisp Birista Onions",
      "Whole Star Anise & Black Cardamom",
      "Boiled Egg Garnish",
    ],
    features: ["4.5 Hour Slow Dum Cooking", "Melt-In-Mouth Lamb Cuts", "Pure Desi Ghee Infused"],
    storySections: [],
    detailsSection: {
      prepTime: "35 Mins",
      spiceLevel: "Hot",
      serves: "1-2 Persons (800g)",
      calories: "780 kcal",
      allergens: ["Dairy", "Eggs"],
      chefNote: "Pair with chilled Mirchi Ka Salan and Cucumber Burani Raita.",
    },
    freshnessSection: {
      title: "Imperial Dum Pukht",
      highlights: [{ item: "Lamb Mutton", source: "Farm fresh select cuts", benefit: "Extreme tenderness and rich marrow flavor" }],
    },
    orderSection: {
      badge: "Chef's Special",
      estimatedDelivery: "30 - 40 mins",
      deliveryPromise: "Delivered piping hot in sealed copper handi style packaging.",
      cancellationPolicy: "Cancel within 5 mins.",
      availablePortions: [
        { size: "Regular Handi (800g)", priceMultiplier: 1.0, description: "Serves 1-2 hungry guests" },
        { size: "Maharaja Pot (1.5kg)", priceMultiplier: 1.85, description: "Serves 3-4 with extra meat & eggs" },
      ],
    },
  },
];

export const CATEGORIES = [
  "All",
  "Signature",
  "Biryani",
  "Main Course",
  "Grills",
  "Starters",
  "South Indian",
  "Desserts",
  "Beverages",
] as const;

export const REVIEWS: ReviewItem[] = [
  {
    id: "r1",
    author: "Aditya Roy Kapur",
    role: "Culinary Critic & Author",
    rating: 5,
    comment: "The Royal Chicken Biryani at Spice Royale is an unmatched sensory masterpiece. The fragrance of authentic Kashmiri saffron and aged basmati lingers on your palate long after the meal. A triumph of Indian fine dining.",
    dish: "Royal Chicken Biryani",
    date: "2 days ago",
  },
  {
    id: "r2",
    author: "Priya Sundaram",
    role: "Gastronomy Enthusiast",
    rating: 5,
    comment: "The scrollytelling visual presentation made me book a table immediately, and the food exceeded all expectations! The Tandoori Chicken had that perfect charcoal kiss while remaining unbelievably juicy.",
    dish: "Tandoori Chicken",
    date: "1 week ago",
  },
  {
    id: "r3",
    author: "Vikramaditya Sengupta",
    role: "Michelin Guide Reviewer",
    rating: 5,
    comment: "Slow food crafted with the utmost reverence for heritage recipes. The 24-hour Dal Makhani and Awadhi Galouti Kebab showcase culinary craftsmanship of the highest global standard.",
    dish: "24-Hour Dal Makhani",
    date: "2 weeks ago",
  },
  {
    id: "r4",
    author: "Meera Krishnan",
    role: "Food & Travel Blogger",
    rating: 5,
    comment: "The Royal South Indian Meals transport you straight to the heart of Chettinad and Tanjore. The crisp appalams, tangy rasam, and elaneer payasam were sheer perfection.",
    dish: "Royal South Indian Meals",
    date: "3 weeks ago",
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g1",
    title: "Royal Chicken Biryani Handi",
    category: "Dishes",
    image: "/images/food/biryani.webp",
    description: "Saffron-kissed basmati rice tossed with spiced succulent chicken in handcrafted copper handi.",
  },
  {
    id: "g2",
    title: "Live Charcoal Tandoori Chicken",
    category: "Craft",
    image: "/images/food/tandoori.webp",
    description: "500°C clay tandoor glowing with embers of natural hardwood charcoal and smoky spices.",
  },
  {
    id: "g3",
    title: "Velvety Butter Chicken",
    category: "Dishes",
    image: "/images/food/butter-chicken.webp",
    description: "Velvety tomato and makhan gravy finished with fresh clotted cream and fenugreek.",
  },
  {
    id: "g4",
    title: "Royal South Indian Banana Leaf Thali",
    category: "Dishes",
    image: "/images/food/meals.webp",
    description: "14-item traditional thali presented on freshly sanitized green banana leaves.",
  },
  {
    id: "g5",
    title: "Shahi Gosht Mutton Biryani",
    category: "Dishes",
    image: "/images/food/mutton-biryani.webp",
    description: "Slow-dum cooked prime mutton chops with saffron rice, caramelized shallots and boiled eggs.",
  },
  {
    id: "g6",
    title: "Angaara Paneer Tikka Sizzler",
    category: "Dishes",
    image: "/images/food/paneer-tikka.webp",
    description: "Smoky charcoal cottage cheese skewers served on cast iron sizzler platter with mint chutney.",
  },
  {
    id: "g7",
    title: "Awadhi Galouti Kebab",
    category: "Dishes",
    image: "/images/food/galouti-kebab.webp",
    description: "Melt-in-mouth smoked lamb patties served on golden mini Mughlai parathas.",
  },
  {
    id: "g8",
    title: "Kashmiri Lamb Shank Rogan Josh",
    category: "Dishes",
    image: "/images/food/lamb-shank.webp",
    description: "Slow-braised prime lamb shank in rich crimson ratanjot and fennel sauce.",
  },
  {
    id: "g9",
    title: "24-Hour Slow Dal Makhani",
    category: "Dishes",
    image: "/images/food/dal-makhani.webp",
    description: "Charcoal-simmered black lentils with fresh white butter and garlic naan.",
  },
  {
    id: "g10",
    title: "Warm Shahi Gulab Jamun",
    category: "Dishes",
    image: "/images/food/gulab-jamun.webp",
    description: "Golden khoya dumplings in saffron-rose syrup with edible silver leaf and pistachios.",
  },
  {
    id: "g11",
    title: "Kesar Pista Rasmalai",
    category: "Dishes",
    image: "/images/food/rasmalai.webp",
    description: "Chilled delicate chenna sponges floating in pistachio-flecked saffron rabri.",
  },
  {
    id: "g12",
    title: "Saffron Royale Elixir",
    category: "Dishes",
    image: "/images/food/royal-cocktail.webp",
    description: "Infused Kashmiri saffron sparkler with basil seeds and fresh lime in crystal glass.",
  },
  {
    id: "g13",
    title: "Dum Kulhad Masala Chai",
    category: "Dishes",
    image: "/images/food/masala-chai.webp",
    description: "Earthy clay pot brewed tea infused with freshly crushed mountain ginger and cardamom.",
  },
  {
    id: "g14",
    title: "The Royal Dining Sanctuary",
    category: "Ambiance",
    image: "/images/food/ambiance.webp",
    description: "Intimate warm amber illumination, carved teak wood arches, and brass heritage lanterns.",
  },
];

export const STORY_PILLARS = [
  {
    step: "01",
    title: "Heritage Recipes",
    subtitle: "Centuries of Royal Flavors",
    description: "Our recipes stem from royal Mughal and Southern royal kitchens, perfected over generations and preserved without compromise.",
    icon: "Crown",
  },
  {
    step: "02",
    title: "Artisanal Spices",
    subtitle: "Stone Ground in Small Batches",
    description: "Kashmiri saffron, Tellicherry black pepper, Guntur chilies, and green cardamom stone-crushed to retain precious essential oils.",
    icon: "Sparkles",
  },
  {
    step: "03",
    title: "Slow-Crafted Dum",
    subtitle: "Sealed Handis & Charcoal Embers",
    description: "We never rush flavor. Slow cooking allows delicate aromas to permeate every grain of rice and fiber of tender meat.",
    icon: "Flame",
  },
  {
    step: "04",
    title: "Pure Ingredients",
    subtitle: "Zero Compromise on Quality",
    description: "A2 Desi Ghee, farm-fresh poultry, 2-year aged long basmati, and organic dairy form the unbreakable backbone of our kitchen.",
    icon: "HeartHandshake",
  },
];
