import { useRef, useState } from "react";

const Form = () => {
  const inpRefs = [useRef(null), useRef(null), useRef(null), useRef(null)]; // no of input boxes
  const [currentIndex, setCurrentIndex] = useState(0); // track which input is currently focused

  function inputChange(e) {
    // accept only numbers
    if (isNaN(parseInt(e.target.value))) {
      e.target.value = "";
      return;
    }
    // focus on next input element
    if (currentIndex !== inpRefs.length - 1) {
      inpRefs[currentIndex + 1].current.focus();
    }
  }

  function handlePaste(e) {
    let paste = e.clipboardData.getData("text");

    paste = paste.trim();

    // applied only on first input
    if (currentIndex === 0) {
      for (let i = 0; i < paste.length; i++) {
        if (!inpRefs[i] || isNaN(parseInt(paste[i]))) return;
        inpRefs[i].current.value = paste[i];
      }
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    //gather inputs
    let code = "";
    for (let i = 0; i < inpRefs.length; i++) {
      const inputVal = inpRefs[i].current.value;
      if (inputVal) {
        code += inputVal;
      } else {
        inpRefs[i].current.focus();
        break;
      }
    }

    code = parseInt(code); // convert code to integer
    console.log(code);
    // confirm if code is correct
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Check your email</h1>
      <p>Please enter the 4 digit code sent to mimi@gmail.com</p>
      <div className="inputs-container">
        {inpRefs.map((ref, i) => (
          <input
            type="text"
            maxLength={1}
            ref={ref}
            onFocus={() => setCurrentIndex(i)}
            onChange={inputChange}
            onPaste={handlePaste}
            key={i}
          />
        ))}
      </div>
      <button type="submit">Confirm</button>
    </form>
  );
};

export default Form;
