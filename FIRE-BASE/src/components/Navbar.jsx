import React from 'react'
import '../css/Navbar.css'
import { auth } from '../Firebase'
import { signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';



function Navbar() {
    const navigate = useNavigate()

    const logout = () => {
        toast.success('Çıkış yapıldı.')
        setTimeout(() => {
            signOut(auth)
            navigate("/auth")
        }, 3000)

    }
    return (
        <div className='navbar'>
            <div className='navbar-left'>
                FİREBASE
            </div>
            <div onClick={logout} className='navbar-right'>
            </div>
        </div>
    )
}

export default Navbar