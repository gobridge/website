import React from "react";

const Communities = () => {
    return (      
      <div className="flex items-center justify-center">  
         {/* <div className="flex content-center justify-center w-auto p-5 m-10 md:flex-row"> */}
         <div className="flex flex-col content-center justify-center w-2/3 p-5 m-10 md:flex-row">
               {/* <div className="order-1 w-auto md:w-1/2 md:order-2"> */}
               <div className="flex flex-col justify-center order-2 md:w-1/2 md:pr-8 md:order-1">
                  <img
                     src="images/community.png"
                     alt="Gophers Banner"
                     className="w-full h-90 md:w-auto"
                  />
               </div>
               <div className="flex flex-col justify-center order-2 m-10 md:w-1/2 md:pr-8 md:order-1">
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
                        We provide Go user groups access to a free Meetup account. This program is
                        supported through generous contributions by Google. If
                        you are currently running a user group or thinking about
                        one, send us an email. We can help you get things
                        started. 
                     </li>
                     <li >
                        Gophers Slack is a thriving, real-time
                        messaging community. If you are looking to get immediate
                        answers to questions or join in the conversation about
                        Go with other Gophers, this is the place to be.                         
                     </li>
                     <li >
                        Go Forum is a site where ideas, views, questions, and
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

{/* <div className="flex items-center justify-center">
            <div className="flex flex-col content-center justify-center w-2/3 p-5 m-10 md:flex-row">
                <div className="flex flex-col justify-center order-2 md:w-1/2 md:pr-8 md:order-1">
                    <h1 className="mb-4 text-5xl font-bold text-left">
                        Give a Talk or Presentation
                    </h1>
                    <p className="text-3xl text-left text-gray-600">
                        We are here to support you in your quest to share your
                        experience and knowledge in front of others. We have
                        this document that can help get your ideas on paper and
                        focused. We are here to work with you every step of the
                        way. <br/> <a className="text-purple-500 hover:underline"  href='/documents/AAA-Talk Framework.pdf' target="_blank">Talk Framework Worksheet</a>
                    </p>
                </div>
                <div className="order-1 md:w-1/2 md:order-2">
                    <img
                        src="images/dropmic.png"
                        alt="Gophers Banner"
                        className="w-15 h-90 md:w-full"
                    />
                </div>
            </div>
        </div> */}
