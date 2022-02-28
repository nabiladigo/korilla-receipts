import React from 'react';

const Form = (props) =>{
    const [form, setForm] = React.useState({
        search:"",
    });
    const handleChange =(e) =>{
        setForm({...form, [e.target.name]: e.target.value});
    };
    const handleSearch = (e) => {
        e.preventDefault();
        search(form);
      };
    return(
        <div>
            <form onSubmit={handleSearch}>
                <input type="text" name = "search" onChange={handleChange} value={form.search} />
                <input type= "submit" value = "Search"/>
            </form>
        </div>
    );       
};

export default Form;