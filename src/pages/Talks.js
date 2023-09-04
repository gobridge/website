import React from "react";

const Talks = () => {
    return (
        <div className="flex items-center justify-center">
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
        </div>
    );
};

export default Talks;
