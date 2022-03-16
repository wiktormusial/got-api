import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import { FetchHouse } from "./types"
import HouseCard from "./HouseCard"

const fetchHouse = async (id: string) => {
    const response = await axios.get<FetchHouse>(
        `https://anapioficeandfire.com/api/houses/${id}`
    )

    return response
}

const HouseDetail = () => {
    const [data, setData] = useState<FetchHouse>()
    const [error, setError] = useState<string>()
    const [isLoading, setIsLoading] = useState(true)
    const { id } = useParams()

    useEffect(() => {
        if (id) {
            fetchHouse(id)
                .then((res) => {
                    setData(res.data)
                    setIsLoading(false)
                })
                .catch((err) => {
                    setError(err.message)
                    setIsLoading(false)
                })
        }
    }, [id])

    if (isLoading) {
        return <div>Loading</div>
    } else if (error) {
        return <div>{error}</div>
    } else {
        return <HouseCard data={data} />
    }
}

export default HouseDetail
