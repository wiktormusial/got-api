const ToCFilter = () => {
    return (
        <div>
            <select data-testid="select-tocfilter">
                <option value="">Filter by character's sex</option>
                <option value="male">Male</option>
                <option value="female">Famale</option>
            </select>
            <input type="text" data-testid="input-tocfilter" />
            <button data-testid="button-tocfilter">Filter</button>
        </div>
    )
}

export default ToCFilter
