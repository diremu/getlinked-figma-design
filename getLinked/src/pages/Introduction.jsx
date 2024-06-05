import intro from '../images/introduction.png'

export default function Intro() {
    return(
        <div className='px-10 py-8 md:flex md:items-center md:justify-center'>
            <div>
                <img src={intro} className='w-[40vw] md:h-[45vh] md:w-[25vw]' />
            </div>
            <div className='w-[40vw] text-left md:pl-6'>
                <h3 className='text-center font-bold text-[1.15rem]'>Introduction to getlinked <br /> <span className='text-[#d434fe]'>tech Hackathon 1.0</span></h3>
                <p className='text-sm leading-relaxed py-3'>Our tech hackathon is a melting point of visionaries, and its purpose is a sclear as day: to shape the future. Whether you're a coding genius, a design maverick, or a concept wizard, you'll have the chance to transform the ideas into reality. Solving real-world problems, pushing the boundaries of technology, and creating solutions that can change the world, that's what we're all about!</p>
            </div>
        </div>
    )
}