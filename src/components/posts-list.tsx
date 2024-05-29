import prisma from '@/lib/db';
import Link from 'next/link';

export default async function PostList() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const posts = await prisma.post.findMany();

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id} className='mb-5'>
          <Link href={`/posts/${post.id}`} className='text-xl'>
            {post.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
