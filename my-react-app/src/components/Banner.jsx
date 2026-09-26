import React from 'react'
import BannerBG from '../assets/BannerBG.png'
import CircularText from '../components/CircularText/CircularText';
import CircularImg from '../assets/CircularIMG.png'
import BannerImg from '../assets/BannerIMG.png'
import { FiArrowUpRight } from 'react-icons/fi';
import ScrollVelocity from './ScrollVelocity/ScrollVelocity';
import ScrollImg1 from '../assets/ScrollImg/Background.png'
import ScrollImg2 from '../assets/ScrollImg/Background (1).png'
import ScrollImg3 from '../assets/ScrollImg/Background (2).png'
import ScrollImg4 from '../assets/ScrollImg/Background (3).png'
import ScrollImg5 from '../assets/ScrollImg/Background (4).png'
import ScrollImg6 from '../assets/ScrollImg/Background (5).png'
import ScrollImg7 from '../assets/ScrollImg/Background (6).png'


const Banner = () => {
    return (
        <div>
            <div>
                <section
                    className="relative min-h-205 bg-cover bg-center"
                    style={{ backgroundImage: `url(${BannerBG})` }}
                >
                    <div className="relative flex justify-between items-center z-10 text-white px-3">
                        <h2 className='text-[203px] font-semibold uppercase'>Hello</h2>
                        <div className="relative h-50 w-50 shrink-0">
                            <CircularText
                                text="EXPERT*VIDEO*EDITOR*"
                                onHover="speedUp"
                                spinDuration={20}
                                className="custom-class uppercase"
                            />
                            <img
                                src={CircularImg}
                                alt=""
                                className="absolute left-29 top-29 z-10 w-40 h-40 -translate-x-1/2 -translate-y-1/2 rounded-full object-cover"
                            />
                        </div>
                        <h2 className='text-[203px] font-semibold uppercase'>Motion</h2>
                    </div>

                    <div className='flex justify-center items-center gap-50'>
                        <img src={BannerImg} alt="" />
                        <div className='w-[310px]'>
                            <p className='text-[#747779] border-b border-[#747779] pb-7'>My role as a amplify tha story through
                                my careful [Video Editor] selection of
                                footages, pacing, and visual style. My
                                keen attention to detail allows me to
                                enhance the mood.</p>
                            <div className='border-b border-[#747779] pb-7'>

                                <span className=' text-white text-9xl font-bold block'>12+</span>
                                <span className='text-[#747779]'>Years of Experience</span>
                            </div>
                            <FiArrowUpRight className="p-8 my-7.5 text-8xl text-white border border-[#747779] rounded-full" />
                        </div>
                    </div>

                    {/* --- ONLY THIS SECTION WAS MODIFIED --- */}
                    <div className="flex justify-center items-center mt-10 pb-15">
                        <h3 className='relative flex items-center text-white text-sm md:text-base font-semibold uppercase tracking-wider whitespace-nowrap
                            before:content-[""] before:absolute before:right-full before:top-1/2 before:-translate-y-1/2 before:w-200 before:h-px before:mr-4 before:bg-linear-to-l before:from-transparent before:to-[#747779]
                            after:content-[""] after:absolute after:left-full after:top-1/2 after:-translate-y-1/2 after:w-200 after:h-px after:ml-4 after:bg-linear-to-r after:from-transparent after:to-[#747779]'>
                            <span className='text-[#8750F7] mr-1'>100+</span> Trusted Clients Over the world
                        </h3>
                    </div>
                    {/* -------------------------------------- */}

                    <ScrollVelocity
                        texts={[
                            <div className="flex items-center gap-7 py-4" key="image-strip">
                                <img
                                    src={ScrollImg1}
                                    alt=""
                                    className=""
                                />
                                <img
                                    src={ScrollImg2}
                                    alt=""
                                    className=""
                                />
                                <img
                                    src={ScrollImg3}
                                    alt=""
                                    className=""
                                />
                                <img
                                    src={ScrollImg4}
                                    alt=""
                                    className=""
                                />
                                <img
                                    src={ScrollImg5}
                                    alt=""
                                    className=""
                                />
                                <img
                                    src={ScrollImg6}
                                    alt=""
                                    className=""
                                />
                                <img
                                    src={ScrollImg7}
                                    alt=""
                                    className=""
                                />
                            </div>
                        ]}
                        velocity={100}
                        className="custom-scroll-text"
                        numCopies={7}
                        damping={50}
                        stiffness={400}
                    />
                </section>
            </div>
        </div>
    )
}

export default Banner