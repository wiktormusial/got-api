import React from "react"
import { Link } from "react-router-dom"
import { FetchHouse } from "./types"
import "./HouseDetail.css"

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
        <div className="center">
            <div className="card card--house">
                <div className="mb-3">
                    <Link to="/">{"<-"} Previous page</Link>
                </div>
                <h4 className="card-title">{data!.name}</h4>
                <hr />
                <div className="card-body">
                    <p>
                        <span className="fw-bolder">Region:</span>{" "}
                        {data!.region ? data!.region : "-"}
                    </p>
                    <p>
                        <span className="fw-bolder">Coat of arms:</span>{" "}
                        {data!.coatOfArms}
                    </p>
                    <p>
                        <span className="fw-bolder">Words:</span>{" "}
                        {data!.words ? data!.words : "No words"}
                    </p>
                    <p>
                        <span className="fw-bolder">Titles:</span>{" "}
                        {renderElements(data!.titles)}
                    </p>
                    <p>
                        <span className="fw-bolder">Seats:</span>{" "}
                        {renderElements(data!.seats)}
                    </p>
                    <p>
                        <span className="fw-bolder">Has died:</span>{" "}
                        {data!.diedOut ? "Yes" : "No"}
                    </p>
                    <p>
                        <span className="fw-bolder">Has overlord:</span>{" "}
                        {data!.overlord ? "Yes" : "No"}
                    </p>
                    <p>
                        <span className="fw-bolder">
                            Number of Cadet Branches:
                        </span>{" "}
                        {data!.cadetBranches.length}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default HouseCard
