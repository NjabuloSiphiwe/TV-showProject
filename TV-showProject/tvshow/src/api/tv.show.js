import axios from "axios";
import { FAKE_POPULARS, FAKE_RECOMMENDATIONS } from "./fake_data";
import { BASE_URL } from "../config";
import { API_KEY_PARAM } from "../config";
export class TVShowsAPI{
    static async fectchPopulars() {
       const response= await axios.get(`${BASE_URL}tv/popular${API_KEY_PARAM}`);
        console.log (response.data.results);
        return response.data.results;
    //return FAKE_POPULARS;
    }

    static async fetchRecommendations(tvShowId) {

        const response = await axios.get(
                    `${BASE_URL}tv/${tvShowId}/recommendations${API_KEY_PARAM}`
                );
                console.log(`${BASE_URL}tv/${tvShowId}/recommendations${API_KEY_PARAM}`);
                
                return response.data.results;

        //return FAKE_RECOMMENDATIONS;
    }
    static async fetchByTitle(title) {

        const response = await axios.get(
                    `${BASE_URL}search/tv${API_KEY_PARAM}&query=${title}`
                );
               
                
                return response.data.results;

        //return FAKE_RECOMMENDATIONS;
    }
}

// export const temp =  async tvShowId =>{
//     const response = await axios.get(
//         `${BASE_URL}tv/${tvShowId}/recommendations${API_KEY_PARAM}`
//     );
//     console.log(`${BASE_URL}tv/${tvShowId}/recommendations${API_KEY_PARAM}`);
    
//     return response.data.results;
// }