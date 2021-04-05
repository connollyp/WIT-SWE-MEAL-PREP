export default async function getFood(searchTerm) {

    return fetch(searchTerm, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(data => data.json())
}