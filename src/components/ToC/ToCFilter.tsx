import React, { useState } from "react"

interface Props {
    setUrl: React.Dispatch<React.SetStateAction<string>>
    pageSize: number
}

const ToCFilter: React.FC<Props> = ({ setUrl, pageSize }) => {
    const [culture, setCulture] = useState("")

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setUrl(
            `https://anapioficeandfire.com/api/characters?pageSize=${pageSize}&culture=${culture}`
        )
    }

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
            <form onSubmit={(e) => handleSubmit(e)}>
                <input
                    type="text"
                    data-testid="input-tocfilter"
                    value={culture}
                    onChange={(e) => setCulture(e.target.value)}
                />
                <button data-testid="button-tocfilter">Filter</button>
            </form>
        </div>
    )
}

export default ToCFilter
