import TranstionMenu from '../transaltionMenu/TranslationMenu';
import { Link } from 'react-router-dom';

const SignTopPart = () => {

    return (
       
        <section className='d-flex px-5 align-items-center mt-3 justify-content-between'>
            <div>
                <Link to={"/"} className="nav-link">
                    <img src="/imgs/navbar/logo.png" alt="logo"/>
                </Link>
            </div>
            <div>
                <TranstionMenu />
            </div>
        </section>
       
    )
}

export default SignTopPart;