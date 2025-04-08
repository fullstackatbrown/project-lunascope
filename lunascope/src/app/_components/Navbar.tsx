import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <div className="bg-gray-700 flex items-center px-6 py-4 shadow-md">
      <div className="w-10 h-10 bg-gray-300 rounded-full mr-10"></div>

      <nav className="flex space-x-6 text-black text-lg ml-auto">
        <Link href="/" className="hover:underline">Home</Link>
        <Link href="/team" className="hover:underline">Team</Link>
        <Link href="/science" className="hover:underline">Science</Link>
        <Link href="/public" className="hover:underline">Public</Link>
        <Link href="/publications" className="hover:underline">Publications</Link>
        <Link href="/opportunities" className="hover:underline">Opportunities</Link>
        <Link href="/resources" className="hover:underline">Resources</Link>
      </nav>
    </div>
  );
};

export default Navbar;