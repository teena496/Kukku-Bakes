
export interface Ingredient {
  item: string;
  amount: string;
}

export interface RecipeStep {
  stepNumber: number;
  instruction: string;
}

export type RecipeCategory = 'Cakes' | 'Cookies' | 'Breads' | 'Snacks';

export interface Recipe {
  id: string;
  title: string;
  description: string;
  image: string;
  ingredients: Ingredient[];
  steps: RecipeStep[];
  prepTime: string;
  cookTime: string;
  servings: number;
  category: RecipeCategory;
}

export const recipes: Recipe[] = [
  // BREADS
  {
    id: 'artisan-bread',
    title: 'Rustic Artisan Bread',
    description: 'A crusty, chewy loaf with a soft, airy interior. Perfect for sandwiches or dipping in soup.',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&q=80',
    category: 'Breads',
    ingredients: [
      { item: 'Bread Flour', amount: '500g' },
      { item: 'Warm Water', amount: '350ml' },
      { item: 'Salt', amount: '10g' },
      { item: 'Active Dry Yeast', amount: '7g' }
    ],
    steps: [
      { stepNumber: 1, instruction: 'Mix flour and salt in a large bowl.' },
      { stepNumber: 2, instruction: 'Dissolve yeast in warm water and let it sit for 5 minutes until frothy.' },
      { stepNumber: 3, instruction: 'Pour yeast mixture into the flour and mix until a shaggy dough forms.' },
      { stepNumber: 4, instruction: 'Cover and let rise for 2 hours at room temperature.' },
      { stepNumber: 5, instruction: 'Preheat oven to 450°F (230°C) with a Dutch oven inside.' },
      { stepNumber: 6, instruction: 'Shape dough into a round loaf on a floured surface.' },
      { stepNumber: 7, instruction: 'Place dough in the hot Dutch oven, cover, and bake for 30 minutes.' },
      { stepNumber: 8, instruction: 'Remove lid and bake for another 15 minutes until golden brown.' }
    ],
    prepTime: '20 mins',
    cookTime: '45 mins',
    servings: 4
  },
  {
    id: 'focaccia',
    title: 'Rosemary Focaccia',
    description: 'Italian bread with olive oil, rosemary, and sea salt. Soft inside, crispy outside.',
    image: 'https://images.unsplash.com/photo-1573140247632-f84660f67126?w=800&q=80',
    category: 'Breads',
    ingredients: [
      { item: 'Bread Flour', amount: '500g' },
      { item: 'Warm Water', amount: '350ml' },
      { item: 'Olive Oil', amount: '50ml' },
      { item: 'Fresh Rosemary', amount: '2 sprigs' },
      { item: 'Sea Salt', amount: '1 tbsp' }
    ],
    steps: [
      { stepNumber: 1, instruction: 'Mix flour, water, yeast, and salt. Knead until smooth.' },
      { stepNumber: 2, instruction: 'Let rise in a greased bowl for 1.5 hours.' },
      { stepNumber: 3, instruction: 'Transfer to baking pan, dimple the dough with fingers.' },
      { stepNumber: 4, instruction: 'Drizzle generously with olive oil and sprinkle rosemary and salt.' },
      { stepNumber: 5, instruction: 'Bake at 425°F (220°C) for 25 minutes.' }
    ],
    prepTime: '15 mins',
    cookTime: '25 mins',
    servings: 6
  },

  // COOKIES
  {
    id: 'chocolate-chip-cookies',
    title: 'Classic Chocolate Chip Cookies',
    description: 'Chewy on the inside, crispy on the edges, and loaded with chocolate chips.',
    image: 'https://images.unsplash.com/photo-1499636138143-bd649043ea80?w=800&q=80',
    category: 'Cookies',
    ingredients: [
      { item: 'Butter (softened)', amount: '1 cup' },
      { item: 'White Sugar', amount: '1 cup' },
      { item: 'Brown Sugar', amount: '1 cup' },
      { item: 'Eggs', amount: '2' },
      { item: 'Vanilla Extract', amount: '2 tsp' },
      { item: 'All-Purpose Flour', amount: '3 cups' },
      { item: 'Baking Soda', amount: '1 tsp' },
      { item: 'Chocolate Chips', amount: '2 cups' }
    ],
    steps: [
      { stepNumber: 1, instruction: 'Preheat oven to 350°F (175°C).' },
      { stepNumber: 2, instruction: 'Cream butter and sugars. Add eggs and vanilla.' },
      { stepNumber: 3, instruction: 'Mix in dry ingredients, then fold in chocolate chips.' },
      { stepNumber: 4, instruction: 'Drop onto baking sheet and bake for 10 minutes.' }
    ],
    prepTime: '20 mins',
    cookTime: '10 mins',
    servings: 24
  },
  {
    id: 'oatmeal-raisin-cookies',
    title: 'Soft Oatmeal Raisin',
    description: 'Spiced with cinnamon and packed with oats and plump raisins.',
    image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=800&q=80',
    category: 'Cookies',
    ingredients: [
      { item: 'Rolled Oats', amount: '3 cups' },
      { item: 'Raisins', amount: '1 cup' },
      { item: 'Butter', amount: '1 cup' },
      { item: 'Cinnamon', amount: '1 tsp' }
    ],
    steps: [
      { stepNumber: 1, instruction: 'Preheat oven to 350°F (175°C).' },
      { stepNumber: 2, instruction: 'Mix wet and dry ingredients separately, then combine.' },
      { stepNumber: 3, instruction: 'Fold in oats and raisins.' },
      { stepNumber: 4, instruction: 'Bake for 12 minutes until golden.' }
    ],
    prepTime: '15 mins',
    cookTime: '12 mins',
    servings: 20
  },

  // CAKES
  {
    id: 'chocolate-cake',
    title: 'Decadent Chocolate Cake',
    description: 'Rich, moist chocolate cake with a velvety ganache frosting.',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&q=80',
    category: 'Cakes',
    ingredients: [
      { item: 'All-Purpose Flour', amount: '1.75 cups' },
      { item: 'Cocoa Powder', amount: '0.75 cup' },
      { item: 'Sugar', amount: '2 cups' },
      { item: 'Eggs', amount: '2' },
      { item: 'Milk', amount: '1 cup' },
      { item: 'Boiling Water', amount: '1 cup' }
    ],
    steps: [
      { stepNumber: 1, instruction: 'Preheat oven to 350°F (175°C). Grease pans.' },
      { stepNumber: 2, instruction: 'Mix dry ingredients. Add wet ingredients except boiling water.' },
      { stepNumber: 3, instruction: 'Stir in boiling water. Batter will be thin.' },
      { stepNumber: 4, instruction: 'Bake for 30-35 minutes.' },
      { stepNumber: 5, instruction: 'Cool completely before frosting.' }
    ],
    prepTime: '20 mins',
    cookTime: '35 mins',
    servings: 12
  },
  {
    id: 'vanilla-sponge',
    title: 'Classic Vanilla Sponge',
    description: 'Light and fluffy vanilla sponge cake, perfect for birthdays.',
    image: 'https://images.unsplash.com/photo-1627881963837-a3fabe54664d?w=800&q=80',
    category: 'Cakes',
    ingredients: [
      { item: 'Cake Flour', amount: '2.5 cups' },
      { item: 'Sugar', amount: '1.5 cups' },
      { item: 'Butter', amount: '3/4 cup' },
      { item: 'Eggs', amount: '3' },
      { item: 'Milk', amount: '1 cup' }
    ],
    steps: [
      { stepNumber: 1, instruction: 'Cream butter and sugar until pale.' },
      { stepNumber: 2, instruction: 'Add eggs one by one.' },
      { stepNumber: 3, instruction: 'Alternate adding flour and milk.' },
      { stepNumber: 4, instruction: 'Bake at 350°F for 25 minutes.' }
    ],
    prepTime: '25 mins',
    cookTime: '25 mins',
    servings: 10
  },

  // SNACKS
  {
    id: 'blueberry-muffins',
    title: 'Blueberry Muffins',
    description: 'Bursting with fresh blueberries and topped with a crumbly sugar topping.',
    image: 'https://images.unsplash.com/photo-1689602715082-f4728f3cb29f?w=800&q=80',
    category: 'Snacks',
    ingredients: [
      { item: 'Flour', amount: '2 cups' },
      { item: 'Blueberries', amount: '1.5 cups' },
      { item: 'Sugar', amount: '1 cup' },
      { item: 'Vegetable Oil', amount: '0.5 cup' }
    ],
    steps: [
      { stepNumber: 1, instruction: 'Mix dry ingredients.' },
      { stepNumber: 2, instruction: 'Whisk oil, egg, and milk. Combine with dry mix.' },
      { stepNumber: 3, instruction: 'Fold in blueberries gently.' },
      { stepNumber: 4, instruction: 'Bake at 400°F for 20 minutes.' }
    ],
    prepTime: '10 mins',
    cookTime: '20 mins',
    servings: 12
  },
  {
    id: 'cheese-scones',
    title: 'Savory Cheese Scones',
    description: 'Flaky scones packed with sharp cheddar cheese.',
    image: 'https://images.unsplash.com/photo-1586526051793-2708316c2780?w=800&q=80',
    category: 'Snacks',
    ingredients: [
      { item: 'Self-Raising Flour', amount: '2 cups' },
      { item: 'Butter', amount: '50g' },
      { item: 'Cheddar Cheese', amount: '1 cup' },
      { item: 'Milk', amount: '0.5 cup' }
    ],
    steps: [
      { stepNumber: 1, instruction: 'Rub butter into flour until it resembles breadcrumbs.' },
      { stepNumber: 2, instruction: 'Stir in cheese and milk to make a soft dough.' },
      { stepNumber: 3, instruction: 'Cut into rounds and brush with milk.' },
      { stepNumber: 4, instruction: 'Bake at 425°F for 12 minutes.' }
    ],
    prepTime: '15 mins',
    cookTime: '12 mins',
    servings: 8
  }
];
