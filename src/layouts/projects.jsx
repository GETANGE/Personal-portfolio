import projectData from './../dev-data/projects.json';

export default function Projects() {
    return (
        <div className="w-4/5 p-6 rounded-xl bg-[#202020]">
            <h2 className="text-3xl font-bold text-white mb-6">My Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projectData.projects.map((project, index) => (
                    <div key={index} className="bg-[#2d2d2d] rounded-lg p-6 shadow-lg hover:bg-[#3a3a3a] transform transition duration-300 ease-in-out relative">
                        <div className=" opacity-10 rounded-lg"></div>
                        <h3 className="text-xl font-semibold text-gray-300 mb-3 z-10">
                            <span className="text-yellow-500">
                                {project.name.split(' ').map((word, idx) => 
                                    idx % 2 === 0 ? word : <span key={idx} className="text-yellow-500">{word} </span>
                                )}
                            </span>
                        </h3>
                        <p className="text-sm text-gray-400 mb-4 z-10">{project.description}</p>
                        
                        <div className="mb-4 flex flex-wrap gap-2 z-10">
                            {project.technologies.map((tech, idx) => (
                                <span key={idx} className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm flex items-center">
                                    {/* Optionally include icons for each technology */}
                                    <span className="mr-2">{/* Icon based on technology */}</span>
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <ul className="text-sm text-gray-500 mb-4 z-10">
                            <li><strong>Features:</strong> {project.features.join(", ")}</li>
                        </ul>
                        
                        <a 
                            href={project.githubLink} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-yellow-500 transition duration-200 z-10"
                        >
                            View Project on GitHub
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}