import "./Header.css"
import Logo from './assets/logo.png'

export const Header = () => {
    return (
        <header>
            <img src={Logo} alt="Logo de la app" />
            <a href="/">Home</a>  
        </header>
        
    )
}