import "./Footer.css";
const Footer = () => {
    return (
        <div className="footer">
        <div className="footer-top">
            <ul className="tmdb-site">
                <li> <a> Oficial TMDB Web Site</a></li>
                <li> <a> API TMDB </a></li>
            </ul>
            <ul className="developer">
                <li> Developed by Lucas Capella</li>
                <li> Linkedin </li>
                <li> Github </li>
                <li> Portfolio</li>
            </ul>
        </div>
        <div className="footer-bottom">
            <p id = "footer-lucas"> © 2024 Lucas Capella - Desenvolvimento Web </p>
        </div>
            
            
        </div>
    )
}

export default Footer;