import ContactCard from "../components/ContactCard";
import ContactForm from "../components/ContactForm";
import styles from "./contact.module.css"
const page = () => {
    return (
        <>
            <div className={styles.container}>
                <ContactCard />             
            </div>

            <section className={styles.contact_section}>
            <h2>We would love to hear <span>from you </span> </h2>
                <ContactForm />
            </section>

            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d460.4894526264101!2d88.41247544989162!3d22.582258988387615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0275c35fb69e77%3A0xd1229dee7712d52d!2sINDIAN%20BANK!5e0!3m2!1sen!2sin!4v1684095973813!5m2!1sen!2sin" 
            width={100} height={450} style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className={styles.mapping}></iframe>
        </>
    );
};

export default page;