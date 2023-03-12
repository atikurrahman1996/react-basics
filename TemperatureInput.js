import React from "react";

const scaleNames = {
  c: "Celsius",
  f: "Fahrenheit",
};

function TemperatureInput({ temperature, scale, onTemperatureChnage }) {
  return (
    <fieldset>
      <legend>Enter temperature in {scaleNames[scale]}: </legend>
      <input
        type="text"
        value={temperature}
        onChange={(e) => onTemperatureChnage(e, scale)}
      />
    </fieldset>
  );
}

export default TemperatureInput;
