import './Header.css'
import { Link } from 'react-router-dom'


export default function Header(){
    return(
        <header className='header'>
            
            <div className='logo'>

                <Link to= '/'>
                    <span className='logo-1'>B</span>
                    <span className='logo-2'>R</span>
                    <span className='logo-3'>K</span>
                </Link>

            </div>

            <div className='search-bar'>

                <input type='text' placeholder='Buscar "Apartamento"'/>

                <div className='location'>

                    <button className='search-btn'>
                      <ion-icon name="search-outline"></ion-icon>
                    </button>
                    
                </div>

            </div>

        </header>
    )
}