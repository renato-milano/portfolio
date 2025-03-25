type ProjectProps = {
  title: string;
  image?: string;
  video?: string;
  description: string;
  buttonText: string;
  buttonImage: string;
  technology: string[];
  onButtonClick: () => void;
};

export default function ProjectCard({
  title,
  image,
  description,
  buttonText,
  video,
  buttonImage,
  onButtonClick,
  technology,
}: ProjectProps) {
  return (
    <div className="group font-quick relative flex flex-col justify-between overflow-hidden rounded-xl transform-gpu bg-black [border:1px_solid_rgba(255,255,255,.1)] [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] ">
      {image && (
        <img
          className="w-full h-72 object-cover rounded-t-2xl bg-black [mask-image:linear-gradient(to_top,transparent_20%,#000_100%)]"
          src={image}
          alt={title}
        />
      )}
      {video && (
        <video
          className="w-full h-72 object-cover rounded-t-2xl bg-black [mask-image:linear-gradient(to_top,transparent_20%,#000_100%)]"
          src={video}
          autoPlay
          loop
          muted
        ></video>
      )}
      <div className="p-2 flex justify-start items-center w-full h-8">
        <h2 className="text-base text-white text-gray-100 font-semibold">
          {title}
        </h2>
      </div>
      <div className="p-2 text-start">
        <p className="text-gray-300 text-xs mt-2">{description}</p>
      </div>
      <div className="flex flex-wrap justify-start p-2">
        {technology.map((tech, index) => (
          <span
            key={index}
            className="text-xs border border-gray-600/25 bg-gradient-to-r from-zinc-800 via-zinc-700 to-zinc-800 text-gray-100/75 rounded-lg px-2 py-1 m-1 font-quick"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="flex justify-end m-2 px-3">
        <div
          className="border border-gray-600/25 flex gap-4 font-quick py-1 px-6 items-center justify-center gap-2 rounded-xl bg-neutral-900 px5 py-2 shadow-[inset_0_2px_10px_#ffffff1f] rounded-lg transition duration-300 font-quick text-xs"
          onClick={onButtonClick}
        >
          <img
            src={buttonImage}
            className="w-5 h-5 object-contain bg-black rounded-t-2xl"
            alt=""
          />
          <p className="text-white">{buttonText}</p>
        </div>
      </div>
    </div>
  );
}
