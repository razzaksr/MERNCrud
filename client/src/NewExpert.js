import { useState } from "react";
import { useHistory } from "react-router-dom";
import { add } from "./API/bridge";

const NewExpert=()=>{
    const[exp,setExp]=useState({
        fullname:'',
        contact:0,
        experience:0,
        commercials:0,
        expert:""
    })
    let history=useHistory()
    const{fullname,contact,experience,commercials,expert}=exp;
    const bound=(event)=>{
        setExp({...exp, [event.target.name]: event.target.value})
        /* const{name,value}=event.target;
        setExp((old)=>{
            return{
                ...old,
                [name]:value
            }
        }) */
    }

    const alter=async()=>{
        console.log(exp)
        await add(exp)
        history.push('./')
    }
    return(
        <>
            <form className="rounded shadow p-4 col-md-8 col-lg-7 col-sm-12">
                <div class="form-group">
                    <label>Full name</label>
                    <input type="text" onChange={(event)=>bound(event)} class="form-control" placeholder="fullname please" name="fullname" value={fullname}/>
                </div>
                <div class="form-group">
                    <label>Contact</label>
                    <input type="number" onChange={(event)=>bound(event)} class="form-control" placeholder="Contact please" name="contact" value={contact}/>
                </div>
                <div class="form-group">
                    <label>Expert In</label>
                    <input type="text" onChange={(event)=>bound(event)} class="form-control" placeholder="Expert on technology" name="expert" value={expert}/>
                </div>
                <div class="row">
                    <div class="col form-group">
                        <label>Experience</label>
                        <input type="text" onChange={(event)=>bound(event)} class="form-control" placeholder="experience please" name="experience" value={experience}/>
                    </div>
                    <div class="col form-group">
                        <label>Commercials</label>
                        <input type="text" onChange={(event)=>bound(event)} class="form-control" placeholder="commercials please" name="commercials" value={commercials}/>
                    </div>
                </div>
                <div class="row justify-content-around mt-5">
                    <input type="button" value="Enroll" className="col-4 btn btn-warning"
                        onClick={()=>alter()}
                    />
                    <input type="reset" class="col-4 btn btn-outline-danger" value="Clear"/>
                </div>
            </form>
        </>)
}

export default NewExpert;