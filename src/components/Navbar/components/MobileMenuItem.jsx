import React from "react";
import { Link } from "react-router-dom";

const MobileMenuItem = ({ 
  item, 
  activeSubmenu, 
  toggleSubmenu, 
  onClose 
}) => (
  <li>
    {item.children ? (
      <div className="border-b border-gray-200">
        <button
          onClick={() => toggleSubmenu(item.title)}
          className="w-full px-4 py-3 flex items-center justify-between text-gray-700 hover:text-indigo-600"
        >
          <span className="font-medium">{item.title}</span>
          <svg
            className={`w-4 h-4 transition-transform duration-200 ${
              activeSubmenu === item.title ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
        {activeSubmenu === item.title && (
          <ul className="bg-gray-50 py-2">
            {item.children.map((child) => (
              <li key={child.title}>
                <Link
                  to={child.link}
                  className="block px-8 py-2 text-gray-600 hover:text-indigo-600"
                  onClick={onClose}
                >
                  {child.title}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    ) : (
      <Link
        to={item.link}
        className="block px-4 py-3 text-gray-700 hover:text-indigo-600 border-b border-gray-200"
        onClick={onClose}
      >
        {item.title}
      </Link>
    )}
  </li>
);

export default MobileMenuItem;