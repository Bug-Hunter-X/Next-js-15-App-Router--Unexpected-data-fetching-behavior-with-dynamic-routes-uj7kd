```javascript
// pages/blog/[slug].js

import { MetadataRoute } from 'next/server';

export default function BlogPost({ params, searchParams }) {
  const { slug } = params;
  console.log("slug:", slug);

  // Simulate fetching data from an API
  const blogPost = {
    title: `Post ${slug}`,
    content: `This is the content of post ${slug}`
  };

  return (
    <div>
      <h1>{blogPost.title}</h1>
      <p>{blogPost.content}</p>
    </div>
  );
}

export const metadata = {
  title: 'Blog Post',
} as MetadataRoute;


export async function generateMetadata({params}){
  return {
    title: `Blog Post - ${params.slug}`
  }
}

// pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Link href="/blog/post-1">Go to Post 1</Link>
    </div>
  );
}
```