import React from 'react'
import { useFormik } from 'formik';


function RegisterForm() {
    const { values, errors, handleChange, handleSubmit } = useFormik({
        initialValues: {
            email: '',
            age: '',
            password: '',
            confirmPassword: '',
            term: ''
        },
    });
    return (
        <div>
            <form >
                <div>
                    <label htmlFor="">Email</label>
                    <input type="email" id="email" placeholder='Email giriniz'
                        value={values.email}
                        onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="">Age</label>
                    <input type="number" id="age" placeholder='Yaşınızı giriniz.'
                        value={values.age}
                        onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="">Password</label>
                    <input type="password" id="password" placeholder='Şifre giriniz'
                        value={values.password}
                        onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="">Re-Password</label>
                    <input type="password" id="confirmPassword" placeholder='Şifrenizi tekrar giriniz'
                        value={values.confirmPassword}
                        onChange={handleChange} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-start' }}>
                    <div >
                        <input style={{ width: '20px', height: '12px' }} type="checkbox" id="term"
                            value={values.term}
                            onChange={handleChange} />
                        <label htmlFor="">Kullanıcı Sözleşmesini Kabul Ediyorum.</label>
                    </div>
                </div>

                <button>Kaydet</button>
            </form>
        </div>
    )
}

export default RegisterForm