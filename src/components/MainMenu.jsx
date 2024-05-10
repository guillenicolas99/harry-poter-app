

'use client';

import { Button, MegaMenu, Navbar } from 'flowbite-react';

export default function MainMenu() {
    return (
        <MegaMenu className='bg-black'>
            <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4 md:space-x-8">
                <Navbar.Brand href="/">
                    <img alt="" src="/favicon.svg" className="mr-3 h-6 sm:h-9" />
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite</span>
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Navbar.Link className='text-white' href="#">Home</Navbar.Link>
                    <MegaMenu.Dropdown className='text-white bg-black' toggle={<>Company</>}>
                        <ul className="grid grid-cols-3">
                            <div className="space-y-4 p-4">
                                <li>
                                    <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500">
                                        About Us
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500">
                                        Library
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500">
                                        Resources
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500">
                                        Pro Version
                                    </a>
                                </li>
                            </div>
                            <div className="space-y-4 p-4">
                                <li>
                                    <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500">
                                        Contact Us
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500">
                                        Support Center
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500">
                                        Terms
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500">
                                        Blog
                                    </a>
                                </li>
                            </div>
                            <div className="space-y-4 p-4">
                                <li>
                                    <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500">
                                        Newsletter
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500">
                                        Playground
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500">
                                        License
                                    </a>
                                </li>
                            </div>
                        </ul>
                    </MegaMenu.Dropdown>
                    <Navbar.Link className='text-white' href="#">Team</Navbar.Link>
                </Navbar.Collapse>
            </div>
        </MegaMenu>
    );
}

