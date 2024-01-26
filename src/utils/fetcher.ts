const BASE_URL = "https://api.nasa.gov/planetary/apod";
const DEMO_KEY = "XCUJc4Se4W3ObDbtsh8qTMk6RvwfftBlpLugF9Gx";

const fetcher = async (queryParams?: String) => {
    try {
        const response = await fetch(
            `${BASE_URL}?api_key=${DEMO_KEY}${
                queryParams?.length ? queryParams : ""
            }`
        );
        const data = response.json();
        return Promise.resolve(data);
    } catch (error) {
        return Promise.reject(error);
    }
};

export default fetcher;
