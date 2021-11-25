import React from "react";

export const Card = ({ title, content, link, icon, class: className }) => {
  return (
    <div className={className}>
      <span className="icon-wrap absolute -top-6 bg-indigo-500 rounded-lg shadow p-4">
        {icon}
      </span>
      <h3 className="mt-10 text-xl mb-4">{title}</h3>
      <p className="text-gray-500 ">Lorem, ipsum dolor sit amet con{content}</p>
      <span className="absolute bottom-0 right-0 left-0 px-8 py-4 bg-gray-200 rounded-bl-2xl rounded-br-2xl">
        <a href={link} className="text-indigo-500">
          Contact us
        </a>
      </span>
    </div>
  );
};
