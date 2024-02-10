
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { NavBar, Content, ProofOne, Pitch, Pricing, Testimonials, Footer } from "./component";
import PhoneImage from "../../Assets/Images/hero.jpg"
import "../Styles/index.css";



export default function Home(){

    const [isMenuOpen,setMenuIsOpen] = useState(false);
    const bodyRef = useRef(document.body);
    const appRef = useRef(document.getElementById("app"));
    const containerRef = useRef(document.getElementById("container"));

    function toggleScrollability(MenuisOpen = false){
        bodyRef.current.style.overflowY = MenuisOpen ? "hidden" : "scroll";
        appRef.current.style.overflow = MenuisOpen ? "hidden" : "scroll";

        setMenuIsOpen(function(init){
            return  !init
        });

    }

    return <motion.div id="HomeDiv" className={isMenuOpen ? "noScroll":""}>
                <NavBar scrollToggleFunc={toggleScrollability}/>
                <Content/>
                <ProofOne bankLogos={[]}/>
                <Pitch/>
                <Pricing/>
                <Testimonials testimonials={[PhoneImage,PhoneImage,PhoneImage]} />
                <Footer/>
           </motion.div>
}