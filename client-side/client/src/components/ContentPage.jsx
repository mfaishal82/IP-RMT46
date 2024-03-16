import axios from "axios"
import { useEffect, useState } from "react"
import Navbar from "./Navbar"
import LogoutButton from "./LogoutButton"


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
            <LogoutButton />
            <div className="container d-flex justify-content-center" style={{padding: '5%' }}>
                <div className="col">
                    {data.map(each => (

                        <div key={each.id} className="card m-3" style={{width: '50%', padding: '3%'}}>
                            {/* <img src="..." className="card-img-top" alt="..." /> */}
                            <h4>{each.title}</h4>
                            <div className="card-body">
                                <p className="card-text">
                                    {each.description}
                                </p>
                                <i>Label Category: </i> <strong> {each.Category.name} </strong> <br />
                                <i>Created by:</i> <u>{each.User.username}</u>
                            </div>
                        </div>

                    ))}
                </div>
            </div>
        </>
    )
}