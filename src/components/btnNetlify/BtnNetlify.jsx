import netlifyIcon from "./netlify-black.svg";
import "./style.css";


export default function BtnNetlify ({ link }) {
    return (
        <a 
            href={link} 
            target="_blank" 
            rel="noreferrer"
            className="btn-outline"
        >
            <img src={netlifyIcon} alt="Netlify icon"/>
            Netlify site
        </a>
    )
}