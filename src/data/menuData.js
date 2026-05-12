// All items from GG MENU_V2.pdf — exact names, prices, and count
// veg: true = vegetarian (green dot), false = non-veg (red dot)
// featured: shown on home page
// sizes: optional dual-pricing [{label, price}]

export const menuItems = [

  // ── BREAKFAST: OMELETTES ──────────────────────────────────
  { id: 1,  category: 'Breakfast', subcategory: 'Omelettes', name: 'Plain Omelette',          description: 'Fluffy eggs cooked light and simple — classic comfort on a plate.',                            price: 79,  veg: false, featured: false },
  { id: 2,  category: 'Breakfast', subcategory: 'Omelettes', name: 'Veg Masala',              description: 'Loaded with fresh veggies for a colorful, feel-good breakfast.',                               price: 99,  veg: true,  featured: false },
  { id: 3,  category: 'Breakfast', subcategory: 'Omelettes', name: 'Creamy Mushroom',         description: 'Buttery mushrooms and creamy goodness wrapped in soft eggs.',                                  price: 129, veg: true,  featured: true  },
  { id: 4,  category: 'Breakfast', subcategory: 'Omelettes', name: 'Chicken Omelette',        description: 'Juicy chicken folded into fluffy eggs for a protein-packed start.',                            price: 149, veg: false, featured: false },
  { id: 5,  category: 'Breakfast', subcategory: 'Omelettes', name: 'Fried Eggs',              description: 'Golden yolks with crispy edges — simple, satisfying, perfect anytime.',                       price: 39,  veg: false, featured: false },
  { id: 6,  category: 'Breakfast', subcategory: 'Omelettes', name: 'Scrambled Eggs with Toast', description: 'Soft, creamy scrambled eggs cooked low and slow, served with toast.',                       price: 159, veg: false, featured: false },

  // ── BREAKFAST: PANCAKES ──────────────────────────────────
  { id: 7,  category: 'Breakfast', subcategory: 'Pancakes', name: 'Classic Pancake',          description: 'Light, fluffy stacks made for butter, syrup, and good mornings.',                             price: 139, veg: true,  featured: false },
  { id: 8,  category: 'Breakfast', subcategory: 'Pancakes', name: 'Nutella Pancake',          description: 'Fluffy pancakes drizzled with rich, chocolatey Nutella bliss.',                               price: 179, veg: true,  featured: true  },
  { id: 9,  category: 'Breakfast', subcategory: 'Pancakes', name: 'Cranberry Compote Pancake', description: 'Sweet pancakes topped with a tangy cranberry compote.',                                      price: 189, veg: true,  featured: false },

  // ── BREAKFAST: TOASTS ──────────────────────────────────
  { id: 10, category: 'Breakfast', subcategory: 'Toasts', name: 'Avocado Cream Cheese',       description: 'Creamy avocado and smooth cream cheese layered on perfectly toasted bread.',                  price: 179, veg: true,  featured: true  },
  { id: 11, category: 'Breakfast', subcategory: 'Toasts', name: 'Avocado with Sunny-Side Egg', description: 'Avocado toast crowned with a perfectly runny sunny-side egg.',                               price: 199, veg: false, featured: false },
  { id: 12, category: 'Breakfast', subcategory: 'Toasts', name: 'Avocado with Scrambled Eggs', description: 'Creamy avocado paired with soft scrambled eggs on toast.',                                   price: 229, veg: false, featured: false },
  { id: 13, category: 'Breakfast', subcategory: 'Toasts', name: 'Creamy Mushroom Toast',      description: 'Sautéed mushrooms and melted cheese on golden toast.',                                        price: 169, veg: true,  featured: false },
  { id: 14, category: 'Breakfast', subcategory: 'Toasts', name: 'French Toast',               description: 'Golden, buttery toast with a hint of sweetness.',                                             price: 179, veg: true,  featured: false },
  { id: 15, category: 'Breakfast', subcategory: 'Toasts', name: 'Cheesy Garlic Toast',        description: 'Crispy toast loaded with garlicky butter and melted cheese.',                                 price: 149, veg: true,  featured: false },
  { id: 16, category: 'Breakfast', subcategory: 'Toasts', name: 'Peanut Butter & Jelly',      description: 'Sweet, nutty, and nostalgic PB & J on warm toast.',                                          price: 199, veg: true,  featured: false },

  // ── BEVERAGES: FRESH JUICES ──────────────────────────────────
  { id: 17, category: 'Beverages', subcategory: 'Fresh Juices', name: 'ABC',                  description: 'A refreshing blend of apple, beetroot, and carrot — naturally sweet and energizing.',        price: 149, veg: true,  featured: false },
  { id: 18, category: 'Beverages', subcategory: 'Fresh Juices', name: 'Watermelon Basil',     description: 'Cool watermelon with a hint of fresh basil for a light, refreshing sip.',                    price: 79,  veg: true,  featured: false },
  { id: 19, category: 'Beverages', subcategory: 'Fresh Juices', name: 'Orange',               description: 'Freshly squeezed oranges bursting with citrusy goodness.',                                   price: 89,  veg: true,  featured: false },
  { id: 20, category: 'Beverages', subcategory: 'Fresh Juices', name: 'Pineapple & Orange',   description: 'A tropical mix of sweet pineapple and zesty orange.',                                        price: 129, veg: true,  featured: false },
  { id: 21, category: 'Beverages', subcategory: 'Fresh Juices', name: 'Mint Lime',            description: 'A refreshing blend of zesty mint and tangy lime, perfect to cool and energize your day.',   price: 69,  veg: true,  featured: false },

  // ── BEVERAGES: SMOOTHIES ──────────────────────────────────
  { id: 22, category: 'Beverages', subcategory: 'Smoothies', name: 'Strawberry',              description: 'Sweet strawberries blended into a creamy, refreshing smoothie.',                             price: 189, veg: true,  featured: true  },
  { id: 23, category: 'Beverages', subcategory: 'Smoothies', name: 'Banana Blueberry',        description: 'A creamy blend of bananas and juicy blueberries.',                                           price: 169, veg: true,  featured: false },
  { id: 24, category: 'Beverages', subcategory: 'Smoothies', name: 'Mixed Berry',             description: 'A vibrant mix of berries blended into a fruity powerhouse.',                                 price: 199, veg: true,  featured: false },
  { id: 25, category: 'Beverages', subcategory: 'Smoothies', name: 'Avocado',                 description: 'Rich, silky avocado blended into a smooth and nourishing drink.',                            price: 179, veg: true,  featured: false },
  { id: 26, category: 'Beverages', subcategory: 'Smoothies', name: 'Cocoa Banana',            description: 'Bananas blended with cocoa for a rich, chocolatey treat.',                                   price: 129, veg: true,  featured: false },
  { id: 27, category: 'Beverages', subcategory: 'Smoothies', name: 'Banana Peanut Butter',    description: 'A creamy, energy-packed blend of sweet banana and rich peanut butter.',                     price: 159, veg: true,  featured: false },

  // ── BEVERAGES: SMOOTHIE JAR ──────────────────────────────────
  { id: 28, category: 'Beverages', subcategory: 'Smoothie Jar', name: 'Mixed Berry Jar',      description: 'A vibrant blend of mixed berries whipped into a creamy, fruity smoothie jar.',              price: 229, veg: true,  featured: false },
  { id: 29, category: 'Beverages', subcategory: 'Smoothie Jar', name: 'Mango with Dark Chocolate', description: 'Sweet, ripe mango blended into a smooth tropical delight served in a jar.',            price: 199, veg: true,  featured: false },

  // ── SOUPS ──────────────────────────────────
  { id: 30, category: 'Soups', subcategory: 'Soups', name: 'Broccoli Almond',                 description: 'Creamy broccoli soup with a subtle nutty touch of almonds.',                                 price: 169, veg: true,  featured: false },
  { id: 31, category: 'Soups', subcategory: 'Soups', name: 'Creamy Mushroom',                 description: 'Velvety mushroom soup rich with earthy flavors.',                                            price: 149, veg: true,  featured: false },
  { id: 32, category: 'Soups', subcategory: 'Soups', name: 'Chicken Thyme',                   description: 'Comforting chicken soup simmered with herbs and warmth.',                                    price: 189, veg: false, featured: false },

  // ── SNACKS & BITES ──────────────────────────────────
  { id: 33, category: 'Snacks & Bites', subcategory: 'Snacks & Bites', name: 'French Fries',              description: 'Classic golden fries — crispy outside, fluffy inside.',                            price: 119, veg: true,  featured: false },
  { id: 34, category: 'Snacks & Bites', subcategory: 'Snacks & Bites', name: 'Peri Peri Fries',           description: 'Crispy fries tossed in bold, spicy peri peri seasoning.',                         price: 129, veg: true,  featured: false },
  { id: 35, category: 'Snacks & Bites', subcategory: 'Snacks & Bites', name: 'Butter Garlic Potato Wedges', description: 'Crispy potato wedges tossed in rich butter and fragrant garlic.',              price: 159, veg: true,  featured: false },
  { id: 36, category: 'Snacks & Bites', subcategory: 'Snacks & Bites', name: 'Veg Spring Rolls',          description: 'Crunchy rolls filled with fresh veggies and bold flavors.',                       price: 169, veg: true,  featured: false },
  { id: 37, category: 'Snacks & Bites', subcategory: 'Snacks & Bites', name: 'Cheese Corn Nuggets',       description: 'Crispy bites packed with sweet corn and gooey melted cheese.',                    price: 149, veg: true,  featured: true  },
  { id: 38, category: 'Snacks & Bites', subcategory: 'Snacks & Bites', name: 'Crispy Chicken Wings',      description: 'Golden fried chicken wings with a perfectly crunchy bite.',                       price: 189, veg: false, featured: false },
  { id: 39, category: 'Snacks & Bites', subcategory: 'Snacks & Bites', name: 'Crispy Chicken Fingers',    description: 'Tender chicken strips coated in a crunchy, flavorful crust.',                     price: 179, veg: false, featured: false },
  { id: 40, category: 'Snacks & Bites', subcategory: 'Snacks & Bites', name: 'Korean Bun',                description: 'Soft, fluffy bun filled with cream cheese and garlic butter.',                    price: 149, veg: true,  featured: false },

  // ── BURGERS ──────────────────────────────────
  { id: 41, category: 'Burgers', subcategory: 'Burgers', name: 'Double Cheese Veg',           description: 'A loaded veg patty stacked with double cheese in a soft toasted bun.',                      price: 229, veg: true,  featured: true  },
  { id: 42, category: 'Burgers', subcategory: 'Burgers', name: 'Paneer Cheese',               description: 'A juicy burger with a molten cheese burst center that oozes rich, creamy cheese in every bite.', price: 259, veg: true,  featured: false },
  { id: 43, category: 'Burgers', subcategory: 'Burgers', name: 'Grilled Chicken',             description: 'Juicy grilled chicken layered with double cheese for a bold, satisfying bite.',             price: 289, veg: false, featured: true  },

  // ── SANDWICHES ──────────────────────────────────
  { id: 44, category: 'Sandwiches', subcategory: 'Sandwiches', name: 'Avocado',               description: 'Creamy avocado layered on toasted bread for a fresh, wholesome bite.',                      price: 199, veg: true,  featured: false },
  { id: 45, category: 'Sandwiches', subcategory: 'Sandwiches', name: 'Avocado Paneer',        description: 'Smooth avocado and soft paneer come together in a rich, hearty sandwich.',                  price: 249, veg: true,  featured: true  },
  { id: 46, category: 'Sandwiches', subcategory: 'Sandwiches', name: 'Avocado with Eggs',     description: 'Creamy avocado topped with your choice of egg for the perfect brunch combo.',              price: 229, veg: false, featured: false },
  { id: 47, category: 'Sandwiches', subcategory: 'Sandwiches', name: 'Hariyali Paneer',       description: 'Herb-marinated paneer packed with fresh hariyali flavors in a perfectly toasted sandwich.', price: 169, veg: true,  featured: false },
  { id: 48, category: 'Sandwiches', subcategory: 'Sandwiches', name: 'Tandoori Paneer',       description: 'Smoky tandoori paneer with bold spices layered between toasted bread.',                     price: 149, veg: true,  featured: false },
  { id: 49, category: 'Sandwiches', subcategory: 'Sandwiches', name: 'Veg Fiesta',            description: 'Crispy toast loaded with garlicky butter and melted cheese.',                               price: 129, veg: true,  featured: false },
  { id: 50, category: 'Sandwiches', subcategory: 'Sandwiches', name: 'Cheese Corn',           description: 'Sweet corn and melted cheese packed into a warm, comforting sandwich.',                    price: 139, veg: true,  featured: false },
  { id: 51, category: 'Sandwiches', subcategory: 'Sandwiches', name: 'Triple Cheese',         description: 'Three layers of gooey, melted cheese for the ultimate cheese lover.',                       price: 169, veg: true,  featured: false },
  { id: 52, category: 'Sandwiches', subcategory: 'Sandwiches', name: 'Creamy Chicken',        description: 'Crispy chicken with a golden crunch in every bite.',                                        price: 249, veg: false, featured: false },
  { id: 53, category: 'Sandwiches', subcategory: 'Sandwiches', name: 'Creamy Mushroom',       description: 'Buttery mushrooms in a rich creamy filling on toasted bread.',                              price: 189, veg: true,  featured: false },
  { id: 54, category: 'Sandwiches', subcategory: 'Sandwiches', name: 'Egg Delight',           description: 'Fluffy eggs layered with creamy goodness in a satisfying sandwich.',                       price: 189, veg: false, featured: false },
  { id: 55, category: 'Sandwiches', subcategory: 'Sandwiches', name: 'Chicken Tikka',         description: 'Smoky, spiced chicken tikka tucked into a warm toasted sandwich.',                         price: 219, veg: false, featured: false },
  { id: 56, category: 'Sandwiches', subcategory: 'Sandwiches', name: 'Nutella',               description: 'Warm toasted bread filled with rich, chocolatey Nutella goodness.',                        price: 169, veg: true,  featured: false },

  // ── PASTA ──────────────────────────────────
  { id: 57, category: 'Pasta', subcategory: 'Pasta', name: 'Alfredo (Veg)',                   description: 'Pasta tossed in a rich, creamy Alfredo sauce.',                                             price: 229, veg: true,  featured: false },
  { id: 58, category: 'Pasta', subcategory: 'Pasta', name: 'Alfredo (Chicken)',               description: 'Pasta tossed in a rich, creamy Alfredo sauce with tender chicken.',                        price: 259, veg: false, featured: false },
  { id: 59, category: 'Pasta', subcategory: 'Pasta', name: 'Arrabbiata (Veg)',                description: 'Pasta in a bold, spicy tomato sauce with Italian flair.',                                  price: 219, veg: true,  featured: true  },
  { id: 60, category: 'Pasta', subcategory: 'Pasta', name: 'Arrabbiata (Chicken)',            description: 'Pasta in a bold, spicy tomato sauce with chicken.',                                         price: 249, veg: false, featured: false },
  { id: 61, category: 'Pasta', subcategory: 'Pasta', name: 'Mac & Cheese',                   description: 'Comforting pasta coated in a creamy, cheesy sauce.',                                        price: 219, veg: true,  featured: false },
  { id: 62, category: 'Pasta', subcategory: 'Pasta', name: 'Aglio e Olio',                   description: 'Simple yet flavorful pasta with garlic, olive oil, and herbs.',                             price: 219, veg: true,  featured: false },

  // ── BURRITO BOWLS (Mini / Regular) ──────────────────────────────────
  { id: 63, category: 'Burrito Bowls', subcategory: 'Burrito Bowls', name: 'Crispy Potato (Mini)',       description: 'A hearty bowl of rice topped with crispy potatoes, fresh veggies and bold flavors.',  price: 169, veg: true,  featured: false },
  { id: 64, category: 'Burrito Bowls', subcategory: 'Burrito Bowls', name: 'Crispy Potato (Regular)',    description: 'A hearty bowl of rice topped with crispy potatoes, fresh veggies and bold flavors.',  price: 219, veg: true,  featured: false },
  { id: 65, category: 'Burrito Bowls', subcategory: 'Burrito Bowls', name: 'Peri Peri Paneer (Mini)',    description: 'Spiced paneer served over rice with fresh toppings and zesty sauces.',               price: 179, veg: true,  featured: false },
  { id: 66, category: 'Burrito Bowls', subcategory: 'Burrito Bowls', name: 'Peri Peri Paneer (Regular)', description: 'Spiced paneer served over rice with fresh toppings and zesty sauces.',              price: 249, veg: true,  featured: true  },
  { id: 67, category: 'Burrito Bowls', subcategory: 'Burrito Bowls', name: 'Crispy Chicken (Mini)',      description: 'A hearty bowl of rice, veggies, and crispy chicken with bold Mexican flavors.',      price: 199, veg: false, featured: false },
  { id: 68, category: 'Burrito Bowls', subcategory: 'Burrito Bowls', name: 'Crispy Chicken (Regular)',   description: 'A hearty bowl of rice, veggies, and crispy chicken with bold Mexican flavors.',      price: 279, veg: false, featured: false },

  // ── WRAPS ──────────────────────────────────
  { id: 69, category: 'Wraps', subcategory: 'Wraps', name: 'Grilled Paneer',                  description: 'Soft wrap filled with spiced paneer and fresh crunchy veggies.',                            price: 219, veg: true,  featured: false },
  { id: 70, category: 'Wraps', subcategory: 'Wraps', name: 'Savoury Egg',                     description: 'Fluffy eggs rolled in a warm wrap with fresh fillings.',                                    price: 169, veg: false, featured: false },
  { id: 71, category: 'Wraps', subcategory: 'Wraps', name: 'Smoked Chicken',                  description: 'Juicy seasoned chicken wrapped with crisp veggies and creamy sauce.',                       price: 239, veg: false, featured: true  },

  // ── RICE BOWLS ──────────────────────────────────
  { id: 72, category: 'Rice Bowls', subcategory: 'Rice Bowls', name: 'Herb Rice with Mushroom Stroganoff', description: 'Fragrant herb rice topped with creamy, buttery mushroom stroganoff for a rich and comforting bowl.', price: 229, veg: true,  featured: true  },
  { id: 73, category: 'Rice Bowls', subcategory: 'Rice Bowls', name: 'Spinach Rice with Broccoli Pesto',   description: 'Vibrant spinach-infused rice topped with fresh, herby broccoli pesto for a wholesome and flavorful bowl.', price: 219, veg: true, featured: false },

  // ── DESSERT ──────────────────────────────────
  { id: 74, category: 'Dessert', subcategory: 'Dessert', name: 'Dessert of the Day',          description: "Ask for today's freshly made sweet treat — changes daily.",                                 price: null, veg: true, featured: false },
];

export const categories = [
  'All',
  'Breakfast',
  'Beverages',
  'Soups',
  'Snacks & Bites',
  'Burgers',
  'Sandwiches',
  'Pasta',
  'Burrito Bowls',
  'Wraps',
  'Rice Bowls',
  'Dessert',
];

// Count per category for display
export const categoryCounts = {
  Breakfast:      16,
  Beverages:      13,
  Soups:           3,
  'Snacks & Bites': 8,
  Burgers:         3,
  Sandwiches:     13,
  Pasta:           6,
  'Burrito Bowls': 6,
  Wraps:           3,
  'Rice Bowls':    2,
  Dessert:         1,
};
