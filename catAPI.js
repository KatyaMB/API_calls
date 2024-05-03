    // Using async function to fetch random cats url
const catApi = async () => {
    try {
        const response = await fetch(
            'http://thecatapi.com/api/images/get?format=src&type=gif'
        );

        // Extracting the URL from the response
        const url = response.url;

        // Logging the URL directly
        console.log("Random cat URL:", url);
    } catch (error) {
        console.error("Could not find a cat", error);
    }
}

// Call the function
catApi()
    .catch((error) => { // Adding a catch block to look for errors
        console.error("Error: Sorry something went wrong", error);
    });