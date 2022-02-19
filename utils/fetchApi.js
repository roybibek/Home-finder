import axios from "axios";

export const baseUrl  = 'https://bayut.p.rapidapi.com'



export const fetchApi = async (url) => {
    const {data} = await axios.get((url), {
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': '8da4d870admshb8eb0fe14543f25p10f8a3jsne24702933d7d'
          }
    });

    return data;
}