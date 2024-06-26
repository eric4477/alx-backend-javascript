function getResponseFromAPI() {
    return new Promise((resolve, reject) => {
        // Simulate an API call or asynchronous operation
        const success = true; // Simulating success or failure
        if (success) {
            resolve({ data: 'API response data' }); // Resolve with data
        } else {
            reject(new Error('Failed to fetch data from API')); // Reject with an error
        }
    });
}