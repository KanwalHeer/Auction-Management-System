// Define the TypeScript type for an auction item
export interface AuctionItem {
    id: number;
    name: string;
    description: string;
    startingPrice: number;
    currentPrice: number;
    endTime: string;
    imageUrl: string;
  }
  
  // Define the auction data array
  export const auctionItems: AuctionItem[] = [
    {
      id: 1,
      name: "Vintage Camera",
      description: "A classic film camera from the 1970s.",
      startingPrice: 100,
      currentPrice: 150,
      endTime: "2024-09-30T18:00:00Z",
      imageUrl: "https://example.com/images/camera.jpg",
    },
    {
      id: 2,
      name: "Rare Painting",
      description: "An original painting by a renowned artist.",
      startingPrice: 500,
      currentPrice: 800,
      endTime: "2024-10-05T18:00:00Z",
      imageUrl: "https://example.com/images/painting.jpg",
    },
    {
      id: 3,
      name: "Antique Vase",
      description: "A beautifully crafted antique vase from the Ming Dynasty.",
      startingPrice: 200,
      currentPrice: 350,
      endTime: "2024-10-01T18:00:00Z",
      imageUrl: "https://example.com/images/vase.jpg",
    },
    {
        id: 2,
        name: "Rare Painting",
        description: "An original painting by a renowned artist.",
        startingPrice: 500,
        currentPrice: 800,
        endTime: "2024-10-05T18:00:00Z",
        imageUrl: "https://example.com/images/painting.jpg",
      },
      {
        id: 3,
        name: "Antique Vase",
        description: "A beautifully crafted antique vase from the Ming Dynasty.",
        startingPrice: 200,
        currentPrice: 350,
        endTime: "2024-10-01T18:00:00Z",
        imageUrl: "https://example.com/images/vase.jpg",
      },
      {
        id: 3,
        name: "Antique Vase",
        description: "A beautifully crafted antique vase from the Ming Dynasty.",
        startingPrice: 200,
        currentPrice: 350,
        endTime: "2024-10-01T18:00:00Z",
        imageUrl: "https://example.com/images/vase.jpg",
      },
      {
          id: 2,
          name: "Rare Painting",
          description: "An original painting by a renowned artist.",
          startingPrice: 500,
          currentPrice: 800,
          endTime: "2024-10-05T18:00:00Z",
          imageUrl: "https://example.com/images/painting.jpg",
        },
        {
          id: 3,
          name: "Antique Vase",
          description: "A beautifully crafted antique vase from the Ming Dynasty.",
          startingPrice: 200,
          currentPrice: 350,
          endTime: "2024-10-01T18:00:00Z",
          imageUrl: "https://example.com/images/vase.jpg",
        },
  ];
  

