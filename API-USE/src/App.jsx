import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'


const BASE_URL = 'http://localhost:3005'


function App() {
  const getAllUsers = async () => {
    const response = await axios.get(BASE_URL + "/users");
    console.log(response.data);
  }

  // const getUserById = async (userId) => {
  //   const response = await axios.get(BASE_URL + "/users/" + userId);
  //   console.log(response.data);
  // }

  const createUsers = async (newUser) => {
    const response = await axios.post(`${BASE_URL}/users/`, newUser)
    console.log(response.data);
  }

  const updateUser = async (userId, updatedUser) => {
    const response = await axios.put(`${BASE_URL}/users/${userId}`, updatedUser)
    console.log(response.data);
  }

  const deleteUserById = async (userId) => {
    const response = await axios.delete(`${BASE_URL}/users/${userId}`)
    console.log(response.data);
  }

  const getUserById = async (userId) => {
    const response = await axios.get(`${BASE_URL}/users/${userId}`);
    return response.data.postId; // Get the postId from the user object
  };

  const getPostById = async (postId) => {
    const response = await axios.get(`http://localhost:3005/posts?postId=${postId}`);
    return response.data[0]; // Since it's an array of posts, take the first matching one
  };

  const getPost = async () => {
    const postId = await getUserById(1); // Assuming 1 is the userId you're fetching
    const postData = await getPostById(postId); // Get the post by postId
    console.log(postData); // Display the post data
  };

  useEffect(() => {
    getPost();
  }, []);
  return (
    <>

    </>
  )
}

export default App
