import React, { useRef, useEffect } from "react";
import IMask from "imask";

const PhoneInput = ({ value, onChange }) => {
  const inputRef = useRef(null);

  useEffect(() => {
    const mask = IMask(inputRef.current, {
      mask: '+{7} 000 000-00-00',
    });

    mask.on('accept', () => {
      onChange(mask.unmaskedValue); // возвращает только цифры, например 79991234567
    });

    return () => mask.destroy(); // очистка
  }, [onChange]);

  return (
    <input
      ref={inputRef}
      defaultValue={value}
      type="tel"
      placeholder="Телефон"
      className="phone-input"
    />
  );
};

export default PhoneInput;
