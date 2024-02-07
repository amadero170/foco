import Image from "next/image";

const HeroBanner = ({ image }: { image: string }) => {
  return (
    <div className="relative w-full">
      <Image
        src={image}
        alt="Your Image"
        className="w-full h-screen object-cover"
        width={1080}
        height={800}
      />
      <div className="absolute top-1/2 w-full text-center text-white p-4">
        <h2 className="text-6xl">FOCO</h2>
        <h3 className="text-4xl">BLA BLA BLA</h3>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          BOTON?
        </button>
      </div>
    </div>
  );
};

export default HeroBanner;
