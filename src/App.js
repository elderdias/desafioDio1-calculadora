import Input from "./components/Input";
import Button from "./components/Button";
import { Container, Content, Row } from "./styles";
import { useState } from "react";

const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operator, setOperator] = useState('');

  const handleOnClear = () => {
    setCurrentNumber('0');
    setFirstNumber('0');
    setOperator('');
  };

  const handleAddNumber = (number) => {
    setCurrentNumber((prev) => `${prev === '0' ? '' : prev}${number}`);
  };

  const handleSetOperator = (operator) => {
    if (firstNumber !== '0') {
      handleCalculate();
    }
    setFirstNumber(currentNumber);
    setCurrentNumber('0');
    setOperator(operator);
  };

  const handleCalculate = () => {
    const num1 = parseFloat(firstNumber);
    const num2 = parseFloat(currentNumber);
    let result = 0;

    switch (operator) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case 'x':
        result = num1 * num2;
        break;
      case '/':
        result = num1 / num2;
        break;
      default:
        return;
    }

    setCurrentNumber(result.toString());
    setFirstNumber('0');
    setOperator('');
  };

  const handleAddDecimal = () => {
    if (!currentNumber.includes('.')) {
      setCurrentNumber((prev) => `${prev}.`);
    }
  };

  return (
    <Container>
      <Content>
        <Input value={currentNumber} />
        <Row>
          <Button label="x" onClick={() => handleSetOperator('x')} />
          <Button label="/" onClick={() => handleSetOperator('/')} />
          <Button label="C" onClick={handleOnClear} />
          <Button label="-" onClick={() => handleSetOperator('-')} />
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumber('7')} />
          <Button label="8" onClick={() => handleAddNumber('8')} />
          <Button label="9" onClick={() => handleAddNumber('9')} />
          <Button label="+" onClick={() => handleSetOperator('+')} />
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber('4')} />
          <Button label="5" onClick={() => handleAddNumber('5')} />
          <Button label="6" onClick={() => handleAddNumber('6')} />
          <Button label="=" onClick={handleCalculate} />
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber('1')} />
          <Button label="2" onClick={() => handleAddNumber('2')} />
          <Button label="3" onClick={() => handleAddNumber('3')} />
          <Button label="." onClick={handleAddDecimal} />
        </Row>
        <Row>
          <Button label="0" onClick={() => handleAddNumber('0')} />
          <Button label="C" onClick={handleOnClear} />
        </Row>
      </Content>
    </Container>
  );
};

export default App;
