import React, { Children } from "react"

interface Props {
    children: React.ReactNode
}

const Wrapper: React.FC<Props> = ({ children }) => {
    return <div className="container">{children}</div>
}

export default Wrapper
