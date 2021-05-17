export const serverLogIn = async (email, password) => {
    return fetch(
        `http://localhost:8080/auth?username=${email}&password=${password}`
    ).then(res => res.json()).then(data => data.success)
};

