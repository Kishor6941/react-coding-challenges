import axios from "axios"

export async function fetchPosts(pageNum:number) {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${pageNum}`)
    const data = response.data
    // throw new Error('Simulated error')
    if (response.status !== 200) {
        throw new Error('Network response was not ok')
    }
    return data
} 

export async function fetchComments(postId:number) {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
    const data = response.data
    if (response.status !== 200) {
        throw new Error('Network response was not ok')
    }
    return data
}