import React, { useEffect, useState } from "react"
import { Reference } from "http-link-header"
import "./ToC.css"

interface Props {
    links: Reference[]
    setUrl: React.Dispatch<React.SetStateAction<string>>
    setPagesize: React.Dispatch<React.SetStateAction<number>>
}

const ToCPagination: React.FC<Props> = ({ setPagesize, links, setUrl }) => {
    const [lastPage, setLastPage] = useState<string | null>(null)

    useEffect(() => {
        links.forEach((item) => {
            if (item.rel === "last") {
                const url = new URL(item.uri).searchParams
                setLastPage(url.get("page"))
            }
        })
    }, [links])

    return (
        <>
            <div className="row g-3 align-items-center">
                <div className="col-9">
                    <select
                        onChange={(e) => {
                            setUrl(
                                `https://anapioficeandfire.com/api/characters?page=1&pageSize=${e.target.value}`
                            )
                            setPagesize(parseInt(e.target.value))
                        }}
                        className="form-control"
                    >
                        <option>Entries per page</option>
                        <option value="10">10</option>
                        <option value="25">25</option>
                        <option value="50">50</option>
                    </select>
                </div>
                <div className="text-end mb-2 col-3">Pages: {lastPage}</div>
            </div>
            {lastPage === "1" ? (
                ""
            ) : (
                <ul className="pagination">
                    {links.map((item) => {
                        return (
                            <li
                                className="pagination__element link-primary mx-1"
                                key={item.rel}
                                onClick={() => {
                                    setUrl(item.uri)
                                }}
                            >
                                {item.rel}
                            </li>
                        )
                    })}
                </ul>
            )}
        </>
    )
}

export default ToCPagination
