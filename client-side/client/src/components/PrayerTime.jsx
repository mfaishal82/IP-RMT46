import axios from 'axios'
import { useEffect, useState } from 'react';

export default function PrayerTime(){
    const [time, setTime] = useState({})
    
    const fetchData = async () => {
        try {
            const options = {
                method: 'GET',
                url: 'https://prayer-times11.p.rapidapi.com/timingsByCity/new%20Date()',
                params: {
                  method: '2',
                  city: 'Depok',
                  country: 'Indonesia'
                },
                headers: {
                  Accept: 'application/json',
                  'X-RapidAPI-Key': '09c85fe558mshfde7ff537933352p18207djsn874742403006',
                  'X-RapidAPI-Host': 'prayer-times11.p.rapidapi.com'
                }
              };

            const response = await axios.request(options)

            console.log(response.data.data.timings)

            setTime(response.data.data.timings)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    return(
        <>
        <div>
            <div>
                
            </div>
        </div>
        </>
    )
}