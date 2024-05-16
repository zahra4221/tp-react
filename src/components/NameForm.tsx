import { useState } from 'react';
import "../css/NameForm.css"
const NameForm = () => {
  const [value, setValue] = useState('');


  return (
    <div>
        <label>Name : </label>
    <input 
        type="text" 
        id="name" 
        value={value} 
        onChange={(e)=>setValue(e.target.value)}
      />
    </div>
  );
}

export default NameForm;
