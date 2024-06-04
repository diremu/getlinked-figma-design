import partners from '../images/partners.png'

export function Sponsors () {
    return (
        <div className='flex flex-col items-center p-12'>
            <h2 className=' text-2xl font-bold'>Partners and Sponsors</h2>
            <p className="text-sm text-center py-4">Getlinked Hackathon 1.0 is honored to have the following major <br /> companies as its partners and sponsors</p>
            <div className=' border-[#d434fe] border-[0.6px] mt-6 p-20'>
                <img src={partners} />
            </div>
        </div>
    )
}