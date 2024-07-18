'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

const Header = () => {
  const [keyword, setKeyword] = useState('');
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();
    router.push(`/search?keyword=${keyword}`)
  }

  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" href="/">Navbar</Link>
        <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav me-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" href="/" aria-current="page">Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/login">Login</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/register">Register</Link>
            </li>
            {/* <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" href="#" id="dropdownId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</Link>
              <div className="dropdown-menu" aria-labelledby="dropdownId">
                <Link className="dropdown-item" href="#">Action 1</Link>
                <Link className="dropdown-item" href="#">Action 2</Link>
              </div>
            </li> */}

            <form className="d-flex my-2 my-lg-0" onSubmit={handleSearch}>
              <input className="form-control me-sm-2" type="text" placeholder="Search" onInput={(e) => setKeyword(e.target.value)} />
              <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
                Search
              </button>
            </form>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header;
