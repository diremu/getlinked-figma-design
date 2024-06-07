import judge from '../images/judge.png'

const Judge = () => {
    return (
        <div className='px-10 py-14 md:flex md:flex-row md:items-center'>
            <div className=''>
                <img src={judge} className='md:w-[50vw]' />
            </div>
            <div className='md:w-[40vw]'>
                <h2 className='text-2xl font-bold text-center mb-4 md:text-left md:text-3xl'>
                    Judging Criteria <br /><span className='text-[#d434fe]'> Key attributes </span>
                </h2>
                <ul>
                    <li className="text-center pt-5 md:text-left">
                        <span className="text-[#fe34b9] font-semibold">Innovation and Creativity: </span>
                        Evaluate the uniqueness and creativity of the solution. Consider whether it addresses a real-world problem in a novel way or introduces innovative features.
                    </li>
                    <li className="text-center pt-5 md:text-left">
                        <span className="text-[#fe34b9] font-semibold">Functionality: </span>
                        Assess how well the situation works. Does it perform its intended functions effectively and without major issues? Judges woiuld consider the completeness and robustness of the situation.
                    </li>
                    <li className="text-center pt-5 md:text-left">
                        <span className="text-[#fe34b9] font-semibold">Impact and Relevance: </span>
                        Determine the potential impact of the solution in the real world. Does it address a significant problem, and is it relevant to the target audience? Judges would assess the potential social, economic, or environmental benefits.
                    </li>
                    <li className="text-center pt-5 md:text-left">
                        <span className="text-[#fe34b9] font-semibold">Technical Complexity: </span>
                        Evaluate the technical sophistication of the solution. Judges would consider the complexity of the code, the use of advanced technologies or algorithms, and the scalability of the solution.
                    </li>
                    <li className="text-center pt-5 md:text-left">
                        <span className="text-[#fe34b9] font-semibold">Adherence to Hackathon Rules: </span>
                        Judges will Ensure that the team adhered to the rules and guidelines of the hackathon, including deadlines, use of specifc technologies or APIs, and any other competition-specific requirements.
                    </li>
                    <li className="text-center pt-5 md:text-left">
                        <a href='/' className='px-4 py-2 md:px-8 md:py-4 rounded inline-block text-center reading'>Read More</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Judge;