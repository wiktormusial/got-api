import React from "react"
import { Link } from "react-router-dom"
import { FetchHouse } from "./types"

interface Props {
    data: FetchHouse | undefined
}

const HouseCard: React.FC<Props> = ({ data }) => {
    const renderElements = (arr: string[]) => {
        if (arr[0] !== "") {
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

    return (
        <div>
            <Link to="/">Previous page</Link>
            <h1>{data!.name}</h1>
            <p>Region: {data!.region ? data!.region : "-"}</p>
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

export default HouseCard
