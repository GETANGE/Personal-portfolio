import experienceData from './../dev-data/experience.json';
export default function Experience(){
    return(
        <>
            {/* Experience Section */}
            <div className="p-6 rounded-xl bg-[#202020]">
                <h2 className="text-xl text-yellow-500 font-bold mb-4">Experience</h2>
                {experienceData.experience.map((exp, index) => (
                    <div key={index} className="mb-6 border-b border-gray-700 pb-4">
                        <div className="flex items-start space-x-4">
                            <div className="w-12 h-12 rounded-full bg-yellow-500 flex items-center justify-center text-black font-bold text-lg">
                                {exp.organization[0]}
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-white">{exp.title}</h3>
                                <p className="text-sm text-gray-400">{exp.organization}</p>
                                <p className="text-sm text-gray-500">
                                    {exp.startDate} - {exp.endDate}
                                </p>
                            </div>
                        </div>
                        <p className="text-sm text-gray-300 mt-2 leading-relaxed">
                            {exp.description}
                        </p>
                    </div>
                ))}
            </div>
        </>
    )
}