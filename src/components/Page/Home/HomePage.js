import React from 'react'
import CardView from '../../Component/CardView/CardView'
import ClientList from '../../Component/ClientList/ClientList'
import ContactUs from '../../Component/ContactUs/ContactUs'

const HomePage = () => {
  return (
    <div className='px-72 mx-14 my-10 '>
      <div >
        <h1 className='font-bold text-3xl text-sky-600'>SSOS is a leading Facility Management Provider in India</h1>
        <p className='font-light  text-md '>SSOS (Shining Star Outsource Services Pvt. Ltd.) is propelled by a team of enthusiastic, dedicated and highly experienced professionals in the field of facility management services in Gurgaon. Our fleet of proficient staff is recognized for completing the assignment within given timeline. We are endowing world class facility management services for your organization at affordable charges. Our clients are much satisfied with our services. We provide services for Corporate, Hotels, Educational institutes, Hospitals, Manufacturing plants and Malls. We can lighten the burden on your brain related to daily routine works which are noncore tasks of organization.</p>
      </div>
      <CardView/>
      <ContactUs/>
      <ClientList/>
    </div>
  )
}

export default HomePage