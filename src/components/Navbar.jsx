import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa"
import logo from "../assets/raviKumarLogo.webp"
import { FaXTwitter } from "react-icons/fa6"

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <a href="/" aria-label="Home">
                 <img src={logo} className="mx-2" width={50} height={33} alt="Logo"/>
            </a>
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
            <a href="https://www.linkedin.com/in/pankaj-yadav-12b8921b8/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn">
                    <FaLinkedin/>
                </a>
            <a href="https://github.com/py-pankaj-ydv-7"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Github">
                    <FaGithub/>
                </a>
            <a href="www.linkedin.com/in/pankaj-yadav-12b8921b8"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram">
                    <FaInstagram/>
                </a>
            <a href="https://x.com/Pankajy88276325"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter">
                    <FaXTwitter/>
                </a>
        </div>
    </nav>
  )
}

export default Navbar