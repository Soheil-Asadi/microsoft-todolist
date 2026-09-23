import React from "react";

export default function HelpPanel() {
  return (
    <div className="mt-6">
      <a className="text-blue-500 border-b border-white hover:border-blue-600 ">
        Learn more
      </a>
      <div className="flex space-x-2 mt-3 items-center">
        <button className="text-white py-1 px-3 text-sm rounded-md font-semibold bg-blue-600">
          Sync
        </button>
        <p className="text-sm">Up to date</p>
      </div>
    </div>
  );
}
