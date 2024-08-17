import { IoMoonSharp } from "react-icons/io5";
import { GrSearch } from "react-icons/gr";
import { FaRegStar } from "react-icons/fa";
import './index.css'





const FormPage=()=>{
   
    return(
        <div className='form-page-container'>
                <form className='form-container'>
                    <ul className='journey-items-container'>
                        <li className='journey-item'>
                            <button type='button' className='package-button' >
                                Packages
                            </button>
                            </li>
                        <li className='journey-item'>
                            <button type='button' className='tours-button'  >Tours</button> 
                             </li>

                    </ul>
                    <div className='input-data-content'>
                    <div className='input-container'>
                    <label className='label-badge' htmlFor='destinationId'>Destination</label>
                    <input type='text' id='destinationId' placeholder='Enter the City' className='city-input'/>

                    </div>
                    <div className='date-container'>
                    <div className='check-in-container'>
                    <label className='label-badge' htmlFor='checkInId'>check-in</label>
                    <input type='date' id='checkInId' placeholder='Check-in' className='date-input'/>

                    </div>
                    <div className='parts-container'>
                        <IoMoonSharp/>
                        <p>1 Night</p>
                    </div>
                    <div className='check-out-container'>
                    <label className='label-badge' htmlFor='checkOutId'>check-in</label>
                    <input type='date' id='checkOutId' placeholder='Check-out' className='date-input'/>

                    </div>
                    
                    </div>

                    <div className="room-selection-container">
                        <label className="label-badge" htmlFor="roomSelect">Guests and Rooms</label>
                        <select id='roomSelect' className="room-select">
                            <option className="option-item" value='2 aduts,0 children,1 room'>2 adults,0 children,1 room</option>
                            <option className="option-item" value='1 adult,2 children,1 room'>1 adult,2 children,1 room</option>
                            <option className="option-item" value='4 adults,0 children,2 rooms'>4 adults,0 children,2 rooms</option>
                            <option className="option-item" value='5 adults,2 childrens,2 rooms'>5 adults,2 childrens,2 rooms</option>
                        </select>

                    </div>

                    <div className="search-option">
                        <button type='submit' className="search-button">
                            <GrSearch className="search-icon"/>
                        </button>
                    </div>
                    </div>
                    
                    

                </form>

                <div className="rating-section">
                    <p className="rating-title">Star Rating</p>

                    
                        <ul className="rating-data">
                            <li className="rating-count black">3<FaRegStar /></li>
                            <li className="rating-count black">4<FaRegStar /></li>
                            <li className="rating-count">5<FaRegStar/></li>
                        </ul>

                    
                </div>
            </div>

    )
}

export default FormPage