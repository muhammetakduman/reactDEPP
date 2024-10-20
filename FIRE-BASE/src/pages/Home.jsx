import React, { useEffect, useState } from 'react'
import { auth } from '../Firebase'
import { onAuthStateChanged } from "firebase/auth";



function Home() {
    const [user, setUser] = useState('')
    const getUserInfo = () => {
        onAuthStateChanged(auth, (userInformation) => {
            if (userInformation) {
                console.log(user)
                setUser(userInformation.email)
            }
        })
    }

    useEffect(() => {
        getUserInfo();
    }, [])

    return (
        <div style={{ margin: '10px', fontSize: '25px' }}>
            Seni görmek güzel {user}
        </div>

    )
}

export default Home