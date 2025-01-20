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
            Hide Inputs
          </button>
        </div>
      )}

      <div
        onClick={() => setShowInputs(true)}
        className={`mx-auto p-6 border-2 border-gray-300 rounded-xl cursor-pointer flex flex-col justify-between ${showInputs ? 'max-w-md' : 'h-[calc(100vh-120px)] max-w-3xl'
          }`}
      >
        <div className="flex-grow flex flex-col items-center justify-center">
          <div className="flex flex-row items-center mb-8">
            <img src="/logo.svg" alt="Logo" width={50} height={50} />
            <div className="text-xl text-gray-500">西雅圖台灣人職涯小聚</div>
          </div>

          <div className="text-6xl font-bold mb-8">{name || "Your Name"}</div>
          <div className="text-3xl mb-8">{title && company ? `${title}, ${company}` : "Title, Company"}</div>
          {linkedin && (
            <div className="flex justify-center mb-8">
              <QRCodeSVG
                value={`https://www.linkedin.com/in/${linkedin}/`}
                size={150}
                level="M"
              />
            </div>
          )}

          {hashtags && (
            <div className="flex flex-wrap justify-center gap-2">
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
    </main>
  );
}
