import { useState } from "react";
import "./todo.css";

export default function Todo() {
  const [text, setText] = useState("");
  const [list, setList] = useState([]);
  function buttonClicked(e) {
    e.preventDefault();
    if (text) {
      setList([...list, text]);
    }
  }

  function textChanged(e) {
    const item = e.target.value;
    setText(item);
  }
  function deleteitem(index) {
    //   const newlist =   list.filter((val,i )=> i == index )
    // const stringvalue = newlist.toString()
    list.splice(index, 1);
    setList([...list]);
  }
  function edititem(index) {
   const editItem =  list.filter((v,i) => {
     return i === index
     })
   setText(editItem.toString()) 

  }

  return (
    <div className="todoapp">
      <form action="">
        {" "}
        <input type="text" onChange={textChanged} name="item" />{" "}
        <button onClick={buttonClicked}>Add</button>
      </form>
      <div className="listitem">
        <ul>
          {list.map((val, index) => {
            return (
              <li key={index}>
                {val}{" "}
                <button className="edit" onClick={() => edititem(index)}>
                  Edit
                </button>{" "}
                <button className="delete" onClick={() => deleteitem(index)}>
                  Delete
                </button>{" "}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
