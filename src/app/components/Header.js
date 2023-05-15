import Link from "next/link";
import styles from "../styles/navbar.module.css"
import Image from "next/image";
import Nav from "./Nav";

const Header = () => {
    return (
        <header className={styles.main_header}>
            <div className={styles.navbar_brand} >
                <Link href={"/"} >
                    <Image src="/cineverselogo.jpg" alt="movie logo" width={150} height={100}/>
                </Link>
            </div>
            <Nav /> 
        </header>
    );
};

export default Header;