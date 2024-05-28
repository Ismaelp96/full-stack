import { createPost } from '@/actions/actions';

export default function Form() {
	return (
		<form
			action={createPost}
			className='flex flex-col max-w-[400px] mx-auto gap-2 my-10'>
			<input
				type='text'
				placeholder='Title for new post'
				name='title'
				className='border rounded px-3 py-2 h-10'
				required
			/>
			<textarea
				name='body'
				placeholder='Body content for new post'
				className='border rounded px-3 resize-none'
				rows={12}
				required
			/>
			<button
				type='submit'
				className='px-5 e bg-blue-500 text-white rounded h-10 hover:bg-blue-600 transition-colors duration-200'>
				Submit
			</button>
		</form>
	);
}
