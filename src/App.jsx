import { useState } from 'react'
import './App.css'
import { converter } from './components/converter'

function App() {
  const [hex, setHex] = useState('#34495e');
  const [outputRes, setOutRes] = useState(converter(hex));
  const [bckColor, setbckColor] = useState(converter(hex));

  const RegExp = /#[0-9a-f]{6}/;

  const handleChange = (event) => {

  const value = event.target.value
  
  if (value.length > 7) return
  if (value.length === 0) {
    return value === '#'
  }

  setHex(value);
  
  if (value.length < 7) return;

  if (RegExp.test(value.toLowerCase())) {
    const rgb = converter(value);
    setOutRes(rgb);
    setbckColor(rgb);
  } else {
    setOutRes('Oшибка');
    setbckColor('#ff0000');
  }
 }

  return (
    <>
    <div className='converter_hex2rgb' style={{backgroundColor: bckColor}}> 
      <div className='content'>
        <input className='input' value={hex} onChange={handleChange}></input>
        <div className='output'>{outputRes}</div>
      </div>
    </div>
    </>
  )
}

export default App
