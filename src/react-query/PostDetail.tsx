import { useQuery } from "@tanstack/react-query";
import { fetchComments } from "../services/post.api";
import "./PostDetails.css";
interface PostDetailProps {
  post: any;
  deleteMutation: any;
    updateMutation: any;
}
const PostDetail = ({ post, deleteMutation, updateMutation }: PostDetailProps) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["post", post.id],
    queryFn: () => fetchComments(post.id),
    staleTime: 3000,
  });

  return (
    <div>
      {isLoading && <p>Loading comments...</p>}
      {error && <p>Error loading comments: {error.message}</p>}
      {data && (
        <div>
          <h3 style={{ color: "blue" }}>{post.title}</h3>
          <div className="mb-2">
            <button
              className="btn btn-danger"
              onClick={() => deleteMutation.mutate(post.id)}
            >
              Delete
            </button>
          </div>
          {deleteMutation.isError && (
            <p className="error">
              Error deleting post: {deleteMutation.error.message}
            </p>
          )}
          {deleteMutation.isPending && (
            <p className="pending">Deleting post...</p>
          )}
          {deleteMutation.isSuccess && (
            <p className="success">Post deleted successfully!</p>
          )}
          <div>
            <button className="btn btn-success" onClick={() => updateMutation.mutate(post.id)}>Update title</button>
          </div>
          {updateMutation.isError && (
            <p className="error">
              Error updating post: {updateMutation.error.message}
            </p>
          )}
          {updateMutation.isPending && (
            <p className="pending">Updating post...</p>
          )}
          {updateMutation.isSuccess && (
            <p className="success">Post updated successfully!</p>
          )}
          <p style={{ margin: "10px" }}>{post.body}</p>
          <h4>Comments:</h4>
          <ul>
            {data.map((comment: any) => (
              <li key={comment.id}>
                {comment.email} : {comment.body}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default PostDetail;
