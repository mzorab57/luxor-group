import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const MenuItem = ({ item }) => {
  const { t } = useTranslation();

  return (
    <li className="relative group">
      {item.children ? (
        <>
          <span className="cursor-pointer flex items-center px-4 hover:text-indigo-600">
            {t(`nav.${item.title.toLowerCase()}`)}
            <svg
              className="w-4 h-4 ml-2"
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
          </span>
          <ul className="hidden group-hover:block absolute left-0 w-48 bg-white shadow-lg rounded-md py-2">
            {item.children.map((child) => (
              <li key={child.key}>
                <Link
                  to={child.link}
                  className="block px-4 py-2 text-sm hover:text-indigo-600 hover:bg-gray-50"
                >
                  {t(`nav.${child.title}`)}
                </Link>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <Link to={item.link} className="block px-4 hover:text-indigo-600">
          {t(`nav.${item.title.toLowerCase()}`)}
        </Link>
      )}
    </li>
  );
};

export default MenuItem;
