import { CiLocationOn } from "react-icons/ci";
<CiLocationOn />
import { IoCallOutline } from "react-icons/io5";
<IoCallOutline />
import { TbClockHour3 } from "react-icons/tb";
<TbClockHour3 />

import { CiMail } from "react-icons/ci";
import EmailForm from "./email-form";
<CiMail />
const FormComponent = () => {

    const items =[
        {
        head:"Address",
        text:" A108 Adam Street New York, NY 535022",
        text2:"New York, NY 535022",
        icon:<CiLocationOn size={50}  />
        ,
    },
        {
        head:"Call Us",
        text:"+1 5589 55488 55",
        text2:"+1 6678 254445 41",

        icon:<IoCallOutline size={50} />,
    },
        {
        head:"Email Us",
        text:"info@example.com",
        text2:"contact@example.com",
        icon:<CiMail size={50} />        ,
    },
        {
           

        head:" Open Hours",
        text:"Monday - Friday",
        text2:"9:00AM - 05:00PM",
        icon:<TbClockHour3 size={50} />
        ,
    },
]
    return (

<div className=" lg:grid grid-cols-10 gap-4">
<div className="col-span-5 lg:grid grid-cols-8   gap-4 " >

    {
        items.map((item)=>( 
            <div key={item.head} className="rounded-lg shadow-[0px_0px_20px_rgba(239,68,68,0.5)] form-bg col-span-4 bg-transparent m-5 space-y-5 flex flex-col justify-between p-5 text-start">
                <div className="text-red-500">
                    {item.icon}
                </div>
                <h1 className="font-semibold text-xl">
                    {item.head}
                </h1>
                <h1 > 
                {item.text}
                </h1>
                <h1>
                    {item.text2}
                </h1>

            </div>
        ))
    }
{/* <div className="col-span-4 bg-transparent flex flex-col">
<CiLocationOn />
<h1>
Address
A108 Adam Street

New York, NY 535022
</h1>

</div>


<div className="col-span-4 bg-red-500 flex flex-col">
<IoCallOutline />

Call Us
+1 5589 55488 55

+1 6678 254445 41
</div>
<div className="col-span-4 bg-red-500 flex flex-col">
<TbClockHour3 />
Open Hours
Monday - Friday

9:00AM - 05:00PM
</div>
<div className="col-span-4 bg-red-500 flex flex-col">
<CiMail />
Email Us
info@example.com

contact@example.com
</div> */}
</div>
<div className="col-span-5 form-bg m-5 rounded-lg shadow-[0_0_20px_rgba(239,68,68,0.5)]  ">
 <EmailForm></EmailForm>
</div>
</div>

      );
}
 
export default FormComponent;