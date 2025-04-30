import React from "react";
const WhoWeAre = () => {
    return (
        <div>
            <section className="max-w-6xl mx-auto px-4 py-12 text-center">


                <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center text-left">
                    <div className="w-full max-w-xl mx-auto">
                        <img
                            src="/about/weare.png"
                            alt="career step"
                            className="w-full h-auto max-h-[23rem] object-contain"
                        />
                    </div>

                    <div className="px-2">
                        <h2 className="text-2xl sm:text-4xl font-bold mb-2 text-black">WHO <span className="text-transparent bg-clip-text bg-[linear-gradient(241deg,#18c8ff_14.59%,#c608ff_59.76%)]">WE</span> ARE</h2>
                        <h1 className="text-xl sm:text-4xl font-semibold mb-3 text-gray-900">
                            Innovative Solutions For Business Growth
                        </h1>
                        <p className="text-base sm:text-lg mb-5 text-gray-900">
                            Tojo Global is a successful company that specialises in custom services and is exceptionally skilled at marketing, management, design, and development. We help businesses grow by coming up with new ideas, being experts in our field, and always trying to be the best. We focus on cryptocurrency, blockchain, fintech, startups, small businesses, B2B, and much more. Welcome to a journey that will change you, where your goals will become our mission.
                        </p>
                    </div>
                </div>

            </section>
        </div>
    );
};

export default WhoWeAre;
