class ApiServices {
    // api service for fetch data / GET
    static async fetchData(url) {
        const response = await fetch(url);
        return response.json();
    }
    
    // api service for post data / POST
    static async postData(url, data) {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        return response.json();
    }
}

export default ApiServices