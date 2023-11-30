import React, { useState } from "react";
import MailModal from "../components/MailModal";
import MsgModal from "../components/MsgModal";

const CodeOfConduct = () => {
    const [showMailModal, setShowMailModal] = useState(false);
    const [showMsgModal, setShowMsgModal] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleOnClose = () => setShowMailModal(false);
    const handleOnCloseMsg = () => setShowMsgModal(false);

    return (
        <div className="flex items-center justify-center">
            <div className="flex flex-col items-center justify-center w-full p-1 m-3 lg:flex-col">
                <div className="flex flex-col justify-center order-2 md:w-2/3 md:pr-8 md:order-1">
                    <img
                        src="images/goinclusion.png"
                        alt="Gophers Banner"
                        className="items-center w-full h-90 md:w-1/2"
                    />
                </div>
                <div className="flex flex-col justify-center order-2 m-10 md:w-2/3 md:pr-8 md:order-1">
                    <h1 className="mb-4 text-5xl font-bold text-left">
                        GoBridge/WWG - CoC
                    </h1>
                    <p className="text-xl text-left text-gray-600">
                        GoBridge (GB) and Women Who Go (WWG) uses the {" "}
                            <a
                                href="https://golang.org/conduct"
                                className="font-semibold text-purple-400"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Go CoC 
                            </a>{" "} as our base document:
                    </p>
                    <h1 className="mb-4 text-5xl font-bold text-left">
                        GB/WWG Addendum
                    </h1>
                    <h2 className="mb-4 text-3xl font-bold text-left"> Real Names</h2>
                    <p className="text-xl text-left text-gray-600">
                        If you feel comfortable, we encourage you to use your real name in all of our online and offline
                        GB/WWG communities and events. We find it encourages openness and civility in discussions. However,
                        this is not a requirement.
                        Organizers and moderators may ask people to change their handles or usernames if it conflicts with
                        known public figures, impersonates other people, sounds like automated tools, contains inappropriate
                        language, or other unclear cases.
                    </p>
                    <br />

                    <h2 className="mb-4 text-3xl font-bold text-left"> Language Policy</h2>
                    <p className="text-xl text-left text-gray-600">
                        We are working hard to keep our public spaces family-friendly and as inclusive as possible. At the
                        organizers or moderators discretion, words and images that are deemed inappropriate or offensive
                        will be moderated. Generally, cursing is not allowed. Please reach out to the organizers or
                        moderators for a list of words that are being moderated.
                    </p>
                    <br />

                    <h2 className="mb-4 text-3xl font-bold text-left"> Moderation</h2>
                    <p className="text-xl text-left text-gray-600">
                        Participants in our online and offline GB/WWG communities and events should flag inappropriate behavior
                        to organizers and moderators rather than addressing it themselves. This includes but is not limited
                        to reporting: violations of this code of conduct, spam messages, messages posted in the wrong
                        channel or category, and public conversations that are inappropriate. Please report any violations
                        to the #admin-help channel on gophers.slack.com as early as possible or privately message
                        Carmen Andoh or William Kennedy directly. At our offline events please report any violations to
                        the organizers or email.
                        <button
                                onClick={() => setShowMailModal(true)}
                                className="px-2 py-1 text-sm font-semibold text-white transform bg-purple-300 rounded hover:bg-purple-400 motion-safe:hover:scale-110"
                            >
                                support@gobridge.org
                            </button>
                            <MailModal
                                onClose={handleOnClose}
                                visible={showMailModal}
                                showMsgModal={showMsgModal}
                                setShowMailModal={setShowMailModal}
                                setShowMsgModal={setShowMsgModal}
                                successMessage={successMessage}
                                errorMessage={errorMessage}
                                setErrorMessage={setErrorMessage}
                                setSuccessMessage={setSuccessMessage}
                            />
                            <MsgModal
                                onCloseMsg={handleOnCloseMsg}
                                visibleMsg={showMsgModal}
                                showMailModal={showMailModal}
                                setShowMsgModal={setShowMsgModal}
                                setShowMailModal={setShowMailModal}
                                successMessage={successMessage}
                                errorMessage={errorMessage}
                                setErrorMessage={setErrorMessage}
                                setSuccessMessage={setSuccessMessage}
                            />
                    </p>
                    <br />  
                    <h2 className="mb-4 text-3xl font-bold text-left"> Moderator guidelines for applying policies and the CoC</h2>
                    <p className="text-xl text-left text-gray-600">
                    It’s important that all users’ questions, answers and comments are in line with this CoC, as well as with the category and topic, or channel, they belong to. When an organizer or moderator decides to approach someone personally, they must always assume intentions are good, which is usually the case. Over-moderation is harmful to the atmosphere of the community and should be avoided.
                    </p>
                    <br />
                </div>
            </div>
        </div>
    );
};

export default CodeOfConduct