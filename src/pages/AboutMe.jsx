import Header from "../components/header/Header";

export default function Home () {
    return (
        <>
            <Header />
            <main className="section">
                <div className="container">
                    <ul className="content-list">
                        <li className="content-list__item">
                            <h2 className="title-2">Frontend</h2>
                            <p>
                                HTML, CSS, JavaScript, ReactJS, JSON, jQuery, REST API,
                                BootStrap, Tailwind CSS, Livewire, Less, Sass/SCSS, Figma, Blade
                            </p>
                        </li>
                        <li className="content-list__item">
                            <h2 className="title-2">Backend</h2>
                            <p>
                                PHP, Laravel, MySQL, PostgreSQL, Git, OOP, Redis, 
                                laravel excel, Spatie laravel-permission,
                            </p>
                        </li>
                    </ul>
                </div>
            </main>
        </>
    );
}