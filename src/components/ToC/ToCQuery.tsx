import React, { useEffect } from "react"

interface Props {
    query: string
    setQuery: React.Dispatch<React.SetStateAction<string>>
    setUrl: React.Dispatch<React.SetStateAction<string>>
    pageSize: number
}

const ToCQuery: React.FC<Props> = ({ query, setQuery, setUrl, pageSize }) => {
    return (
        <div
            className={"query" + (query ? " query--active" : "")}
            onClick={() => {
                setQuery("")
                setUrl(
                    `https://anapioficeandfire.com/api/characters?page=1&pageSize=${pageSize}`
                )
            }}
        >
            <span className="text-bold">X</span>{" "}
            {query.substring(query.lastIndexOf("=") + 1)}
        </div>
    )
}

export default ToCQuery
