import * as yup from 'yup';

export const registerFormSchemas = yup.object().shape({
    email: yup.string().email('Geçerli bir email adresi giriniz.').required('Bu alan Zorunludur.'),
    age: yup.number().min(15, ('15 Yaşından Büyük Olmalısınız')).integer().required('Bu alan zorunludur.'),
    password: yup.string().required('Bu alan zorunludur.'),
    confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'şifreler Uyuşmuyor.').required('Bu alan zorunludur.'),
    term: yup.boolean().required('Lütfen kutuyu onaylayınız.')
}) 