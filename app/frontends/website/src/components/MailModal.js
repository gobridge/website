import React, { useState } from 'react';
import axios from "axios";

const MailModal = ({visible, onClose}) => {
   
   const [status, setStatus] = useState("Send Email");
   const [name, setName] = useState('')
   const [email, setEmail] = useState('')
   const [msg, setMsg] = useState('')
   
   
   const handleOnClose = (e) =>{
      if (e.target.id === 'container') onClose();
   };


   const handleSubmit = async (e) => {
      e.preventDefault();
      setStatus("Sending...");
      try {
         const response = await axios.post('https://gobridge.org/api/contact', {
             name,
             email,
             msg,
         }, {
             headers: {
                 'Content-Type': 'application/json',
             },
         });
 
         if (response.status === 200) {
             alert('Email sent successfully');
         } else {
             alert('Failed to send email');
         }
         setEmail('')
         setName('')
         setMsg('')
         setStatus("Send Email")
         
     } catch (error) {
         console.error('Error:', error);
     }
   }

   const handleChange = (e) => {
      
      const { name, value } = e.target;
     
      switch (name) {
          case 'name':
              setName(value);
              break;
          case 'email':
              setEmail(value);
              break;
          case 'message':
              setMsg(value);
              break;
          default:

      }
  };

   
   
   if(!visible) return null;  
   
   return (
      <div id ='container' onClick= {handleOnClose} className='fixed inset-0 z-40 flex items-center justify-center bg-black bg-opacity-30 backdrop-blur-sm'>
         <div className='p-2 bg-white rounded w-[90%] h-[60%] max-w-xl max-h-l flex flex-col justify-between items-center'>
         
            <p className='font-bold text-gray-600'> Contact Us</p>
            <form className='w-full h-auto p-4 mt-4 mb-4' onSubmit={handleSubmit}>
               <input type='text' placeholder='Full Name'  className='p-2 mb-5 border border-gray-700 rounded inputClass' name='name' value={name} onChange={handleChange}></input>
               <input type='email' placeholder='Email' className='p-2 mb-5 border border-gray-700 rounded inputClass' name='email' value={email} onChange={handleChange}></input>
               <input type='text' placeholder='Message' className='p-2 mb-5 border border-gray-700 rounded h-52 inputClass' name='message' value={msg} onChange={handleChange}></input>
               <button className='px-4 py-2 font-bold text-white bg-purple-400 rounded hover:bg-purple-500' type='submit'>{status}</button>
            </form>
           
         </div>
      </div>
   )
}

export default MailModal