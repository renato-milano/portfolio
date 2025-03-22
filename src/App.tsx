import "./App.css";
import { useRef } from "react";
import BlurText from "./TextAnimations/BlurText/BlurText";
import SplitText from "./TextAnimations/SplitText/SplitText";
// @ts-ignore
import RotatingText from "./TextAnimations/RotatingText/RotatingText";
import profile from "./assets/images/profile_full.jpg";
import FadeContent from "./Animations/FadeContent/FadeContent";
import telegramVideo from "./assets/videos/telegram.mp4";
import unityVideo from "./assets/videos/unity.mp4";
import ProjectCard from "./component/ProjectCard";
import githubLogo from "./assets/images/github-mark-white.svg";
import handsVideo from "./assets/videos/hands.mp4";
import MoreButton from "./component/ScrollButton";
import CoolPill from "./component/CoolPill";
function App() {
  const firstStep = useRef<HTMLDivElement>(null);
  const secondStep = useRef<HTMLDivElement>(null);
  const thirdStep = useRef<HTMLDivElement>(null);
  let hey = "Hello there!";
  let TitleClass = "text-white md:text-bigger text-[5vh] font-quick";
  let HeaderClass = "text-white md:text-bigger text-[3vh] font-quick";
  function handleAnimationComplete() {
    console.log("Animation completed!");
    setTimeout(() => {
      if (firstStep.current) {
        firstStep.current.scrollIntoView({ behavior: "smooth" });
      }
    }, 500);
    setTimeout(() => {
      if (secondStep.current) {
        secondStep.current.style.transition = "opacity 1.5s ease";
        secondStep.current.style.opacity = "0";
      }
    }, 3000);
    setTimeout(() => {
      if (thirdStep.current) {
        thirdStep.current.scrollIntoView({ behavior: "smooth" });
      }
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
      <div className="h-screen md:h-full">
        <div className="text-center flex flex-col justify-between items-center h-[90%] md:h-full">
          <div className="flex flex-col justify-center items-center">
            <FadeContent
              blur={true}
              delay={50}
              duration={1000}
              easing="ease-out"
              initialOpacity={0}
            >
              <style>
                {`
                  .grayscale-image {
                    filter: grayscale(100%);
                  }
                `}
              </style>
              <img
                src={profile}
                alt="hero"
                className="h-32 w-32 grayscale-image md:h-32 md:w-32 rounded-full object-cover  object-center"
              />
            </FadeContent>

            <SplitText
              text={"Hi, I'm Renato Milano"}
              className={HeaderClass}
              delay={50}
              animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
              animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
              threshold={0.2}
              rootMargin="-50px"
              onLetterAnimationComplete={() => {}}
            />
            <FadeContent
              blur={true}
              delay={250}
              duration={1000}
              easing="ease-out"
              className="flex flex-row justify-center items-center md:ml-15 ml-2"
              initialOpacity={0}
            >
              <span className="font-quick px-2 sm:px-2 md:text-2xl bg-transparent text-gray-100/70 overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg">
                Just a{" "}
              </span>
              <RotatingText
                texts={[
                  "Dream Maker",
                  "Solution Developer",
                  "Passionate Coder",
                  "Random Stupid Guy",
                ]}
                mainClassName=" font-quick md:w-[30vh] w-[18vh] md:text-2xl flex items-start justify-start bg-transparent text-gray-100/70 overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
                staggerFrom={"last"}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={2500}
              />
            </FadeContent>

            <FadeContent
              blur={true}
              delay={350}
              duration={1000}
              easing="ease-out"
              initialOpacity={0}
            >
              <div className="font-quick text-gray-400 text-[1.7vh] md:text-xl rounded-xl border-white  p-4 mt-10 [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:bg-black dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] col-span-6 md:col-span-3 lg:col-span-4">
                I'm a <span className="text-white">full-stack</span> developer
                passionate about building innovative and scalable solutions,
                from <span className="text-white">AI driven</span> applications
                to robust software architectures. I turn ideas into reality by
                combining modern technologies with a{" "}
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
                <div className="border border-gray-600/25 bg-gradient-to-r from-zinc-800 via-zinc-700 to-zinc-800 text-gray-100/75 font-quick py-2 px-6 rounded-lg transition duration-300 font-quick text-xs">
                  Download CV
                </div>
                <div className="border border-gray-600/25 bg-gradient-to-r from-zinc-800 via-zinc-700 to-zinc-800 text-gray-100/75 font-quick py-2 px-6 rounded-lg transition duration-300 font-quick text-xs">
                  Book a Call
                </div>
              </div>
            </FadeContent>
            <FadeContent
              className="mt-20"
              blur={true}
              delay={2000}
              duration={1000}
              easing="ease-out"
              initialOpacity={0}
            >
              <MoreButton />
            </FadeContent>
          </div>
        </div>
      </div>

      <div className="h-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10 h-[90%] md:items-center">
          <FadeContent
            blur={true}
            delay={150}
            duration={1000}
            easing="ease-out"
            initialOpacity={0}
          >
            <div className="w-full flex flex-col justify-start items-start">
              <p className="text-gray-200/50 font-quick text-[3vh]">
                Life is where i can <span className="text-white">build</span>{" "}
                and <span className="text-white">learn</span>
              </p>
            </div>
          </FadeContent>

          <FadeContent
            blur={true}
            delay={850}
            duration={1000}
            easing="ease-out"
            initialOpacity={0}
          >
            <ProjectCard
              title="Hand Recognigtion"
              video={handsVideo}
              buttonImage={githubLogo}
              description="Hand Detection Visualization made with P5.js and MediaPipe ML."
              buttonText="Source Code"
              technology={["Javascript", "P5.js", "ML", "MediaPipe"]}
              onButtonClick={() => {}}
            />
          </FadeContent>
          <FadeContent
            blur={true}
            delay={150}
            duration={1000}
            easing="ease-out"
            initialOpacity={0}
          >
            <div className="w-full flex flex-col justify-start items-start">
              <p className="text-gray-200/50 font-quick text-[3vh]">
                Constantly discovering{" "}
                <span className="text-white">new horizons.</span>
              </p>
            </div>
          </FadeContent>
          <FadeContent
            blur={true}
            delay={850}
            duration={1000}
            easing="ease-out"
            initialOpacity={0}
          >
            <ProjectCard
              title="FastAI"
              image="https://raw.githubusercontent.com/renato-milano/FastAI/refs/heads/main/public/banner.png"
              buttonImage={githubLogo}
              description="A skeleton for a React-based AI chatbot application using Groq. It provides a minimal yet extensible structure to build a chatbot UI and integrate it with Groq's API for AI-powered conversations."
              buttonText="Source Code"
              technology={["React", "Vite", "Groq", "TailwindCSS"]}
              onButtonClick={() => {}}
            />
          </FadeContent>
          <FadeContent
            blur={true}
            delay={150}
            duration={1000}
            easing="ease-out"
            initialOpacity={0}
          >
            <div className="w-full flex flex-col justify-start items-start">
              <p className="text-gray-200/50 font-quick text-[3vh]">
                Always seeking <span className="text-white">improvements.</span>
              </p>
            </div>
          </FadeContent>

          <FadeContent
            blur={true}
            delay={850}
            duration={1000}
            easing="ease-out"
            initialOpacity={0}
          >
            <ProjectCard
              title="SavingBot"
              video={telegramVideo}
              buttonImage={githubLogo}
              description="A Telegram bot that scans barcodes, identifies products, and finds the best online prices in real time."
              buttonText="Source Code"
              technology={[
                "Python",
                "TelegramAPI",
                "Selenium",
                "Network Protocols",
                "Deployed on Heroku",
              ]}
              onButtonClick={() => {}}
            />
          </FadeContent>

          <FadeContent
            blur={true}
            delay={150}
            duration={1000}
            easing="ease-out"
            initialOpacity={0}
          >
            <div className="w-full flex flex-col justify-start items-start">
              <p className="text-gray-200/50 font-quick text-[3vh]">
                Commitment matters,
                <span className="text-white"> passion leads.</span>
              </p>
            </div>
          </FadeContent>
          <FadeContent
            blur={true}
            delay={850}
            duration={1000}
            easing="ease-out"
            initialOpacity={0}
          >
            <ProjectCard
              title="Oblivion"
              video={unityVideo}
              buttonImage={githubLogo}
              description="A personal game development project in Unity, showcasing my passion for creating interactive experiences and understanding how things come to life."
              buttonText="Coming soon"
              technology={["C#", "Unity", "Blender", "Game Design"]}
              onButtonClick={() => {}}
            />
          </FadeContent>
        </div>
      </div>

      <div className="mt-10 border-t-1 grid grid-cols-1 md:grid-cols-2 border-gray-600/50">
        <FadeContent
          blur={true}
          delay={250}
          duration={1000}
          easing="ease-out"
          initialOpacity={0}
        >
          <div className="w-full mt-10 flex items-center flex-col">
            <p className="text-gray-200/50 font-quick text-[3vh]">
              Trying to improve and expand my
              <span className="text-white"> Tech Stack</span>
            </p>
          </div>
        </FadeContent>
        <div className="flex flex-wrap justify-center p-4 space-x-4 space-y-4 ">
          <CoolPill slug="html5" text="HTML" />
          <CoolPill slug="css3" text="CSS" />
          <CoolPill slug="javascript" text="Javascript" />
          <CoolPill slug="typescript" text="Typescript" />
          <CoolPill slug="react" text="ReactJS" />
          <CoolPill slug="react" text="React Native" />
          <CoolPill slug="tailwindcss" text="TailwindCSS" />
          <CoolPill slug="openai" text="OpenAI" />
          <CoolPill slug="python" text="Python" />
          <CoolPill slug="flask/ffffff" text="Flask" />
          <CoolPill slug="mysql" text="MySQL" />
          <CoolPill slug="unity" text="Unity" />
          <CoolPill slug="git" text="Git" />
          <CoolPill slug="github/ffffff" text="Github" />
          <CoolPill slug="heroku" text="Heroku"></CoolPill>
          <CoolPill slug="vercel/FFFFFF" text="Vercel"></CoolPill>
          <CoolPill slug="firebase" text="Firebase"></CoolPill>
          <CoolPill slug="supabase" text="Supabase"></CoolPill>
          <CoolPill slug="postman" text="Postman API"></CoolPill>
          <CoolPill slug="shopify" text="Shopify"></CoolPill>
          <CoolPill slug="prestashop" text="Prestashop"></CoolPill>
          <CoolPill slug="wordpress" text="Wordpress"></CoolPill>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 items-center mt-10 border-t-1 h-full border-gray-600/50">
        <FadeContent
          blur={true}
          delay={150}
          duration={1000}
          easing="ease-out"
          initialOpacity={0}
        >
          <div className="mt-10">
            <p className="text-gray-200/50 font-quick text-[3vh]">
              Let's bring
              <span className="text-white"> your idea to life!</span>
            </p>
          </div>
        </FadeContent>
        <FadeContent
          blur={true}
          delay={250}
          duration={1000}
          easing="ease-out"
          initialOpacity={0}
        >
          <div className="font-quick text-gray-400 text-[1.7vh] md:text-xl rounded-xl border-white p-4 mt-10 [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:bg-black dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]">
            Great <span className="text-white">ideas</span> deserve great{" "}
            <span className="text-white">execution.</span> Whether you need a
            full-stack application, an AI-powered solution, or custom software,
            I’m here to help turn your vision into reality. Let’s collaborate
            and build something amazing together. <br /> Get in touch, and{" "}
            <span className="text-white">let’s make it happen!</span>
            <div className="flex flex-row justify-end items-center mt-10 space-x-4">
              <div
                className="border border-gray-600/25 flex gap-4 font-quick py-1 px-6 items-center justify-center gap-2 rounded-xl bg-neutral-900 px5 py-2 shadow-[inset_0_2px_10px_#ffffff1f] rounded-lg transition duration-300 font-quick text-xs"
                onClick={() => {}}
              >
                Book a Call
              </div>
              <div
                className="border border-gray-600/25 flex gap-4 font-quick py-1 px-6 items-center justify-center gap-2 rounded-xl bg-neutral-900 px5 py-2 shadow-[inset_0_2px_10px_#ffffff1f] rounded-lg transition duration-300 font-quick text-xs"
                onClick={() => {}}
              >
                Contact Me
              </div>
            </div>
          </div>
        </FadeContent>
      </div>
    </>
  );
}

export default App;
