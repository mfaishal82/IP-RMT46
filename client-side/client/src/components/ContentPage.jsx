import axios from "axios"
import { useEffect, useState } from "react"
import Navbar from "./Navbar"


export default function ContentPage() {
    const [data, setData] = useState([])

    const fetchData = async () => {
        try {
            const response = await axios.get('https://project.mf-cyberse.online/contents', {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('access_token')}`
                }
            })

            console.log(response.data)
            setData(response.data)
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
                <div className="row">
                    {data.map(each => (

                        <div className="col-md-12" key={each.id}>
                        <h3>
                            {each.title}
                        </h3>
                        <p>
                            {each.description}
                        </p> <span className="badge badge-primary">{each.Category.name}</span>
                    </div>

                    ))}
                </div>
            </div>
        </>
    )
}