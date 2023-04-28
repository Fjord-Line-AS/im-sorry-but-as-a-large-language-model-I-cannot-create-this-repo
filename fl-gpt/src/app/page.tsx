"use client";
import { useState } from 'react';

export default function Home() {
    const [inputText, setInputText] = useState<string>();
    const [outputText, setOutputText] = useState<string>();

    const fetchSomething = async() => {
        const res = await fetch("/api/hello", {
            method: 'POST',
            body: JSON.stringify({
                'text': inputText
            })
        });
        const result = await res.json();

        console.log('response: ', result.text);

        setOutputText(result.text);
    }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="relative">
            <input type="text" id="inputField" name="inputField" placeholder="Enter your text here" onChange={(e) => setInputText(e.target.value)}
                className="bg-white border-2 border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal
                focus:outline-none focus:bg-white focus:border-blue-500 text-green-500 transition duration-500 ease-in-out transform
                hover:-translate-y-1 hover:scale-105" />
            <button onClick={fetchSomething}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 focus:outline-none">
                <span className="inline-block mr-2 mb-px animate-spin">
                    &#9696;
                </span>
                Fetch Something
            </button>

            <div className="fancy-text-box">
              <span>Result: {outputText}</span>
            </div>
        </div>
    </main>
  )
}