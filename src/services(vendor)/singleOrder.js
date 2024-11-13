export const apiVendorGetSingleOrder = async(id)=>{
    return await apiClient.get(`/manage/${id}`);
}