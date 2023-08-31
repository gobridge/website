import React from "react";

const Home = () => {
    return (
        <div>
            <div className="flex flex-col p-5 m-10 md:flex-row">
                <div className="flex flex-col justify-center order-2 md:w-1/2 md:pr-8 md:order-1">
                    <h1 className="mb-4 text-5xl font-bold text-left">
                        GoBridge
                    </h1>
                    <p className="text-3xl text-left gray-600 text-">
                        GoBridge is a member of the non-profit organization
                        BridgeFoundry. At GoBridge we build bridges to educate
                        underrepresented communities to teach technical skills
                        and to foster diversity in Go. <br /> Contact us at
                        support@gobridge.org with any questions, issues or
                        request you may have.
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
            <div className="flex justify-center p-5 m-5">
                <div className="flex flex-row max-w-md mx-2 overflow-hidden bg-white rounded-md shadow-md">
                    <img
                        src="/images/megaphone.jpeg"
                        alt="Gophers Banner"
                        className="object-cover w-1/3 h-32"
                    />

                    <div className="flex-grow p-4">
                        <h3 className="mb-2 text-2xl font-semibold text-left">
                            Core Mission
                        </h3>
                        <p className="text-left text-gray-600 text-md">
                            Our core mission is to enable minorities in tech to
                            use Go as a tool to learn and teach programming and,
                            ultimately, to empower underrepresented groups in
                            tech to help increase diversity in the Go community.
                        </p>
                    </div>
                </div>
                <div className="flex flex-row max-w-md mx-2 overflow-hidden bg-white rounded-md shadow-md">
                    <img
                        className="object-cover w-1/3 h-32"
                        src="/images/megaphone.jpeg"
                        alt="Gophers Banner"
                    />

                    <div className="flex-grow p-4">
                        <h3 className="mb-2 text-2xl font-semibold text-left">
                            Core Vision
                        </h3>
                        <p className="text-left text-gray-600 text-md">
                            We believe education is most effective when it is
                            tailored to and provided by local communities. We
                            are dedicated to growing and supporting local teams
                            of individuals and companies who will have ownership
                            in the work they do. We are also dedicated to
                            developing in-depth and idiomatic training
                            materials. Our workshops are targeted at smaller,
                            local Go communities, and not necessarily directly
                            at the global Go community. But we believe that, as
                            each individual in the Go community strengthens, the
                            collective Go community will, in turn, strengthen as
                            well.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
