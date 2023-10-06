import React, {useState} from "react";
import MailModal from "../components/MailModal";


const Communities = () => {
   const [ showMailModal, setShowMailModal ] = useState(false)
   
   const handleOnClose = () => setShowMailModal(false)
   
    return (      
      <div className="flex items-center justify-center">  
         {/* <div className="flex content-center justify-center w-auto p-5 m-10 md:flex-row"> */}
         <div className="flex flex-col items-center justify-center w-full p-1 m-3 md:flex-col">
               {/* <div className="order-1 w-auto md:w-1/2 md:order-2"> */}
               <div className="flex flex-col justify-center order-2 md:w-2/3 md:pr-8 md:order-1">
                  <img
                     src="images/community.png"
                     alt="Gophers Banner"
                     className="w-full h-90 md:w-auto"
                  />
               </div>
               <div className="flex flex-col justify-center order-2 m-10 md:w-2/3 md:pr-8 md:order-1">
                  <h1 className="mb-4 text-5xl font-bold text-left">
                     Online/Offline Communities
                  </h1>
                  <p className="text-xl text-left text-gray-600">
                     GoBridge has the responsibility of being the steward for online and offline Go communities. We work with an
                     incredible team of administrators to make sure these
                     sites/events are inclusive to the largest number of
                     communities and viewpoints, with the most varied and
                     diverse backgrounds possible.
                  </p><br/>
                  <ul className="justify-start pl-6 space-y-4 text-xl text-left text-gray-600 list-disc">
                     <li >
                        We provide Go user groups access to a free <a href="http://gdn.gobridge.org/" className="font-semibold text-purple-400" target="_blank" rel="noreferrer" >Meetup</a> account. This program is
                        supported through generous contributions by Google. If
                        you are currently running a user group or thinking about
                        one, send us an email. <br/>
                        <button onClick={() => setShowMailModal(true)} className="px-2 py-1 text-sm font-semibold text-white transform bg-purple-300 rounded hover:bg-purple-400 motion-safe:hover:scale-110">
                            Get Started
                        </button>
                        <MailModal onClose={handleOnClose} visible={showMailModal}/> 
                     </li>
                     <li >
                        Gophers <a href="https://invite.slack.gobridge.org/" className="font-semibold text-purple-400" target="_blank" rel="noreferrer">Slack</a>  is a thriving, real-time
                        messaging community. If you are looking to get immediate
                        answers to questions or join in the conversation about
                        Go with other Gophers, this is the place to be.                         
                     </li>
                     <li >
                        Go <a href="https://forum.golangbridge.org/" className="font-semibold text-purple-400" target="_blank" rel="noreferrer">Forum</a> is a site where ideas, views, questions, and
                        answers can be exchanged and discussed. It also allows
                        for all the content that is discussed to be indexed and
                        searchable from the Web. If you are looking for
                        historical answers to your questions, this is the place
                        to search.                       
                     </li>
                  </ul>
                  
                  
               </div>
         </div>
      </div>
    );
};

export default Communities;
