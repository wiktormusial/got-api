import React from "react"

interface Props {
    error: string
}

const HouseError: React.FC<Props> = ({ error }) => {
    return <div>{error}</div>
}

export default HouseError
