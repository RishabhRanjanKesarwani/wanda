import { API_ERRORS, API_PARAMS } from "./constants";
import { Client } from "./types/client";

export const addClient = async (data: Client) => {
    const url = `${API_PARAMS.path}${API_PARAMS.endpoints.clients}`;
    try {
        const response = await fetch(url, {
            method: API_PARAMS.methods.post,
            headers: API_PARAMS.headers,
            body: JSON.stringify(data),
        })
        return response.json();
    } catch (error) {
        return API_ERRORS.postError;
    }
};