type TextImageProps = {
  image: string;
  title: string;
  text: string;
};

const TextImage = ({ title, text, image }: TextImageProps) => {
  return (
    <div className="flex items-center justify-center space-x-4">
      {/* Left side: Title and Text */}
      <div className="flex flex-col w-1/2">
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="mt-2 text-gray-600">{text}</p>
      </div>

      {/* Right side: Image */}
      <div className="w-1/2">
        <img src={image} alt={title} className="w-full h-60 object-cover" />
      </div>
    </div>
  );
};

export default TextImage;
