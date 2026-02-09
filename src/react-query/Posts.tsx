import { useQuery } from '@tanstack/react-query'
import { fetchPosts } from '../services/Post.api'

const Posts = () => {

    const {data, isLoading, error} = useQuery({
        queryKey : ['posts'],
        queryFn : () => fetchPosts(1),
    })

  return (
    <div>
       <ul>
        {isLoading && <p>Loading...</p>}
        {error && <p>Error: {error.message}</p>}
        {data && data.map((post:any) => (
            <li key={post.id}>{post.title}</li>
        ))}
       </ul>
       <div className='pages'>
            <button>Previous Page</button>
       </div>
    </div>
  )
}

export default Posts
