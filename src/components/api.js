export const serverLogIn = async (email, password) => {
    const response = await fetch(`http://localhost:8080`, {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({
            username: email,
            password: password,
            avatar: value,
        })
    });

    if (response.status !== 200) {
        return console.warn('Ошибка при получении данных логина пользователя')
    }

    return response.json();
};