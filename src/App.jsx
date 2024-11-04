import { useState, useEffect } from 'react'
import './App.css'
import AddChar from './comp/AddChat'
import { AiOutlineCopy, AiOutlineReload } from 'react-icons/ai';


function App() {

  const ucharacters = "Include uppercase characters";
  const lcharacters = "Include lowercase characters";
  const numb = "Include numbers";
  const symb = "Include symbols";

  const _u = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const _l = 'abcdefghijklmnopqrstuvwxyz';
  const _n = '0123456789';
  const _s = '!@#$%^&*()-_=+[]{};:,.<>?/';

  let helpConst = "";

  const [genPass, setGenPass] = useState("");
  const [passLenght, setPassLenght] = useState(8);
  const [upperCase, setUpperCase] = useState(true);
  const [lowerCase, setLowerCase] = useState(true);
  const [numbers, setNumbers] = useState(true);
  const [symbols, setSymbols] = useState(false);


  const baseFunc = (id, checked) => {
    switch (id){
      case '1':
        checked ? setUpperCase(true) : setUpperCase(false);
        break;
      case '2':
        checked ? setLowerCase(true) : setLowerCase(false);
        break;
      case '3':
        checked ? setNumbers(true) : setNumbers(false);
        break;
      case '4':
        checked ? setSymbols(true) : setSymbols(false);
        break;
    }    
  }

  function addFunc(charOn, addThis){
    charOn ? helpConst += addThis : console.log(`${charOn} is off`);
  }

  function randomGenPass(char){
    let passw = "";
    for (let index = 0; index < passLenght; index++) {
      let randomP = Math.floor(Math.random() * char.length);
      passw += char[randomP];
    }
    
    console.log(passw);
    setGenPass(passw);
  }

  function genFunc(){
    if(!upperCase && !lowerCase && !numbers && !symbols){
      alert("Check the settings");
    }

    addFunc(upperCase, _u);
    addFunc(lowerCase, _l);
    addFunc(numbers, _n);
    addFunc(symbols, _s);

    // randomGenPass(helpConst);
    passLenght == 0 ? alert("Check password lenght") : randomGenPass(helpConst);

  }
  
  function resetPassw() {
    setGenPass("");
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(genPass).then(() => {
        alert('Copied');
    }).catch(err => {
        console.error('Failed to copy:', err);
    });
  };


  return (
        <div className='App'>
            <h3>Generate password</h3>
            <div className='compDiv'>
              <p>Generated password</p>
              <div className='genPassDiv flexDiv'>
                <input type="text" className='passText' placeholder='' value={genPass} />
                <AiOutlineCopy size={24} onClick={copyToClipboard} />
                <AiOutlineReload size={24} onClick={resetPassw} />
              </div>
            </div>
            <div className='compDiv'>
              <p>Character lenght: {passLenght} </p>
              <div className='flexDiv gap16'>
                0
                <input 
                  type="range" 
                  min="0" 
                  max="26"
                  value={passLenght}
                  onChange={(e) => setPassLenght(Number(e.target.value))}
                  />
                26
              </div>
              
            </div>
            <div className='compDiv'>
              <p>Settings</p>
              <AddChar text ={ucharacters} id="1" baseFunc = {baseFunc} />
              <AddChar text ={lcharacters} id="2" baseFunc = {baseFunc} />
              <AddChar text ={numb} id="3" baseFunc = {baseFunc} />
              <AddChar text ={symb} id="4" baseFunc = {baseFunc} />
            </div>
            <button className='actionButton' onClick={genFunc} >Generate Password</button>
            
        </div>
  )
}

export default App
