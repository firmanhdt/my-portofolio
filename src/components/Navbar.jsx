import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa"


export const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6">
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
            <a href="https://www.linkedin.com/in/firmanhdt"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Linkedln">
                <FaLinkedin/>
            </a>
            <a href="https://github.com/firmanhdt"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Github">
                <FaGithub/>
            </a>
            <a href="https://www.instagram.com/firmanhdt13/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram">
                <FaInstagram/>
            </a>
        </div>
    </nav>
  )
}
export default Navbar