import React, { useRef, useEffect } from "react";
import IMask from "imask";

const PhoneInput = ({ value, onChange }) => {
  const inputRef = useRef(null);
  const maskRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      maskRef.current = IMask(inputRef.current, {
        mask: '+{7} 000 000-00-00',
      });

      maskRef.current.on('accept', () => {
        onChange(maskRef.current.unmaskedValue);
      });
    }

    return () => maskRef.current?.destroy();
  }, [onChange]);

  useEffect(() => {
    if (maskRef.current) {
      maskRef.current.value = value || '';
    }
  }, [value]);

  return (
    <input
      ref={inputRef}
      type="tel"
      placeholder="Телефон"
      className="phone-input"
    />
  );
};

export default PhoneInput;
