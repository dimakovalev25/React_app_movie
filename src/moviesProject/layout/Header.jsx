

const Header = () => {
    return (
        <>
            <nav className={'indigo darken-3'}>
                <div className="container nav-wrapper">
                    <a href="#" className="brand-logo right"> mini project movies info</a>
                    <ul id="nav-mobile" className="left hide-on-med-and-down">
                        <li><a href="https://ru.reactjs.org/">React</a></li>
                        <li><a href="https://materializecss.com/">Materializecss</a></li>
                        <li><a href="https://www.omdbapi.com/">omdbapi</a></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}
export default Header;