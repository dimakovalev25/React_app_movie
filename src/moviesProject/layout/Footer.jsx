const Footer = () => {
    return (
        <div className={'indigo darken-3'}>
            <footer className="page-footer indigo darken-3">
                <div className="container">
                    <div className="row">
                        <div className="col l6 s12">
                            <h5 className="white-text">More Content</h5>
                            <p className="grey-text text-lighten-4">You can use rows and columns here to organize your
                                footer content.</p>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright">
                    <div className="container">
                        © {new Date().getFullYear()} Copyright Text

                    </div>
                </div>
            </footer>
        </div>
    )
}
export default Footer;