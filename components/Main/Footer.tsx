import React from 'react';
import Head from 'next/head';

function Footer() {
  return (
    <>
      <Head>
        <title>Greyball Ecommerce - Footer Information</title>
        <meta
          name="description"
          content="Explore Greyball Ecommerce resources, follow us on social media, and access our privacy policy and terms. Stay connected!"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Greyball Ecommerce Footer" />
        <meta
          property="og:description"
          content="Legal information, resources, and ways to connect with Greyball Ecommerce."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://greyballtest.com" /> {/*  Not adding real domain */}
      </Head>
      <div>
        <footer className="bg-gray-100">
          <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
            <div className="md:flex md:justify-between">
              <div className="mb-6 md:mb-0">
                <a href="/" className="flex items-center">
                  <img
                    src="https://flowbite.com/docs/images/logo.svg"
                    className="h-8 me-3"
                    alt="Greyball Logo"
                  />
                  <span className="self-center text-2xl font-semibold whitespace-nowrap">
                    Greyball
                  </span>
                </a>
              </div>
              <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                    Resources
                  </h2>
                  <ul className="text-gray-500 font-medium">
                    <li className="mb-4">
                      <a href="/" className="hover:underline">
                        Greyball
                      </a>
                    </li>
                    <li>
                      <a href="https://tailwindcss.com/" className="hover:underline">
                        Tailwind CSS
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                    Follow us
                  </h2>
                  <ul className="text-gray-500 font-medium">
                    <li className="mb-4">
                      <a href="https://github.com/" className="hover:underline">
                        Github
                      </a>
                    </li>
                    <li>
                      <a href="https://discord.com/" className="hover:underline">
                        Discord
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                    Legal
                  </h2>
                  <ul className="text-gray-500 font-medium">
                    <li className="mb-4">
                      <a href="/privacy-policy" className="hover:underline">
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a href="/terms-conditions" className="hover:underline">
                        Terms & Conditions
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
            <div className="sm:flex sm:items-center sm:justify-between">
              <span className="text-sm text-gray-500 sm:text-center">
                © 2025 <a href="/" className="hover:underline">Greyball™</a>. All Rights Reserved.
              </span>
              <div className="flex mt-4 sm:justify-center sm:mt-0">
                {/* Social Media Links */}
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Footer;
