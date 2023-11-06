import React from 'react'

function Footer() {
    return (
        <div className='bg-[#1A1919] text-white px-20'>
            <footer className="footer text-white p-10 bg-[#1A1919] items-center">
                <aside className=''>
                    <h3 className='font-bold text-3xl'>CareerHub</h3>
                    <p className='w-5/12 text-justify'>There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.</p>
                </aside>
                <nav>
                    <header className="footer-title">Services</header>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <header className="footer-title">Company</header>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <header className="footer-title">Legal</header>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>

            </footer>
            <div className='flex justify-center'><hr className='text-white w-11/12' /></div>
            <div className='py-6 px-12 text-sm  md:flex justify-between'>
                <p>@2023 CareerHub. All Rights Reserved</p>
                <p>Powered by CareerHub</p>
            </div>
        </div>
    )
}

export default Footer