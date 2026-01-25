const getPosts = async ()=>{
    const response = await fetch('https://jsonplaceholder.typicode.com/posts',
        {method:'GET'}
    )
    return await response.json(); // return a Promise
    // return  response.json();
    // not using await so any error in parsing to json cannot be handled here

};
export const getPost = async (id)=>{
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,
        {method:'GET'}
    )
    return await response.json();

};

export default getPosts