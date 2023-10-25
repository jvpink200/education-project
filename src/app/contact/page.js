"use client";
import { motion } from "framer-motion";
import NavBar from "../components/NavBar";
import styles from "../page.module.scss";
import "../css/contact.scss";
import Image from "next/image";
import Footer from "../components/Footer";
export default function Contact() {
  function handleClick() {
    console.log("I was clicked");
  }
  return (
    <>
      <NavBar page="contact" />
      <main className="contact-container">
        <section className="connect">
          <div className="bg-dark info">
            <h1 className="title">Connect with Us</h1>
            <p className="contact-content">
              We want to hear from you! Contact us with any questions you may
              have and a representative will help you out shortly.
            </p>
            <button className="contact-btn" onClick={handleClick}>
              contact us
            </button>
          </div>
          <div className="circles">
            <div className="circles-gray"></div>
            <div className="circles-blue-sm"></div>
          </div>
        </section>
        <section className="education-study">
          <div className="ed-dark-blue"></div>
          <div className="ed-content">
            <h2>Music School</h2>
            <p>
              Tristique magna sit amet purus gravida quis blandit turpis cursus.
              Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.
              Rhoncus dolor purus non enim praesent elementum facilisis leo.
            </p>
          </div>
          <div className="ed-light-gray"></div>
        </section>
      </main>
      <footer className="footer">
        <Footer />
      </footer>
    </>
  );
}
