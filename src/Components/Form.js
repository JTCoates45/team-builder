import React from 'react';

const Form = (props) => {

    const handleChange = event => {
        const { name, value } = event.target;
        props.change(name, value);
    }

    const handleSubmit = event => {
        event.preventDefault();
        props.submit();
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Name Form
            <input
            placeholder="Enter Name Here"
            value={props.values.name}
            name="name"
            onChange={handleChange}
            />
            </label>
            <label>Email Here
            <input
            placeholder="Enter Email Here" 
            value={props.values.email}
            name="email"
            onChange={handleChange}
            />
            </label>
            <label> Enter Role
                <input
                placeholder="Enter Role Here"
                value={props.values.role}
                name="Email"
                onChange={handleChange}
                />
            </label>
            <input type="submit" value="Create team here" />
        </form>
    )
    
}
export default Form;