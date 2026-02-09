import { useQuery } from '@tanstack/react-query'
import { fetchComments } from '../services/Post.api'
interface PostDetailProps {
    post : any
}
const PostDetail = ({post}: PostDetailProps) => {
    const {data, isLoading, error} = useQuery({
        queryKey : ['post', post.id],
        queryFn : () => fetchComments(post.id),
        staleTime : 3000
    })
   
  return (
    <div>
      {isLoading && <p>Loading comments...</p>}
      {error && <p>Error loading comments: {error.message}</p>}
      {data && (
        <div>
          <h3>Comments:</h3>
          <ul>
            {data.map((comment: any) => (
              <li key={comment.id}>{comment.body}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default PostDetail
