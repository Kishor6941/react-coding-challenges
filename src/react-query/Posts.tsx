import { useQuery } from '@tanstack/react-query'
import { fetchPosts } from '../services/Post.api'
import { useState } from 'react'
import PostDetail from './PostDetail'

const Posts = () => {
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [selectedPost, setSelectedPost] = useState(null)
    const {data, isLoading, error} = useQuery({
        queryKey : ['posts', currentPage],
        queryFn : () => fetchPosts(currentPage),
        staleTime : 2000,
    })

  return (
    <div>
       <ul>
        {isLoading && <p>Loading...</p>}
        {error && <p>Error: {error.message}</p>}
        {data && data.map((post:any) => (
            <li key={post.id} onClick={() => setSelectedPost(post)}>{post.title}</li>
        ))}
       </ul>
       <div className='pages' style={{display:"flex", justifyContent:"space-between",margin : "0 30px"}}>
            <button onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}>Previous Page</button>
            <span> Page {currentPage} </span>
            <button onClick={() => setCurrentPage(prev => prev + 1)}>Next Page</button>
       </div>
       <hr />
       {selectedPost && <PostDetail post={selectedPost} />}
    </div>
  )
}

export default Posts
