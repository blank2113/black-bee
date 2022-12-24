import "./burger.css";

function Burger({ active, setActive }) {
  return (
    <div
      className={active ? "burger active" : "burger"}
      onClick={() => setActive(!active)}
    >
      <span />
    </div>
  );
}

export default Burger;
