import React from 'react'

const MailModal = ({visible, onClose}) => {
   const handleOnClose = (e) =>{
      if (e.target.id === 'container') onClose();
   };
   
   if(!visible) return null;
   
   return (
      <div id ='container' onClick= {handleOnClose} className='fixed inset-0 z-50 flex items-center justify-center w-full h-full overflow-y-auto bg-black bg-opacity-30 backdrop-blur-sm'>
         <button onClick={onClose}>X</button>
         <div className='p-2 bg-white rounded w-[90%] h-[90%] max-w-xl max-h-xl flex flex-col justify-between items-center'>
            <p> Contact Us</p>
            <form className='w-full p-4 space-y-4 h-52'>
               <input type='text' placeholder='Full Name' className='inputClass'></input>
               <input type='text' placeholder='email' className='inputClass'></input>
               <input type='text' placeholder='Message' className='inputClass'></input>
            </form>
           
            <button className='px-4 py-2 font-bold text-white bg-purple-400 rounded hover:bg-purple-500'>Send Message</button>
         </div>
      </div>
   )
}

export default MailModal