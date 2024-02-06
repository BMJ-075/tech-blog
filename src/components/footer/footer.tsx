import React from "react";

const Footer = (): React.JSX.Element => {
  return (
    <footer className="w-full backdrop-blur-sm border-t-2 border-gray-300 flex justify-between items-center p-2 max-h-12">
      <h4 className="font-bold text-gray-700 ">© 2024 Bhavya Jain </h4>
      <p className="font-semibold italic">Made with NextJs </p>
      <ul className="flex items-center">
        <li className="px-2 hover:scale-105 hover:text-gray-900  font-medium transform transition-all ease-in">
          <button>Home</button>
        </li>
        <li className="px-2 hover:scale-105 hover:text-gray-900  font-medium transform transition-all ease-in">
          <button>About</button>
        </li>
        <li className="px-2 hover:scale-105 hover:text-gray-900  font-medium transform transition-all ease-in">
          <button>Privacy Policy</button>
        </li>
        <li className="px-2 hover:scale-105 hover:text-gray-900  font-medium transform transition-all ease-in">
          <button>Disclaimer</button>
        </li>
        <li className="px-2 hover:scale-105 hover:text-gray-900  font-medium transform transition-all ease-in">
          <button>Terms and Conditions</button>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
