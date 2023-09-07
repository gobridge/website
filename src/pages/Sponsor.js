import React from "react";

const Sponsor = () => {
    return (
        <div className="flex items-center justify-center">
            <div className="flex flex-col content-center justify-center w-2/3 p-5 m-10 md:flex-row">
                <div className="flex flex-col justify-center order-2 md:w-1/2 md:pr-8 md:order-1">
                    <h1 className="mb-4 text-5xl font-bold text-left">
                        Become a Sponsor
                    </h1>
                    <p className="text-xl text-left text-gray-600">
                        Most GoBridge workshops need some level of support. This
                        can range from offering a space, paying for food or even
                        travel expenses for trainers. If you or your company is
                        interested in helping, please send us an email. <br />{" "}
                        <a
                            className="text-purple-500 hover:underline"
                            href="/documents/AAA-Talk Framework.pdf"
                            target="_blank"
                        >
                            add all the other links...check og repo
                        </a>
                    </p>
                </div>
                <div className="order-1 md:w-1/2 md:order-2">
                    <img
                        src="images/mentoring.png"
                        alt="Gophers"
                        className="w-15 h-90 md:w-full"
                    />
                </div>
            </div>
        </div>
    );
};

export default Sponsor;
