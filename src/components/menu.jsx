function Menu() {
    return (
        <div className="flex gap-5 items-center text-lg text-gray-500">
            <h2 className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-blue-500 to-green-500 hover:text-2xl hover:font-bold ease-in-out duration-300"><a href="/#homepage">Home</a></h2>
            <h2 className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-blue-500 to-green-500 hover:text-2xl hover:font-bold ease-in-out duration-300"><a href="/#about-me">About Me</a></h2>
            <h2 className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-blue-500 to-green-500 hover:text-2xl hover:font-bold ease-in-out duration-300"><a href="/#portfolio">Portfolios</a></h2>
            {/* <button className="border-1 rounded-full px-2 hover:text-2xl ease-in-out duration-300">🇮🇩 ID</button> */}
        </div>
    );
}

export default Menu;