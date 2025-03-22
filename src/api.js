import axios from "axios";
import { useState } from "react";

const API_BASE_URL = "http://20.244.56.144/test"; 
const authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzQyNjIyNTE5LCJpYXQiOjE3NDI2MjIyMTksImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjAxMTQzYWI3LWJiNDYtNDM2MC1iNmEzLWJhMjY3NzY5MzUwYiIsInN1YiI6IjcxNzgyMmQxNTRAa2NlLmFjLmluIn0sImNvbXBhbnlOYW1lIjoia2FycGFnYW0gY29sbGVnZSBvZiBlbmdpbmVlcmluZyIsImNsaWVudElEIjoiMDExNDNhYjctYmI0Ni00MzYwLWI2YTMtYmEyNjc3NjkzNTBiIiwiY2xpZW50U2VjcmV0IjoieXNWaGlSbWJkcm1NWGRWeCIsIm93bmVyTmFtZSI6IlNVSklUSCBTIiwib3duZXJFbWFpbCI6IjcxNzgyMmQxNTRAa2NlLmFjLmluIiwicm9sbE5vIjoiNzE3ODIyZDE1NCJ9.BwLXNH4uMY796AD2mKRkFrif3G2XIl-HzMgI4OiLPU8';

export const fetchUsers = async () => {
    return axios.get(`${API_BASE_URL}/users`, {
        headers: {
            'Authorization': `Bearer ${authToken}`
        }
    })
    .then(response => response.data)
    .catch(error => console.error('Error fetching users:', error));
};

export const fetchPosts = async () => {
    return axios.get(`${API_BASE_URL}/posts`, {
        headers: {
            'Authorization': `Bearer ${authToken}`
        }
    })
    .then(response => response.data)
    .catch(error => console.error('Error fetching posts:', error));
};

export const fetchComments = async () => {
    return axios.get(`${API_BASE_URL}/comments`, {
        headers: {
            'Authorization': `Bearer ${authToken}`
        }
    })
    .then(response => response.data)
    .catch(error => console.error('Error fetching comments:', error));
};