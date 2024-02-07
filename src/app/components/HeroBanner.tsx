import Image from "next/image";

const HeroBanner = ({ image, text }: { image: string; text: string }) => {
  return (
    <div className="relative w-full">
      <Image
        src={image}
        alt="Your Image"
        className="w-full h-screen object-cover"
        width={1080}
        height={800}
      />

      <div className="absolute  top-1/2 w-full text-center text-white p-4">
        <h2 className="text-6xl ">{text}</h2>
      </div>
    </div>
  );
};

export default HeroBanner;
