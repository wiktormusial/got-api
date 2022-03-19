import { render, screen } from "@testing-library/react"
import { fetchHouse } from ".."
import { server, rest } from "../../../mocks/api"
import HouseError from "../HouseError"

test("api shows error", async () => {
    const error = await fetchHouse("404")
    render(<HouseError error={error.data.error} />)

    expect(screen.findByText(/404/)).toBeInTheDocument
})
