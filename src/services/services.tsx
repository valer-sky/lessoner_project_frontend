const getData:any = async (setData:any) => {
    await fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => response.json())
        .then(response => {
            setData(response)
            console.log(response)
        })
        .catch((err) => {
            console.log(err)
        })
}

export { getData }