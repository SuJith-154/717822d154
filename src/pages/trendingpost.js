
import React from "react";
import  { useEffect, useState } from "react";
import { fetchPosts, fetchComments } from "../api";

const trendingpost = () => {
    const [trendingPosts, setTrendingPosts] = useState([]);

    useEffect(() => {
        const getTrendingPosts = async () => {
            const posts = await fetchPosts();
            const comments = await fetchComments();

            const postCommentCounts = posts.map(post => ({
                ...post,
                commentCount: comments.filter(comment => comment.postId === post.id).length
            }));

            const maxComments = Math.max(...postCommentCounts.map(post => post.commentCount));
            setTrendingPosts(postCommentCounts.filter(post => post.commentCount === maxComments));
        };

        getTrendingPosts();
    }, []);

    return (
        <div>
            <h2>Trending Posts</h2>
            <ul>
                {trendingPosts.map(post => (
                    <li key={post.id}>{post.title} - {post.commentCount} comments</li>
                ))}
            </ul>
        </div>
    );
};

export default trendingpost;
