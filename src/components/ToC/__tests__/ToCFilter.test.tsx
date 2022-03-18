import { render, screen } from "@testing-library/react"
import ToCFilter from "../ToCFilter"

beforeEach(() => {
    render(<ToCFilter setQuery={jest.fn()} setUrl={jest.fn()} pageSize={25} />)
})

test("page contains select box", () => {
    expect(screen.getByTestId("select-tocfilter")).toBeInTheDocument()
})

test("page contains input", () => {
    expect(screen.getByTestId("input-tocfilter")).toBeInTheDocument()
})

test("page contains select button", () => {
    expect(screen.getByTestId("button-tocfilter")).toBeInTheDocument()
})
