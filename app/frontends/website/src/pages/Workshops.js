import React from "react";
import { Link } from "react-router-dom";

const Workshops = () => {
    return (
        <div className="flex flex-col items-center justify-center m-10 lg:flex-row md:mx-30 md:p-2 lg:my-0">
            <div className="items-center order-1 w-2/3 h-auto mb-0 md:w-1/2 lg:order-2">
                <img
                    src="images/gopherlaptop.png"
                    alt="Gophers"
                    className="items-center w-auto h-2/3 aspect-auto md:aspect-auto"
                />
            </div>
            <div className="flex-col justify-center order-2 m-8 mb-2 md:w-auto md:pr-8 lg:order-1">
                <h1 className="mb-4 text-5xl font-bold text-left">
                    Organize a Workshop
                </h1>
                <p className="text-xl text-left text-gray-600">
                    Want to get involved? Organize a workshop in your area! We
                    are here to help you every step of the way.
                </p>
                <br />
                <ul className="justify-start pl-6 space-y-4 text-xl text-left text-gray-600 list-disc">
                    <li>
                        Start by creating an <a href="https://github.com/gobridge/workshops/issues" className="font-semibold text-purple-400" target="_blank" rel="noreferrer">issue</a> in the workshops repo (<span className="italic font-semibold">issues </span>
                        represent upcoming and potential events, and hold to-do
                        lists for each).
                    </li>
                    <li>
                        Create one issue for each workshop you are planning.
                        Please include a possible date and location. You can
                        always edit the issue when you know more.
                    </li>
                    <li>
                        If you need a grant to help support your event, fill out
                        this <a href="https://docs.google.com/forms/d/e/1FAIpQLSfKPyI0kcPqr18i18x-yErKoCayKMxylbhMBe4fdgDuMe6LYQ/viewform" className="font-semibold text-purple-400" target="_blank" rel="noreferrer"> grant form.</a> A member of GoBridge will receive an
                        email notification and will contact you promptly.
                    </li>
                    <li>
                        If you are looking for more detailed information, this <Link to={'/WorkshopOrganize'} className="font-semibold text-purple-400">workshop </Link>
                         link will help.
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Workshops;
