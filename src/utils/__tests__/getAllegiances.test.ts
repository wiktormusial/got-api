import getAllegiances from "../getAllegiances";

test("Return correct array", () =>{
    const ids = getAllegiances(['onet.pl/1', 'onet.pl/2'])
    expect(ids).toStrictEqual(['1', '2'])
})