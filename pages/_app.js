import NavBar from "../components/NavBar";
import Head from "next/head"
import "../styles/globals.css"
import Layout from "../components/Layout";

const colorLink = "blue";

export default function MyApp({Component, pageProps}) {
    return (
        <>
            <Layout>
                <Component {...pageProps} />
            </Layout>

            {/* <style jsx global>{`
                a {
                    color : ${colorLink};
                }
            `}</style> */}
        </>
    );
}