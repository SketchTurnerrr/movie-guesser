import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';

export function Teams() {
  const [inputs, setInputs] = useState(['']); // Initial state with an empty input

  const addInput = () => {
    setInputs([...inputs, '']); // Add a new empty input
  };

  const deleteInput = (index: number) => {
    const updatedInputs = [...inputs];
    updatedInputs.splice(index, 1); // Remove the input at the specified index
    setInputs(updatedInputs);
  };

  const handleInputChange = (value: string, index: number) => {
    const updatedInputs = [...inputs];
    updatedInputs[index] = value; // Update the value at the specified index
    setInputs(updatedInputs);
  };

  return (
    <div>
      <Button className="text-background" onClick={addInput}>
        Додати команду
      </Button>
      {inputs.map((value, index) => (
        <div className="flex flex-col gap-4" key={index}>
          <>
            <Input
              className="max-w-[12rem]"
              type="text"
              value={value}
              onChange={(e) => handleInputChange(e.target.value, index)}
            />
            {/* <span>{value}</span> Display the value as text */}
            <Button
              className="text-background"
              onClick={() => deleteInput(index)}
            >
              Delete
            </Button>
          </>
        </div>
      ))}
    </div>
  );
}
