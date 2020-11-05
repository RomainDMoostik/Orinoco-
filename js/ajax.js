console.log('ajax');


async function getTeddies() {
    try {
        const response = await fetch('http://localhost:3000/api/teddies');
        const json = await response.json();
        return json;
    } catch (error) {
        console.log(error);
    }
};

/*
const getTeddies = async () => {
    try {
        const response = await fetch('http://localhost:3000/api/teddies');
        const json = await response.json();
        return json;
    } catch (error) {
        console.log(error);
    }
};
*/

async function getOneTeddyById(teddyId) {
    try {
        const response = await fetch(`http://localhost:3000/api/teddies/${teddyId}`);
        const json = await response.json();
        return json;
    } catch (error) {
        console.log(error);
    }
};


// curl -X GET http://localhost:3000/api/teddies/556789-ghud72893

async function postOrder() {
    try {
        const url = `confirmation.html`
        const options = {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const response = await fetch(url,options);
        const json = await response.json();
        console.log(json)
        return json;
    } catch (error) {
        console.log(error);
    }
};

