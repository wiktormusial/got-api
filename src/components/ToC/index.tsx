import { useEffect, useState } from "react"
import axios from "axios"
import Link, { Reference } from "http-link-header"
import ToCFilter from "./ToCFilter"
import ToCPagination from "./ToCPagination"
import ToCTable from "./ToCTable"
import { FetchCharacters } from "./types"

import "./ToC.css"
import ToCQuery from "./ToCQuery"

const fetchCharacters = async (url: string) => {
    const response = await axios.get<FetchCharacters[]>(url)
    return response
}

const ToC = () => {
    const [data, setData] = useState<FetchCharacters[] | []>()
    const [linkHeaders, setLinkHeaders] = useState<Reference[]>()
    const [pageSize, setPagesize] = useState(25)
    const [query, setQuery] = useState("")
    const [url, setUrl] = useState(
        "https://anapioficeandfire.com/api/characters?page=1&pageSize=25"
    )
    const [error, setError] = useState<string | undefined>()
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setIsLoading(true)
        fetchCharacters(url)
            .then((res) => {
                setData(res.data)
                setLinkHeaders(new Link(res.headers.link).refs)
                setIsLoading(false)
            })
            .catch((err) => {
                setError(err.message)
                setIsLoading(false)
            })
    }, [url])

    return (
        <div>
            <h1>Table of Characters</h1>
            <ToCFilter
                setQuery={setQuery}
                pageSize={pageSize}
                setUrl={setUrl}
            />
            <ToCQuery
                setUrl={setUrl}
                pageSize={pageSize}
                query={query}
                setQuery={setQuery}
            />
            {error && <div>{error}</div>}
            <ToCTable isLoading={isLoading} data={data} />
            {linkHeaders && (
                <ToCPagination
                    setUrl={setUrl}
                    setPagesize={setPagesize}
                    query={query}
                    links={linkHeaders}
                />
            )}
        </div>
    )
}

export default ToC
