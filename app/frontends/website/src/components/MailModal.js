import React, { useState } from "react";
import axios from "axios";

const MailModal = ({ visible, onClose }) => {
    const [status, setStatus] = useState("Send Email");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [msg, setMsg] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    var apiURL = "http://localhost:8080/api/contact";
    if (window.location.port === "" || window.location.port === "0") {
        apiURL = "http://gobridge.org/api/contact";
    }

    const handleOnClose = (e) => {
        console.log("*****Handling Onclose");
        // This takes into account only the parent, so the submit button actually works.
        e.stopPropagation();
        // If you don't put everything inside the if, it will delete all your data
        // when you click the modal.
        // You only want this to be deleted when you close it.
        if (e.target.id === "container") {
            onClose();
            setName("");
            setEmail("");
            setMsg("");
            setSuccessMessage("");
            setErrorMessage("");
        }
    };

    const handleSubmit = async (e) => {
        console.log("---->Entering Handle Submit");
        e.preventDefault();
        setStatus("Sending...");
        try {
            // Here instead of try/catch you can use
            // response.then().catch().finally()
            // Since axios returns a promise.
            // With this approach you can handle all errors in the same place!
            // But that's just a suggestion!
            const response = await axios.post(
                apiURL,
                {
                    name,
                    email,
                    msg,
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );

            if (response.status === 200) {
                console.log("***** email sent *****");
                setSuccessMessage("Email sent successfully");
                setEmail("");
                setName("");
                setMsg("");
            } else {
                setErrorMessage("Failed to send email");
                alert("Failed to send email");
            }

            // Since you have it here and below, it's better to put this state change at the end;
            // setStatus("Send Email");
        } catch (error) {
            console.error("Error:", error);
            setErrorMessage("An error occurred while sending the email");
            setStatus("Send Email");
        }

        // Here you should set the status back to Send email aswell, because
        // if your user has an error he can't send any more emails.
        // setStatus here to have it executed no matter the state of the email.
        setStatus("Send Email");
        console.log("---->Exiting Handle Submit");
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        switch (name) {
            case "name":
                setName(value);
                break;
            case "email":
                setEmail(value);
                break;
            case "message":
                setMsg(value);
                break;
            default:
        }
    };

    // Always use ternary Ifs for conditional rendering in React, it's easier to read
    return visible ? (
        <div
            id="container"
            onClick={handleOnClose}
            className="fixed inset-0 z-40 flex items-center justify-center bg-black bg-opacity-30 backdrop-blur-sm"
        >
            <div className="relative p-2 bg-white rounded w-[90%] h-auto max-w-xl max-h-l flex flex-col justify-between items-center">
                <br />
                <button
                    className="absolute text-black bg-transparent border-0 top-2 right-2 "
                    onClick={() => onClose()}
                >
                    <span className="justify-center block w-6 h-6 py-0 text-xl font-bold text-gray-600 bg-white rounded item-center opacity-7">
                        x
                    </span>
                </button>
                <p className="font-bold text-gray-600"> Contact Us</p>
                {successMessage && (
                    <div
                        className="relative px-4 py-2 text-green-700 bg-green-100 border border-green-400 rounded"
                        role="alert"
                    >
                        <span className="block sm:inline">
                            {successMessage}
                        </span>
                    </div>
                )}
                {errorMessage && (
                    <div
                        className="relative px-4 py-2 text-red-700 bg-red-100 border border-red-400 rounded"
                        role="alert"
                    >
                        <span className="block sm:inline">{errorMessage}</span>
                    </div>
                )}

                <form
                    className="w-full h-auto p-4 mt-4 mb-4"
                    onSubmit={handleSubmit}
                >
                    <input
                        type="text"
                        placeholder="Full Name"
                        className="p-2 mb-5 border border-gray-700 rounded inputClass"
                        name="name"
                        value={name}
                        onChange={handleChange}
                        required
                    ></input>
                    <input
                        type="email"
                        placeholder="Email"
                        className="p-2 mb-5 border border-gray-700 rounded inputClass"
                        name="email"
                        value={email}
                        onChange={handleChange}
                        required
                    ></input>
                    <input
                        type="text"
                        placeholder="Message"
                        className="p-2 mb-5 border border-gray-700 rounded h-52 inputClass"
                        name="message"
                        value={msg}
                        onChange={handleChange}
                        required
                    ></input>
                    <button
                        className="px-4 py-2 font-bold text-white bg-purple-400 rounded inputClass hover:bg-purple-500"
                        type="submit"
                    >
                        {status}
                    </button>
                </form>
            </div>
        </div>
    ) : null;
};

export default MailModal;
