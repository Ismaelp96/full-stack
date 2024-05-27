import { createPost } from '@/actions/actions';

export default async function CreatePost() {
  return (
    <main className='text-center pt-16 w-full flex flex-col justify-center items-center'>
      <h1 className='text-4xl md:text-5xl font-bold mb-5'>Create post</h1>

      <form
        action={createPost}
        className='flex items-center h-10 space-x-2 mt-10'
      >
        <input
          type='text'
          placeholder='Title for new post'
          name='title'
          className='border rounded px-3 h-full'
          required
        />
        <button
          type='submit'
          className='px-5 e bg-blue-500 text-white rounded h-full hover:bg-blue-600 transition-colors duration-200'
        >
          Submit
        </button>
      </form>
    </main>
  );
}
