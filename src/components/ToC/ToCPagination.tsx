import React from "react"
import { Reference } from "http-link-header"

interface Props {
    links: Reference[]
    setUrl: React.Dispatch<React.SetStateAction<string>>
}

const ToCPagination: React.FC<Props> = ({ links, setUrl }) => {
    return (
        <>
            <select
                onChange={(e) =>
                    setUrl(
                        `https://anapioficeandfire.com/api/characters?page=1&pageSize=${e.target.value}`
                    )
                }
            >
                <option>Entries per page</option>
                <option value="10">10</option>
                <option value="25">25</option>
                <option value="50">50</option>
            </select>
            <ul>
                {links.map((item) => {
                    return (
                        <li key={item.rel} onClick={() => setUrl(item.uri)}>
                            {item.rel}
                        </li>
                    )
                })}
            </ul>
        </>
    )
}

export default ToCPagination
