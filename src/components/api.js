export const serverLogin = async (email, password) => {
    return fetch().then(res => res.json().then(data => data.success))
}

