
import { InlineWidget } from "react-calendly";
import { useEffect } from "react";
import NavBar from '../component/NavBar';
import "./call.css";
function BookCall() {

    useEffect(()=>{
        window.scrollTo(0, 0);
    },[])

  return (
<div className="flex flex-col items-center justify-center w-full h-full bg-black">
<style>
    #root{

    }

</style>
<NavBar show={true}></NavBar>
<div className="mt-30 mb-5 flex w-full flex-col items-center text-balance font-quick">
<p className="flex items-center text-3xl font-bold md:text-7xl">Book a call
<svg className="mx-4 hidden size-12 rotate-12 rounded-lg drop-shadow-lg md:block md:size-20" xmlns="http://www.w3.org/2000/svg" aria-label="Google Meet" role="img" viewBox="0 0 512 512">
<rect width="512" height="512" rx="15%" fill="#ffffff">
</rect>
<path d="M166 106v90h-90" fill="#ea4335">
</path>
<path d="M166 106v90h120v62l90-73v-49q0-30-30-30" fill="#ffba00">
</path>
<path d="M164 406v-90h122v-60l90 71v49q0 30-30 30" fill="#00ac47">
</path>
<path d="M286 256l90-73v146" fill="#00832d">
</path>
<path d="M376 183l42-34c9-7 18-7 18 7v200c0 14-9 14-18 7l-42-34" fill="#00ac47">
</path>
<path d="M76 314v62q0 30 30 30h60v-92" fill="#0066da">
</path>
<path d="M76 196h90v120h-90" fill="#2684fc">
</path>
</svg>
</p>
<p className="my-4 text-center text-lg text-balance text-white/65 md:text-2xl">If any of the times don't work for you,
<br className="hidden md:block"/>j ust shoot me an 
<a href="mailto:renatomilanodevgmail.com?subject=Let's%20catch%20up%20for%20a%20cool%20opportunity!" target="_blank" rel="noopener noreferrer" className="group inline-block transition-all duration-300 hover:text-white">
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={"2"} strokeLinecap={"round"} stroke-strokeLinejoin="round" className="lucide lucide-mail mx-2 inline-block size-8 -rotate-12 text-white transition-all duration-300 group-hover:scale-110 group-hover:-rotate-6">
<rect width="20" height="16" x="2" y="4" rx="2">
</rect>
<path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7">
</path>
</svg><span className='text-white'>email!</span>
</a>
</p>
<button className="flex items-center gap-2 py-3 font-light outline-hidden transition-all duration-300 cursor-pointer hover:text-white/90 text-xl text-white/85 md:text-2xl">
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={"2"} strokeLinecap={"round"} stroke-strokeLinejoin="round" className="lucide lucide-copy">
<rect width="14" height="14" x="8" y="8" rx="2" ry="2">
</rect>
<path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2">
</path>
</svg>renatomilanodev@gmail.com
</button>
</div>
<div className=' w-[100vw] flex justify-start items-start'>
<InlineWidget styles={{width:"100vw",height:"100vh", padding:"0px",margin:"0px"}} pageSettings={{  backgroundColor: '000',
  hideEventTypeDetails: false,
  hideLandingPageDetails: false,
  primaryColor: '00a2ff',
  textColor: 'ffffff',
   }} url="https://calendly.com/renatomilanodev" />

</div>
</div>
  )
}

export default BookCall