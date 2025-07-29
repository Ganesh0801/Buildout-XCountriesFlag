import React,{useEffect,useState} from 'react';
import styles from "./Card.module.css";
import Api from "../api/api";
import axios from "axios";


const Card = () => {
   const [country,setCountry] = useState([]);

    useEffect(()=>{
       const getCountry = async()=>{
        try{
            const response = await axios.get(Api);
            console.log(response.data);
            setCountry(response.data)
        }catch(e){
            console.error("Error fetching data:",e)
        }
       }

       getCountry()
    },[])
    

  return (
     <>
      <div className={styles.container}>
        {
            country.map((coun)=>(
                <div className={styles.card}>
                     <img 
                     className={styles.img}
                     src={coun.flags.png}
                     alt={coun.name.common}/>

                     <p className={styles.name}>{coun.name.common}</p>
                </div>
            ))
        }
         
      </div>
     </>
  )
}

export default Card