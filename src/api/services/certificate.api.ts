// src/api/services/certificate.api.ts
import api from "../axios-instance";

// API call for certificate verification
const certificateApi = {
  verifyCertificate: async (certificateId: string) => {
    try {
      const response = await api.post(`/certificate/verify?certificateId=${certificateId}`);
      return response;
    } catch (error) {
      throw error;
    }
  },

}
export default certificateApi;