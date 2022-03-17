import React, { useState, useRef } from "react"

interface Props {
    setUrl: React.Dispatch<React.SetStateAction<string>>
    pageSize: number
}

const ToCFilter: React.FC<Props> = ({ setUrl, pageSize }) => {
    const [culture, setCulture] = useState("")
    const [error, setError] = useState<string | undefined>()
    const selectRef = useRef<HTMLSelectElement>(null)

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (culture === "") {
            setError("Empty string")
        } else {
            if (error) {
                setError(undefined)
            }

            setUrl(
                `https://anapioficeandfire.com/api/characters?pageSize=${pageSize}&culture=${culture}`
            )

            if (selectRef.current) {
                selectRef.current.value = ""
            }
        }
    }

    return (
        <div className="filters">
            <div className="filters__element filters__select">
                <select
                    data-testid="select-tocfilter"
                    onChange={(e) =>
                        setUrl(
                            `https://anapioficeandfire.com/api/characters?pageSize=${pageSize}&gender=${e.target.value}`
                        )
                    }
                    className="form__select"
                    ref={selectRef}
                >
                    <option value="">Filter by character's sex ↓</option>
                    <option value="male">Male</option>
                    <option value="female">Famale</option>
                </select>
            </div>
            <form
                onSubmit={(e) => handleSubmit(e)}
                className="filters__element filters__form align-right"
            >
                <input
                    type="text"
                    data-testid="input-tocfilter"
                    placeholder="Filter by culture"
                    value={culture}
                    onChange={(e) => setCulture(e.target.value)}
                    className="form__input"
                />
                <input
                    data-testid="button-tocfilter"
                    type="submit"
                    className="btn btn--primary"
                    value="Filter"
                />
                <div className="filters__error">{error && error}</div>
            </form>
        </div>
    )
}

export default ToCFilter
