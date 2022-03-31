import Head from "next/head";
import Image from "next/image";
import { Hero } from "../components/Hero";
import styles from "../styles/Home.module.scss";

// #171717

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>JAMstack Developer</title>
				<meta name='description' content='JAMstack freelance front end web developer with over 10 years of experience, based in Brighton / London -> remote' />
				<link href='https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap' rel='stylesheet' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main className={styles.main}>
				<Hero />
			</main>
		</div>
	);
}
