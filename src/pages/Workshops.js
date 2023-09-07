import React from "react";

const Workshops = () => {
    return (
        <div className="flex flex-col items-center justify-center m-2 md:flex-row">
                <div className="order-1 md:w-1/2 md:order-2">
                    <img
                        src="images/gopherlaptop.png"
                        alt="Gophers Banner"
                        className="w-full h-2/3 md:w-auto"
                    />
                </div>
                <div className="flex-col justify-center order-2 m-10 md:w-1/2 md:pr-8 md:order-1">
                    <h1 className="mb-4 text-5xl font-bold text-left">
                        Organize a Workshop
                    </h1>
                    <p className="text-xl text-left text-gray-600">
                        Want to get involved? Organize a workshop in your area!
                        We are here to help you every step of the way. Start by
                        creating an issue in the workshops repo (issues
                        represent upcoming and potential events, and hold to-do
                        lists for each). Create one issue for each workshop you
                        are planning. Please include a possible date and
                        location. You can always edit the issue when you know
                        more. If you need a grant to help support your event,
                        fill out this grant form. A member of GoBridge will
                        receive an email notification and will contact you
                        promptly. If you are looking for more detailed
                        information, this workshop link will help.
                    </p>
                </div>
        </div>
    );
};

export default Workshops;
