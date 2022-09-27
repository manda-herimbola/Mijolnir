class Users {

    static async PostUsers(ev: any, keys: string){

        const form = ev.target as HTMLFormElement
        const formData = new FormData(form)
        const users: UserType = Object.fromEntries(formData.entries())

        try {

            const response = await fetch(`http://localhost:5000/users/${ keys }`, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(users)
            })

            return await response;
        }

        catch (err) { console.log(err) }
        finally { form.reset() }
    }

    static async GetUsers( token: string ){
        const res = await fetch(`http://localhost:5000/users`,{
            method: 'GET',
            headers: { 'authorization': `bearer ${ token }` }
        })

        return await res.json()
    }

}

type UserType = {
    Email?: string,
    username?: string
    password?: string | number,
}

export default Users;