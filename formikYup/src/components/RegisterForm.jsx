import React from 'react'
import { useFormik } from 'formik';
import { registerFormSchemas } from '../RegisterFormShema/RegisterFormSchemas'

//formik entegration
function RegisterForm() {
    const submit = (values, action) => {
        setTimeout(() => {
            console.log('Form submitted:', values);
            action.resetForm();
        }, 1500)
    }
    const { values, errors, handleChange, handleSubmit } = useFormik({
        initialValues: {
            email: '',
            age: '',
            password: '',
            confirmPassword: '',
            term: ''
        },
        validationSchema: registerFormSchemas,
        onSubmit: submit
    });
    console.log(errors);
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="">Email</label>
                    <input type="email" id="email" placeholder='Email giriniz'
                        value={values.email}
                        onChange={handleChange}
                    />
                    {errors.email && <p className='input-error'>{errors.email}</p>}
                </div>
                <div>
                    <label htmlFor="">Age</label>
                    <input type="number" id="age" placeholder='Yaşınızı giriniz.'
                        value={values.age}
                        onChange={handleChange} />
                    {errors.age && <p className='input-error' >{errors.age}</p>}
                </div>
                <div>
                    <label htmlFor="">Password</label>
                    <input type="password" id="password" placeholder='Şifre giriniz'
                        value={values.password}
                        onChange={handleChange} />
                    {errors.password && <p className='input-error' >{errors.password}</p>}
                </div>
                <div>
                    <label htmlFor="">Re-Password</label>
                    <input type="password" id="confirmPassword" placeholder='Şifrenizi tekrar giriniz'
                        value={values.confirmPassword}
                        onChange={handleChange} />
                    {errors.confirmPassword && <p className='input-error'>{errors.confirmPassword}</p>}
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-start' }}>
                    <div >
                        <input style={{ width: '20px', height: '12px' }} type="checkbox" id="term"
                            value={values.term}
                            onChange={handleChange} />
                        <label htmlFor="">Kullanıcı Sözleşmesini Kabul Ediyorum.</label>
                        {errors.term && <p className='input-error'>{errors.term}</p>}
                    </div>
                </div>

                <button type='submit' style={{ cursor: 'pointer' }}>Kaydet</button>
            </form>
        </div>
    )
}

export default RegisterForm