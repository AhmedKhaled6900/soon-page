import { t } from "i18next"
import Introo from "./components/intro"
import FormComponent from "./components/form"

interface props {
    params:{
        lang:string
    }
}

const ContactPage:React.FC<props> = ({
params:{lang}
}) => {

    return(
        <>
<div>
<Introo lang={lang}></Introo>
</div> 
<div>
<FormComponent></FormComponent>

</div>
  
</>

    )

}

export default ContactPage