export default function Contacts () {
    return (
        <main className="section">
            <div className="container">
                    <h1 className="title-1">Contact with me</h1>

                    <ul className="content-list">
                        <li className="content-list__item">
                            <h2 className="title-2">Location</h2>
                            <p>Sochi, Russia</p>
                        </li>
                        <li className="content-list__item">
                            <h2 className="title-2">Telegram / WhatsApp</h2>
                            <p><a href="tel:+79051234567">+7 (988) 402-57-14</a></p>
                        </li>
                        <li className="content-list__item">
                            <h2 className="title-2">Email</h2>
                            <p><a href="mailto:webdev@protonmail.com">muradyan98@list.ru</a></p>
                        </li>
                    </ul>

            </div>
        </main>
    );
}