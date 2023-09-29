import { useEffect, useState } from "react";
import api from "../API/index.js"

export default function Posts() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchAllPosts = async () => {
            try {
                const response = await api.fetchPosts();
                setPosts(response);
            } catch (error) {
                console.error('Uh oh, error fetching posts! ', error);
            }
        }
        fetchAllPosts();
    }, [])

    return (
        <div className="posts-container">
            {posts.map((post) => (
                <div key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.description}</p>
                </div>
            ))}
        </div>
    )
}