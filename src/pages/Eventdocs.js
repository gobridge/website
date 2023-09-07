import React from "react";

const Eventdocs = () => {
    return (
        <div className="flex items-center justify-center">
            <div className="flex flex-col content-center justify-center w-2/3 p-5 m-10 md:flex-row">
                <div className="flex flex-col justify-center order-2 md:w-1/2 md:pr-8 md:order-1">
                    <h1 className="mb-4 text-5xl font-bold text-left">
                        Important Event Documents
                    </h1>
                    <p className="text-xl text-left text-gray-600">
                        These are documents you will need when you are ready to
                        publish your events online. Please use this policy
                        document when providing attendees information about the
                        standards and resolution procedures for your event. Make
                        a copy and fill in the specifics about your organizers
                        and contact information. This document includes a link
                        to our Code of Conduct. Review these scholarship
                        guidelines before offering any kind of scholarship. Then
                        use this scholarship application when accepting
                        scholarship applicants for your event. There are a lot
                        of things to consider and we have listed many of them. A
                        lot of this information is also perfect to document on
                        your event site. way. <br />{" "}
                        <a
                            className="text-purple-500 hover:underline"
                            href="/documents/AAA-Talk Framework.pdf"
                            target="_blank"
                        >
                            add all the other links...check og repo
                        </a>
                    </p>
                </div>
                <div className="items-center justify-center order-1 md:w-1/2 md:order-2">
                    <img
                        src="images/fivegophers.png"
                        alt="Gophers"
                        className="w-15 h-100 md:w-full"
                    />
                </div>
            </div>
        </div>
    );
};

export default Eventdocs;
