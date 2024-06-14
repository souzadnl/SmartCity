import { Navbar, NavbarBrand, NavbarContent, Link } from "@nextui-org/react";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function () {

  const location = useLocation();
  const navigate = useNavigate()

  const logout = async() => {
    sessionStorage.removeItem('token')
    sessionStorage.removeItem('token_refresh')
    navigate('/login')
  }

  return (
    <Navbar disableAnimation isBordered className="fixed h-16 border-none">

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <p className="text-inherit">SmartCity Senai</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarBrand>
          <Link href="/home" className="text-inherit">SmartCity Senai</Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent justify="end">

        {location.pathname === "/register" &&
          <Link href="/home" className={`text-black ${location.pathname === "/register" ? 'text-blue-500' : ''}`}>Home</Link>
        }

        {location.pathname === "/home" &&
          <>
            <Link href="/register" className={`text-blue-500`}>Register</Link>
            <Link href="/sensors" className={`text-blue-500`}>Sensors</Link>
          </>
        }

        {location.pathname === "/login" &&
          <Link href="/signup" className={`text-black ${location.pathname === "/signup" ? 'text-blue-500' : ''}`}>Sign Up</Link>
        }

        {location.pathname === "/signup" &&
          <Link href="/login" className={`text-black ${location.pathname === "/login" ? 'text-blue-500' : ''}`}>Log In</Link>
        }

        {location.pathname === "/" &&
          <Link href="/login" className={`text-black ${location.pathname === "/login" ? 'text-blue-500' : ''}`}>Sign Up</Link>
        }

        {location.pathname === "/sensors" &&
          <Link href="/home" className={`text-blue-500`}>Home</Link>
        }

        <Link href="/login" className={`text-black-500 ml-10`} onClick={() => logout()}>Log out</Link>
      </NavbarContent>

    </Navbar>
  )
}

