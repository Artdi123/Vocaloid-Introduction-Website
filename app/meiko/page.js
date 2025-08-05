/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import Head from "next/head";
import { useState } from "react"; 

export default function Meiko() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-purple-100">
      <Head>
        <title>MEIKO | Virtual Diva</title>
        <meta
          name="description"
          content="Official portfolio of MEIKO, the original virtual diva"
        />
      </Head>

      {/* Navigation Bar */}
      <nav className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link
                href="/"
                className="text-xl font-bold text-red-600 hover:text-red-800 transition"
              >
                MEIKO
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link
                href="/"
                className="text-gray-700 hover:text-red-600 transition font-medium"
              >
                Miku
              </Link>
              <Link
                href="/kaito"
                className="text-gray-700 hover:text-red-600 transition font-medium"
              >
                KAITO
              </Link>
              <Link
                href="/rinlen"
                className="text-gray-700 hover:text-red-600 transition font-medium"
              >
                Rin & Len
              </Link>
              <Link
                href="/luka"
                className="text-gray-700 hover:text-red-600 transition font-medium"
              >
                Luka
              </Link>
              <Link
                href="/gumi"
                className="text-gray-700 hover:text-red-600 transition font-medium"
              >
                GUMI
              </Link>
            </div>
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)} 
                className="text-gray-700"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white/80 backdrop-blur-md shadow-sm">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                href="/"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-red-600 hover:bg-gray-50"
              >
                Miku
              </Link>
              <Link
                href="/kaito"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-red-600 hover:bg-gray-50"
              >
                KAITO
              </Link>
              <Link
                href="/rinlen"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-red-600 hover:bg-gray-50"
              >
                Rin & Len
              </Link>
              <Link
                href="/luka"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-red-600 hover:bg-gray-50"
              >
                Luka
              </Link>
              <Link
                href="/gumi"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-red-600 hover:bg-gray-50"
              >
                GUMI
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-5xl font-bold text-gray-900">
              <span className="text-red-500">MEIKO</span>
            </h1>
            <p className="text-xl text-gray-600">
              The original virtual diva with a powerful voice and vibrant
              personality.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://open.spotify.com/artist/2IkmuwBBKvBWsJjzyUsvhp?si=vN3TmPjaQ6SZxhky4iN5Sg"
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-medium transition shadow-lg"
              >
                Latest Songs
              </Link>
              <Link
                href="https://mikuexpo.com/asia2025/"
                className="border-2 border-red-600 text-red-600 hover:bg-red-50 px-6 py-3 rounded-lg font-medium transition"
              >
                Upcoming Events
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 bg-red-100 rounded-full overflow-hidden shadow-xl">
              <div className="absolute inset-0 flex items-center justify-center text-red-400">
                <img
                  className="object-cover"
                  alt="MEIKO Profile Image"
                  src="/meiko-profile.jpg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            About <span className="text-red-500">MEIKO</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="text-red-500 mb-4">
                <svg
                  className="w-10 h-10"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M10,20h4a2,2,0,0,1-4,0Zm8-4V10a6,6,0,0,0-5-5.91V3a1,1,0,0,0-2,0V4.09A6,6,0,0,0,6,10v6L4,18H20Z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">The Original</h3>
              <p className="text-gray-600">
                MEIKO was the first Vocaloid developed by Crypton Future Media,
                released in 2004, setting the stage for all future Vocaloids.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="text-red-500 mb-4">
                <svg
                  className="w-10 h-10"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    d="M256 73.825c-100.617 0-182.18 81.562-182.18 182.17a182.18 182.18 0 1 0 364.36 0c0-100.608-81.563-182.17-182.18-182.17zm79.558 249.213a15.729 15.729 0 0 1-21.462 5.96l-65.848-37.24c-.176-.096-.317-.238-.492-.343a14.239 14.239 0 0 1-1.337-.949c-.404-.307-.79-.615-1.16-.958a13.216 13.216 0 0 1-.994-1.09 15.767 15.767 0 0 1-.994-1.186c-.29-.413-.545-.853-.8-1.284a14.547 14.547 0 0 1-.712-1.31 13.89 13.89 0 0 1-.553-1.459 13.4 13.4 0 0 1-.449-1.414 16.386 16.386 0 0 1-.254-1.486 12.73 12.73 0 0 1-.168-1.635c-.008-.202-.06-.396-.06-.597V149.428a15.75 15.75 0 0 1 31.5 0v119.435l57.848 32.712a15.742 15.742 0 0 1 5.96 21.463z"
                    data-name="Time 4 O'clock"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">21-Year Legacy</h3>
              <p className="text-gray-600">
                As the pioneer of Vocaloids, MEIKO has evolved alongside the
                technology, remaining popular with fans worldwide.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="text-red-500 mb-4">
                <svg
                  className="w-10 h-10"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 64 64"
                >
                  <path d="M11.92 47.95h24.31a7.86 7.86 0 0 0 7.86-7.86V23.91a7.86 7.86 0 0 0-7.86-7.86H11.92A7.92 7.92 0 0 0 4 24v16a7.92 7.92 0 0 0 7.92 7.95zM56.15 21.91l-6.32 3.24a3.27 3.27 0 0 0-1.78 2.91v7.87a3.27 3.27 0 0 0 1.77 2.9l6.32 3.25A2.64 2.64 0 0 0 60 39.74V24.26a2.64 2.64 0 0 0-3.85-2.35z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Diva Persona</h3>
              <p className="text-gray-600">
                Known for her strong personality, MEIKO brings a mature energy
                to the Vocaloid lineup.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Discography Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Popular <span className="text-red-500">Songs</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "My Love is Hellfire",
                year: "2021",
                cover: "/albums/my-love-is-hellfire.jpg",
                url: "https://youtu.be/heTaHWABCOo?feature=shared",
              },
              {
                title: "Red Land Marker",
                year: "2023",
                cover: "/albums/red-land-marker.jpg",
                url: "https://www.youtube.com/watch?v=qBHsEYs4pFM",
              },
              {
                title: "Nostalgic",
                year: "2017",
                cover: "/albums/nostalgic.jpg",
                url: "https://www.youtube.com/watch?v=HzGXGjt-JAY",
              },
              {
                title: "Resonance Between You and Me",
                year: "2021",
                cover: "/albums/resonance.jpg",
                url: "https://www.youtube.com/watch?v=jvdqCBYtGCY",
              },
              {
                title: "ARQETYPE",
                year: "2024",
                cover: "/albums/arqetype.jpg",
                url: "https://www.youtube.com/watch?v=t9ro0j2pheA",
              },
              {
                title: "PIANO x FORTE x SCANDAL",
                year: "2019",
                cover: "/albums/pianoxforte.jpg",
                url: "https://www.youtube.com/watch?v=5z65YZ0AkLQ",
              },
            ].map((song, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition transform hover:-translate-y-1"
              >
                <div className="h-48 bg-red-100 relative overflow-hidden">
                  <img
                    src={song.cover}
                    alt={`${song.title} album cover`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {song.title}
                  </h3>
                  <p className="text-red-600 mt-1">{song.year}</p>
                  <a
                    href={song.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 text-red-600 hover:text-red-800 font-medium transition"
                  >
                    Listen Now →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">MEIKO</h3>
              <p className="text-gray-400">
                The original virtual diva who started it all.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Navigation</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/"
                    className="text-gray-400 hover:text-white transition"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-gray-400 hover:text-white transition"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/music"
                    className="text-gray-400 hover:text-white transition"
                  >
                    Music
                  </Link>
                </li>
                <li>
                  <Link
                    href="/events"
                    className="text-gray-400 hover:text-white transition"
                  >
                    Events
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Vocaloids</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/"
                    className="text-gray-400 hover:text-white transition"
                  >
                    Miku
                  </Link>
                </li>
                <li>
                  <Link
                    href="/kaito"
                    className="text-gray-400 hover:text-white transition"
                  >
                    KAITO
                  </Link>
                </li>
                <li>
                  <Link
                    href="/rinlen"
                    className="text-gray-400 hover:text-white transition"
                  >
                    Rin & Len
                  </Link>
                </li>
                <li>
                  <Link
                    href="/luka"
                    className="text-gray-400 hover:text-white transition"
                  >
                    Luka
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect</h3>
              <div className="flex space-x-4">
                <Link
                  href="https://www.facebook.com/HatsuneMikuOfficialPage/"
                  className="text-gray-400 hover:text-white transition"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z" />
                  </svg>
                </Link>
                <Link
                  href="https://x.com/cfm_miku_en"
                  className="text-gray-400 hover:text-white transition"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </Link>
                <Link
                  href="https://www.instagram.com/cfm_mikustagram/"
                  className="text-gray-400 hover:text-white transition"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                  </svg>
                </Link>
                <Link
                  href="https://www.youtube.com/HatsuneMiku"
                  className="text-gray-400 hover:text-white transition"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>© {new Date().getFullYear()} MEIKO. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
