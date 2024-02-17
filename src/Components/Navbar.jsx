import { useState } from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {

  return (
    <nav className="py-5 px-6 ">
      <Link to="/">
        <h1 className="text-3xl font-semibold">Quick Learn</h1>
      </Link>
    </nav>
  )
}
