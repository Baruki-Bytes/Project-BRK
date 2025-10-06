import './signin.css'
import { FcGoogle } from 'react-icons/fc'
import { FaFacebookF } from 'react-icons/fa'



export default function Signin(){
    return(
        <div className='container'>

            <div className='card'>
                <h2>Entre na sua conta e negocie com segurança!!!</h2>
                <p>Acesse e aproveite uma experiencia segura dentro </p>

                <div className='socialLogin'>

                    <button className='google'>
                        <FcGoogle size={24}/>
                    </button>

                    <button className='facebook'>
                        <FaFacebookF size={24}/>
                    </button>

                </div>

                <div className='divider'>
                    <span>Ou conecte com </span>
                </div>

                <label htmlFor='email'>E-mail</label>
                <input type='email' id='email' placeholder='Digite o seu e-mail'/>

                <button className='acessarBtn'>Acessar</button>

                <p className='register'>Não tem conta??? <a href='/signup'>Cadastrae-se</a></p>

            </div>

            <p className='terms'> Ao continuar, você concorda com os <a href='#'>Termos de uso</a> e <a href='#'>Politicas de Privacidade</a> da BRK e seus paceiros, e em receber comunicações da BRK </p>

        </div>
    )
}