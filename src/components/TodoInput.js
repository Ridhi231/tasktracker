import { useEffect } from "react";
import React,{useState} from "react";
//to get from ls
const getLocalItems=()=>{
  let list=localStorage.getItem('lists');
  console.log(list);
  if(list){
    return JSON.parse(localStorage.getItem('lists'));}
    else{
      return [];          
  }


}
function TodoInput(props) {
  
    const [inputText,setInputText] = useState(getLocalItems());
    const handleEnterPress = (e)=>{
        if(e.keyCode===13){
            props.addList(inputText)
            setInputText("")
        }
    }
    //local storage
    useEffect(()=>{
      //data is always stored in string format in local storage
      localStorage.setItem('lists',JSON.stringify(inputText))
    },[inputText]);
  return (
    <div className="input-container">
      <input
        type="text"
        className="input-box-todo"
        placeholder="Enter your todo"
        value={inputText}
        onChange={e=>{
            setInputText(e.target.value)
        }}
        onKeyDown={handleEnterPress}
      />
      <button className="add-btn" 
      onClick={()=>{
        props.addList(inputText)
        setInputText("")
      }}>+</button>      
    </div>
  );
}

export default TodoInput;