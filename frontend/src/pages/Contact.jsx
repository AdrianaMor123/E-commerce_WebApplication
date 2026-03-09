import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLatterBox from '../components/NewsLatterBox'
import SectionWrapper from '../components/SectionWrapper'

const Contact = () => {
  return (
    <div>
      <SectionWrapper className='text-center text-2xl pt-10 border-t'>
      <div className='text-shadow-lg/60 text-shadow-gray-500'> <Title text1={'CONTACT'} text2={'US'} /></div> 
      </SectionWrapper>

      <SectionWrapper className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img className='w-full md:max-w-[480px]' src={assets.contact_img} alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-1xl text-gray-600'>Our Store</p>
          <p className=' text-gray-600'>something address<br />also address</p>
          <p className=' text-gray-600'>telefon:+40 734 211 543 <br/>email: houseofhype@gmail.com</p>
          <p className='font-semibold text-1xl text-gray-600'>Careers at Forever</p>
          <p className=' text-gray-600'>Learn more about our team and job opening</p>
          <button className='border border-black px-8 py-4 text-sm  bg-white text-black hover:bg-gray-300 active:bg-gray-500 transition-all duration-500'>Explore jobs</button>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <NewsLatterBox />
      </SectionWrapper>
    </div>
  )
}

export default Contact