const getName = (name: string, aliases: string[]) => {
    if (aliases[0] === '') {
        aliases = []
    }

    if (name && aliases.length === 0) {
        return name
    } else if (aliases.length !== 0 && name) {
        const allAliases = aliases.join(', ')
        return `${name}: ${allAliases}`
    } else if (!name) {
        const allAliases = aliases.join(', ')
        return allAliases  
    } 
}

export default getName