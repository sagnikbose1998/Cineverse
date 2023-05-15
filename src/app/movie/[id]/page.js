import Image from "next/image";
import styles from "../../styles/common.module.css"
const page = async ({params}) => {
    const id =params.id

    const url = `https://netflix54.p.rapidapi.com/title/details/?ids=${id}&lang=en`
    const options = {
    method: "GET",
    headers: {
        "X-RapidAPI-Key": "956a167c07mshb73f9eee2bf8c99p16807ejsnfcee0533e75d",
        "X-RapidAPI-Host": "netflix54.p.rapidapi.com",
    },
    };

    const res= await fetch(url,options)
    const data=await res.json()
    const main_data=data[0].details
    console.log(data);

    return (
        <div className={styles.container}>
            <h2 className={styles.movie_title}>Netflix \<span>{main_data.type}</span></h2>
            <div className={styles.card_section}>
                <div>
                    <Image src={main_data.backgroundImage.url} alt={main_data.title} width={600}
                    height={300} />
                </div>
                <div>
                    <h1>{main_data.title}</h1>
                    <p>{main_data.synopsis}</p>
                </div>
            </div>
        </div>
    );
};

export default page;