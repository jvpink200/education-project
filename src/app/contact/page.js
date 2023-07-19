import NavBar from "../components/NavBar";
export default function Contact() {
  return (
    <>
      <NavBar page="contact" />
      <section>
        <div className="bg-dark-blue">
          <h1>What We Do</h1>
          <h2>
            Sample text. Click to select the text box. Click again or double
            click to start editing the text.
          </h2>
          <button>contact us</button>
        </div>
        <div className="circle-gray"></div>
        <div className="circle-sm-blue"></div>
      </section>
    </>
  );
}
