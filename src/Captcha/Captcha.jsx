import './Catpcha.css'
import { useState,useEffect } from 'react'

      const Captcha=()=>{
            const [captcha,setCapatch]=useState('')
            const [data,setData]=useState('')
         useEffect(()=>{
            fnGenerateCaptcha()
         },[])
         const fnGenerateCaptcha=()=>{
            let chars = "";
         
            const randomchar =
               "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
            // Generate captcha for length of
            // 5 with random character
            for (let i = 1; i <= 5; i++) {
               chars += randomchar.charAt(
                  Math.random() * randomchar.length)
            }
            setCapatch(chars)
         }
         const fnValidate=()=>{
            if(data==captcha){
               alert("Successfully Validated")
            }else{
               alert("Invalid Captcha")
            }
         }
         return <div className="mt-5">
            <p>
            <span id="captcha">{captcha}</span><button onClick={fnGenerateCaptcha} className="btn btn-dark">refresh</button>
               </p>
            <p>
             <b>Enter Captcha:</b> <input onChange={(eve)=> setData(eve.target.value)} /> <button onClick={fnValidate} className="btn btn-dark">Validate</button>
            </p>
            </div>
         }

         export default Captcha