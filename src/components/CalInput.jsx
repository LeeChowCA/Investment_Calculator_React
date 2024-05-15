import {useState} from "react";

export default function CalInput({type,name, value, onChange, placeholder, labelName}) {



    return <div>
        <label htmlFor="">{labelName}</label>
        <input
            type={type}
            name={name}
            value={value}
            onChange={onChange}
        />
    </div>
}