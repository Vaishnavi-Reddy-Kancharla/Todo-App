import React, { useState } from "react";

function InputTodo(props) {
  const [title, setTitle] = useState("");
  const [selectedTagValue, setSelectedTagValue] = useState("");
  const [selectedUserValue, setSelectedUserValue] = useState("");
  
  let tagOptions = [
    { value: "Home", label: "Home" },
    { value: "Work", label: "Work" },
    { value: "Important", label: "Important" },
   
  ];
  const [tagNew,setSelectedNewTagValue]=useState(tagOptions);
  const [value,setValueT]=useState("");
  
 
  const handleSelectTagChange = (e) => {
    setSelectedTagValue(e.target.value);
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    props.addTodoProps(title, selectedTagValue, selectedUserValue);
    setTitle("");
    setSelectedTagValue("");
    setSelectedUserValue("");
      
  };
  
  const handleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleChangeNewTag = (e) => {
   
    
    e.preventDefault();
    setValueT(e.target.value);
  };
  const aggTag=()=>{
    if(value){
      const newT=tagNew.concat({value:value,label:value});
      setSelectedNewTagValue(newT);
      setValueT("");

    }
    else{
      alert('enter valid tag');
    }
    
    

  };
  

  return (
    <>
    <form  className="form-container">
      
      <input
        type="text"
        className="input-text"
        placeholder="Add todo..."
        value={title}
        //name="title"
        onChange={handleChange}
      />
      <select
        name="tags"
        value={selectedTagValue}
        className="select-input"
        onChange={handleSelectTagChange}
      >
        <option value="">Tags</option>
        {tagNew.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <input
      type="text"
      className="addTag"
      placeholder="Add your own tag..."
      value={value}
      name="newTag"
      onChange={handleChangeNewTag}>
      </input>
      <button className="new-tag" onClick={(e)=>{e.preventDefault();aggTag();}}>Submit new tag</button>
      <button
        type="submit"
        disabled={title && selectedTagValue ? false : true}
        className="input-submit"
        value="Submit"
        onClick={handleSubmit}
      >Submit</button>
      <button className="delete-button" onClick={(e)=>{e.preventDefault();props.deleteAllTodo()}}>Delete</button>
      <button className="complete-button" onClick={(e)=>{e.preventDefault();props.completeAll();}}>Completed All</button>
    
    </form>
    
    

    
    </>
  );
}

export default InputTodo;
