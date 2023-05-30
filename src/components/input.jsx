import React ,{useState} from 'react'

const Input = function() {
    const [value,setvalue] = useState('Introdu')

    return(
        <div>
    <h1>{value}</h1>
      <input type="text" value={value} onChange={event => setvalue(event.target.value)} />
        </div>
    )
};

export default Input;