
import { motion } from "framer-motion";

import { NavBar, Content, ProofOne, Pitch, Pricing, Testimonials, Footer } from "./component";
import "../Styles/index.css";
import PhoneImage from "../../Assets/Images/hero.jpg"



export default function Home(){
    return <motion.div id="HomeDiv">
                <NavBar/>
                <Content/>
                <ProofOne bankLogos={[]}/>
                <Pitch/>
                <Pricing/>
                <Testimonials testimonials={[PhoneImage,PhoneImage,PhoneImage]} />
                <Footer/>
            </motion.div>
}