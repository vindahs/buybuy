import bcrypt from 'bcryptjs';

const data = {
  users: [
   

    {
      name: 'mike',
      email: 'admins@example.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: true,
      isSeller: true,
      seller: {
        name: 'Flawless idol',
        logo: '/images/logo2.png',
        description: 'best seller',
        rating: 4.5,
        numReviews: 122,
      },
    },
    {
      name: 'Vincent',
      email: 'admin@example.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: true,
      isSeller: true,
      seller: {
        name: 'Dabby bankz',
        logo: '/images/logo1.png',
        description: 'best seller',
        rating: 4.5,
        numReviews: 120,
      },
    },
    {
      name: 'John',
      email: 'user@example.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: 'D shirt',
      category: 'clothes',
      image: '/images/p1.jpg',
      price: 50,
      countInStock: 10,
      brand: 'Dabby banks collection',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality product',
    },

    {
      name: 'Shirt',
      category: 'clothes',
      image: '/images/p5.jpg',
      price: 50,
      countInStock: 5,
      brand: 'Dabby bankz collection',
      rating: 4.5,
      numReviews: 10,
      description: 'High quality product',
    },

    
    {
      name: ' Bankz shirt',
      category: 'clothes',
      image: '/images/p3.jpg',
      price: 10,
      countInStock: 12,
      brand: 'Stakexchain',
      rating: 4.5,
      numReviews: 15,
      description: 'high quality product',
    },
    {
      name: 'Dabby shirt',
      category: 'clothes',
      image: '/images/p4.jpg',
      price: 800,
      countInStock: 10,
      brand: 'Dabby bankz collection',
      rating: 4.5,
      numReviews: 14,
      description: 'High quality product',
    },

    {
      name: 'Flawless idol',
      category: 'Beauty and makeup',
      image: '/images/p7.jpg',
      price: 500,
      countInStock: 20,
      brand: 'Flawless idol',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality lipp gloss',
    },

    {
      name: 'TRATE',
      category: 'Spreadsheet',
      image: '/images/p6.jpg',
      price: 240,
      countInStock: 5,
      brand: 'Innovacent',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality product',
    },

    

  ],
};
export default data;
