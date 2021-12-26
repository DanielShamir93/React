import { useState } from 'react';

export default function Components183() {
  const [sec, setSec] = useState();

  const onChangeFunc = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "seconds":
        setSec(value);
        break;
      case "minutes":
        setSec(60 * value);
        break;
      case "hours":
        setSec(3600 * value);
        break;
      default: throw new Error('default error');
    }
  };

  return (
    <div>
      <form>
        <label htmlFor="seconds">Seconds</label>
        <input
          onChange={(e) => onChangeFunc(e)}
          type="number"
          name="seconds"
          value={sec}
        />
        <br />
        <label htmlFor="minutes">minutes</label>
        <input
          onChange={(e) => onChangeFunc(e)}
          type="number"
          name="minutes"
          value={sec / 60}
        />
        <br />
        <label htmlFor="hours">hours</label>
        <input
          onChange={(e) => onChangeFunc(e)}
          type="number"
          name="hours"
          value={sec / 3600}
        />
      </form>
    </div>
  );
};