import axios from "axios"
import { useEffect, useState } from "react"
import Navbar from "./Navbar"


export default function ContentPage(){
    const [data, setData] = useState([])

    const fetchData = async () => {
        try {
            const response = await axios.get('https://project.mf-cyberse.online/contents', {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('access_token')}`
                }
            })

            console.log(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    return(
        <>
        <Navbar/> 
        </>
    )
}