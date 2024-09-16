// import { useTranslation } from "react-i18next";
"use client"
import { useTranslation } from "@/app/i18n/client";
interface props {
    lang :string
}
 const Introo:React.FC<props>=    ({lang})=>{

    
    const {t}= useTranslation(lang,"intro")

    return ( 
<div className="flex flex-col text-center items-center justify-center my-10">
    
        <h1 className="font-bold text-3xl my-5 px-5">
{t("contact")
}
        </h1>
<h1 className="font-semibold text-2xl my-10 px-5">
    {t("intro")}
</h1>
 
</div>

     );
}
 
export default Introo;