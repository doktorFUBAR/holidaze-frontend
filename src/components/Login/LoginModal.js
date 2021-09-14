import { React } from "react";
import { AiOutlineClose } from "react-icons/ai";
import Login from "../../assets/svg/login.svg";
import LoginForm from "./LoginForm";

export default function LoginModal({ shown, close }) {

  return shown ? (
    <>
      <div
        className="modal-backdrop"
        onClick={() => {
          close();
        }}
      ></div>
      <div
        className="modal"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="modal__left">
          <img
            class="img-hover"
            src={Login}
            alt="Illustration of person by door"
          />
        </div>
        <div className="modal__right">
          <button className="modal-close" onClick={close}>
            <AiOutlineClose />
          </button>
          <LoginForm />
        </div>
      </div>
    </>
  ) : null;
}
