const Navigation = () => {
    return (
        <header className="h-16 bg-slate-900 flex items-center p-3">
            <h1 className="text-white font-bold">Movie database</h1>
            <ul className="flex gap-3 ml-4">
                <li className="text-yellow-400 p-2 hover:bg-yellow-400 hover:rounded hover:text-gray-900"><a href="#">Movies</a></li>
                <li className="text-yellow-400 p-2 hover:bg-yellow-400 hover:rounded hover:text-gray-900"><a href="#">Tv shows</a></li>
                <li className="text-yellow-400 p-2 hover:bg-yellow-400 hover:rounded hover:text-gray-900"><a href="#">People</a></li>
            </ul>
        </header>

    )
}

export default Navigation;