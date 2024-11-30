export default function Header() {
    return (
        <header className="bg-white shadow-apple px-6 py-3 fixed w-full flex justify-between items-center z-10">
            <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
            <nav className="space-x-8">
                <a href="#" className="text-gray-700 hover:text-apple-blue transition-colors duration-200">Home</a>
                <a href="#" className="text-gray-700 hover:text-apple-blue transition-colors duration-200">Profile</a>
                <a href="#" className="text-gray-700 hover:text-apple-blue transition-colors duration-200">Settings</a>
            </nav>
        </header>
    )
}