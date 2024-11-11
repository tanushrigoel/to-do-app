import React from "react";
import { Link } from 'react-router-dom'; // Assuming you are using React Router for navigation
import { FaGithub, FaFacebook, FaInstagram } from 'react-icons/fa';
function Home() {

    // return (
    //     <div className="text-center">
    //       <h1 className="text-4xl font-bold text-blue-500">Hello, Tailwind1!</h1>
    //       <p className="text-lg text-gray-600">Testing Tailwind setup</p>
    //       <div className="grid grid-cols-2 gap-2">
    //         <div className="bg-red-600 py-2 m-3">1</div>
    //         <div className="bg-orange-500 py-2 m-3">2</div>
    //       </div>
    //     </div>
    //   );

  return (
    <div className="min-h-screen bg-gray-900 text-white ">
      {/* Header */}
      <header className="w-full py-6 px-8">
        <div className="grid">
          <img
            src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
            alt="Logo"
            className="h-8"
          />
          <h1 className="ml-3 text-2xl font-semibold text-white">
            My To-Do App
          </h1>
        </div>
        <div>
          <Link
            to="/login"
            className="text-gray-300 hover:text-white px-4 py-2"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="text-white bg-orange-600 hover:bg-orange-700 px-4 py-2 rounded-lg ml-4"
          >
            Sign Up
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex flex-col md:flex-row items-center justify-center px-6 py-12 md:py-24 w-full max-w-4xl">
        <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <h2 className="text-4xl font-semibold">Making Notes Became Easy</h2>
          <p className="text-gray-400 mt-4">
            Keep track of your tasks and goals with ease.
          </p>
          <Link
            to="/create-note"
            className="mt-6 inline-block bg-orange-600 hover:bg-orange-700 text-white py-3 px-6 rounded-lg shadow-lg transition duration-300"
          >
            Create a Note
          </Link>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img
            src="https://img.icons8.com/ios-glyphs/90/ffffff/note.png"
            alt="Notes"
            className="w-48 h-48 opacity-80"
          />
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full py-6 px-8 bg-gray-800 text-gray-400">
        <div className="flex justify-center items-center space-x-6">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            <FaGithub size="1.5em" />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            <FaFacebook size="1.5em" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            <FaInstagram size="1.5em" />
          </a>
        </div>
        <p className="text-center mt-4">
          © 2024 My To-Do App. All rights reserved.
        </p>
      </footer>
    </div>
    
  );
}

export default Home;
