console.log('ajax');


async function getTeddies() {
    try {
        const response = await fetch('http://localhost:3000/api/teddies');
        const json = await response.json();
        return json;
    } catch (error) {
        console.log(error);
    }
}

