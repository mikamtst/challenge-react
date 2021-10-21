import * as yup from 'yup';

export const userSchema = yup.object().shape({
    nome: yup.string()
        .required('Nome obrigatório')
        .max(50, 'No maximo 50 caracteres')
        .min(10, 'No minimo 10 caracteres'),
    date: yup.date()
        .nullable()
        .transform((curr, orig) => orig === '' ? null : curr)
        .required('Data obrigatória'),
    cpf: yup.string()
        .required('CPF obrigatorio')
        .max(11, 'No maximo 11 caracteres')
        .min(11, 'No minimo 11 caracteres'),
    cep: yup.string()   
        .required('Endereço obrigatorio')
        .max(8, 'No maximo 8 caracteres')
        .min(8, 'No minimo 8 caracteres'),
});