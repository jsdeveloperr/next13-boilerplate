import React from 'react';

import Link from 'next/link';

const Header = () => {
  return (
    <div className="container mx-auto flex flex-col flex-wrap items-center px-5 py-8 md:flex-row">
      <Link href="#" className="text-xl font-bold uppercase md:text-2xl">
        Next13 Boilerplate
      </Link>

      <nav className="body-font mt-2 flex flex-wrap items-center justify-center text-base font-medium md:ml-auto md:mt-0">
        <Link href="#" className="mr-5 text-sm font-semibold uppercase leading-tight">
          home
        </Link>

        <Link href="#" className="mr-5 text-sm font-semibold uppercase leading-tight">
          Product
        </Link>
      </nav>
    </div>
  );
};

export default Header;
