

const Header = () => {
    return (
        <>
            <nav className={'indigo darken-3'}>

                <div className="container nav-wrapper">
                    <a href="#" className="brand-logo right">React movies</a>
                    <ul id="nav-mobile" className="left hide-on-med-and-down">
                        {/*<li><a href="sass.html">Movies</a></li>*/}
                        {/*<li><a href="badges.html">Serial</a></li>*/}
                        {/*<li><a href="collapsible.html">Comics</a></li>*/}
                    </ul>
                </div>
            </nav>
        </>
    )
}
export default Header;