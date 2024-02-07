const Card = ({
  image,
  title,
  text,
}: {
  image: string;
  title: string;
  text: string;
}) => {
  return (
    <div className="max-w-sm rounded overflow-hidden ">
      <img src={image} alt={title} className="w-full" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">
          <span>{text}</span>
        </p>
      </div>
    </div>
  );
};

export default Card;
