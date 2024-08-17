import { Component } from 'react'
import FormPage from '../FormPage'
import './index.css'

class Body extends Component{
    state={
        isSelected:false
    }
    render(){
        return(
            <div className='booking-container'>
            
            <h1 className='booking-title'>Discover Your Next Adventure</h1>
            <p className='booking-description'>Unlock your path to adventure,start your journey of discovery-where every destination awaits your exploration</p>
            
            <FormPage/>
        </div>

    

        )
    }
}
 
export default Body