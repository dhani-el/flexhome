import { motion } from "framer-motion";

import PhoneImage from "../../Assets/Images/hero.jpg"

export function NavBar(){
    return <motion.div id="NavBar" >
                <LogoComp/>
                <NavList/>
                <HamBurgerMenu/>
            </motion.div>
}

function LogoComp(){
    return <motion.div id="LogoComp" >
                {/* <motion.picture>
                </motion.picture> */}
                <p>DUMMY LOGO</p>
            </motion.div>
}

function NavList(){
    return <motion.div id="NavList" >
                <motion.p id="NavListPAbout" >About</motion.p>
                <motion.p id="NavListPLogin" >Login</motion.p>
            </motion.div>
}

function HamBurgerMenu(){
    return <motion.div id="hamburgerMenuDiv">
                <p>Menu</p>
            </motion.div>
}

function MobileMenu(){
    return <motion.div id = "mobileMenuDiv">
                <motion.p id="mobileMenuDivPAbout" >About</motion.p>
                <motion.p id="mobileMenuDivPLogin" >Login</motion.p>
            </motion.div>
}

export function Content(){
    return <motion.div id="contentDiv">
                <IntroText/>
                <IntroImage/>
    </motion.div>
}

function IntroText(){
    return <motion.div id="introtextDiv" >
                <motion.p id="introtextDivHeadP">
                    Personal Finance Has Never Being Simpler to <motion.span id="contentDivMainPTextSpan">Track</motion.span>
                </motion.p>
                <motion.p id="introtextDivBodyP">
                        PiggyDash is the all you need personal finance tracking tool that helps you comprehensively track your finances, by tracking how you spend and provide you with the best budgeting and finance predicting algorithims to help you decide how to utilize your money.
                </motion.p>
    </motion.div>
}

function IntroImage(){
    return <motion.div id="introImageDiv">
            <motion.img src={PhoneImage} alt="device showcasing webapp" id="introImageDivImg" />
    </motion.div>
}

export function ProofOne({bankLogos}){
    return <motion.div id="ProofOneDiv">
                <motion.p id="ProofOneDivMainP">
                    Integrated with Banks you Trust.
                </motion.p>
                <motion.div id="ProofOneDivSubDiv">
                    <motion.div id="ProofOneDivSubDivBankLogos">
                        {bankLogos.map(function(logo){
                            return <motion.div id="singleLogoDiv">
                                        <motion.img src={logo} id="singleLogoDivImmg" />
                                    </motion.div>
                        })}
                    </motion.div>
                    <motion.div id="moreDiv">
                        <motion.p id="moreDivPPlus">25+</motion.p>
                        <motion.p id="moreDivPMore">More.</motion.p>
                    </motion.div>
                </motion.div>
            </motion.div>
}

export function Pitch(){
    return <motion.div id="pitchDiv">
                <motion.p id="pitchDivMainP">Track your Spendings and Manage your Finances Well</motion.p>
                <motion.div id="pitchDivContentDiv">
                    <motion.p id="pitchDivContentDivHeadingP">
                        Sync and Monitor all your Bank Accounts.
                    </motion.p>
                    <motion.p id="pitchDivContentDivBodyP">
                        Sync multiple bank accounts and leave the rest to Trakka. Automatic tracking and monitoring of your account funds with weekly updates. No thinking, no hassle.
                    </motion.p>
                    <motion.div id="pitchDivContentDivImageDiv">
                        <motion.img src={PhoneImage} id="pitchDivContentDivImageDivImg"/>
                    </motion.div>
                </motion.div>
        </motion.div>
}

export function Pricing(){
    return <motion.div id="pricingDiv">
                <motion.h2 id="pricingDivH2">Same Price as a Bottle of Coke.</motion.h2>
                <motion.div id="pricingDivContentDiv">
                    pricing Body design
                </motion.div>
            </motion.div>
}

export function Testimonials({testimonials}){
    return <motion.div id="testimonialsDiv">
                {testimonials.map(function(testimonial){
                    return <Atestimonial testimonial={testimonial}/>
                })}
            </motion.div>
}

function Atestimonial({testimonial}){
    return <motion.div id="atestimonialDiv">
            </motion.div>
}

export function CallToActionSection(){
    return <motion.div id="callToActionDiv">
                call to action design section
            </motion.div>
}

export function Footer(){
    return <motion.div id="footerContainer">
                footer design
            </motion.div>
}