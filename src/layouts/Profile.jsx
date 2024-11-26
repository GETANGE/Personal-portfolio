import Experience from './Experience';
import Education from './Education';
export default function Profile() {
    return (
        <div className="max-w-md mx-auto shadow-lg rounded-xl overflow-hidden m-6">
            {/* Profile Header */}
            <div className="h-1/5 rounded-xl bg-[#202020] p-6 flex items-center space-x-6">
                <img
                    src="https://fly.storage.tigris.dev/calendery/image-1732176674096-Screenshot from 2024-08-17 16-52-23.png"
                    alt="profile image"
                    className="w-24 h-24 rounded-full object-cover border-2 border-yellow-500"
                />
                <div className="text-white">
                    <h2 className="text-2xl font-bold mb-2">Emmanuel Getange</h2>
                    <p className="text-sm text-gray-300 leading-relaxed">
                        Highly motivated web developer with expertise in designing,
                        developing, and maintaining websites. Proficient in React, Node.js, and Express.js.
                    </p>
                    <button
                        className="mt-4 px-6 py-2 bg-yellow-500 text-black font-semibold rounded-lg 
                            hover:bg-yellow-600 transition-colors duration-300 
                            focus:outline-none focus:ring-2 focus:ring-yellow-400 
                            flex items-center justify-center space-x-2"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-9.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                        <span>Download Resume</span>
                    </button>
                </div>
            </div>
            <br />
            <Experience/>
            <Education/>
        </div>
    );
}
