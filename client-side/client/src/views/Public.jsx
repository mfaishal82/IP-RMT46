import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Navbar from "../components/Navbar"

export default function Public() {
    const [data, setData] = useState([])

    const fetchData = async () => {
        try {
            const response = await axios.get('https://project.mf-cyberse.online/pub')

            console.log(response.data.data)

            setData(response.data.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <>
            <Navbar />
            <div className="container-fluid">
                {data.map(each => (
                    <div key={each.id} className="row" style={{ marginTop: '10%', marginLeft: '4%', marginRight: '4%' }}>
                        <div className="col-md-6">
                            Title: <strong> {each.title} </strong>
                        </div>
                        <div className="col-md-6">
                            Choose Translation:
                            {each.translations.map((e, index) => (
                                <Link key={index} to={`/pub/${each.id}/${e}`}>
                                    <button className="btn btn-outline-info m-1">{e}</button>
                                </Link>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}