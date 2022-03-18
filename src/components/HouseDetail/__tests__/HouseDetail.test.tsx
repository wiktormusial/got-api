import { screen, render } from "@testing-library/react"
import { StaticRouter } from "react-router-dom/server"

import HouseDetail from "../index"

test("renders 404 error", async () => {
    render(
        <StaticRouter location={"/houses/404"}>
            <HouseDetail />
        </StaticRouter>
    )

    setTimeout(() => {
        expect(screen).toMatch(/404/)
    }, 1)
})
