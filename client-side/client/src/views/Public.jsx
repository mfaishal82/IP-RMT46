import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Navbar from "../components/Navbar"

export default function Public() {
    const [data, setData] = useState([])

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:3000/pub')

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

                <div className="row" style={{ marginTop: '10%', marginLeft: '4%', marginRight: '4%' }}>
                    <div className="col-md-6">TEST</div>
                    <div className="col-md-6">TEST TOO</div>
                </div>

            </div>
        </>
    )
}