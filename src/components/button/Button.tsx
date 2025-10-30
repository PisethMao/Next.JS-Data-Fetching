import style from "./style.module.css";
export default function Button() {
  return (
    <div>
      <button type="button" className={style.button}>
        Click Me!
      </button>
    </div>
  );
}
