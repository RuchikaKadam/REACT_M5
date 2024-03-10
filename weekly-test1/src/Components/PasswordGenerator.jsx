import React, {useEffect, useState} from 'react'
import './PasswordGenerator.css'
import copyIcon from '../assets/computer-icons-cut-copy-and-paste-copying-icon-design-copy-vector.jpg'
import {ToastContainer, toast} from 'react-toastify';

const lowercaseList = 'abcdefghijklmnopqrstuvwxyz'
const uppercaseList = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const numberList = '0123456789'
const symbolList = '!@#$%^&*()_?'

function PasswordGenerator() {
  const [password, setPassword] = useState('')
  const [lowerCase, setLowerCase] = useState(true)
  const [upperCase, setUpperCase] = useState(true)
  const [numbers, setNumbers] = useState(true)
  const [symbols, setSymbols] = useState(true)
  const [passwordLength, setPasswordLength] = useState(8)
  const [selectedChoices, setSelectedChoices] = useState(['lowercase','uppercase','numbers','symbols'])

  useEffect(() => {
    generatePassword();
  },[passwordLength]);

  const handleCheckbox = (type) => {
    let tempChoices = selectedChoices;
    if(tempChoices.includes(type)){
      const index = tempChoices.indexOf(type);
      tempChoices.splice(index, 1);
    }
    else{
      tempChoices.push(type);
    }
    setPassword(tempChoices)
  }

  const generatePassword = () => {
    let characterList = '';
    if(lowerCase){
      characterList += lowercaseList;
    }
    if(upperCase){
      characterList += uppercaseList;
    }
    if(numbers){
      characterList += numberList;
    }
    if(symbols){
      characterList += symbolList;
    }
    let tempPassword = '';
    const characterListLength = characterList.length;
    for(let i =0; i < passwordLength; i ++){
      const characterIndex = Math.round(Math.random() * characterListLength);
      tempPassword += characterList.charAt(characterIndex)
    }
    setPassword(tempPassword);
  }

  const copyPassword = async () => {
    const copiedText = await navigator.clipboard.readText();
    if(password.length && copiedText !== password){
      navigator.clipboard.writeText(password);
      toast.success('Password copied to Clipboard!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
    }
  }

  return (
    <>
    <div className='container'>
        <h2 className="title">STRONG PASSWORD GENERATOR</h2>
        <div className="password-wrapper">
            <div className="password-area">
                <div className="password">
                    <input type="text" value={password} disabled placeholder='Generate Password' />
                    <img src={copyIcon} alt="copy-icon" className='copyIcon' onClick={copyPassword}/>
                </div>
            </div>
        </div>
        <div className="setting">
          <h3>Cusomize your password</h3>
          <div className="customize">
            <div className="checkboxes">
            <div className="left">
              <div className="checkbox-field">
                <input type="checkbox" name="lower" id="lower" checked={lowerCase} disabled={selectedChoices.length === 1 && selectedChoices.includes('lowercase')} onChange={()=> {setLowerCase(!lowerCase); handleCheckbox('lowercase');}}/>
                <label htmlFor="lower">Include lower-case (a-z)</label>
              </div>
              <div className="checkbox-field">
                <input type="checkbox" name="upper" id="upper" checked={upperCase} disabled={selectedChoices.length === 1 && selectedChoices.includes('uppercase')} onChange={()=> {setUpperCase(!upperCase); handleCheckbox('uppercase');}}/>
                <label htmlFor="upper">Include upper case (A-Z)</label>
              </div>
            </div>
            <div className="right">
              <div className="checkbox-field">
                <input type="checkbox" name="number" id="number" checked={numbers} disabled={selectedChoices.length === 1 && selectedChoices.includes('numbers')} onChange={()=> {setNumbers(!numbers); handleCheckbox('numbers');}}/>
                <label htmlFor="number">Include numbers (0-9)</label>
              </div>
              <div className="checkbox-field">
                <input type="checkbox" name="symbol" id="symbol" checked={symbols} disabled={selectedChoices.length === 1 && selectedChoices.includes('symbols')} onChange={()=> {setSymbols(!symbols); handleCheckbox('symbols');}}/>
                <label htmlFor="symbol">Include symbols (*-#)</label>
              </div>
            </div>
            </div>
           
          </div>
        </div>
        <div className="password-length">
          <h3>Password Length</h3>
          <div className="slider">
            <p className="rangeVal">{passwordLength}</p>
            <div className="range">
              <input type="range" min={10} max={40} defaultValue={passwordLength} onChange={(event)=> setPasswordLength(event.currentTarget.value)}/>
            </div>
          </div>
        </div>
        <div className="buttons">
          <button type="button" onClick={copyPassword}>Copy password</button>
          <button type="button" onClick={generatePassword}>Generate password</button>
        </div>
    </div>
    <ToastContainer/>
    </>
  )
}

export default PasswordGenerator