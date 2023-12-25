import { Radio } from 'antd';
import React, { useState } from 'react'

function RadioSelect({value , setValue , title1 , title2}) {
    // const [value, setValue] = useState(1);
    
    const onChange = (e) => {
      setValue(e.target.value)
    };  
  return (
    <Radio.Group onChange={onChange} value={value}>
      <Radio.Button value={1}>{title1}</Radio.Button>
      <Radio.Button value={2}>{title2}</Radio.Button>
    </Radio.Group>
  )
}

export default RadioSelect