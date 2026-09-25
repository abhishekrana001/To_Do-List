import todoImage from "../assets/todo.png";

function Navbar() {
  return (
    <section className="hero-section">

      <div className="hero-content">

        <h1 className="floating-title">
          <span>TO-DO</span> LIST
        </h1>

        <img
          src={todoImage}
          alt="Todo illustration"
          className="todo-image"
        />

      </div>

    </section>
  );
}

export default Navbar;