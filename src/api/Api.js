const API_KEY = "fpyONuEHi6fXVqqwO4rJpr4otB72"

// to get all upcoming matches

export const getMathes = () => {

    const url = `https://cricapi.com/api/matches?apikey=${API_KEY}`
     
    return fetch(url)
    .then((response) => response.json())
    .catch((error)=>console.log("ERROR : ", error));
};

// to show the match details

export const getMatchDetails = (id) => {
    const url = `https://cricapi.com/api/cricketScore?apikey=${API_KEY}&unique_id=${id}`

    return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.log(error));
};