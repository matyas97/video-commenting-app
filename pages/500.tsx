import React from 'react';
import { NextPage } from 'next';
import Link from 'next/link';

const ServerError: NextPage = () => {
  return (
    <div className="py-16">
      <div className="text-center">
        <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wide">
          500 error
        </p>
        <h1 className="mt-2 text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
          Something blew up.
        </h1>
        <p className="mt-2 text-base text-gray-500">
          Sorry, we couldn’t finish your request.
        </p>
        <div className="mt-6">
          <Link href="/">
            <a className="text-base font-medium text-indigo-600 hover:text-indigo-500">
              Go back home<span aria-hidden="true"> &rarr;</span>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServerError;
