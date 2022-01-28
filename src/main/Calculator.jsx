import React from 'react';
import './Calculator.css';
import Button from '../components/Button';
import Display from '../components/Display';

const Calculator = () => {

  function clearMemory() {
    console.log('limpar')
  }

  function setOperation(operation) {
    console.log(operation)
  }

  function addDigit(n) {
    console.log(n)
  }

  return (
    <div className="calculator">
      <Display value={100} />
      <Button label="AC" click={() => clearMemory()} triple />
      <Button label="/" click={setOperation} operation />
      <Button label="7" click={addDigit} />
      <Button label="8" click={addDigit} />
      <Button label="9" click={addDigit} />
      <Button label="*" click={setOperation} operation />
      <Button label="4" click={addDigit} />
      <Button label="5" click={addDigit} />
      <Button label="6" click={addDigit} />
      <Button label="-" click={setOperation} operation />
      <Button label="1" click={addDigit} />
      <Button label="2" click={addDigit} />
      <Button label="3" click={addDigit} />
      <Button label="+" click={setOperation} operation />
      <Button label="0" click={addDigit} double />
      <Button label="." click={addDigit} />
      <Button label="=" click={setOperation} operation />
    </div>
  )
}

export default Calculator