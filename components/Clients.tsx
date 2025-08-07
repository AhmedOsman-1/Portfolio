import { companies, testimonials } from "@/data";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";
import Image from "next/image";

const Clients = () => {
  return (
    <div className="py-20" id="testimonials">
      <h1 className="heading text-white">
        Kind words from <span className="text-[#2079ff]">our clients</span>
      </h1>

      {/* Testimonials carousel */}
      <div className="flex flex-col items-center justify-center gap-8 max-lg:mt-10">
        <InfiniteMovingCards items={testimonials} direction="right" speed="slow" />

        {/* Show testimonial images below */}
        <div className="flex flex-wrap justify-center gap-6 mt-8">
          {testimonials.map(({ id, name, img, title }) => (
            <div
              key={id}
              className="flex flex-col items-center gap-2 max-w-[120px]"
            >
              {img ? (
                <Image
                  src={img}
                  alt={name}
                  height={80}
                  width={80}
                  className="rounded-full object-cover"
                />
              ) : (
                <div className="h-20 w-20 rounded-full bg-gray-600 flex items-center justify-center text-white">
                  {name.charAt(0)}
                </div>
              )}
              <p className="text-sm text-center text-white font-semibold">
                {name}
              </p>
              <p className="text-xs text-center text-gray-400">{title}</p>
            </div>
          ))}
        </div>

        {/* Companies logos section */}
        <div className="flex flex-wrap justify-center gap-4 mt-12">
          {companies.map(({ id, img, name, nameImg }) => (
            <div
              key={id}
              className="flex flex-col items-center md:max-w-60 max-w-32 gap-2"
            >
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
