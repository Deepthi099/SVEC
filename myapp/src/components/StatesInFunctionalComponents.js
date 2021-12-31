import React,{useState} from 'react'

export default function () {
    let [name,updatename]=useState("charitha");
    return (
        <div>
            <h1
            // onMouseOver={()=>{updatename("deepthi")}}
            onMouseLeave={()=>{updatename("keerthi")}}
            >{name}</h1>
        </div>
    )
}
