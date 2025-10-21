'use client'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-10 bg-gray-800 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
        {/* 로고 / 이름 */}
        <Link href="/" className="text-xl font-bold text-gray-200">
          PORTFOILO
        </Link>

        {/* 메뉴 */}
        <div className="flex items-center gap-6 text-gray-200 font-medium">
          <Link
            href="/"
            className="hover:text-gray-800 transition-colors duration-200"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="hover:text-gray-900 transition-colors duration-200"
          >
            About
          </Link>
          <Link
            href="/projects"
            className="hover:text-gray-900 transition-colors duration-200"
          >
            Project
          </Link>
          <Link
            href="/team"
            className="hover:text-gray-900 transition-colors duration-200"
          >
            Team
          </Link>
        </div>
      </div>
    </nav>
  )
}
