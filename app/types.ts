// types.ts
export interface Review {
    id: number;
    reviewer: string;
    rating: number; // Assuming rating is out of 5
    comment: string;
  }
  
  export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
    reviews: Review[];
  }
  

  // types.ts

// Type for a single comment on a blog post
export interface Comment {
  id: number;
  commenter: string;
  comment: string;
}

// Type for a blog post
export interface BlogPost {
  id: number;
  title: string;
  author: string;
  date: string; // or Date if you want to use JavaScript Date objects
  content: string;
  imageUrl: string;
  tags: string[];
  comments: Comment[];
}
