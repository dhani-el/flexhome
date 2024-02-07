
import { motion } from "framer-motion";

import { NavBar, Content, ProofOne, Pitch, Testimonials, CallToActionSection, Footer } from "./component";
import "../Styles/index.css";
import PhoneImage from "../../Assets/Images/hero.jpg"



export default function Home(){
    return <motion.div id="HomeDiv">
                <NavBar/>
                <Content/>
                <ProofOne bankLogos={[]}/>
                <Pitch/>
                <Testimonials testimonials={[]} />
                <CallToActionSection/>
                <Footer/>
            </motion.div>
}