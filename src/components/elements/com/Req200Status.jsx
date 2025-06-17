import React from "react";
import checkedMessage from "../../../assets/img/checkedMessage.svg";

export default function Req200Status() {
  return (
    <div className="req200">
      <div>
        <img src={checkedMessage} alt="checkedMessage" />
        <h1>Ваша заявка успешно отправлена!</h1>
        <p>В скором времени с Вами свяжутся наши специалисты</p>
      </div>
    </div>
  );
}
