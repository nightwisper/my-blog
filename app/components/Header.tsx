import Link from "next/link";

export default function Header() {
    return (
        <header>
            <nav className="flex items-center justify-between flex-wrap bg-slate-900 p-6 border-b-white border-b-2">
                <div className="flex items-center flex-grow-1 text-white mr-6">
                    <span className="font-semibold text-xl tracking-tight">Lucas Silva</span>
                </div>
                <div className="block lg:hidden">
                    <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                    </button>
                </div>
                <div className="w-full block lg:flex lg:items-center lg:w-auto">
                    <div className="text-sm">
                        <Link href="/" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                            Home
                        </Link>
                        <Link href="/repos" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                            My Repos
                        </Link>
                        <Link href="/experience" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
                            Experience
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    )
}
