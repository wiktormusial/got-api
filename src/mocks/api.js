import { rest } from 'msw'
import { setupServer } from 'msw/node'

export const server = setupServer(
    rest.get('https://www.anapioficeandfire.com/api/characters', (req, res, ctx) => {
        return res(
            ctx.json({"url":"https://anapioficeandfire.com/api/characters/25","name":"Scolera","gender":"Female","culture":"","born":"","died":"","titles":["Septa"],"aliases":[""],"father":"","mother":"","spouse":"","allegiances":[],"books":["https://anapioficeandfire.com/api/books/5","https://anapioficeandfire.com/api/books/8"],"povBooks":[],"tvSeries":[""],"playedBy":[""]}),
            ctx.status(200)
            )
    }),

    rest.get('https://www.anapioficeandfire.com/api/houses/404', (req, res, ctx) => {
        return res (
            ctx.status(400)
        )
    })
)

beforeAll(() => server.listen())
afterAll(() => server.close())
afterEach(() => server.resetHandlers())