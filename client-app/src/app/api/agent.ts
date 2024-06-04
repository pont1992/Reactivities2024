import axios, { AxiosResponse } from "axios"
import { Activity } from "../models/activity";

const sleep = (delay: number) =>
{
    return new Promise((resolve) =>
    {
        setTimeout(resolve, delay);
    })
}

axios.defaults.baseURL = 'http://localhost:5000/api';

axios.interceptors.response.use(async response =>
{
    try
    {
        await sleep(1000);
        return response;
    } catch (error)
    {
        console.log(error);
        return await Promise.reject(error);
    }
})

// Method to extract data from Axios response
const responseBody = <T>(response: AxiosResponse<T>) => response.data;

// Define an object with various HTTP request methods
const requests = {
    get: <T>(url: string) => axios.get<T>(url).then(responseBody),
    post: <T>(url: string, body: {}) => axios.post<T>(url, body).then(responseBody),
    put: <T>(url: string, body: {}) => axios.put<T>(url, body).then(responseBody),
    del: <T>(url: string) => axios.delete<T>(url).then(responseBody),
}

// Define Activities object and its methods
const Activities = {
    list: () => requests.get<Activity[]>('/activities'),
    details: (id: string) => requests.get<Activity>(`/activities/${id}`),
    create: (activity: Activity) => axios.post<void>('/activities', activity),
    update: (activity: Activity) => axios.put<void>(`/activities/${activity.id}`, activity),
    delete: (id: string) => axios.delete<void>(`/activities/${id}`)
}

// Define the agent object containing Activities
const agent = { Activities }

// Export the agent object
export default agent;