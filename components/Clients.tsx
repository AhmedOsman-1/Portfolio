import { companies, testimonials } from "@/data";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";
import Image from "next/image";

const Clients = () => {
  return (
    <div className="py-20" id="testimonials">
      <h1 className="heading text-white">
        Kind words from <span className="text-[#2079ff]">our clients</span>
      </h1>
      <div className="flex flex-col items-center justify-center gap-4 md:gap-16 max-lg: mt-10">
        <InfiniteMovingCards items={testimonials} direction="right" speed="slow" />

        <div className="flex flex-wrap justify-center gap-4 mt-8">
          {companies.map(({ id, img, name, nameImg }) => (
            <div key={id} className="flex flex-col items-center md:max-w-60 max-w-32 gap-2">
              <Image
                src={img}
                alt={name}
                height={100}
                width={100}
                className="md:w-10 w-5 object-contain"
              />
              <Image 
              src={nameImg}
              alt={name}
              height={100}
              width={100}
              className="md:w-24 w-20"
              
              />
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clients;
