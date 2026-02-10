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

export async function deletePost(postId:number) {
    const response = await axios.delete(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    if (response.status !== 200) {
        throw new Error('Network response was not ok')
    }
    return true
}

export async function updatePost(postId:number, updatedData:any) {
    const response = await axios.put(`https://jsonplaceholder.typicode.com/posts/${postId}`, updatedData)
    if (response.status !== 200) {
        throw new Error('Network response was not ok')
    }
    return {title : "Updated Title", body : "Updated Body"}
}