// Writing partial functions

const partial = (func, ...fixed) => {
    return function(...rem) {
        return func(...fixed, ...rem);
    }
};

const fetchData = (url, apiKey, payload) => {
    const urlSearchParams = new URLSearchParams(payload);
    
    const fullUrl = `${url}?${urlSearchParams.toString()}`;
    console.log('Making api call', fullUrl);
    console.log('Api key', apiKey);
};

const myApiKey = "abcd";
const myApiUrl = "https://contacts-api.51b.dev";

const googleApiKey = "google-api-key";
const googleUrl = "https://google.51b.dev";

const fetchMyApi = partial(fetchData, myApiUrl, myApiKey);
const fetchGoogleApi = partial(fetchData, googleUrl, googleApiKey);

fetchMyApi({
    param1: 'value1',
    param2: "value2"
});
