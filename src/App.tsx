import "./App.css";
import React, { useRef } from "react";
import BlurText from "./TextAnimations/BlurText/BlurText";
import SplitText from "./TextAnimations/SplitText/SplitText";
import RotatingText from "./TextAnimations/RotatingText/RotatingText";
import profile from "./assets/images/profile_full.jpg";
import FadeContent from "./Animations/FadeContent/FadeContent";
import ShinyText from "./TextAnimations/ShinyText/ShinyText";
function App() {
  const firstStep = useRef(null);
  const secondStep = useRef(null);
  const thirdStep = useRef(null);
  let hey = "Hello there!";
  let descritpion = "Solution Developer";
  let TitleClass = "text-white md:text-bigger text-[5vh] font-quick";
  let HeaderClass = "text-white md:text-bigger text-[4vh] font-quick";
  let DescriptionClass = "text-white/50 md:text-bigger text-[3vh] font-quick";
  function handleAnimationComplete() {
    console.log("Animation completed!");
    setTimeout(() => {
      firstStep.current.scrollIntoView({ behavior: "smooth" });
    }, 500);
    setTimeout(() => {
      if (secondStep.current) {
        secondStep.current.style.transition = "opacity 1.5s ease";
        secondStep.current.style.opacity = "0";
      }
    }, 3000);
    setTimeout(() => {
      thirdStep.current.scrollIntoView({ behavior: "smooth" });
    }, 4000);
  }
  return (
    <>
      <div className="text-center flex flex-col justify-center items-center h-screen">
        <SplitText
          text={hey}
          className={TitleClass}
          delay={150}
          animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
          animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
          easing="easeOutCubic"
          threshold={0.2}
          rootMargin="-50px"
          onLetterAnimationComplete={handleAnimationComplete}
        />
      </div>
      <div
        ref={firstStep}
        className="text-center flex flex-col justify-center items-center h-screen"
      >
        <div ref={secondStep}>
          <BlurText text="Who am I?" className={TitleClass} />
        </div>
      </div>
      <div ref={thirdStep} className="h-12"></div>
      <div className="h-screen">
        <div className="text-center flex flex-col justify-between items-center h-[90%]">
          <div className="flex flex-col justify-center items-center">
            <FadeContent
              blur={true}
              delay={50}
              duration={1000}
              easing="ease-out"
              initialOpacity={0}
            >
              <img
                src={profile}
                alt="hero"
                className="h-32 w-32 md:h-96 md:w-96 rounded-full object-cover object-center"
              />
            </FadeContent>

            <SplitText
              text={"Hi, I'm Renato Milano"}
              className={HeaderClass}
              delay={50}
              animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
              animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
              easing="easeOutCubic"
              threshold={0.2}
              rootMargin="-50px"
              onLetterAnimationComplete={() => {}}
            />
            <FadeContent
              blur={true}
              delay={250}
              duration={1000}
              easing="ease-out"
              initialOpacity={0}
            >
              <RotatingText
                texts={[
                  "Solution Developer",
                  "Passionate Coder",
                  "a Dream Maker",
                ]}
                mainClassName=" font-quick px-2 sm:px-2 w-[30vh] md:px-3 bg-gray-800/50 text-gray-300 overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
                staggerFrom={"last"}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={2000}
              />
            </FadeContent>

            <FadeContent
              blur={true}
              delay={350}
              duration={1000}
              easing="ease-out"
              initialOpacity={0}
            >
              <div className="font-quick text-gray-400 text-[1.7vh] md:text-3xl  p-4 mt-10">
                Hi! I'm a <span className="text-white">full-stack</span>{" "}
                developer passionate about building innovative and scalable
                solutions, from <span className="text-white">AI driven</span>{" "}
                applications to robust software architectures. I turn ideas into
                reality by combining modern technologies with a{" "}
                <span className="text-white">problem-solving mindset</span>.
                <br />
                Explore my portfolio and see what I can create for you!
              </div>
            </FadeContent>
            <FadeContent
              blur={true}
              delay={2000}
              duration={1000}
              easing="ease-out"
              initialOpacity={0}
            >
              <div className="flex flex-row justify-center items-center mt-10 space-x-4">
                <div className="border border-gray-600/25 bg-gray-800/50 hover:bg-gray-600 text-gray-300 font-quick py-2 px-6 rounded-lg transition duration-300 font-quick text-xs">
                  View Projects
                </div>
                <div className="border border-gray-600/25 bg-gray-800/50 hover:bg-gray-600 text-gray-300 font-quick py-2 px-6 rounded-lg transition duration-300 font-quick text-xs">
                  Download CV
                </div>
              </div>
            </FadeContent>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
