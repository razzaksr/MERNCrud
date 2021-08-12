import axios from 'axios'

const remote="http://localhost:8000/rest"

export const checkServer=async()=>{
    const hai=await axios.get(`${remote}/wel`)
    console.log("In bridge "+hai.data);
    return hai;
}

export const collect=async(id)=>{
    id=id||'';
    const fetch=await axios.get(`${remote}/${id}`)
    //console.log("In bridge "+fetch.data[0].fullname)
    /* for (let index = 0; index < fetch.data.length; index++) {
        console.log(fetch.data[index].fullname+" "+fetch.data[index].contact+" "+
        fetch.data[index].commercials)
    } */
    return fetch;
}

export const add=async(object)=>{
    const info=await axios.post(`${remote}/`,object)
    return info;
}


export const erase=async(id)=>{
    const info=await axios.delete(`${remote}/${id}`)
    return info;
}


export const update=async(expert)=>{
    console.log(expert.fullname+" has before updated")
    const rep=await axios.put(`${remote}/`,expert)
    console.log(rep.data.fullname+" has updated")
    return rep;
}