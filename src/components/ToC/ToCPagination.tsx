import React, { useEffect, useState } from "react"
import { Reference } from "http-link-header"

interface Props {
    links: Reference[]
    setUrl: React.Dispatch<React.SetStateAction<string>>
    setPagesize: React.Dispatch<React.SetStateAction<number>>
}

const ToCPagination: React.FC<Props> = ({ setPagesize, links, setUrl }) => {
    const [lastPage, setLastPage] = useState<string | null>(null)

    const getPageLink = (page: string) => {
        const link = links.find((item) => item.rel === page)

        if (link) {
            setUrl(link.uri)
            window.scrollTo(0, 0)
        }
    }

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
            <div className="pages">
                <select
                    onChange={(e) => {
                        setUrl(
                            `https://anapioficeandfire.com/api/characters?page=1&pageSize=${e.target.value}`
                        )
                        setPagesize(parseInt(e.target.value))
                    }}
                    className="form__select pages__element"
                >
                    <option>Entries per page</option>
                    <option value="10">10</option>
                    <option value="25">25</option>
                    <option value="50">50</option>
                </select>
                <p className="align-right pages__element">Pages: {lastPage}</p>
            </div>
            <div className="pagination">
                <div className="pagination__element">
                    <ul className="filters__pagination">
                        <li
                            className="filters__pagiation__element"
                            onClick={() => getPageLink("prev")}
                        >
                            Previous page
                        </li>
                        <li
                            className="filters__pagiation__element"
                            onClick={() => getPageLink("first")}
                        >
                            First page
                        </li>
                        <li
                            className="filters__pagiation__element align-right"
                            onClick={() => getPageLink("last")}
                        >
                            Last page
                        </li>
                        <li
                            className="filters__pagiation__element align-right"
                            onClick={() => getPageLink("next")}
                        >
                            Next page
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default ToCPagination
