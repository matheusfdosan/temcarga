import "./style.css"


function Input ({Type,Label}) {
    return(
        <div className="InputContainer">
       <span className="Label">{Label}</span>
      <input name='Input' className="Input" type={Type}/>
      </div>
    )
}

export default Input