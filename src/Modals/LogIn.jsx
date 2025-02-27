import { useNavigate } from "react-router-dom";
import Button from "./UIelements/Button";
import PhoneInput from "./UIelements/PhoneInput";
import TextInput from "./UIelements/TextInput";
import { useState } from "react";
import Confirmation from "./Confirmation";

// eslint-disable-next-line react/prop-types, no-unused-vars
function LogIn({ active, setReg, reg, closeFn, className }) {
  const nav = useNavigate();
  const [sms, setSMS] = useState(false);

  return active ? (
    <div className={className}>
      <h4 className="font-bold text-[clamp(24px,2vw,32px)] text-start">
        Вход в личный кабинет
      </h4>
      <div className="my-6">
        <TextInput placeholder={"Логин"} type={"text"} />
      </div>
      <TextInput placeholder={"Пароль"} type={"password"} />

      <label
        className="flex items-center gap-[10px] mt-6 mb-[30px] select-none cursor-pointer"
        htmlFor="agree"
      >
        <input
          type="checkbox"
          className="w-6 h-6 bg-[#e4eaf3] outline-none border-none"
          id="agree"
        />
        <p className="text-sm leading-[1.71] font-light">
          Я согласен на обработку персональных данных
        </p>
      </label>

      <Button
        onClick={() => {
          nav("/profile");
          closeFn();
        }}
      >
        Войти в кабинет
      </Button>

      <p className="block text-center w-full text-[18px] font-light text-[#98a2b3] underline-offset-[5px] decoration-1 underline my-5">
        <a href="https://meedweff.uz">Забыли пароль? Восстановить.</a>
      </p>

      <p className="text-start">
        Для регистрации обратитесь к менеджеру по телефону:{" "}
        <b>+998 55 519 90 90</b>
      </p>
    </div>
  ) : (
    <div className={`${reg ? "hidden" : ""}`}>
      <Confirmation
        className={`${sms ? "" : "hidden"}`}
        closeFn={() => {
          setSMS(false);
          closeFn();
        }}
      />
      <div className={className + ` ${sms ? "hidden" : ""}`}>
        <h4 className="font-bold text-[clamp(24px,2vw,32px)] text-start">
          Вход в личный кабинет
        </h4>
        <div className="mt-6 mb-[30px]">
          <PhoneInput />
        </div>

        <Button
          onClick={() => {
            setSMS(true);
          }}
        >
          Получить СМС
        </Button>
        <p className="block text-center w-full text-[18px] font-light text-[#98a2b3] underline-offset-[5px] decoration-1 underline mt-5">
          <a
            onClick={() => {
              setReg(true);
            }}
            className="cursor-pointer"
          >
            Зарегистрироваться
          </a>
        </p>
      </div>
    </div>
  );
}

export default LogIn;
