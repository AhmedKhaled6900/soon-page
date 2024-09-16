"use client"
import { t } from "i18next"
import Introo from "./components/intro"
import FormComponent from "./components/form"

interface Props {
    params:{
        lang:string
    }
}
const languages = ['en', 'ar']

// export async function generateStaticParams() {
//     return languages.map((lng) => ({ lng }))
//   }
 export default function ContactPage  ({params:{lang}}: Props)   {
console.log(lang)
    return(
        <>
<div>
<Introo lang={lang} ></Introo>
</div> 
<div>
<FormComponent></FormComponent>

</div>
  
</>

    )

}

// export default ContactPage