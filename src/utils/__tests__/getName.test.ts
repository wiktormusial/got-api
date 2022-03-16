import getName from "../getName";

const aliasses = [
    "Lord Snow",
    "Ned Stark's Bastard",
]

test("Return correct fullname", () =>{
    const fullName = getName("Jon Snow", aliasses)
    expect(fullName).toBe("Jon Snow: Lord Snow, Ned Stark's Bastard")
})

test("Return correct fullname without aliasses", () =>{
    const fullName = getName("Jon Snow", [])
    expect(fullName).toBe("Jon Snow")
})
