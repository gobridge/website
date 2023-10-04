import React from 'react'

const MailModal = ({visible, onClose}) => {
   const handleOnClose = (e) =>{
      if (e.target.id === 'container') onClose();
   };
   
   if(!visible) return null;  
   
   return (
      <div id ='container' onClick= {handleOnClose} className='fixed inset-0 z-40 flex items-center justify-center bg-black bg-opacity-30 backdrop-blur-sm'>
         <div className='p-2 bg-white rounded w-[90%] h-[60%] max-w-xl max-h-l flex flex-col justify-between items-center'>
         
            <p className='font-bold text-gray-600'> Contact Us</p>
            <form className='w-full h-auto p-4 mt-4 mb-4'>
               <input type='text' placeholder='Full Name' className='p-2 mb-5 border border-gray-700 rounded inputClass'></input>
               <input type='email' placeholder='email' className='p-2 mb-5 border border-gray-700 rounded inputClass'></input>
               <input type='text' placeholder='Message' className='p-2 mb-5 border border-gray-700 rounded h-52 inputClass'></input>
            </form>
           
            <button className='px-4 py-2 font-bold text-white bg-purple-400 rounded hover:bg-purple-500'>Send Message</button>
         </div>
      </div>
   )
}

export default MailModal