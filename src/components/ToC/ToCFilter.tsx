import React, { useState, useRef } from "react"
import "./ToC.css"

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
        <>
            <form
                onSubmit={(e) => handleSubmit(e)}
                className="row g-3 align-items-center form__filters mb-2"
            >
                <div className="col">
                    <select
                        data-testid="select-tocfilter"
                        onChange={(e) =>
                            setUrl(
                                `https://anapioficeandfire.com/api/characters?pageSize=${pageSize}&gender=${e.target.value}`
                            )
                        }
                        className="form-select form-select-md"
                        ref={selectRef}
                    >
                        <option value="">Filter by character's sex</option>
                        <option value="male">Male</option>
                        <option value="female">Famale</option>
                    </select>
                </div>
                <div className="col">
                    <input
                        type="text"
                        className="form-control"
                        data-testid="input-tocfilter"
                        placeholder="Search by culture"
                        value={culture}
                        onChange={(e) => setCulture(e.target.value)}
                    />
                </div>
                <div className="col-auto">
                    <button
                        className="btn btn-primary col-auto"
                        data-testid="button-tocfilter"
                    >
                        Search
                    </button>
                </div>
            </form>
            {error && error}
        </>
    )
}

export default ToCFilter
