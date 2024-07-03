"use client";
import { useState } from "react";
import { Bell, ChevronDown, Heart, MoveRight, Search, UserRound, X } from "lucide-react";
import Link from "next/link";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="z-40 fixed w-full bg-transparent">
            <div className="flex justify-between items-center py-4 px-4 md:px-16">
                <div className="text-2xl font-medium">
                    GO<span className="font-semibold"> FOOD</span>
                </div>
                <nav className="hidden md:block">
                    <ul className="flex space-x-4">
                        <li>
                            <Link href="/" className="hover:text-primary font-medium flex items-center gap-1">
                                Home <ChevronDown className="h-4 w-4" />
                            </Link>
                        </li>
                        <li>
                            <Link href="/groceries" className="hover:text-primary font-medium flex items-center gap-1">
                                Groceries <ChevronDown className="h-4 w-4" />
                            </Link>
                        </li>
                        <li>
                            <Link href="/pages" className="hover:text-primary font-medium flex items-center gap-1">
                                Pages <ChevronDown className="h-4 w-4" />
                            </Link>
                        </li>
                    </ul>
                </nav>
                <div className="hidden md:flex items-center space-x-10 ">
                    {/* <Link href="/contact" className="text-primary font-medium flex items-center gap-1">
                        Connect with us <MoveRight className="h-4 w-4 icon-border" />
                    </Link> */}
                    <button onClick={() => window.location.href='/contact'} className="bg-primary text-white font-medium flex items-center gap-1 px-4 py-2 rounded-full">
    Connect with us <MoveRight className="h-4 w-4" />
</button>

                    <div className="flex items-center space-x-4">
                        <button className="bg-secondary rounded-full p-2">
                            <Search className="h-4 w-4 text-white" />
                        </button>
                        <button className="bg-secondary rounded-full p-2">
                            <UserRound className="h-4 w-4 text-white" />
                        </button>
                        <button className="bg-secondary rounded-full p-2 relative">
                            <Heart className="h-4 w-4 text-white" />
                            <span className="absolute -top-1 -right-1 bg-yellow-400 text-xs rounded-full h-4 w-4 flex items-center justify-center">2</span>
                        </button>
                        <button className="bg-secondary rounded-full p-2 relative">
                            <Bell className="h-4 w-4 text-white" />
                            <span className="absolute -top-1 -right-1 bg-yellow-400 text-xs rounded-full h-4 w-4 flex items-center justify-center">0</span>
                        </button>
                    </div>
                </div>
                <button className="block rounded p-2.5 text-primary transition hover:text-primary/75 md:hidden border border-primary" onClick={toggleMenu}>
                    <span className="sr-only">Toggle menu</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>

            {/* Sliding menu for mobile */}
            <div
                className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
                    isMenuOpen ? "translate-x-0" : "translate-x-full"
                } md:hidden`}
            >
                <div className="p-4">
                    <button onClick={toggleMenu} className="mb-4">
                        <X className="h-6 w-6 text-primary" />
                    </button>
                    <nav>
                        <ul className="space-y-4">
                            <li>
                                <Link href="/" className="block hover:text-primary font-medium">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/groceries" className="block hover:text-primary font-medium">
                                    Groceries
                                </Link>
                            </li>
                            <li>
                                <Link href="/pages" className="block hover:text-primary font-medium">
                                    Pages
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="block hover:text-primary font-medium">
                                    Connect with us
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    <div className="mt-8 flex justify-around">
                        <button className="bg-secondary rounded-full p-2">
                            <Search className="h-4 w-4 text-white" />
                        </button>
                        <button className="bg-secondary rounded-full p-2">
                            <UserRound className="h-4 w-4 text-white" />
                        </button>
                        <button className="bg-secondary rounded-full p-2 relative">
                            <Heart className="h-4 w-4 text-white" />
                            <span className="absolute -top-1 -right-1 bg-yellow-400 text-xs rounded-full h-4 w-4 flex items-center justify-center">2</span>
                        </button>
                        <button className="bg-secondary rounded-full p-2 relative">
                            <Bell className="h-4 w-4 text-white" />
                            <span className="absolute -top-1 -right-1 bg-yellow-400 text-xs rounded-full h-4 w-4 flex items-center justify-center">0</span>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}
