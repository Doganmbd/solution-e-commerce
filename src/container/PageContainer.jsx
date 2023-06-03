import React from 'react'

const PageContainer = ({children}) => {
    //? children adında parametre alacam Çünkü sarmalama işlemini yapması gereken bir parametreye sahip olmalıyım sayfanın kenarlarına sarmalama işlemini yapacağım bununla.
  return (
    
    <div className='w-10/12 m-auto'>{children}</div>
  )
}

export default PageContainer