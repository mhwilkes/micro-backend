const Sidebar = () => {
    return (
        <aside className="bg-gray-800 text-white w-64 h-full p-4">
            <nav className="space-y-4">
                <a href="#" className="block p-2 hover:bg-gray-700 rounded">Home</a>
                <a href="#" className="block p-2 hover:bg-gray-700 rounded">Profile</a>
                <a href="#" className="block p-2 hover:bg-gray-700 rounded">Settings</a>
                <a href="#" className="block p-2 hover:bg-gray-700 rounded">Logout</a>
            </nav>
        </aside>
    );
};

export default Sidebar;