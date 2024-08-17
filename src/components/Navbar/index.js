import './index.css'
import { IoDiamond,IoGift } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaUser } from "react-icons/fa6";
const Navbar=()=>{
    return(
        <nav className='navbar-container'>
            <div className='nav-content'>
                <div>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS81Qum24otF5wmcKoDFQOAxfCUPzufXafIKg&s' className='navbar-logo' alt='gogaga'/>

                </div>
           

                <ul className='navitems-list'>
                    <li className='nav-item'>Packages</li>
                    <li className='nav-item'>Tours</li>
                    <li className='nav-item'>Help</li>
                    <li className='nav-item'>
                        Membership
                        <span className='span-icon'><IoDiamond size='20'/></span>
                        
                    </li>
                    <li className='nav-item'>
                        Gift cards
                        <span className='span-icon'><IoGift size='20'/></span>
                    </li>
                    <li className='user-profile-container'>
                    <span className='span-icon'><RxHamburgerMenu size='15'/></span>
                    <span className='span-icon'><FaUser size='15'/></span>

                    </li>
                </ul>

            </div>
          
           
        </nav>
    )
}

export default Navbar