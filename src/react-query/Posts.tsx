import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query'
import { fetchPosts, deletePost ,updatePost } from '../services/post.api'
import { useState,useEffect } from 'react'
import PostDetail from './PostDetail'

const Posts = () => {
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [selectedPost, setSelectedPost] = useState(null)
  const queryClient = useQueryClient()
    const {data, isLoading, error} = useQuery({
        queryKey : ['posts', currentPage],
        queryFn : () => fetchPosts(currentPage),
    })

 const deleteMutation = useMutation({
    mutationFn : (postId:number) => deletePost(postId),
    onSuccess : () => {
        queryClient.invalidateQueries({queryKey : ['posts', currentPage]})
    }
    })

const updateMutation = useMutation({
    mutationFn : (postId:number) => updatePost(postId, {title : "Updated Title", body : "Updated Body"}),
    onSuccess : () => {
        queryClient.invalidateQueries({queryKey : ['posts', currentPage]})
    }
    })

 useEffect(() => {
    const nextPage = currentPage + 1
    queryClient.prefetchQuery({
        queryKey : ['posts', nextPage],
        queryFn : () => fetchPosts(nextPage),
    })
 },[currentPage, queryClient])


  return (
    <div>
       <ul>
        {isLoading && <p>Loading...</p>}
        {error && <p>Error: {error.message}</p>}
        {data && data.map((post:any) => (
            <li key={post.id} onClick={() => { setSelectedPost(post); deleteMutation.reset(); updateMutation.reset(); }}>{post.title}</li>
        ))}
       </ul>
       <div className='pages' style={{display:"flex", justifyContent:"space-between",margin : "0 30px"}}>
            <button onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}>Previous Page</button>
            <span> Page {currentPage} </span>
            <button onClick={() => setCurrentPage(prev => prev + 1)}>Next Page</button>
       </div>
       <hr />
       {selectedPost && <PostDetail post={selectedPost} deleteMutation={deleteMutation} updateMutation={updateMutation} />}
    </div>
  )
}

export default Posts
