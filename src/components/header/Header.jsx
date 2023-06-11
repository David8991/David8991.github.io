import "./header.css";

export default function Header () {
    return ( 
        <header className="header">
            <div className="header__wrapper">
                <h1 className="header__title">
                    <strong>Hi, my name is <em>David</em></strong><br/>
                    I am a frontend developer
                </h1>
                <div className="header__text">
                    <p>with passion for learning and creating.</p>
                </div>
                <a 
                    href="https://spb.hh.ru/resume/4177d460ff051e0e760039ed1f796976414f37" 
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