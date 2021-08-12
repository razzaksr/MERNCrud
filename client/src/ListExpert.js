import { useEffect, useState } from "react";
import { checkServer, collect, erase } from "./API/bridge";

const ListExpert=()=>{
    const[msg,setMsg]=useState('Razak')
    const[experts,setExperts]=useState([])
    useEffect(()=>{
        //greet()
        gather()
    },[])

    useEffect(()=>{
        greet()
    })

    const remove=async(id)=>{
        await erase(id)
        gather()
    }

    const gather=async()=>{
        let every=await collect()
        setExperts(every.data)
    }

    const greet=async()=>{
        let info=await checkServer()
        setMsg(info.data)
    }
    return(
        <>
            <h1>Hi!!!!!{msg}</h1>
            <table className="table table-striped table-hover rounded shadow table-responsive-lg">
                <thead>
                    <tr>
                        <td>Expert Name</td><td>Expert Contact</td><td>Expert Experience</td>
                        <td>Expert Technology</td><td>Expert Commercials</td>
                        <td>Actions</td>
                    </tr>
                </thead>
                <tbody>
                    {experts.map((exp)=>(
                        <tr>
                            <td>{exp.fullname}</td>
                            <td>{exp.contact}</td>
                            <td>{exp.experience}</td>
                            <td>{exp.expert}</td>
                            <td>{exp.commercials}</td>
                            <td>
                                <a href={`/edit/${exp._id}`} className="btn btn-outline-warning">
                                    Edit
                                </a>
                                <input type="button" className="btn btn-outline-danger" 
                                value="Delete"
                                onClick={()=>remove(exp._id)}
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default ListExpert;