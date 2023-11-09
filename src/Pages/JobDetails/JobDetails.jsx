import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import './JobDetails.css'

function JobDetails() {
    const jobs = useLoaderData();
    const param = useParams()
    console.log(jobs, param?.id);
    const job = jobs?.find(job => job.id === Number(param?.id));
    console.log(job);
    return (
        <div>
            <section className='bg-[#F0F0FF] details'>
                <h3 className='text-center text-3xl md:text-4xl font-bold pt-20 pb-24'>Job Details</h3>
            </section>

            <section className='py-10 px-24 gap-4 grid grid-cols-3'>
                <div className='col-span-2 self-center '>
                    <p className='pb-5 font-light'><span className='font-semibold'>Job Description:</span>  {job?.job_description}</p>
                    <p className='pb-5 font-light'><span className='font-semibold'>Job Responsibility:</span>  {job?.job_responsibility}</p>
                    <p className='pb-5 font-light'><span className='font-semibold' >Educational Requirements:</span> <br /> {job?.educational_requirements}</p>
                    <p className='font-light'><span className='font-semibold'>Experience:</span> <br /> {job?.experiences}</p>

                </div>
                <div >
                    <div className='bg-[#D4D4E6] rounded-md px-6 py-8'>
                        <h4 className='text-lg font-bold'>Job Details</h4> <br /> <hr /> <br />
                        <p className='font-light'><span className='font-semibold'>Salary:</span>  {job?.salary}</p>
                        <p className='font-light'><span className='font-semibold'>Job Title:</span>  {job?.job_title}</p><br />
                        <h4 className='text-lg font-bold'>Contact Information</h4> <br /> <hr /> <br />
                        <p className='font-light'><span className='font-semibold'>Phone:</span> {job?.contact_information?.phone}</p>
                        <p className='font-light'><span className='font-semibold'>Email:</span> {job?.contact_information?.email}</p>
                        <p className='font-light'><span className='font-semibold'>Address:</span> {job?.contact_information?.address}</p>
                    </div>
                    <button className='cmn-btn w-full mt-5'>Apply Now</button>
                </div>
            </section>
        </div>
    )
}

export default JobDetails