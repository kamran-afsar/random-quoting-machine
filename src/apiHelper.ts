export const quotesEndpoint = "https://type.fit/api/quotes";
const axios = require('axios').default;

export async function get<T>(url: string):Promise<T> {
    return axios.get(url).then((response:T) => response).catch((error: any) => error);
} 