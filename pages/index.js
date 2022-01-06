import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
// import ProfilePicture from "../assets/profile_pic.jpg";

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Alfred Chow</title>
                <meta name="keywords" content="Alfred Chow" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                {/* <h1 className={styles.title}>
                    Welcome to <a href="https://nextjs.org">Next.js!</a>
                </h1> */}
                <Image
                    src="/profile_pic.jpg"
                    alt="Alfred Chow"
                    width={200}
                    height={380}
                />

                <h1 className={styles.title}>Alfred Chow</h1>

                <p className={styles.description}>
                    I&apos;m a Software Developer based in Hong Kong but working
                    for a Singapore company remotely. My favorite technologies
                    at this moment are
                    <code className={styles.code}>React.js</code>,{" "}
                    <code className={styles.code}>Next.js</code> and{" "}
                    <code className={styles.code}>Node.js</code>.
                </p>

                {/* <div className={styles.grid}>
                    <a href="https://nextjs.org/docs" className={styles.card}>
                        <h2>Documentation &rarr;</h2>
                        <p>
                            Find in-depth information about Next.js features and
                            API.
                        </p>
                    </a>

                    <a href="https://nextjs.org/learn" className={styles.card}>
                        <h2>Learn &rarr;</h2>
                        <p>
                            Learn about Next.js in an interactive course with
                            quizzes!
                        </p>
                    </a>

                    <a
                        href="https://github.com/vercel/next.js/tree/master/examples"
                        className={styles.card}
                    >
                        <h2>Examples &rarr;</h2>
                        <p>
                            Discover and deploy boilerplate example Next.js
                            projects.
                        </p>
                    </a>

                    <a
                        href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                        className={styles.card}
                    >
                        <h2>Deploy &rarr;</h2>
                        <p>
                            Instantly deploy your Next.js site to a public URL
                            with Vercel.
                        </p>
                    </a>
                </div> */}
            </main>

            <footer className={styles.footer}>
                <a
                    href="https://nextjs.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    It is not a template website but a progressive web app
                    handmade with Next.js
                </a>
            </footer>
        </div>
    );
}
