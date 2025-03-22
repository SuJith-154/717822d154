import React, { useEffect, useState } from "react";
import { fetchUsers, fetchPosts } from "../api";

const topusers = () => {
  const [topUsers, setTopUsers] = useState([]);

  useEffect(() => {
    const getTopUsers = async () => {
      try {
        const users = await fetchUsers();
        const posts = await fetchPosts();

        const userPostCounts = users.map(user => ({
          ...user,
          postCount: posts.filter(post => post.userId === user.id).length,
        }));

        setTopUsers(userPostCounts.sort((a, b) => b.postCount - a.postCount).slice(0, 5));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getTopUsers();
  }, []);

  return (
    <div>
      <h2>Top 5 Users</h2>
      <ul>
        {topUsers.map(user => (
          <li key={user.id}>{user.name} - {user.postCount} posts</li>
        ))}
      </ul>
    </div>
  );
};

export default topusers;

