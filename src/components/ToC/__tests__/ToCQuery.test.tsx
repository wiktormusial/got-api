import { fireEvent, render, screen } from "@testing-library/react"
import ToCQuery from "../ToCQuery"

test("renders correct query after submitting", () => {
    render(
        <ToCQuery
            query="?query=test"
            setQuery={jest.fn()}
            setUrl={jest.fn()}
            pageSize={10}
        />
    )

    expect(screen.getByTestId("query-string").innerHTML).toMatch(/test/)
})

test("if query undefined dont show in document", () => {
    render(
        <ToCQuery
            query=""
            setQuery={jest.fn()}
            setUrl={jest.fn()}
            pageSize={10}
        />
    )

    expect(screen.getByTestId("test-query").innerHTML).not.toBeInTheDocument
})

test("if query defined show in document", () => {
    render(
        <ToCQuery
            query="?query=asd"
            setQuery={jest.fn()}
            setUrl={jest.fn()}
            pageSize={10}
        />
    )

    expect(screen.getByTestId("test-query").innerHTML).toBeInTheDocument
})
