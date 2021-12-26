import { useState } from 'react';

export default function Components184() {

  const arr = ["one", "two", "three", "four", "five"];

  const generator = () => {
    return arr.map((item) => {
      return { name: item, checked: false };
    });
  };

  const [checkBox, setCheckBox] = useState(generator());
  
  const handleOnChange = (e) => {
    const tempArr = checkBox.map((item) => {
      if (item.name === e.target.name) {
        return { name: item.name, checked: !item.checked };
      } else {
        return item;
      }
    });
    setCheckBox(tempArr);
  };

  const onClickFunc = (e) => {
    if (e.target.name === "Delete") {
      setCheckBox(
        checkBox.filter((item) => {
          return !item.checked;
        })
      );
    } else {
      setCheckBox(generator());
    }
  };

  const renderCheck = () => {
    return (
      <div>
        {checkBox.map((item) => {
          return (
            <div key={item.name}>
              <label htmlFor={item.name}>{item.name}</label>
              <input
                type="checkbox"
                name={item.name}
                checked={item.checked}
                onChange={(e) => handleOnChange(e)}
              />
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div>
      <div>
        <button name="Reset" onClick={(e) => onClickFunc(e)}>
          Reset
        </button>
        <button name="Delete" onClick={(e) => onClickFunc(e)}>
          Delete
        </button>
      </div>
      {renderCheck()}
    </div>
  );
};