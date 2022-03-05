import React, {useState} from 'react'
import './FluidInput.scss'

const FluidInput = ({ type, id, label, name, onChange }) => {
    const [focused, setFocused] = useState(false);
    const [value, setValue] = useState("");

    let inputClass = "fluid-input";
    if (focused) 
        inputClass += " fluid-input--focus";
    else if (value != "") 
        inputClass += " fluid-input--open";
    
    const handleChange =(e) => {
        e.preventDefault()
        setValue(e.target.value)
        onChange(e)
    }

    return (
        <div className={inputClass}>
            <div className="fluid-input-holder">
                <input 
                    className="fluid-input-input"
                    name={name}
                    type={type}
                    id={id}
                    onFocus={() => setFocused(!focused)}
                    onBlur={() => setFocused(!focused)}
                    onChange={e => handleChange(e)}
                    autoComplete="off"
                />
                <label className="fluid-input-label" htmlFor={id}>{label}</label>
            </div>
        </div>
  )
}

export default FluidInput
