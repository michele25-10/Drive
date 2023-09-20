import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import styles from "./threeOptionIcon.module.scss";

export default function ThreeOptionIcon() {
  return (
    <>
      <div className={`${styles.threeDot} dropdown`}>
        <label tabIndex={0} className="btn btn-ghost">
          <BsThreeDotsVertical />
        </label>
        <ul
          tabIndex={0}
          className="w-100 menu dropdown-content rounded-box z-[1] bg-base-content p-2 shadow"
        >
          <li>
            <a>Condividi con</a>
          </li>
          <li>
            <a>Elimina</a>
          </li>
          <li>
            <a>Info file</a>
          </li>
        </ul>
      </div>
    </>
  );
}
