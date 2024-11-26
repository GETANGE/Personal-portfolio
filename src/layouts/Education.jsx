import educationData from './../dev-data/education.json';

export default function Education() {
    return (
        <div className="max-w-md mx-auto shadow-lg rounded-xl overflow-hidden m-6 p-6 bg-[#202020] text-gray-300">
            <h2 className="text-xl text-yellow-500 font-bold mb-4">Education</h2>
            {educationData.education.map((edu, index) => (
                <div key={index} className="mb-6">
                    <h3 className="text-lg font-semibold text-white">{edu.degree}</h3>
                    <p className="text-sm">
                        <span className="text-yellow-400">{edu.school}</span>
                    </p>
                    <p className="text-sm">
                        <span className="text-gray-400">{edu.startDate} - {edu.endDate}</span>
                    </p>
                    <p className="mt-2">{edu.description}</p>
                </div>
            ))}
        </div>
    );
}