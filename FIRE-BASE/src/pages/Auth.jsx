import React, { useState } from 'react'
import '../css/Auth.css'
import { FaGoogle } from "react-icons/fa";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { auth } from '../Firebase'
import { useNavigate } from "react-router-dom";

const provider = new GoogleAuthProvider();


function Auth() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()

    const register = async () => {
        try {
            const response = await createUserWithEmailAndPassword(auth, email, password);
            const user = response.user;
            if (user) {
                toast.success("Kayıt Başarılı !")
                navigate("/")
            }
        } catch (error) {
            toast.error("Kayıt ederken bir sorun oluştu");
            setEmail('');
            setPassword('');
        }
    }

    const login = async () => {
        try {
            const response = await signInWithEmailAndPassword(auth, email, password);
            const user = response.user;
            if (user) {
                toast.success('Anasayfaya Yönlendirilyorsunuz')
                navigate("/")
            }
        } catch {
            toast.error('Hatalı Giriş!')
            setEmail('');
            setPassword('');
        }

    };

    const loginWithGoogle = async () => {
        try {
            const response = await signInWithPopup(auth, provider)
            // const credential = GoogleAuthProvider.credentialFromResult(response);
            // const token = credential.accessToken;
            const user = response.user;
            if (user) {
                navigate("/")
            }
        } catch (error) {
            toast.error(error.message);
        }
    }

    return (
        <div className='hey'>
            <div>
                <h1 className='baslik'>Giriş yap / Kayıt Ol</h1>
            </div>
            <div className='input'>
                <input value={email} onChange={(e) => setEmail(e.target.value)} className='input-div' type="text" placeholder='Email Giriniz' />
                <input value={password} onChange={(e) => setPassword(e.target.value)} className='input-div' type="password" placeholder='Şifre' />
            </div>
            <div className='button-div'>
                <button onClick={login} className='button-giriş'>Giriş Yap</button>
                <button onClick={register} className='button-kayitol'>Kayıt Ol</button>
                <button onClick={loginWithGoogle} className='google'><FaGoogle style={{ marginTop: '2px', marginRight: '3px' }} />Google İle Giriş</button>
            </div>

        </div>
    )
}

export default Auth