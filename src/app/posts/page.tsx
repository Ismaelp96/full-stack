import Link from 'next/link';

const PostPage = async () => {
  const response = await fetch('https://dummyjson.com/posts?limit=10');
  const data = await response.json();

  return (
    <main className='text-center pt-32 px-5'>
      <h1 className='text-4xl md:text-5xl font-bold mb-5'>All Posts</h1>
      <ul>
        {data.posts.map((post: any) => (
          <li key={post.id} className='mb-5'>
            <Link href={`/posts/${post.id}`} className='text-xl'>
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default PostPage;
