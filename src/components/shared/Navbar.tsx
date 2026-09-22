import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.png";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
    return (
        <div className="navbar sticky top-0 z-50 bg-base-100/95 px-4 shadow-sm backdrop-blur-md lg:px-8">

            {/* LEFT SIDE - Logo + Mobile Menu */}
            <div className="navbar-start">

                {/* Mobile Menu */}
                <div className="dropdown lg:hidden">
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost btn-circle"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </div>

                    <ul
                        tabIndex={-1}
                        className="menu dropdown-content z-50 mt-3 w-52 rounded-2xl bg-base-100 p-3 shadow-xl"
                    >
                        <li>
                            <Link href="/">Home</Link>
                        </li>

                        <li>
                            <Link href="/apps">Apps</Link>
                        </li>

                        <li>
                            <Link href="/installation">Installation</Link>
                        </li>
                    </ul>


                </div>

                {/* Logo */}
                <Link
                    href="/"
                    className="group flex items-center gap-3"
                >
                    {/* Logo */}
                    <Image
                        src={logo}
                        alt="HeroApp Logo"
                        width={45}
                        height={45}
                        className="h-10 w-10 object-contain transition-transform duration-300 group-hover:scale-105"
                        priority
                    />

                    {/* Brand Name */}
                    <div className="hidden sm:block leading-tight">
                        <h1 className="text-lg font-bold tracking-tight text-base-content">
                            Hero<span className="text-primary">App</span>
                        </h1>

                        <p className="text-[10px] font-medium tracking-wider text-base-content/50 uppercase">
                            Discover • Explore • Enjoy
                        </p>
                    </div>
                </Link>
            </div>


            {/* CENTER - Desktop Menu */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal gap-2 px-1">

                    <li>
                        <Link
                            href="/"
                            className="rounded-xl px-4 font-medium transition-colors hover:bg-primary/10 hover:text-primary"
                        >
                            Home
                        </Link>
                    </li>

                    <li>
                        <Link
                            href="/apps"
                            className="rounded-xl px-4 font-medium transition-colors hover:bg-primary/10 hover:text-primary"
                        >
                            Apps
                        </Link>
                    </li>

                    <li>
                        <Link
                            href="/installation"
                            className="rounded-xl px-4 font-medium transition-colors hover:bg-primary/10 hover:text-primary"
                        >
                            Installation
                        </Link>
                    </li>

                </ul>
            </div>


            {/* RIGHT SIDE - Contribute */}
            <div className="navbar-end">

                <a
                    href="https://github.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
            flex items-center gap-2
            rounded-xl
            bg-linear-to-r from-violet-600 to-purple-500
            px-4 py-2.5
            text-sm font-semibold text-white
            shadow-md shadow-purple-500/20
            transition-all duration-300
            hover:-translate-y-0.5
            hover:from-violet-700
            hover:to-purple-600
            hover:shadow-lg hover:shadow-purple-500/30
            sm:px-5 sm:py-3
          "
                >
                    <FaGithub className="text-lg sm:text-xl" />

                    <span className="hidden xs:inline sm:inline">
                        Contribute
                    </span>
                </a>

            </div>

        </div>
    );
};

export default Navbar;