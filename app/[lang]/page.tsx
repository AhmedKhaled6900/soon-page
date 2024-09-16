
import { SoonCounter } from "../components/soon/client"
interface props{
  params:{
    lang:string
  }
}
 const Home:React.FC<props> =({params:{lang}})=>{
  return(
    <div className="min-h-full">
    <SoonCounter  lang={lang} ></SoonCounter>

    </div>
  )
}
export default Home