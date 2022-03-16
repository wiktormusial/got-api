import { useEffect, useState } from "react"
import axios from "axios"
import Link, { Reference } from "http-link-header"
import ToCFilter from "./ToCFilter"
import ToCPagination from "./ToCPagination"
import ToCTable from "./ToCTable"
import { FetchCharacters } from "./types"

const fetchCharacters = async (url: string) => {
    const response = await axios.get<FetchCharacters[]>(url)
    return response
}

const ToC = () => {
    const [data, setData] = useState<FetchCharacters[] | []>()
    const [linkHeaders, setLinkHeaders] = useState<Reference[]>()
    const [url, setUrl] = useState(
        "https://anapioficeandfire.com/api/characters?page=1&pageSize=25"
    )
    const [error, setError] = useState("")

    useEffect(() => {
        fetchCharacters(url)
            .then((res) => {
                setData(res.data)
                setLinkHeaders(new Link(res.headers.link).refs)
            })
            .catch((err) => setError(err))
    }, [url])

    return (
        <div>
            <ToCFilter />
            {url}
            <ToCTable data={data} />
            {linkHeaders && (
                <ToCPagination setUrl={setUrl} links={linkHeaders} />
            )}
        </div>
    )
}

export default ToC
