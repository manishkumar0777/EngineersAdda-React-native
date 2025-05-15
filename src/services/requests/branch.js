import { apiClient } from "../api";

export const getBranches = async () => {
    try {
        const response = await apiClient.get('/branches', {
            params: { course: 'Bachelor of Technology' }
        });
        return response.data;
    } catch (error) {
        throw error;
    }
}