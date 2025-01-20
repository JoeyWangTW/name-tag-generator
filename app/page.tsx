"use client";

import { useState } from "react";
import { QRCodeSVG } from "qrcode.react";

export default function Home() {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [hashtags, setHashtags] = useState("");
  const [showInputs, setShowInputs] = useState(true);

  const handleHideInputs = () => {
    setShowInputs(false);
  };

  return (
    <main className="min-h-screen px-2 py-8 font-sans">
      {showInputs && (
        <div className="max-w-md mx-auto mb-8 space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Joey Wang"
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">
              Title
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Software Engineer"
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="company" className="block text-sm font-medium text-gray-700">
              Company
            </label>
            <input
              type="text"
              id="company"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              placeholder="Donut"
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="linkedin" className="block text-sm font-medium text-gray-700">
              LinkedIn Username
            </label>
            <input
              type="text"
              id="linkedin"
              value={linkedin}
              onChange={(e) => setLinkedin(e.target.value)}
              placeholder="szuyuwang"
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="hashtags" className="block text-sm font-medium text-gray-700">
              Hashtags (comma-separated)
            </label>
            <input
              type="text"
              id="hashtags"
              value={hashtags}
              onChange={(e) => setHashtags(e.target.value)}
              placeholder="tech, startup, seattle"
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            onClick={handleHideInputs}
            className="w-full px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Ready to Print
          </button>
        </div>
      )}

      <div
        onClick={() => setShowInputs(true)}
        className={`mx-auto my-auto p-6 border-2 border-gray-300 rounded-xl cursor-pointer ${showInputs
          ? 'max-w-md'
          : 'w-[calc(100vh-20px)] h-[calc(100vw-40px)] max-w-none mx-auto rotate-90 origin-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
          }`}
      >
        <div className={`flex ${showInputs ? 'flex-col' : 'flex-row'} h-full`}>
          <div className={`flex flex-col ${showInputs ? 'items-center justify-center w-full' : 'justify-center pr-8 flex-1'}`}>
            <div className="w-full flex flex-col items-center">
              <div className="flex flex-row items-center gap-4 mb-4">
                <img src="/logo.svg" alt="Logo" width={60} height={60} />
                <div className="text-3xl text-gray-500 text-center">西雅圖台灣人職涯小聚</div>
              </div>
              <div className="text-6xl font-bold mb-8 text-center w-full">{name || "Your Name"}</div>
            </div>

            <div className="w-full flex flex-col items-center">
              <div className="flex flex-row items-center mb-8">
                <div className="text-3xl text-center">{title || "Title"}, {company || "Company"}</div>
              </div>

              {hashtags && (
                <div className="flex flex-wrap justify-center gap-2 mb-8">
                  {hashtags.split(',').map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-xl bg-gray-100 rounded-full text-gray-700"
                    >
                      #{tag.trim()}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>

          {linkedin && (
            <div className={`flex justify-center items-center ${showInputs ? 'mb-8' : 'ml-auto'}`}>
              <QRCodeSVG
                value={`https://www.linkedin.com/in/${linkedin}/`}
                size={showInputs ? 150 : 200}
                level="M"
              />
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
