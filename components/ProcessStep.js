import Image from "next/image";
export default function ProcessStep({ imageSrc, alt, title, listItems }) {
  return (
    <div className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20">
      <div className="p-4 lg:p-0 mt-6 lg:mt-16">
        <Image src={imageSrc} width={145} height={165} alt={alt} />
      </div>
      <p className="text-lg text-black-600 font-medium capitalize my-2 sm:my-7">
        {title}
      </p>
      <ul className="flex flex-col list-disc pl-6 xl:pl-0 items-start justify-start text-left text-black-500 flex-grow">
        {listItems.map((item) => (
          <li>{item.text}</li>
        ))}
      </ul>
    </div>
  );
}
