import React from 'react'
import Man from "../../../assets/images/user.png"

function Banner() {
    return (
        <section class="md:px-20 bg-[#F0F0FF] flex flex-col md:flex-row p-4 items-center">
            <div class="w-full text-center md:text-left md:w-6/12 md:mr-4 flex flex-col">
                <div class="banner-des flex-1">
                    <h1 class="text-4xl font-semibold">
                        One Step Closer To Your <br />
                        <span class="text-[#9873FF]">Dream Job</span>
                    </h1>
                    <p class="mt-4 text-lg text-gray-700">
                        Explore thousands of job opportunities with all the information you need. It's your future. Come find it. Manage all your job applications from start to finish.
                    </p>
                    <button class="mt-4 cmn-btn">Get Started</button>
                </div>
            </div>
            <div class="w-full md:w-1/2 mt-4 md:mt-0 md:self-end">
                <div class="banner-img flex items-end">
                    <img src={Man} alt="" class="w-full mb-[-16px]" />
                </div>
            </div>
        </section>
    )
}

export default Banner