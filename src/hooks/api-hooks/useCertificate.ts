import { useState, useCallback } from "react";
import {certificateApi} from "@/api"

export const useCertificate = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const verifyCertificate = useCallback(async (certificateId)=>{
        // Reset every state before new request
        setLoading(true);
        setError(null);
        
        try{
            const result = await certificateApi.verifyCertificate(certificateId);
            if(result.error){
                throw new Error(result.error.message || 'Error verifying certificate');
            }
            setLoading(false);
            return result.data;
        }catch(error){
            setError(error);
            setLoading(false);
        }
     
    }   
    ,[])

    return {
        loading,
        error,
        verifyCertificate,
    }
};
