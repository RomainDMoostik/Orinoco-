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