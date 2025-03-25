// @ts-ignore
import AnimatedContent from "../Animations/AnimatedContent/AnimatedContent";
interface CoolPillProps {
  slug: string;
  text: string;
}

function CoolPill({ slug, text }: CoolPillProps) {
  return (
    <>
      <AnimatedContent
        distance={0}
        direction="vertical"
        reverse={false}
        config={{ tension: 75, friction: 45 }}
        initialOpacity={0}
        animateOpacity
        delay={500}
        scale={1.5}
        threshold={0.2}
      >
        <div className="group relative flex items-center justify-center transition-transform duration-300 gap-2 rounded-xl hover:scale-125 border px-4 py-1.5 text-sm text-white/80 lg:text-base transform-gpu bg-black [border:1px_solid_rgba(255,255,255,.1)] [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] ">
          <img
            height="18"
            width="18"
            alt="HTML"
            src={"https://cdn.simpleicons.org/" + slug}
            className="mr-0-1 w-4 transition-transform duration-300 group-hover:scale-140 lg:w-5"
          />
          <span className="relative">
            <span className="animate-gradient-x text-colorfull absolute inset-0 h-full w-full opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              {text}
            </span>
            <span className="transition-colors duration-300">{text}</span>
          </span>
        </div>
      </AnimatedContent>
    </>
  );
}

export default CoolPill;
