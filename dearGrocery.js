
//index 0 is aisle:shelf, 1 is price, 2 is quantity
var inventory = {
  'eggs': { 'dozen': ['1A:A', '4.99', 4],
            'six': ['1A:A', '2.69', 4],
            'eighteen': ['1A:A', '6.99', 2] },

  'milk': { 'gallon': ['1A:B', '2.99', 5],
            'half': ['1A:B', '1.59', 5],
            'pint': ['1A:B', '.79', 5] },

  'cheese':{'cheddar': ['2A:A', '2.99', 10],
            'swiss': ['2A:A', '2.99', 10],
            'brie': ['2A:A', '2.99', 10],
            'blue': ['2A:A', '2.99', 10],
            'parmesan': ['2A:A', '2.99', 10] },

  'bread': { 'wheat': ['2A:B', '3.49', 7],
             'white': ['2A:B', '3.49', 7],
             'french': ['2A:B', '3.49', 7],
             'sourdough': ['2A:B', '3.49', 7]},

  'meat': { 'steak': ['2B:A', '7.99', 4],
            'lambchop': ['2B:A', '7.99', 4],
            'porkchop': ['2B:A', '7.99', 4],
            'sausage': ['2B:A', '7.99', 4],
            'bacon': ['2B:A', '7.99', 4],
            'chicken': ['2B:A', '7.99', 4]},

  'seafood':{'salmon': ['2B:B', '14.99', 4],
             'halibut': ['2B:B', '12.99', 4],
             'shrimp': ['2B:B', '7.99', 4],
             'oyster': ['2B:B', '7.99', 4],},

  'vegetables': {'carrot': ['3A:A', '2.79', 5],
                 'tomato': ['3A:A', '2.79', 5],
                 'broccoli': ['3A:A', '2.79', 5],
                 'kale': ['3A:A', '2.79', 5],
                 'potato': ['3A:A', '2.79', 5],
                 'spinach': ['3A:A', '2.79', 5],
                 'mushroom': ['3A:A', '2.79', 5] },

  'fruits': {'apple': ['3A:B', '1.49', 5],
             'orange': ['3A:B', '1.49', 5],
             'banana': ['3A:B', '1.49', 5],
             'lemon': ['3A:B', '1.49', 5],
             'lime': ['3A:B', '1.49', 5],
             'strawberry': ['3A:B', '1.49', 5],
             'raspberry': ['3A:B', '1.49', 5],
             'blueberry': ['3A:B', '1.49', 5] },

  'herbs': {'oregano': ['3A:C', '1.09', 0],
            'thyme': ['3A:C', '1.09', 0],
            'sage': ['3A:C', '1.09', 0],
            'cilantro': ['3A:C', '1.09', 0],
            'dill': ['3A:C', '1.09', 0],
            'parsley': ['3A:C', '1.09', 0]},

  'bulk': {'granola': ['4A:A', '.49', 25],
           'beans': ['4A:A', '.49', 25],
           'snackeroos': ['4A:A', '.49', 25],
           'rice': ['4A:A', '.49', 25],
           'chocolate chips': ['4A:A', '.49', 25]},

  'candy': {'dark chocolate': ['4A:B', '3.99', 17],
            'milk chocolate': ['4A:B', '3.99', 17],
            'swedish fish': ['4A:B', '3.99', 17],
            'gummie bears': ['4A:B', '3.99', 17],
            'decadence decadence': ['4A:B', '3.99', 17],
            'kinder bueno': ['4A:B', '3.99', 17]}
};

console.log(inventory['candy']['decadence decadence'][1]);
