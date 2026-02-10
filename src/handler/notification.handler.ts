export const get_nofications = async()=>{
    try {
        const response = await fetch(`http://localhost:3000/api/notifications`);
        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error(String(error))
    }
}