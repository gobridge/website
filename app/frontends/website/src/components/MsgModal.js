import React, { useState } from "react";

const MsgModal = ({
    successMessage,
    errorMessage,
    showMsgModal,
    onClose,
    visible,
}) => {
    console.log("****** Entering MsgModal ********");
    const handleOnClose = (e) => {
        e.stopPropagation();
        if (e.target.id === "container") {
            onClose();
        }
    };

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
                <p className="font-bold text-gray-600"> Message </p>
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

                <button
                    className="px-4 py-2 font-bold text-white bg-purple-400 rounded inputClass hover:bg-purple-500"
                    onClick={handleOnClose}
                >
                    Close
                </button>
            </div>
        </div>
    ) : null;
};

export default MsgModal;
