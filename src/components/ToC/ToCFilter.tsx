import React from "react"

interface Props {
    setUrl: React.Dispatch<React.SetStateAction<string>>
    pageSize: number
}

const ToCFilter: React.FC<Props> = ({ setUrl, pageSize }) => {
    return (
        <div>
            <select
                data-testid="select-tocfilter"
                onChange={(e) =>
                    setUrl(
                        `https://anapioficeandfire.com/api/characters?pageSize=${pageSize}&gender=${e.target.value}`
                    )
                }
            >
                <option value="">Filter by character's sex</option>
                <option value="male">Male</option>
                <option value="female">Famale</option>
            </select>
            <input type="text" data-testid="input-tocfilter" />
            <button data-testid="button-tocfilter">Filter</button>
        </div>
    )
}

export default ToCFilter
