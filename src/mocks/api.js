import { rest } from 'msw'
import { setupServer } from 'msw/node'

const server = setupServer(
    rest.get('https://www.anapioficeandfire.com/api/characters', (req, res, ctx) => {
        return res(
            ctx.json({"url":"https://anapioficeandfire.com/api/characters/25","name":"Scolera","gender":"Female","culture":"","born":"","died":"","titles":["Septa"],"aliases":[""],"father":"","mother":"","spouse":"","allegiances":[],"books":["https://anapioficeandfire.com/api/books/5","https://anapioficeandfire.com/api/books/8"],"povBooks":[],"tvSeries":[""],"playedBy":[""]}),
            ctx.status(200)
            )
    }),

    rest.get('https://www.anapioficeandfire.com/api/houses/404', (req, res, ctx) => {
        return res(
            ctx.json({"errror": "404"}),
            ctx.status(404)
        )
    }),

)

beforeAll(() => server.listen({onUnhandledRequest: "bypass" }))
afterAll(() => server.close())
afterEach(() => server.resetHandlers())
