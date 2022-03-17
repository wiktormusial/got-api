import React from "react"
import { Link } from "react-router-dom"
import getAllegiances from "../../utils/getAllegiances"
import getName from "../../utils/getName"
import { FetchCharacters } from "./types"

interface Props {
    data: FetchCharacters[] | undefined
}

const ToCTable: React.FC<Props> = ({ data }) => {
    const renderTable = () => {
        return data!.map((item) => {
            return (
                <tr key={item.url} className="table__row">
                    <td>{getName(item.name, item.aliases)}</td>
                    <td>Yes</td>
                    <td>{item.gender}</td>
                    <td>{item.culture ? item.culture : "Unknown"}</td>
                    <td>
                        {item.allegiances.length !== 0
                            ? getAllegiances(item.allegiances).map((item) => {
                                  return (
                                      <span key={item}>
                                          <Link to={`house/${item}`}>
                                              {item}
                                          </Link>{" "}
                                      </span>
                                  )
                              })
                            : "No allegiances"}
                    </td>
                </tr>
            )
        })
    }

    return (
        <table className="table" cellSpacing={0}>
            <thead>
                <tr className="table__row">
                    <th>Character</th>
                    <th>Alive</th>
                    <th>Gender</th>
                    <th>Culture</th>
                    <th>Allegiances</th>
                </tr>
            </thead>
            <tbody>
                {!data ? (
                    <tr className="table__row">
                        <td colSpan={5}>Loading</td>
                    </tr>
                ) : (
                    renderTable()
                )}
            </tbody>
        </table>
    )
}

export default ToCTable
