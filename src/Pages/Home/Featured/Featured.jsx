
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function Featured() {
    const [features, setFeatures] = useState({});
    useEffect(() => {
        fetch("jobs.json")
            .then(res => res.json())
            .then(data => setFeatures(data))
    }, [])
    // console.log(features);
    return (
        <section className='my-20 px-10 md:px-24'>
            <h2 className='text-center text-3xl md:text-4xl font-bold mb-4'>Featured Jobs</h2>
            <p className='text-center mb-6 text-sm'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='grid md:grid-cols-2 gap-5 '>
                {
                    features?.length > 1 &&
                    features.map(feature => <div className='border rounded-md p-8' key={feature?.id}>
                        <img className='pb-2' src={feature?.logo} alt="" />
                        <h4 className='text-lg font-semibold'>{feature?.job_title}</h4>
                        <small>{feature?.company_name}</small><br />
                        <p className='py-4'>
                            <span className='border px-4 py-1 mr-2 text-[#875ff7] border-[#895eff]'>{feature?.remote_or_onsite}</span>
                            <span className='border px-4 py-1 mr-2 text-[#875ff7] border-[#895eff]'>{feature?.job_type}</span>
                        </p>
                        <p className='pb-4'>
                            {/* <BeakerIcon class="h-6 w-6 text-blue-500" /><span className='text-sm mr-4'>{feature?.location}</span> */}
                            {/* <FontAwesomeIcon icon={faSackDollar} /> <span>{feature?.salary}</span> */}
                        </p>
                        <Link to={`jobs/${feature?.id}`}><button className='cmn-btn'>View Details</button></Link>

                    </div>)
                }
            </div>
        </section>
    )
}

export default Featured