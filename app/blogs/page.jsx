import Post from "../components/Post"
const blogs = [
  {
    id: 1,
    title: "Getting Started with React",
    author: "Abdus Samad",
    category: "React",
    description: "Learn the basic concepts of React including components, JSX, props, and state.",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee",
    date: "2026-09-01",
    readTime: "5 min read"
  },
  {
    id: 2,
    title: "Understanding JavaScript Arrays",
    author: "Rafi Ahmed",
    category: "JavaScript",
    description: "A beginner-friendly guide to arrays and useful methods like map, filter, and reduce.",
    image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479",
    date: "2026-09-05",
    readTime: "7 min read"
  },
  {
    id: 3,
    title: "Introduction to TypeScript",
    author: "Nusrat Jahan",
    category: "TypeScript",
    description: "Understand TypeScript types, interfaces, functions, and why developers use it.",
    image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea",
    date: "2026-09-10",
    readTime: "6 min read"
  },
  {
    id: 4,
    title: "What is an API?",
    author: "Tanvir Hasan",
    category: "Web Development",
    description: "Learn how APIs work and how frontend applications communicate with backend servers.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31",
    date: "2026-09-15",
    readTime: "8 min read"
  },
  {
    id: 5,
    title: "Introduction to Next.js",
    author: "Sadia Rahman",
    category: "Next.js",
    description: "Explore Next.js and learn about routing, server components, and modern web development.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
    date: "2026-09-20",
    readTime: "10 min read"
  }
];
const BlogPage = () => {
  return (
    <div>
      <h1>Our blog page</h1>
      {blogs.map(post => <Post key={post.id} post={post} />)}

    </div>
  );
};

export default BlogPage;