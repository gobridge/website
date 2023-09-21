import React from "react";

const WorkshopOrganize = () => {
    return (
        <div className="flex flex-col p-5 m-10 ">
            <div className="flex flex-col content-center p-5 m-10 justify-evenly sm:flex-col md:flex-row">
                <div className="order-1 w-full h-full md:w-1/2 md:order-2 md:justify-center">
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
            <div className="flex flex-col items-center justify-center p-2 m-1 bg-gradient-to-b from-purple-200 to-white md:flex-row">
                <div className="flex flex-col content-center justify-center w-2/3 p-2 m-6 md:flex-col">
                    <h2 className="mb-2 text-xl font-semibold text-left">
                        Kickoff a new workshop
                    </h2>
                    <p>
                        If you are a company offering a venue or sponsorship for
                        a GoBridge workshop, or if you are a person who wants to
                        organize one, please head to our issue list and open a
                        new issue. We get notified automatically and will get
                        back to you soon after to help make your workshop
                        happen.
                    </p>
                </div>
                <div className="flex flex-col content-center justify-center w-2/3 p-2 m-6 md:flex-col">
                    <h2 className="mb-2 text-xl font-semibold text-left">
                        Guidelines
                    </h2>
                    <ul className="justify-start pl-6 space-y-4 text-xl text-left text-gray-600 list-disc">
                        <li>
                            Either an organizer or a sponsor can kickoff a
                            workshop.
                        </li>
                        <li>
                            Visit Meetup Pro Page to see a listing of Meetups
                            and past events for inspiration.
                        </li>
                        <li>
                            Select one of our available courses, or use your
                            own.
                        </li>
                        <li>
                            Learn about our workflow for moving issues all the
                            way through to the scheduled status.
                        </li>
                    </ul>
                </div>
            </div>
            <div className="p-2 m-5">
                <h2 className="mb-2 text-xl font-semibold text-left">
                    Ways to reach us (in order of preference)
                </h2>
                <ul className="justify-start pl-6 space-y-4 text-xl text-left text-gray-600 list-disc">
                    <li>
                        <img 
                           src="images/slacklogo.png"
                           alt="Slack Logo"
                           className="w-10 h-10 round-lg"
                        />
                        Join us on the #gobridge channel on Gophers Slack
                        (invite: http://invite.slack.gobridge.org)
                    </li>
                    <li>
                        <img
                           src="images/icons8-twitterx-50.png"
                           alt="X"
                           className="w-10 h-10"
                        />
                        Tweet us https://twitter.com/golangbridge
                    </li>
                    <li>
                        <img
                           src="images/icons8-envelope-50.png"
                           alt="X"
                           className="w-10 h-10"
                        />
                        Email us at support@golangbridge.org
                     </li>
                </ul>
            </div>
        </div>
    );
};

export default WorkshopOrganize;
