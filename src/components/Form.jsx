import React, { memo, useContext, useEffect } from 'react';
import Context from '../Context';

const Maindisplay = memo(() => {
  const {state} = useContext(Context);
  const {setFormData} = state
console.log(state)

  useEffect(()=>{
    setFormData(5)
  },[])

  return (
    <div className="App">
        form here
    </div>
  );
});

export default Maindisplay;
