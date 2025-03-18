import React from 'react'
import Button from './Button'

const Main = () => {
  return (
    <div className='container'>
        <div className='p-5 text-center bg-light-dark rounded'>
            <h1 className='text-light'>Stock Prediction Portal</h1>  
            <p className='text-light'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque ratione quas, eligendi ut 
            nulla dolorem temporibus ipsa accusantium recusandae sed. Debitis voluptas repudiandae ipsam ea esse nihil amet tempore.
            Veniam. </p>
            <Button text="Login" class="btn btn-info"/>
        </div>    
    </div>
  )
}

export default Main