import ToCFilter from "./ToCFilter"
import ToCPagination from "./ToCPagination"
import ToCTable from "./ToCTable"

const ToC = () => {
    return (
        <div>
            <ToCFilter />
            <ToCTable />
            <ToCPagination />
        </div>
    )
}

export default ToC
