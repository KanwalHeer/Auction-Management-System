
  
  // productsData.ts (Dummy data)
  import { Product } from "../types";
  
  
  const products: Product[] = [
    {
      id: 1,
      name: 'Product 1',
      description: 'This is a description for Product 1.',
      price: 29.99,
      imageUrl: 'https://via.placeholder.com/150?text=Product+1',
      reviews: [
        { id: 1, reviewer: 'Alice', rating: 4.5, comment: 'Great product!' },
        { id: 2, reviewer: 'Bob', rating: 4.0, comment: 'Very good, but could be improved.' }
      ],
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'This is a description for Product 2.',
      price: 39.99,
      imageUrl: 'https://via.placeholder.com/150?text=Product+2',
      reviews: [
        { id: 1, reviewer: 'Alice', rating: 4.5, comment: 'Great product!' },
        { id: 2, reviewer: 'Bob', rating: 4.0, comment: 'Very good, but could be improved.' }
      ],
    },
    {
      id: 3,
      name: 'Product 3',
      description: 'This is a description for Product 3.',
      price: 49.99,
      imageUrl: 'https://via.placeholder.com/150?text=Product+3',
      reviews: [
        { id: 1, reviewer: 'Alice', rating: 4.5, comment: 'Great product!' },
        { id: 2, reviewer: 'Bob', rating: 4.0, comment: 'Very good, but could be improved.' }
      ],
    },
    {
      id: 4,
      name: 'Product 4',
      description: 'This is a description for Product 4.',
      price: 59.99,
      imageUrl: 'https://via.placeholder.com/150?text=Product+4',
      reviews: [
        { id: 1, reviewer: 'Alice', rating: 4.5, comment: 'Great product!' },
        { id: 2, reviewer: 'Bob', rating: 4.0, comment: 'Very good, but could be improved.' }
      ],
    },
    {
      id: 5,
      name: 'Product 5',
      description: 'This is a description for Product 5.',
      price: 69.99,
      imageUrl: 'https://via.placeholder.com/150?text=Product+5',
      reviews: [
        { id: 1, reviewer: 'Alice', rating: 4.5, comment: 'Great product!' },
        { id: 2, reviewer: 'Bob', rating: 4.0, comment: 'Very good, but could be improved.' }
      ],
    },
  ];
  
  export default products;
  