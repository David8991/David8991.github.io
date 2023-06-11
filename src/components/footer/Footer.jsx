import "./footer.css";
import vk from "./icons/vk.svg";
import whatsapp from "./icons/whatsapp.svg";
import telegram from "./icons/telegram.svg";
import linkedIn from "./icons/linkedIn.svg";
import gitHub from "./icons/gitHub.svg";

export default function Footer () {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__wrapper">
                    <ul className="social">
                        <li className="social__item">
                            <a href="#!">
                                <img src={vk} alt="Link"/>
                            </a>
                        </li>
                        <li className="social__item">
                            <a 
                                href="https://api.whatsapp.com/send?phone=79884025714"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img src={whatsapp} alt="Link"/>
                            </a>
                        </li>
                        <li className="social__item">
                            <a 
                                href="https://t.me/Dav_8991"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img src={telegram} alt="Link"/>
                            </a>
                        </li>
                        <li className="social__item">
                            <a 
                                href="https://github.com/David8991" 
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img src={gitHub} alt="Link"/>
                            </a>
                        </li>
                        <li className="social__item">
                            <a href="#!">
                                <img src={linkedIn} alt="Link"/>
                            </a>
                        </li>
                    </ul>
                    <div className="copyright">
                        <p>© 2023 Muradyan-dev.com</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}