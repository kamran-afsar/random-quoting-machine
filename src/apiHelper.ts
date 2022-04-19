export const quotesEndpoint = "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
//"https://type.fit/api/quotes";
const axios = require('axios').default;

export async function get<T>(url: string):Promise<T> {
    return axios.get(url).then((response:T) => response).catch((error: any) => error);
} 