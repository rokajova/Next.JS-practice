import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Navbar />
      <h1>Home</h1>
      <h1>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse cum
        deleniti totam. Facere dolores commodi voluptate nostrum. Obcaecati
        consectetur fugit nobis voluptates, illo ipsam atque delectus, velit
        corporis, ducimus dolorum?
      </h1>
      <h1>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse cum
        deleniti totam. Facere dolores commodi voluptate nostrum. Obcaecati
        consectetur fugit nobis voluptates, illo ipsam atque delectus, velit
        corporis, ducimus dolorum?
      </h1>
      <Footer />
    </div>
  );
}
