import "./header.css";

export default function Header () {
    return ( 
        <header className="header">
            <div className="header__wrapper">
                <h1 className="header__title">
                    <strong>Hi, my name is <em>David</em></strong><br/>
                    I am a Fullstack-developer
                </h1>
                <div className="header__text">
                    <p>with passion for learning and creating.</p>
                </div>
                <a 
                    href="https://hh.ru/resume/fc425ac1ff0e041a400039ed1f4675754d3542" 
                    className="btn"
                    target="_blank"
                    rel="noreferrer"
                >
                    View Resume
                </a>
            </div>
        </header>
    );
}