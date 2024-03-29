import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import track from "../img/track.png";
import { useState } from "react";
import axios from "axios";

export default function Cadastre() {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [nome, setNome] = useState("");
    const [imagem, setImagem] = useState("");
    const [carregando, setCarregando] = useState(false);
    const navigate = useNavigate();

    function dadosUsuarioCadastro(e) {
        e.preventDefault();
        setCarregando(true)
        const promise1 = axios.post(
            "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up",
            {
                email: email,
                name: nome,
                image: imagem,
                password: senha
            }
        );

        promise1.then(() =>
            navigate("/", {
            })
        );

        promise1.catch((error) => {
            alert(error.response.data.message)
            setCarregando(false)
        })
    }

    return (
        <CadastreInputs>
            <Header><img src={track} alt='' /></Header>
            <form onSubmit={dadosUsuarioCadastro}>
                <input
                    data-identifier="input-email"
                    type={'text'}
                    placeholder={"email"}
                    onChange={(e) => setEmail(e.target.value)} disabled={carregando}
                ></input>
                <input
                    data-identifier="input-password"
                    type={'text'}
                    placeholder={"senha"}
                    onChange={(e) => setSenha(e.target.value)} disabled={carregando}
                ></input>
                <input
                    data-identifier="input-name"
                    type={'text'}
                    placeholder={"nome"}
                    onChange={(e) => setNome(e.target.value)} disabled={carregando}
                ></input>
                <input
                    data-identifier="input-photo"
                    type={'text'}
                    placeholder={"foto"}
                    onChange={(e) => setImagem(e.target.value)} disabled={carregando}
                ></input>
                <button>Cadastrar</button>
                <Link to="/"><p data-identifier="back-to-login-action">Já tem uma conta? Faça login!</p></Link>
            </form>
        </CadastreInputs>
    )
}
const Header = styled.div`
display: flex;
align-items: center;
justify-content: center;
img{
    width: 180px;
    height: 180px;
}
`
const CadastreInputs = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
height: 86vh;
form{
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
}
input{
    margin-top: 5px;
    border: none;
    border: 1px solid #D4D4D4;
    border-radius: 5px;
    width: 303px;
    height: 45px;
}
input::placeholder{
    color: #D4D4D4;
    font-family: 'Lexend Deca', sans-serif;
    font-size: 20px;
}
button{
    width: 303px;
    height: 45px;
    margin-top: 5px;
    font-size: 20px;
    background-color:#52B6FF ;
    color: #FFFFFF;
    border: none;
    font-family: 'Lexend Deca', sans-serif;
    border-radius: 5px;
}
p{
    padding-top: 20px;
    font-family: 'Lexend Deca', sans-serif;
    font-size: 14px;
    color: #52B6FF;
    text-decoration:underline;
}
`