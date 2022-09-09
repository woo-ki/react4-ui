import React, {useState} from 'react';
import "./button.css";

const Button = () => {
    const [isGreen, setIsGreen] = useState(true);
    return (
        <>
            <button
                className="transition duration-500 ease-in-out bg-blue-600 hover:bg-red-600 transform hover:-translate-y-1 hover:scale-110 btn-blue">
                Hover me
            </button>
            <br/>
            <button
                className={`py-2 px-4 bg-${isGreen ? "green" : "purple"}-500 text-white font-semibold rounded-lg shadow-md hover:bg-${isGreen ? "green" : "purple"}-700 focus:outline-none focus:ring-2 focus:ring-${isGreen ? "green" : "purple"}-400 focus:ring-opacity-75`}
                onClick={() => {setIsGreen(prev => !prev)}}
            >
                Click me
            </button>
            <br/>
            <button
                className="px-4 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75"
            >
                Click me
            </button>
            <br/>
            <button
                className="bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75"
            >
                Click me
            </button>
            <br/>
            <button
                className="text-red-500 font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75"
            >
                Click me
            </button>
            <br/>
            <button
                className="font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75"
            >
                Click me
            </button>
            <br/>
            <button
                className="rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75"
            >
                Click me
            </button>
            <br/>
            <button
                className="shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75"
            >
                Click me
            </button>
            <br/>
            <button
                className="btn-blue"
            >
                Click me
            </button>
            <br/>
        </>
    );
};

export default Button;
