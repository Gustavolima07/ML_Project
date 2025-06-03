import { Link } from "react-router";


const Navbar = () => {
    return (
    <header class="bg-laranja">
        <nav class="flex justify-between items-center w-[92%]  mx-auto text-2xl py-7">
            <div>
                <Link to="Inicial">
                    <h1 className="text-azul font-bold text-3xl">Logo</h1>
                </Link>
            </div>
            <div className="nav-links duration-500 md:static absolute
            md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto  w-full flex items-center px-5">
                <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8 text-amber-50">
                    <li>
                        <a className="hover:text-gray-500 " href="#">Products</a>
                    </li>
                    <li>
                        <a className="hover:text-gray-500" href="#">Solution</a>
                    </li>
                    <li>
                        <a className="hover:text-gray-500" href="#">Resource</a>
                    </li>
                    <li>
                        <a className="hover:text-gray-500" href="#">Developers</a>
                    </li>
                    <li>
                        <a className="hover:text-gray-500" href="#">Pricing</a>
                    </li>
                </ul>
            </div>
            <div>
            <Link to="Login">
            <div className="flex items-center gap-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8 cursor-pointer">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 
                            0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
                <span className="cursor-pointer">Profile</span>    
            </div>
            </Link>

            </div>
        </nav>
    </header>
    );
};

export { Navbar };