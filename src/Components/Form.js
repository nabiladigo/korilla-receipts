import React from 'react';

const Form = (props) =>{
    const [form, setForm] = React.useState({
        search:"",
    });
    const handleChange =(e) =>{
        setForm({...form, [e.target.name]: e.target.value});
    };
    const handleSubmit =(e) =>{
        e.preventDefault();
        props.receiptsearch(form.search);
    };
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name = "search" onChange={handleChange} value={form.search} />
                <input type= "submit" value = "submit"/>
            </form>
        </div>
    );       
};

export default Form;