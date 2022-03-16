import { render, screen } from "@testing-library/react"
import ToCFilter from "../ToCFilter"

test("page contains select box", () => {
    render(<ToCFilter />)
    expect(screen.getByTestId("select-tocfilter")).toBeInTheDocument()
})

test("page contains input", () => {
    render(<ToCFilter />)
    expect(screen.getByTestId("input-tocfilter")).toBeInTheDocument()
})

test("page contains select button", () => {
    render(<ToCFilter />)
    expect(screen.getByTestId("button-tocfilter")).toBeInTheDocument()
})
