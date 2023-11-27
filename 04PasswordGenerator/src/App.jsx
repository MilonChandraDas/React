import { useCallback, useEffect, useState, useRef } from "react";

function App() {
  const [passwordLength, setPasswordLength] = useState(10);
  const [isNumber, setIsNumber] = useState(false);
  const [isCharacter, setIsCharacter] = useState(false);
  const [generatedPassword, setGeneratedPassword] = useState("");

  // Password Generator
  const passwordGenerator = useCallback(() => {
    let password = "";
    let simbol = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (isNumber) simbol += "0123456789";
    if (isCharacter) simbol += "&^%$#@!(){}[]=<>/,.";
    for (let i = 0; i <= passwordLength; i++) {
      password += simbol.charAt(Math.floor(Math.random() * simbol.length + 1));
    }
    setGeneratedPassword(password);
  }, [passwordLength, isNumber, isCharacter, setGeneratedPassword]);

  // PasswordGenerator useEffect
  useEffect(() => {
    passwordGenerator();
  }, [passwordGenerator, passwordLength, isNumber, isCharacter]);

  // Password Copy
  const passwordRef = useRef(null);
  const passwordCopy = () => {
    passwordRef.current.select();
    document.execCommand("copy");
    alert("Password Copied");
  };

  return (
    <>
      <div className="w-full max-w-lg mx-auto bg-gray-700 mt-20 py-10 rounded-lg px-5">
        <h1 className="text-white text-center ">Password Generator</h1>

        <div className="flex mt-2">
          <input
            value={generatedPassword}
            type="text"
            readOnly
            className="outline-none w-full py-1 px-3"
            ref={passwordRef}
          />
          <button
            onClick={passwordCopy}
            className="bg-orange-500 text-white py-2 px-3  o hover:bg-purple-500 duration-300"
          >
            Copy
          </button>
        </div>

        <div className="flex gap-x-3 py-5">
          <div className="flex text-white gap-x-1">
            <input
              type="range"
              min={8}
              max={20}
              value={passwordLength}
              onChange={(e) => {
                setPasswordLength(e.target.value);
              }}
            />
            <label>Length: {passwordLength}</label>
          </div>

          <div className="flex items-center text-white gap-x-2">
            <input
              type="checkbox"
              className="cursor-pointer"
              id="numberInput"
              onChange={() => {
                setIsNumber(!isNumber);
              }}
            />
            <label htmlFor="numberInput">Number</label>
          </div>

          <div className="flex  items-center text-white gap-x-2">
            <input
              type="checkbox"
              className="cursor-pointer"
              id="characterInput"
              onChange={() => {
                setIsCharacter(!isCharacter);
              }}
            />
            <label htmlFor="characterInput">Character</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
