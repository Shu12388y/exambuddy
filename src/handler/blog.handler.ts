export const get_blogs = async()=>{
    try {
        const response = await fetch(`http://localhost:3000/api/blogs`);
        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error(String(error))
    }
}

export const get_blog = async(id:string)=>{
        try {
        const response = await fetch(`http://localhost:3000/api/blogs/${id}`);
        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error(String(error))
    }
}