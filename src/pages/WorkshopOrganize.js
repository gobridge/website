import React from "react";

const WorkshopOrganize = () => {
    return (
        <div>
            <div className="flex flex-col p-5 m-10 md:flex-row">
                <div className="justify-center order-1 w-full h-full md:w-1/2 md:order-2 md:justify-center">
                    <img
                        src="images/gophersworking.png"
                        alt="Gophers"
                        className="items-center justify-center w-1/2 h-1/3"
                    ></img>
                </div>
                <div className="flex flex-col justify-center order-2 md:w-1/2 md:pr-8 md:order-1">
                    <h1 className="mb-4 text-5xl font-bold text-left">
                        Workshops
                    </h1>
                    <p className="text-xl text-left text-gray-600">
                        All things GoBridge workshops start here.
                        <br />
                        Before kicking off a new workshop, be sure to read about
                        requirements and details about organizing or sponsoring
                        a GoBridge workshop.
                        <br /> New to this? We've got your back❗ 💥 We provide
                        training and have presentation material for you to use!
                        <br /> For information about funding a GoBridge
                        workshop, please visit Bridge Foundry's finances repo.
                    </p>
                </div>
            </div>
            <div>
               <h2>Kickoff a new workshop</h2>
               <p></p>               
            </div>
            <div>
               <h2>Guidelines</h2>
               <p></p>               
            </div>
            <div>
               <h2>Ways to reach us (in order of preference)</h2>
               <p></p>               
            </div>
        </div>
    );
};

export default WorkshopOrganize;
