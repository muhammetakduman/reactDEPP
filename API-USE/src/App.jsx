import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'


const BASE_URL = 'http://localhost:3005'


function App() {
  const getAllUsers = async () => {
    const response = await axios.get(BASE_URL + "/users");
    console.log(response.data);
  }

  const getUserById = async (userId) => {
    const response = await axios.get(BASE_URL + "/users/" + userId);
    console.log(response.data);
  }

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

  useEffect(() => {
    // getAllUsers();

    // getUserById(2); // replace with your desired user id

    // const newUser = {
    //   "id": "4",
    //   "name": "Ali",
    //   "password": "keko36"
    // }

    // createUsers(newUser)
    // updateUser("4", {
    //   "username": "aysel",
    //   "password": "dadas25"
    // })
    deleteUserById("4")


  }, [])
  return (
    <>

    </>
  )
}

export default App
