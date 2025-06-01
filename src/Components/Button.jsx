import style from "./Button.module.css"
import { Link } from 'react-router-dom'
import { RiInformation2Line as Details } from "react-icons/ri";


const Button = ({ label, router, cod_livro }) => {

    return (
        <div>
            <Link to={`${router}${cod_livro}`}>
                <button>{label}</button>
            </Link>
        </div>
    )
}
export default Button;


