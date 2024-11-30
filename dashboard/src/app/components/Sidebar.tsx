export default function Sidebar() {
    return (
        <aside
            className="bg-white shadow-inner h-full py-6 px-4 fixed top-0 left-0 w-64 transform transition-transform md:translate-x-0 z-20">
            <ul className="space-y-4">
                <li className="text-gray-700 hover:text-apple-blue border-l-4 border-transparent hover:border-apple-blue pl-3 transition-colors duration-200 font-medium">Overview</li>
                <li className="text-gray-700 hover:text-apple-blue border-l-4 border-transparent hover:border-apple-blue pl-3 transition-colors duration-200 font-medium">Analytics</li>
                <li className="text-gray-700 hover:text-apple-blue border-l-4 border-transparent hover:border-apple-blue pl-3 transition-colors duration-200 font-medium">Messages</li>
                <li className="text-gray-700 hover:text-apple-blue border-l-4 border-transparent hover:border-apple-blue pl-3 transition-colors duration-200 font-medium">Users</li>
                <li className="text-gray-700 hover:text-apple-blue border-l-4 border-transparent hover:border-apple-blue pl-3 transition-colors duration-200 font-medium">Support</li>
            </ul>
        </aside>
    );
}