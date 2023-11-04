import React from 'react'
import Man from "../../../assets/images/user.png"

function Banner() {
    return (
        <section className="md:px-20 bg-[#F0F0FF] flex flex-col md:flex-row p-4 items-center">
            <div className="w-full text-center md:text-left md:w-6/12 md:mr-4 flex flex-col">
                <div className="banner-des flex-1">
                    <h1 className="text-4xl md:text-6xl font-semibold">
                        One Step Closer To Your <br />
                        <span className="text-[#9873FF]">Dream Job</span>
                    </h1>
                    <p className="mt-4 text-lg text-gray-700">
                        Explore thousands of job opportunities with all the information you need. It's your future. Come find it. Manage all your job applications from start to finish.
                    </p>
                    <button className="mt-4 cmn-btn">Get Started</button>
                </div>
            </div>
            <div className="w-full md:w-1/2 mt-4 md:mt-0 md:self-end">
                <div className="banner-img flex items-end">
                    <img src={Man} alt="" className="w-full mb-[-16px]" />
                </div>
            </div>
        </section>
    )
}

export default Banner