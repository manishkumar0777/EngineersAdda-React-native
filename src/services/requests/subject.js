import { apiClient } from "../api";

export const getSubjects = async (semester, branch) => {
    try {
        const response = await apiClient.get('/subjects', {params : {semester, branch}});
        return response.data;
    } catch (error) {
        throw error;
        return;
    }
}