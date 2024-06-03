import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button} from "@nextui-org/react";
import React from "react";
import { useLocation } from "react-router-dom";

import style from "./Navbar.module.css"

export default function () {

    const location = useLocation();

    return (
        <Navbar disableAnimation isBordered>
    
          <NavbarContent className="sm:hidden pr-3" justify="center">
            <NavbarBrand>
              <p className="font-bold text-inherit">SmartCity Senai</p>
            </NavbarBrand>
          </NavbarContent>
    
          <NavbarContent className="hidden sm:flex gap-4" justify="center">
            <NavbarBrand>
              <p className="font-bold text-inherit">SmartCity Senai</p>
            </NavbarBrand>
          </NavbarContent>
    
          <NavbarContent justify="end">
            <NavbarItem data-active={location.pathname === "/signup"}>
              <Link href="/signup" className="text-black">Sign Up</Link>
            </NavbarItem>

            <NavbarItem data-active={location.pathname === "/login"}>
              <Link href="/login" style={style} className="text-black">Log In</Link>
            </NavbarItem>
          </NavbarContent>
    
        </Navbar>
      )
}

