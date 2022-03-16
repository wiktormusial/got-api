const getAllegiances = (arr: string[]) => {
    for (let i in arr) {
        arr[i] = arr[i].substring(arr[i].lastIndexOf("/") + 1)
    }
    return arr
}

export default getAllegiances
