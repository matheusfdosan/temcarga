import "./style.css"


function Input ({Type,Label}) {
    return(
        <div>
       <label htmlFor="Input" className="Label">{Label}</label> 
    
      <input name='Input' className="Input" type={Type}/>
      </div>
    )
}

export default Input