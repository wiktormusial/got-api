import React from "react"
import getName from "../../utils/getName"
import { FetchCharacters } from "./types"

interface Props {
    data: FetchCharacters[] | undefined
}

const ToCTable: React.FC<Props> = ({ data }) => {
    const renderTable = () => {
        return data!.map((item) => {
            return (
                <tr key={item.url}>
                    <td>{getName(item.name, item.aliases)}</td>
                    <td>Yes</td>
                    <td>{item.gender}</td>
                    <td>Culture</td>
                    <td>123, 111</td>
                </tr>
            )
        })
    }

    return (
        <table>
            <thead>
                <tr>
                    <th>Character</th>
                    <th>Alive</th>
                    <th>Gender</th>
                    <th>Culture</th>
                    <th>Allegiances</th>
                </tr>
            </thead>
            <tbody>
                {!data ? (
                    <tr>
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
