import { apiClient } from "./ApiClient";

export const getAllEntriesFromApi = (username) =>
    apiClient.get(`/get-all`);

export const createNewEntryApi = (username,dairy) =>
    apiClient.post(`/new-entry`, dairy);

export const getEntryByIdApi = (username,id) =>
    apiClient.get(`get-entry/${id}`);

export const updateEntryApi = (username, dairy) =>
    apiClient.put(`update-entry`, dairy);

export const deleteEntryApi = (username, id) =>
    apiClient.delete(`/delete-entry/${id}`);