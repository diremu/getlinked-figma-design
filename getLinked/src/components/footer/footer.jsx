import ig from '../../images/instagram.svg'
import x from '../../images/x.svg'
import facebook from '../../images/facebook.svg'
import linkedin from  '../../images/linkedin.svg'
import contact from '../../images/contact.png'
import location from '../../images/location.svg'

export default function Footer() {
    return (
        <footer className='flex pt-6 md:pt-16'>
            <div className='flex flex-nowrap flex-col md:flex-row px-4 md:px-8 w-full justify-around '>
                <div className='flex flex-col '>
                    <h2 className='text-2xl font-extrabold mb-4'>get<span className='text-[#d434fe] '>linked</span></h2>
                    <p className='w-20 md:w-[35vw] text-[0.9rem]'>GetLinked Tech Hackathon is a technology innovation program established by a group of organizations with the aim of showcasing young and talented individuals in the field of technology</p>
                    <p className='text-[0.9rem] mt-6 md:mt-16'>Terms of Use <span className='text-[#d434fe]'>|</span> Privacy Policy</p>
                </div>
                <div className='flex flex-col'>
                    <h4 className='text-[#d434fe] font-semibold'>Useful Links</h4>
                    <ul className='flex flex-col'>
                        <li className="py-2">Overview</li>
                        <li className="py-2">Timeline</li>
                        <li className="py-2">FAQs</li>
                        <li className="py-2">Register</li>
                        <li className='text-[#d434fe] pb-0'>
                            Follow us
                            <ul className=' inline-flex items-end mb-0'>
                                {/* Change the icons to svg */}
                                <li className="ml-4 pb-0 "><img className='w-[24px] h-[24px]' src={ig} /></li>
                                <li className="ml-4 pb-0 "><img className='w-[24px] h-[24px]' src={x} /></li>
                                <li className="ml-4 pb-0 "><img className='w-[24px] h-[24px]' src={facebook} /></li>
                                <li className="ml-4 pb-0 "><img className='w-[24px] h-[24px]' src={linkedin} /></li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div>
                    <h4 className='text-[#d434fe]'>Contact Us</h4>
                    <ul>
                        <li className='flex mt-6 text-sm'>
                            <img className='w-[24px] h-[24px]' src={contact} />
                            <p className='ml-3'>+234 6707653444</p>
                        </li>
                        <li className='flex mt-6 text-sm'>
                            <img className='w-[24px] h-[24px]' src={location} />
                            <div className='ml-3'>
                                <p>27, Alara Street <br/>Yaba 100012<br/>Lagos State</p>
                            </div>
                        </li>
                    </ul>
                </div>
                {/* <div>
                    <p>All rights reserved. &copy;getlinked Ltd.</p>
                </div> */}
            </div>
        </footer>
    )
}