import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

// import styles from "./NavBar.module.css";

export default function NavBar(){
    const router = useRouter();

    return (
        <nav>
            <Image src="/vercel.svg" alt = "main logo" width="141" height="32"/>
            <div>
                <Link href = "/">
                    {/* <a className = {`${styles.link} ${router.pathname === "/" ? styles.active : ""}`}>Home</a> */}
                    <a className = {router.pathname === "/" ? "active" : ""}>Home</a>
                </Link>
                <Link href = "/counter">
                    <a className = {router.pathname === "/counter" ? "active" : ""}>Counter</a>
                </Link>
                <Link href = "/site-list">
                    <a className = {router.pathname === "/site-list" ? "active" : ""}>Sites</a>
                </Link>
            </div>

            <style jsx>{`
                nav {
                    display: flex;
                    gap: 10px;
                    flex-direction: column;
                    align-items: center;
                    padding-top: 20px;
                    padding-bottom: 10px;
                    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
                      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
                }

                img {
                    max-width: 100px;
                    margin-bottom: 5px;
                }

                nav a {
                    font-weight: 600;
                    font-size: 18px;
                    margin: 7px;
                }

                .active {
                    color: blue;
                }

                nav div {
                    display: flex;
                    gap: 10px;
                }
            `}</style>
        </nav>
    );
}