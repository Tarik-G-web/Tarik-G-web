import Link from "next/link";
import { RiMapPinLine, RiTimeLine } from "react-icons/ri";
import { TbStarFilled, TbStarHalfFilled } from "react-icons/tb";
import Image from "next/image"
import { PACKAGES } from "@/constant";

const Packages = () => {
  return (
   <section className="w-full py-16 xl:py-28
    bg-slate-10" id="listing">
    <div className="mx-4">
      <h4 className="bold-18 text-secondary">TAKE A LOOK AT THESE OFFERS</h4>
      <h3 className="h3 max-w-lg">We Provide Top Destinatios</h3>
      <p className="max-w-lg">
        tigray
      </p>
    </div> 
    <div className="grid gap-8 grid-cols-1 sm:grid-cols-2
    lg:grid-cols-3 2xl:grid-cols-4 py-12">
       {PACKAGES.map((elem) => ( < PackageItem

                key={elem.URL}
                URL={elem.URL}
                title={elem.title}
                location={elem.location}
                price={elem.price}
                des={elem.des}
                duration={elem.duration}
       />
        )
        )
        }
    </div>
     </section>
  );
};
type PackageItem = {
  URL: string;
  title: string;
  location: string;
  price: string;
  des: string;
  duration: string;
};

const PackageItem = (
  {
    URL,
    title,
    location, 
    price, 
    des, 
    duration
  }: PackageItem) => {
  return(
    <div className="overflow-hidden rounded-tl-xl rounded-tr-xl
    border border-slate-200 group">
       <Link href={'/'} className="overflow-hidden relative">
       <Image src={URL} height={366} width={640} alt="img"/>
       <span className="bold-16 text-white bg-tertiary
       absolute bottom-0 right-1/2 translate-x-1/2 translate-y-1/2
       px-8 py-2 rounded-full group-hover:bg-secondary">{price} ETB</span>
       </Link>
       <div className="p-4 bg-white">
        <div className="capitalize medium-22">
        <span>{title}</span>
        <div className="flex items-center gap-x-2 my-1">
          <RiMapPinLine className="text-gray-50" /> 
          <span className="regular-16 text-gray-50">{location}</span></div>
        </div>
        <hr className="mt-3"/>
        <p className="my-3">{des}</p>
        <hr className="mt-3"/>
        <div className="flexBetween">
          <div className="flexCenter gap-x-4">
            <div className="flexCenter gap-x-2 text-secondary">
             <TbStarFilled />
             <TbStarFilled />
             <TbStarFilled />
             <TbStarHalfFilled />
            
            </div>
            <span className="medium-16">{212}</span>
           </div>
           <div className="flexStar gap-2 text-gray-50">
            <RiTimeLine className="" /> <span>{duration}</span></div>
          </div>
        </div>
        </div>
  );
};

export default Packages;
