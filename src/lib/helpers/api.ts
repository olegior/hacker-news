import axios from "axios";
import { ItemType, UserType } from "../types";

const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL,
})

api.interceptors.request.use((request) => {
    request.url = request.url?.concat('.json')
    return request
})

api.interceptors.response.use((response) => {
    return response.data
}, (error) => {
    console.error(error);
    return null
})

export const getData = async (id: number): Promise<ItemType> => {
    return await api<ItemType, ItemType>(`item/${id}`);
}

export const getKids = async (kids: number[]) => {
    return await Promise.all(kids.map(kid => getData(kid)))
}

export const getUser = async (id: string): Promise<UserType> => {
    return await api(`user/${id}`);
}

export const getNews = async (route: string): Promise<ItemType[]> => {
    const news = (await api<number[], []>(route))
        .slice(0, 100)
    return await Promise.all(news.map((article: number) => getData(article)))
}