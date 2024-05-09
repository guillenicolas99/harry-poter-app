
"use client";

import { Navbar } from "flowbite-react";
import DarkModeToggle from "./DarkModeToggle";


export default function MainMenu() {
    return (
        <Navbar fluid className="sticky top-0 z-50 bg-black">
            <Navbar.Brand href="#">
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Harry Potter App</span>
            </Navbar.Brand>
            <div className="flex md:order-2">
                <Navbar.Toggle />
            </div>
            <Navbar.Collapse>
                <Navbar.Link className="text-white text-2xl" href="#" active>
                Home
                </Navbar.Link>
                <Navbar.Link className="text-white text-2xl" href="#">About</Navbar.Link>
                <Navbar.Link className="text-white text-2xl" href="#">Services</Navbar.Link>
                <Navbar.Link className="text-white text-2xl" href="#">Pricing</Navbar.Link>
                <Navbar.Link className="text-white text-2xl" href="#">Contact</Navbar.Link>
            </Navbar.Collapse>
            <DarkModeToggle />
        </Navbar>
    );
}
