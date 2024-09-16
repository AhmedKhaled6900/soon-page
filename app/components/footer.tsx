
"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";
import { BsTwitterX } from "react-icons/bs";
<BsTwitterX />
import { FaFacebook } from "react-icons/fa";
<FaFacebook />
import { FaInstagram } from "react-icons/fa";
<FaInstagram />

import { FaLinkedin } from "react-icons/fa6";
<FaLinkedin />
const Footer = () => {
    const router =useRouter()
    const social = [
        {
    name : "facebook",
    href:"www.facebook.com",
    icon :<FaFacebook size={30} />

    },
        {
    name : "twitter",
    href:"www.twitter.com",
    icon :<BsTwitterX size={30} />

    },
        {
    name : "linkedin",
    href:"www.linkedin.com",
    icon :<FaLinkedin size={30} />

    },
        {
    name : "instagram",
    href:"www.instagram.com",
    icon :<FaInstagram size={30} />

    },
    
]
    return ( 

        <div className="flex items-center flex-col justify-center mt-10">
<h1>
© Copyright ComingSoon All Rights Reserved
</h1>

<div className="animated-text text-center flex flex-col mt-5">
    <h1 className="text-xl font-semibold">
        Made by 
   
    </h1>
    <span className="text-3xl font-bold">
        Ahmed Khaled
    </span>
   
</div>
<div className="mt-5 ">
    <h1 className="text-xl font-semibold mt-5">
        Follow me
    </h1>
</div>
<div className="flex items-center justify-between my-10 gap-x-6 ">
    {
        social.map((item)=>(
                <a href={item.href} className="hover:text-red-500" target="_blank" rel="noopener noreferrer">
            <button key={item.href}  >
            {item.icon}

            </button>

                </a>

        ))
    }
    {/* <Link href={"www.twitter.com"} target="_blank" rel="noopener noreferrer">
<BsTwitterX size={30} className="hover:text-red-500" > 
</BsTwitterX>

    </Link>

    
     <Link href={"www.facebook.com"}>
     <FaFacebook size={30}   className="hover:text-red-500" >
     </FaFacebook>

    </Link> 
    

    <Link href={"instagram.com"}>
<FaInstagram size={30}  className="hover:text-red-500" > 
</FaInstagram>

    </Link> 

     <Link href={"linkedin.com"}>
<FaLinkedin size={30}  className="hover:text-red-500" >
</FaLinkedin>

    </Link> */}

</div>

        </div>
     );
}
 
export default Footer;