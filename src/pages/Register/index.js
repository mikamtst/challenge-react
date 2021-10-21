import React, { useState } from 'react';
import Header from '../../components/Header'
import Imagem from '../../assets/bloco_final_image.svg'
import './style.css'
import Cookies from 'universal-cookie';
import { consultaCorreio } from '../../services/api'
import { userSchema } from '../../validation/validation'
import { AlertCircle, User, Calendar, FileText, MapPin } from 'react-feather'
import { Zoom } from 'react-reveal';

export default function Register() {

    const createUser = async (e) => {
        e.preventDefault();
        let formData = {
            nome: e.target[0].value,
            date: e.target[1].value,
            cpf: e.target[2].value,
            cep: e.target[3].value,
        };
        try {
            await userSchema.validate(formData, { abortEarly: false });
        } catch (error) {
            let errors = {}
            error.inner.forEach((element) => {
                errors[element.path] = element.message;
            });
            setErrors(errors)
            return
        }
        localStorage.setItem("dados",
            JSON.stringify({
                nome: e.target[0].value,
                date: e.target[1].value,
                cpf: e.target[2].value,
                cep: e.target[3].value,
                bairro,
                logradouro,
                cidade,
                estado,
            }))
        const cookies = new Cookies();

        cookies.set('dados',{
                nome: e.target[0].value,
                date: e.target[1].value,
                cpf: e.target[2].value,
                cep: e.target[3].value,
                bairro,
                logradouro, 
                cidade,
                estado,
            });
        console.log(cookies.get('dados'));

    };
    const [errors, setErrors] = useState({});

    async function submit() {
        const dados = await consultaCorreio(cep);
        console.log(dados)
        setBairro(dados.data.bairro);
        setLogradouro(dados.data.logradouro)
        setCidade(dados.data.localidade);
        setEstado(dados.data.uf)

    }
    const [cep, setCep] = useState();
    const [bairro, setBairro] = useState();
    const [logradouro, setLogradouro] = useState();
    const [cidade, setCidade] = useState();
    const [estado, setEstado] = useState();

    return (
        <div className="register">
            <Header />
            <div className="cont-register">
                <div className="area-cadastro">
                    <Zoom duration={900}>
                    <div className="box-cadastro">
                        <div className="conteudo-registro">
                            <div className="titulo-cadastro"><h1>Cadastre-se</h1></div>
                            <form onSubmit={createUser}>

                                <div className="container-input" style={{ border: errors.nome ? "1px solid red" : "1px solid rgb(45, 53, 97)" }}><div className="icon-input"><User /></div>
                                    <input name="nome" type="string" placeholder="Nome..." />
                                    <div className="icon-alert ">
                                        <div className="tooltip"><AlertCircle style={{ display: errors.nome ? "block" : "none", color: "#e34141" }} />
                                            <span className="tooltiptext">{errors.nome}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="container-input" style={{ border: errors.date ? "1px solid red" : "1px solid rgb(45, 53, 97)" }}><div className="icon-input"><Calendar /></div>
                                    <input name="data" type="date" />
                                    <div className="icon-alert ">
                                        <div className="tooltip"><AlertCircle style={{ display: errors.date ? "block" : "none", color: "#e34141" }} />
                                            <span className="tooltiptext">{errors.date}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="container-input" style={{ border: errors.cpf ? "1px solid red" : "1px solid rgb(45, 53, 97)" }}><div className="icon-input"><FileText /></div>
                                    <input name="cpf" type="string" placeholder="CPF..." />
                                    <div className="icon-alert ">
                                        <div className="tooltip"><AlertCircle style={{ display: errors.cpf ? "block" : "none", color: "#e34141" }} />
                                            <span className="tooltiptext">{errors.cpf}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="container-input" style={{ border: errors.cep ? "1px solid red" : "1px solid rgb(45, 53, 97)" }}><div className="icon-input"><MapPin /></div>
                                    <input name="cep" type="string" placeholder="CEP..."
                                        value={cep}
                                        onBlur={() => submit()}
                                        onChange={(e) => {
                                            setCep(e.target.value)
                                        }} /><div className="icon-alert ">
                                        <div className="tooltip"><AlertCircle style={{ display: errors.cep ? "block" : "none", color: "#e34141" }} />
                                            <span className="tooltiptext">{errors.cep}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="dados-cep">
                                    <input name="logradouro" placeholder="Logradouro" disabled
                                        value={logradouro} />
                                    <input name="bairro" placeholder="Bairro" disabled
                                        value={bairro} />
                                    <input name="cidade" placeholder="Cidade" disabled
                                        value={cidade} />
                                    <input name="estado" placeholder="Estado" disabled
                                        value={estado} />
                                    <div className="area-button-register"><input className="button-register" type="submit" /></div>
                                </div>
                            </form>
                        </div>
                    </div>
                    </Zoom>
                </div>
                <div className="img-register"><img src={Imagem} alt="bloco_final_image" className="size" /></div>
            </div>
        </div>

    );
}