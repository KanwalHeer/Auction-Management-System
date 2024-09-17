// blogPostsData.ts (Dummy data)
import { BlogPost } from "../types";

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'Understanding TypeScript',
    author: 'John Doe',
    date: '2024-09-01',
    content: 'TypeScript is a superset of JavaScript that adds static types. It provides better tooling and more robust code. This post covers the basics of TypeScript and its advantages over JavaScript.',
    imageUrl: 'https://via.placeholder.com/150?text=TypeScript',
    tags: ['TypeScript', 'JavaScript', 'Programming'],
    comments: [
      { id: 1, commenter: 'Alice', comment: 'Great introduction to TypeScript!' },
      { id: 2, commenter: 'Bob', comment: 'Very informative. Thanks for the tips!' }
    ],
  },
  {
    id: 2,
    title: 'React vs Vue: A Comparison',
    author: 'Jane Smith',
    date: '2024-09-10',
    content: 'React and Vue are two of the most popular JavaScript frameworks. This post compares their features, performance, and ease of use to help you decide which one might be better for your project.',
    imageUrl: 'https://via.placeholder.com/150?text=React+vs+Vue',
    tags: ['React', 'Vue', 'JavaScript', 'Frameworks'],
    comments: [
      { id: 1, commenter: 'Alice', comment: 'This comparison is very useful!' },
      { id: 2, commenter: 'Charlie', comment: 'I prefer React, but the points about Vue are well made.' }
    ],
  },
  {
    id: 3,
    title: '10 Tips for Better Web Performance',
    author: 'Emily Davis',
    date: '2024-09-15',
    content: 'Improving web performance is crucial for a better user experience. In this post, we share ten actionable tips to enhance the performance of your web applications, from optimizing images to reducing server response times.',
    imageUrl: 'https://via.placeholder.com/150?text=Web+Performance',
    tags: ['Performance', 'Web Development', 'Optimization'],
    comments: [
      { id: 1, commenter: 'David', comment: 'Thanks for these great performance tips!' },
      { id: 2, commenter: 'Eva', comment: 'I learned a lot from this post. Will implement these tips!' }
    ],
  },
  {
    id: 4,
    title: 'Exploring GraphQL',
    author: 'Michael Brown',
    date: '2024-09-20',
    content: 'GraphQL is an API query language and runtime for your data. It allows clients to request exactly what they need and nothing more. This post introduces GraphQL and its benefits over traditional REST APIs.',
    imageUrl: 'https://via.placeholder.com/150?text=GraphQL',
    tags: ['GraphQL', 'API', 'Data'],
    comments: [
      { id: 1, commenter: 'Fiona', comment: 'Great explanation of GraphQL!' },
      { id: 2, commenter: 'George', comment: 'Looking forward to using GraphQL in my projects!' }
    ],
  },
  {
    id: 5,
    title: 'Introduction to Cloud Computing',
    author: 'Olivia Wilson',
    date: '2024-09-25',
    content: 'Cloud computing offers scalable resources and services over the internet. This introductory post covers the basics of cloud computing, its types, and how it can benefit businesses and developers alike.',
    imageUrl: 'https://via.placeholder.com/150?text=Cloud+Computing',
    tags: ['Cloud Computing', 'Technology', 'Business'],
    comments: [
      { id: 1, commenter: 'Henry', comment: 'Informative post about cloud computing!' },
      { id: 2, commenter: 'Isabella', comment: 'Good overview for beginners.' }
    ],
  },
];

export default blogPosts;
