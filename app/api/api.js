import axios from 'axios';

const Api = {
    
    fetchAllTodos : async ()=> {
        let data = [];
        await axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res=>{
            data = res.data;
        })
        .catch(error=>{
            //console.log(error);
        })
        return data;
    }
}

export default Api;