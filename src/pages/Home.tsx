import "../App.css";
import { useRef, useEffect } from "react";
import SplitText from "../TextAnimations/SplitText/SplitText";
// @ts-ignore
import RotatingText from "../TextAnimations/RotatingText/RotatingText";
import profile from "../assets/images/profile_full.jpg";
import FadeContent from "../Animations/FadeContent/FadeContent";
import telegramVideo from "../assets/videos/telegram.mp4";
import unityVideo from "../assets/videos/unity.mp4";
import ProjectCard from "../component/ProjectCard";
import githubLogo from "../assets/images/github-mark-white.svg";
import handsVideo from "../assets/videos/hands.mp4";
import MoreButton from "../component/ScrollButton";
import CoolPill from "../component/CoolPill";
// @ts-ignore
import ClientsGallery from "../component/ClientsGallery";
import NavBar from "../component/NavBar";
import { useNavigate } from "react-router-dom";

function Home() {
  const thirdStep = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  useEffect(() => {
    document.documentElement.classList.add("dark"); // Forza il tema scuro
    localStorage.setItem("theme", "dark"); // Imposta il tema salvato
  }, []);
  let HeaderClass = "text-white md:text-bigger text-[3vh] font-quick";
  return (
    <div className="bg-black dark px-[2rem]">
      <NavBar show={true}></NavBar>
      <div ref={thirdStep} id="Home" className="h-12"></div>
      <div className="h-screen md:h-full">
        <div className="text-center flex flex-col justify-between items-center h-[90%] md:h-full">
          <div className="flex flex-col md:mt-[3vh] lg:mt-[2vw] md:mt-20 mt-8 justify-center items-center">
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
                className="md:h-[20vh] md:w-[20vh] w-32 h-32 grayscale-image md:mt-[1vh] rounded-full object-cover  object-center"
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
              className="flex flex-col md:flex-row justify-center items-center  "
              initialOpacity={0}
            >
              <span className="font-quick xl:pl-[5vw] md:pl-[8vw] lg:pl-[10vw] px-2 sm:px-2 md:text-2xl bg-transparent text-gray-100/70 overflow-hidden py-0.5 sm:py-1  justify-center rounded-lg">
                Just a{" "}
              </span>
              <RotatingText
                texts={[
                  "Software Engineer",
                  "Solution Developer",
                  "AI Enthusiast",
                  "Creative Thinker",
                  "Dream Maker",
                  "Passionate Coder",
                  "Pizza Eater",
                ]}
                mainClassName=" font-quick md:w-[31vh] lg:w-[35vh] md:text-2xl flex items-start justify-start bg-transparent text-gray-100/70 overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
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
              <div className="font-quick text-gray-400 text-[1.7vh] md:text-3xl rounded-xl border-white  p-4 mt-5 lg:mt-[0vw] xl:mt-[1vw] md:mt-10 transform-gpu bg-black">
                I help founders turn <span className="text-white">ideas</span>{" "}
                into creative and functional
                <span className="text-white"> solutions.</span>
              </div>
            </FadeContent>
            <FadeContent
              blur={true}
              delay={350}
              duration={1000}
              easing="ease-out"
              initialOpacity={0}
            >
              <div className="font-quick text-gray-400 text-[1.7vh] md:text-xl rounded-xl border-white  p-4 mt-5 lg:mt-[1vw] transform-gpu bg-black [border:1px_solid_rgba(255,255,255,.1)] [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] col-span-6 md:col-span-3 lg:col-span-4">
                I'm a <span className="text-white">full-stack</span> software
                engineer passionate about building innovative and scalable
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
              <div className="flex flex-row justify-center items-center mt-5 lg:mt-[1vw] space-x-4">
                <div
                  onClick={() => {
                    navigate("/BookCall", { replace: true });
                  }}
                  className="border border-gray-600/25 bg-gradient-to-r from-zinc-800 via-zinc-700 to-zinc-800 text-gray-100/75 font-quick py-2 px-6 rounded-lg transition duration-300 font-quick text-xs"
                >
                  Book a Call
                </div>
              </div>
            </FadeContent>
            <FadeContent
              className="mt-17 lg:mt-[5vw] xl:mt-[1.5vw] pb-40"
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-5 h-[90%] md:items-center">
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
            delay={650}
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
              onButtonClick={() => {window.open('https://github.com/renato-milano', '_blank');}}
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
            delay={650}
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
              onButtonClick={() => {window.open('https://github.com/renato-milano', '_blank');}}
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
            delay={650}
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
              onButtonClick={() => {window.open('https://github.com/renato-milano', '_blank');}}
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
            delay={650}
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
              onButtonClick={() => {window.open('https://github.com/renato-milano', '_blank');}}
            />
          </FadeContent>
        </div>
      </div>
      <FadeContent
        blur={true}
        delay={250}
        duration={1000}
        easing="ease-out"
        initialOpacity={0}
      >
        <div className="mt-10 h-full w-full grid grid-cols-1 lg:grid-cols-2 items-center bg-black grid border-gray-600/50 ">
          <div className=" mt-10">
            <ClientsGallery />
          </div>
          <div className=" mt-10 text-gray-200/50 font-quick md:text-[3vh] text-[2vh] md:pl-10 bg-black">
            Effective <span className="text-white">communication</span> and
            constant <span className="text-white">collaboration</span> are at
            the heart of my work. I believe that great results come from open
            dialogue, shared ideas, and a strong team spirit. By fostering clear
            and proactive interactions, I ensure that every project runs
            <span className="text-white"> smoothly and successfully.</span>
          </div>
        </div>
      </FadeContent>
      <div className="mt-15 grid grid-cols-1 md:grid-cols-2 border-gray-600/50">
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
          <CoolPill slug="expo/ffffff" text="Expo" />
          <CoolPill slug="android" text="Android JDK" />
          <CoolPill slug="tailwindcss" text="TailwindCSS" />
          <CoolPill slug="openai" text="OpenAI" />
          <CoolPill slug="coffeescript/ffffff" text="Java"></CoolPill>
          <CoolPill slug="selenium/ffffff" text="Selenium" />
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
          <div className="font-quick text-gray-400 text-[1.7vh] md:text-xl rounded-xl border-white p-4 mt-10  transform-gpu bg-black [border:1px_solid_rgba(255,255,255,.1)] [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]">
            Great <span className="text-white">ideas</span> deserve great{" "}
            <span className="text-white">execution.</span> Whether you need a
            full-stack application, an AI-powered solution, or custom software,
            I’m here to help turn your vision into reality. Let’s collaborate
            and build something amazing together. <br /> Get in touch, and{" "}
            <span className="text-white">let’s make it happen!</span>
            <div className="flex flex-row justify-end items-center mt-10 space-x-4">
              <div
                className="border border-gray-600/25 flex gap-4 font-quick py-1 px-6 items-center justify-center gap-2 rounded-xl bg-neutral-900 px5 py-2 shadow-[inset_0_2px_10px_#ffffff1f] rounded-lg transition duration-300 font-quick text-xs"
                onClick={() => {
                  navigate("/BookCall", { replace: true });
                }}
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
    </div>
  );
}

export default Home;
