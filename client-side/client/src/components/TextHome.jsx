import { Link } from "react-router-dom";


export default function TextHome() {

    return (
        <>
            <h2>Islamic Education</h2>
            <p>
                Islam is a religion based on the Koran and Hadith. Therefore, good Islamic education comes from both. And Hadith is what comes from the prophet Muhammad. So we provide a collection of hadiths that can be used as references and reminders
            </p>
            <p>
                <Link className="btn" to='/pub'>
                    View details »
                </Link>
            </p>
        </>
    )
}