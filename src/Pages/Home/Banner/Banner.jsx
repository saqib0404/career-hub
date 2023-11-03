import React from 'react'
import Man from "../../../assets/images/user.png"

function Banner() {
    return (
        <section class="md:mx-20 flex flex-col md:flex-row p-4 items-center">
            <div class="w-full md:w-6/12 md:mr-4">
                <div class="banner-des">
                    <h1 class="text-4xl font-semibold">
                        One Step Closer To Your
                        <span class="text-blue-600">Dream Job</span>
                    </h1>
                    <p class="mt-4 text-lg text-gray-700">
                        Explore thousands of job opportunities with all the information you need. It's your future. Come find it. Manage all your job applications from start to finish.
                    </p>
                    <button class="mt-4 cmn-btn">Get Started</button>
                </div>
            </div>
            <div class="w-full md:w-1/2 mt-4 md:mt-0 md:self-end">
                <div class="banner-img">
                    <img src={Man} alt="" class="h-auto" />
                </div>
            </div>
        </section>
    )
}

export default Banner