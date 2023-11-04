import React, { useEffect, useState } from 'react'
import img1 from "../../../assets/icons/accounts.png"
import img2 from "../../../assets/icons/creative.png"
import img3 from "../../../assets/icons/marketing.png"
import img4 from "../../../assets/icons/chip.png"

function Category() {
    const images = [img1, img2, img3, img4]
    let count = 0
    const [categories, setCategories] = useState({})
    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    // console.log(categories);

    return (
        <section className='my-20'>
            <h2 className='text-center text-3xl md:text-4xl font-bold mb-4'>Job Category List</h2>
            <p className='text-center mb-5 text-sm'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className="categories grid md:grid-cols-4 mx-20 gap-5">
                {
                    categories?.length > 1 &&
                    categories?.map(category => <div
                        className='bg-[#f5f5fd] py-10 px-6 rounded-md md:block flex items-center justify-evenly'
                        key={category.id}>

                        <div className="cat-img md:mb-4">
                            <img className='px-4 py-4 rounded-md bg-[#eaeafa]' src={images[count++]} alt="" />
                        </div>
                        <div className="cat-des">
                            <h3 className='font-semibold'>{category.category_name}</h3>
                            <p className='text-sm font-light'>{category.availability}</p>
                        </div>
                    </div>)
                }
            </div>
        </section>
    )
}

export default Category