export const get_resources = async()=>{
    try {
        const response = await fetch(`/api/resources`);
        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error(String(error))
    }
}


export const get_resource = async(id:string)=>{
 try {
        const response = await fetch(`/api/resources/${id}`);
        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error(String(error))
    }
}