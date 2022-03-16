import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import axios from "axios"
import { FetchHouse } from "./types"

const fetchHouse = async (id: string) => {
    const response = await axios.get<FetchHouse>(
        `https://anapioficeandfire.com/api/houses/${id}`
    )

    return response.data
}

const HouseDetail = () => {
    const [data, setData] = useState<FetchHouse | undefined>()
    const [isLoading, setIsLoading] = useState(true)
    const { id } = useParams()

    useEffect(() => {
        if (id) {
            fetchHouse(id).then((res) => {
                setData(res)
                setIsLoading(false)
            })
        }
    }, [])

    const renderElements = (arr: string[]) => {
        if (arr.length !== 0) {
            return arr.map((item, index) => {
                return (
                    <span key={`${item}-${index}`}>
                        {(index ? ", " : "") + item}
                    </span>
                )
            })
        } else {
            return "No elements"
        }
    }

    if (isLoading) {
        return <div>Loading</div>
    } else {
        return (
            <div>
                <Link to="/">Previous page</Link>
                <h1>{data!.name}</h1>
                <p>Region: {data!.region}</p>
                <p>Coat of arms: {data!.coatOfArms}</p>
                <p>Words: {data!.words ? data!.words : "No words"}</p>
                <p>Titles: {renderElements(data!.titles)}</p>
                <p>Seats: {renderElements(data!.seats)}</p>
                <p>Has died: {data!.diedOut ? "Yes" : "No"}</p>
                <p>Has overlord: {data!.overlord ? "Yes" : "No"}</p>
                <p>Number of Cadet Branches: {data!.cadetBranches.length}</p>
            </div>
        )
    }
}

export default HouseDetail
