const getAlive = (born: string, died: string) => {
    if (!born && !died) {
        return "Unknown"
    } else if (!born) {
        return "No"
    } else if (!died) {
        return "Yes"
    } else {
        const yearOfBorn = born.split(" ")
        const yearOfDied = died.split(" ")

        if (!yearOfBorn.includes("BC") || !yearOfBorn.includes("BC,")) {
            const yo = parseInt(yearOfDied[1]) - parseInt(yearOfBorn[1])

            if (isNaN(yo)) {
                return "Unknown"
            } else {
                return `No, died at ${yo} years old`
            }
      
        } else {
            return "Unknown"
        }
    }
}

export default getAlive