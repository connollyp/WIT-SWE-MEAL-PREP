export default async function loginUser(url) {
    return fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(data => data.json())
}