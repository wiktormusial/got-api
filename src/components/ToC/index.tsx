import axios from "axios"
import { useEffect, useState } from "react"
import ToCFilter from "./ToCFilter"
import ToCPagination from "./ToCPagination"
import ToCTable from "./ToCTable"
import { FetchCharacters } from "./types"

const fetchCharacters = async () => {
    const response = await axios.get<FetchCharacters[]>(
        "https://anapioficeandfire.com/api/characters/"
    )
    return response
}

const ToC = () => {
    const [data, setData] = useState<FetchCharacters[] | []>()
    const [error, setError] = useState("")

    useEffect(() => {
        fetchCharacters()
            .then((res) => setData(res.data))
            .catch((err) => setError(err))
    }, [])

    return (
        <div>
            <ToCFilter />
            <ToCTable data={data} />
            <ToCPagination />
        </div>
    )
}

export default ToC
