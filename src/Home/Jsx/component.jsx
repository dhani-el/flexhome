import { motion } from "framer-motion";

import PhoneImage from "../../Assets/Images/hero.jpg"
import smallLogo from "../../Assets/Images/1x/Logo.png"
import mediumLogo from "../../Assets/Images/2x/Logo.png"
import largeLogo from "../../Assets/Images/3x/Logo.png"
import XlargeLogo from "../../Assets/Images/4x/Logo.png"

export function NavBar(){
    return <motion.div id="NavBar" >
                <LogoComp/>
                <NavList/>
                <HamBurgerMenu/>
            </motion.div>
}

function LogoComp(){
    return <motion.div id="LogoComp" >
                <motion.picture>
                    <motion.source   />
                    <motion.img  />
                </motion.picture>
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
                    <motion.div id="landscapeTextContainer">
                    <motion.p id="landscapeTextContainerHeadingP">
                        Sync and Monitor all your Bank Accounts.
                    </motion.p>
                    <motion.p id="landscapeTextContainerBodyP">
                        Sync multiple bank accounts and leave the rest to Trakka. Automatic tracking and monitoring of your account funds with weekly updates. No thinking, no hassle.
                    </motion.p>
                    </motion.div>
                    <motion.div id="pitchDivContentDivImageDiv">
                        <motion.img src={PhoneImage} id="pitchDivContentDivImageDivImg"/>
                    </motion.div>
                </motion.div>
        </motion.div>
}

export function Pricing(){
    return <motion.div id="pricingDiv">
                <motion.p id="pricingDivP">Same Price as a Bottle of Coke.</motion.p>
                <motion.div id="pricingDivContentDiv">
                    <CardOne/>
                    <CardTwo/>
                </motion.div>
            </motion.div>
}

function CardOne(){
    return  <motion.div id="CardOne">
                <motion.p id="CardOneTopLeftP">Pricing</motion.p>
                <motion.div id="CardOneContentDiv">
                    <motion.span id="CardOneContentDivSpan">
                        <motion.p id="CardOneContentDivSpanAmountP">₦500</motion.p>
                        <motion.p id="CardOneContentDivSpanMoP">/mo</motion.p>
                    </motion.span>
                    <motion.p id="CardOneContentDivMainPContent">
                        Unlock an untethered experience. Sync multiple bank accounts, set custom time periods for your budgets, get automatic account refreshes daily and more.
                    </motion.p>
                </motion.div>
            </motion.div>
}

function CardTwo(){
    return  <motion.div id="CardTwoDiv">
                <motion.div id="textsContainer">
                    <motion.p id="CardTwoDivSignalP">Try a Free Account</motion.p>
                    <motion.p id="CardTwoDivContentP">You don't have to pay right away. Sign up, sync an account and take it for a spin,</motion.p>
                </motion.div>
                <motion.div id="CardTwoDivImageDiv">
                    <motion.img src={PhoneImage} id="CardTwoDivImageDivImg"/>
                </motion.div>
            </motion.div>
}

export function Testimonials({testimonials}){
    return <motion.div id="testimonialsDiv">
                <motion.p id="testimonialsDivHeaderP">See What Our Users are Saying.</motion.p>
                <motion.div id="testimonialsDivMainContentDiv">
                    <motion.div id="testimonialsDivMainContentDivTopFader"></motion.div>
                    <motion.div id="testimonialsDivMainContentDivBottomFader"></motion.div>
                    <motion.div id="testimonialsDivMainContentDivTestimonialDiv">
                        {testimonials.map(function(testimonial){
                            return <Atestimonial testimonial={testimonial}/>
                        })}
                    </motion.div>
                </motion.div>
            </motion.div>
}

function Atestimonial({testimonial}){
    return <motion.div id="atestimonialDiv">
                <motion.img src={testimonial} id="atestimonialDivImg" />
            </motion.div>
}

export function Footer(){
    return <motion.div id="footerContainer">
                footer design
            </motion.div>
}