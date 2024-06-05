import rules from '../images/rules.png'

const Rules = () => {
    return (
        <div className='px-6 md:px-10 flex flex-col md:flex-row-reverse md:py-8'>
            <div className='py-4'>
                <img src={rules} alt="rules" className='w-[40vw]' />
            </div>
            <div className='w-[40vw]'>
                <h3 className='text-center  md:text-left font-bold text-xl md:text-2xl'>Rules and <br className='block' /><span className='text-[#d434fe]'>Guidelines</span></h3>
                <p className="text-sm leading-relaxed pt-4 pb-8">
                    Our tech hackathon is a melting pot of visionaries, and its purpose is as clear as day: to shape the future. Whether you're a coding genius, a design maverick, or a concept wizard, you'll have the chance to transform your ideas into reality. Solving real-world problems, pushing the boundaries of technology, and creating solutions that can change the world, that's what we're all about!
                </p>
            </div>
        </div>
    )
}

export default Rules;