import './SignUp.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { FcGoogle } from 'react-icons/fc'
import { FaFacebookF, FaRegEye, FaRegEyeSlash, FaCheckCircle, FaTimesCircle } from 'react-icons/fa'
import { IoInformationCircleOutline, IoNavigateCircleOutline } from "react-icons/io5";

const BrkLogo = () =>(

    <div className='logo'>

        <Link to= '/'>
            <span className='logo-1'>B</span>
            <span className='logo-2'>R</span>
            <span className='logo-3'>K</span>
        </Link>

    </div>
)

export default function SignUp(){
 
    const [passaword, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    // Lógica validação de senha
    const validations = {
        length: passaword.length >= 8,
        uppercase: /[A-Z]/.test(passaword),
        lowercase: /[a-z]/.test(passaword),
        number: /[0-9]/.test(passaword),
        special: /[@!$&_]/.test(passaword),
    }

    const PassawordCriterion = ({ isValid, text}) => {
        return(
        <li className={`criterion ${isValid ? 'valid' : ''}`}>

            {isValid ? <FaCheckCircle color='green'/> : <FaTimesCircle color='red'/>}
            
            <span>{text}</span>
            
        </li>
        )
    }

    

    return(
        <div className='container'>

            <BrkLogo/>

            <h1 className='tittle'>Crie uma conta. É grátis</h1>

            <div className="socialLogin">

                <button className="google">
                    <FcGoogle size={24}/>
                </button>

                <button className="facebook">
                    <FaFacebookF size={24}/>
                </button>

            </div>

            <div className="separator"> OU </div>

            <p className="subtitle"> Nos informe os seus dados para que possamos melhorar a sua experiencia ne BRK </p>

            <form>

                <div className="formGroup">
                    
                    <label htmlFor="cpf">CPF <IoNavigateCircleOutline/>
                    </label>

                    <input type="text" id="cpf" name="cpf" placeholder="000.000.000-00" required/>

                </div>

                <div className="formGroup">

                    <label htmlFor="fullname">Nome Completo</label>

                    <input type="text" id="fullname" name="fullname" placeholder="Digite o seu nome completo"/>

                </div>

                <div className="formGroup">

                    <label htmlFor="nickname">como você quer ser chamado(a)?0</label>

                    <input 
                        type="text"
                        id="nickname"
                        name="nickname"
                        placeholder="Exemplo: RyanRedoom"
                    />

                    <small>Aparecerá em seu perfil, anuncios e chats.</small>
                </div>

                <div className="formGroup">
                    <label htmlFor="birthdate">data de nascimento</label>
                    <input 
                        type="text"
                        id="birthdate"
                        name="birthdate"
                        placeholder="dd/mm/aaaa"/>
                </div>


                <div className="formGroup">

                    <label htmlFor="email">E-mail</label>

                    <input 
                        type="email"
                        id="email"
                        name="email"
                        required
                    />

                    <small>Enviaremos um e-mail de confirmação</small>
                </div>

                <div className="formGroup">
                    <label htmlFor="passaword">senha</label>
                    <div className="passawordWrapper">

                        <input 
                                type={ showPassword ? 'text' : 'password'}
                                id="passaword"
                                name="passaword"
                                value={passaword}
                                onChange={(e)=> setPassword(e.target.value)}
                                required/>

                            <button 
                                type='button'
                                onClick={() => setShowPassword(!showPassword)}
                                className="eyeIcon">
                                    {showPassword ? <FaRegEye/> : <FaRegEyeSlash/>}
                            </button>
                    </div>

                </div>

                <div className="passwordCriteria">

                    <p>Para a sua segurança, crie uma senha com no mínimo:</p>

                    <ul>
                        <PassawordCriterion
                            isValid={validations.length}
                            text={'8 ou mais caracteres'}
                        />

                        <PassawordCriterion 
                            isValid={validations.uppercase}
                            text={'Uma letra Maíscula'}
                        />

                        <PassawordCriterion 
                            isValid = {validations.lowercase}
                            text={'Uma letra miniscula'}
                        />

                        <PassawordCriterion 
                            isValid={validations.number}
                            text={'Um número'}
                        />

                        <PassawordCriterion 
                            isValid={validations.special}
                            text={'Um caracter especial (@!$&_'}
                        />
                    </ul>

                </div>

                <button type="submit" className="submitButton">
                    Cadastre-se
                </button>

            </form>

            <p className="loginLink">
                ja tem uma conta? <Link to='/signin'>Entre</Link>
            </p>
        </div> 
    )
}