import React from 'react'

export default function Card() {
    return (
        <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="/">
                <img className="p-8 rounded-t-lg" src="https://avatars.githubusercontent.com/u/178313410?v=4" />
            </a>
            <div className="px-5 pb-5">
                <a href="/">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                        name: sovon chanda 
                    </h5>
                    <p className="font-semibold tracking-tight text-gray-900 dark:text-white">MCA graduate skilled in JavaScript, React.js, CSS, Python, and Power BI, passionate about building dynamic apps and impactful data solutions."</p><br />
                    <p className="font-semibold tracking-tight text-gray-900 dark:text-white">
                        contact: 8509337190
                    </p>
                </a>
                <div className="flex items-center mt-2.5 mb-5">
                    
                   
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white"></span>
                    <a
                        href="https://www.linkedin.com/in/sovon-chanda-87a2b0233"
                        className="hover: underline text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                       target="_blank"
                                        rel="noreferrer"
                    >
                        linkedin
                    </a>
                    <a
                        href="www.sovonchanda00@gmail.com"
                        className="hover: underline text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        target="_blank"
                                        rel="noreferrer"
                    >
                        gmail
                    </a>
                    <a
                        href="https://github.com/sovonchanda"
                        className=" hover: underline text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        target="_blank"
                                        rel="noreferrer"
                    >
                        Github
                    </a>
                </div>
            </div>
        </div>
    );
}