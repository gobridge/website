import React from "react";

const Communities = () => {
    return (
        <div>
            <div className="flex flex-col p-5 m-10 md:flex-row">
                <div className="flex flex-col justify-center order-2 md:w-1/2 md:pr-8 md:order-1">
                    <h1 className="mb-4 text-5xl font-bold text-left">
                        Current Initiatives
                    </h1>
                    <p className="text-3xl text-left gray-600 text-">
                        We always have fun and exciting things we are working on
                        to support the Go community. If you have time to help or
                        you think one of these programs can help you, send us an
                        email.
                    </p>
                </div>
                <div className="order-1 md:w-1/2 md:order-2">
                    <img
                        src="images/gbbanner.png"
                        alt="Gophers Banner"
                        className="w-full h-80 md:w-full"
                    />
                </div>
            </div>
        </div>
    );
};

export default Communities;
