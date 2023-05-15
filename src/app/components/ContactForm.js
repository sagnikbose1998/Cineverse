'use client'
import { useState } from "react";
import styles from "../contact/contact.module.css"
import { Mulish } from 'next/font/google';

const mulish = Mulish({
    weight: ['300', '400', '500', '600', '700', '800', '900'],
    subsets: ['latin'],
    display: 'swap'
})
const ContactForm = () => {

    const [user, setUser] = useState({
        username:"",
        email:"",
        phone:"",
        message:""
    })

    const [status, setStatus] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('/api/contact', {
                method:'POST',
                headers:{"Content_Type":"application/json"},
                body: JSON.stringify({
                    username:user.username,
                    email:user.email,
                    phone:user.phone,
                    message:user.message
                })
            })
            // Set the status based on the response from the API route
            if (response.status === 200) {
                setUser({
                    username: "",
                    email: "",
                    phone: "",
                    message: ""
                })
                setStatus('success');
            } else {
                setStatus('error');
            }

        }catch (e) {
            console.log(e)
        }

    }
    function handleChange(e) {
        const name=e.target.name
        const value=e.target.value
        
        setUser((prevUser)=>({...prevUser,[name]:value}))
    }
    return (
    <form className={styles.contact_form} onSubmit={handleSubmit}>
            <div className={styles.input_field}>
                <label htmlFor="username" className={styles.label}>
                Enter your name:
                    <input type="text" name="username" id="username" placeholder="Enter your name"
                    className={mulish.className} value={user.username} onChange={handleChange}
                    autoComplete="off" required>

                    </input>
                </label>
            </div>

            <div className={styles.input_field}>
                <label htmlFor="email" className={styles.label}>
                Enter your email:
                    <input type="text" name="email" id="email" placeholder="Enter your email"
                    className={mulish.className} value={user.email} onChange={handleChange}
                    autoComplete="off" required>

                    </input>
                </label>
            </div>
            <div className={styles.input_field}>
                <label htmlFor="phone" className={styles.label}>
                Enter your phone:
                    <input type="number" name="phone" id="phone" placeholder="Enter your Phone No."
                    className={mulish.className} value={user.phone} onChange={handleChange}
                    autoComplete="off" required>

                    </input>
                </label>
            </div>
            <div className={styles.input_field}>
                <label htmlFor="message" className={styles.label}>
                Message:
                    <textarea  name="message" id="message" placeholder="Enter your message"
                    className={mulish.className} value={user.mesasge} onChange={handleChange}
                    autoComplete="off" required>

                    </textarea>
                </label>
            </div>

            <div>
                {status === 'success' && <p className={styles.success_msg}>Thank you for your message!</p>}
                {status === 'error' && <p className={styles.error_msg}>There was an error submitting your message. Please try again.</p>}

                <button type="submit" className={mulish.className}>
                    Send a message
                </button>
            </div>
        </form>
    );
};

export default ContactForm;