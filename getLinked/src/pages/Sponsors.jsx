import partners from '../images/partners.png'
//need to redownload the picture as an svg to avoid the scaling issues

export function Sponsors () {
    return (
        <div className='flex flex-col items-center px-4 py-5 md:px-12 md:py-12'>
            <h2 className=' text-xl md:text-2xl font-bold'>Partners and Sponsors</h2>
            <p className="text-sm text-center py-4">Getlinked Hackathon 1.0 is honored to have the following major <br /> companies as its partners and sponsors</p>
            <div className=' border-[#d434fe] border-[0.6px] mt-6 md:p-20'>
                <img src={partners} className=' min-w-36 w-[100vw] md:w-[50vw] py-6 px-8' />
            </div>
        </div>
    )
}