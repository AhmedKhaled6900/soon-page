"use client"
import Link from "next/link";
import Container from "../container";
import { usePathname, useRouter } from "next/navigation";

interface props{

    t:(key:string) => string

    lang:string
}

const NavbarBase:React.FC<props> = ({t,lang}) => {
    const routes = [
        {
            name: "Home",
            path: `/${lang}`,
        },
        {
            name: "Contact",
            path: `/${lang}/contact`,
        },
    ]
    const patheName= usePathname()
const router = useRouter()
const s=patheName.slice(3)
console.log(s)
const onClick=()=>{

  if(patheName.startsWith("/en"))
   router.replace(`/ar${s}`)
  if(patheName.startsWith("/ar"))
   router.replace(`/en${s}`)
}
    return ( 


<div className="flex items-center justify-between p-5 text-red-500 bg-black ">

<div>
<Link href={`/${lang}`}  >
<h1 className="font-bold text-3xl">
    {t("logo")}
</h1>
</Link>
</div>
<div>
{
    routes.map((route) => (
<Link href={route.path} key={route.name} className=" lg:p-4 p-2 font-bold hover:border-b-2 border-red-500 ">{t(route.name)}</Link>
    ))
}
{/* <div className="texl-2xl font-medium "> */}
<button  className="bg-red-500 text-black rounded-full text-center font-semibold p-2 mx-2" onClick={onClick}  >
  {patheName ==="/ar" ? t("lang") : t("lang")}
</button>
</div>
{/* <h1>
  {t("Home")}
</h1> */}
</div>

  



     );
}
 
export default 
NavbarBase;