import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 className={styles.title}>Home</h1>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse cum
        deleniti totam. Facere dolores commodi voluptate nostrum. Obcaecati
        consectetur fugit nobis voluptates, illo ipsam atque delectus, velit
        corporis, ducimus dolorum?
      </p>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse cum
        deleniti totam. Facere dolores commodi voluptate nostrum. Obcaecati
        consectetur fugit nobis voluptates, illo ipsam atque delectus, velit
        corporis, ducimus dolorum?
      </p>
      <Link href="/people">
        <a className={styles.btn}>See people listing</a>
      </Link>
    </div>
  );
}
