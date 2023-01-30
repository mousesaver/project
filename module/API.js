export const API = (() => {
    const url = 'https://randomuser.me/api'
    const getUser = () => fetch(url).then(response => response.json())
    const getUsers = async () => {
        const dataPromises = []
        for (let i = 0; i < 20; i++) {
            dataPromises.push(getUser()) 
        }
        const data = await Promise.all(dataPromises)
        const users = data.map((user) => {
            return {...user.results[0], showDob: false}
        })
        console.log(users)
        return users
    }
    return {
        getUsers
    }
}) ()
