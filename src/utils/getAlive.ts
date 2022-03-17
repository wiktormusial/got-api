const getAlive = (born: string, died: string) => {
    if (!born && !died) {
        return "Unknown"
    } else if (!born) {
        return "No"
    } else if (!died) {
        return "Yes"
    } else {
        //todo
    }
}

export default getAlive