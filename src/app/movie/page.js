import Link from "next/link";
import MovieCard from "../components/MovieCard";
import styles from "../styles/common.module.css"
const page = async () => {

  await new Promise((resolve) => setTimeout(resolve,1000))
  const url = process.env.RAPID_API_KEY
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "956a167c07mshb73f9eee2bf8c99p16807ejsnfcee0533e75d",
      "X-RapidAPI-Host": "netflix54.p.rapidapi.com",
    },
  };

  const res= await fetch(url,options)
  const data=await res.json()
  const main_data=data.titles
  //console.log(data);

  return (
    <>
      <section className={styles.movieSection}>
        <div className={styles.container}>
            <h1>Series and Movies</h1>
            <div className={styles.card_section}>
            { 
                main_data.map((curElem)=>{
                    return <MovieCard key={curElem.id} {...curElem} />
                })
            }
            </div>
        </div>
      </section>
    </>
  );
};

export default page;
