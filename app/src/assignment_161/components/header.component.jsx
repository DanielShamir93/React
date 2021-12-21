import {Link} from 'react-router-dom';
import '../styles/components161.styles.css'

export default function Header() {

    return (
        <div>
            <Link className="page-link" to="/" >home</Link>
            <Link className="page-link" to="/products" >products</Link>
        </div>
        

    );

}