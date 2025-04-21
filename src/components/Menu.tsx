
import React, { useState } from 'react';

const menuCategories = [
  { id: 'all', name: 'All' },
  { id: 'dosas', name: 'Dosas' },
  { id: 'snacks', name: 'Snacks' },
  // { id: 'rice', name: 'Rice Varieties' },
  { id: 'beverages', name: 'Beverages' }
];

const menuItems = 
  // {
  //   id: 1,
  //   name: 'Masala Dosa',
  //   description: 'Crispy rice & lentil crepe filled with spiced potato, served with sambar and chutneys',
  //   price: '₹120',
  //   category: 'dosas',
  //   popular: true
  // },
  // {
  //   id: 2,
  //   name: 'Plain Dosa',
  //   description: 'Traditional crispy rice & lentil crepe served with sambar and chutneys',
  //   price: '₹90',
  //   category: 'dosas'
  // },
  // {
  //   id: 3,
  //   name: 'Ghee Podi Dosa',
  //   description: 'Dosa smeared with ghee and spicy podi powder, a house specialty',
  //   price: '₹140',
  //   category: 'dosas',
  //   popular: true
  // },
  // {
  //   id: 4,
  //   name: 'Idli Sambar',
  //   description: 'Steamed rice cakes served with sambar and coconut chutney',
  //   price: '₹80',
  //   category: 'idli',
  //   popular: true
  // },
  // {
  //   id: 5,
  //   name: 'Medu Vada',
  //   description: 'Crispy fried lentil donuts served with sambar and chutney',
  //   price: '₹80',
  //   category: 'idli'
  // },
  // {
  //   id: 6,
  //   name: 'Idli Vada Combo',
  //   description: 'Combination of idli and vada served with sambar and chutneys',
  //   price: '₹120',
  //   category: 'idli'
  // },
  // {
  //   id: 7,
  //   name: 'Pongal',
  //   description: 'Rice and lentil porridge seasoned with pepper, cumin & cashew nuts',
  //   price: '₹100',
  //   category: 'rice'
  // },
  // {
  //   id: 8,
  //   name: 'Bisi Bele Bath',
  //   description: 'Spicy rice dish made with vegetables, lentils and tamarind',
  //   price: '₹130',
  //   category: 'rice',
  //   popular: true
  // },
  // {
  //   id: 9,
  //   name: 'Curd Rice',
  //   description: 'Yogurt rice tempered with mustard seeds, curry leaves and green chilies',
  //   price: '₹90',
  //   category: 'rice'
  // },
  // {
  //   id: 10,
  //   name: 'Filter Coffee',
  //   description: 'Traditional South Indian coffee made with freshly ground coffee beans',
  //   price: '₹60',
  //   category: 'beverages',
  //   popular: true
  // },
  // {
  //   id: 11,
  //   name: 'Masala Chai',
  //   description: 'Indian spiced tea brewed with aromatic spices',
  //   price: '₹40',
  //   category: 'beverages'
  // },
  // {
  //   id: 12,
  //   name: 'Fresh Lime Soda',
  //   description: 'Refreshing lime-flavored soda, sweet or salted',
  //   price: '₹50',
  //   category: 'beverages'
  // }
  [
    {
      id: 1,
      name: 'Idly (2Pcs)',
      price: '₹59',
      category: 'snacks'
    },
    {
      id: 2,
      name: 'Vada (2Pcs)',
      price: '₹69',
      category: 'snacks'
    },
    {
      id: 3,
      name: 'Idly-Vada',
      price: '₹69',
      category: 'snacks'
    },
    {
      id: 4,
      name: 'Kesari Bhaat',
      price: '₹59',
      category: 'snacks'
    },
    {
      id: 5,
      name: 'Ghee Plain Dosa',
      price: '₹99',
      category: 'dosa',
      popular: true
    },
    {
      id: 6,
      name: 'Ghee Masala Dosa',
      price: '₹119',
      category: 'dosa'
    },
    {
      id: 7,
      name: 'Ghee Podi Plain Dosa',
      price: '₹119',
      category: 'dosa'
    },
    {
      id: 8,
      name: 'Ghee Podi Masala Dosa',
      price: '₹139',
      category: 'dosa',
      popular: true
    },
    {
      id: 9,
      name: 'Garlic Ghee Roast Dosa',
      price: '₹119',
      category: 'dosa'
    },
    {
      id: 10,
      name: 'Benne Plain Dosa',
      price: '₹139',
      category: 'dosa'
    },
    {
      id: 11,
      name: 'Benne Masala Dosa',
      price: '₹109',
      category: 'dosa',
      popular: true
    },
    {
      id: 12,
      name: 'Garlic Ghee Roast Masala Dosa',
      price: '₹129',
      category: 'dosa'
    },
    {
      id: 13,
      name: 'Ghee Podi Idly',
      price: '₹79',
      category: 'snacks'
    },
    {
      id: 14,
      name: 'Filter Coffee',
      price: '₹39',
      category: 'beverages'
    },
    {
      id: 15,
      name: 'Iced Filter Coffee',
      price: '₹69',
      category: 'beverages',
      popular: true
    },
    {
      id: 16,
      name: 'Water Bottle',
      price: '₹10',
      category: 'beverages'
    }  
];

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredItems = activeCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="section-heading text-podipoint-green">Our Menu</h2>
          <div className="decorative-dots">
            <div className="dot orange"></div>
            <div className="dot cream"></div>
            <div className="dot green"></div>
          </div>
          <p className="text-gray-700 max-w-2xl mt-4">
            Explore our authentic South Indian dishes made with traditional recipes and fresh ingredients
          </p>
        </div>

        <div className="flex overflow-x-auto pb-4 mb-8 justify-center scrollbar-none">
          <div className="flex space-x-2">
            {menuCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
                  activeCategory === category.id
                    ? 'bg-podipoint-green text-white'
                    : 'bg-podipoint-cream text-podipoint-green hover:bg-podipoint-green/10'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div key={item.id} className="menu-item-card relative">
              {item.popular && (
                <span className="absolute -top-2 -right-2 bg-podipoint-orange text-white text-xs px-2 py-1 rounded-full">
                  Popular
                </span>
              )}
              <h3 className="text-xl font-bold text-podipoint-green mb-2">{item.name}</h3>
              {/* <p className="text-gray-600 text-sm mb-4">{item.description}</p> */}
              <div className="flex justify-between items-center">
                <span className="font-bold text-podipoint-orange">{item.price}</span>
                <button className="text-sm text-podipoint-green border border-podipoint-green px-3 py-1 rounded-full hover:bg-podipoint-green hover:text-white transition-colors">
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
