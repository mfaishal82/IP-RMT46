import axios from "axios"
import { useEffect, useState } from "react"


export default function ContentPage(){
    const [data, setData] = useState([])

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:3000/contents', {
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
        
        </>
    )
}