import React from 'react';
import Link from 'next/link';  // Use Next.js Link for navigation

function Navbar() {
  return (
    <nav style={navbarStyle}>
      <div style={logoStyle}>BidCars</div>
      <div style={navLinksStyle}>
        <Link href="/login" passHref>
          Login
        </Link>
        <Link href="/signup" passHref>
          Sign Up
        </Link>
        <Link href="/about" passHref>
          About
        </Link>
        <Link href="/contact" passHref>
          Contact
        </Link>
        <Link href="/account" passHref>
          My Account
        </Link>
        <Link href="/add-car" passHref>
         Add Car Auction
        </Link>

        {/* Link to dynamic auction page */}
        <Link href="/auction/1" passHref>
          Auction for Car 1
        </Link>
      </div>
    </nav>
  );
}

// Define your styles here
const navbarStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  padding: '10px 20px',
  backgroundColor: '#2c3e50',
  color: 'white',
  alignItems: 'center'
};

const logoStyle = {
  fontSize: '24px',
  fontWeight: 'bold'
};

const navLinksStyle = {
  display: 'flex',
  gap: '20px'
};

export default Navbar;
