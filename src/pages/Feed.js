import React, { useEffect, useState } from "react";
import { fetchPosts } from "../api";

const Feed = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchFeed = async () => {
            const fetchedPosts = await fetchPosts();
            setPosts(fetchedPosts.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp)));
        };

        fetchFeed();
        const interval = setInterval(fetchFeed, 5000); 
        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <h2>Live Feed</h2>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>{post.title} - {new Date(post.timestamp).toLocaleTimeString()}</li>
                ))}
            </ul>
        </div>
    );
};

export default Feed;
