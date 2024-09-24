import React from "react";
import PinkNeonText from "./PinkNeonText";

const AboutUs: React.FC = () => {
    return (
        
        <div className="w-full h-fit pl-96 pr-96 pt-24 pd-24 ">
            
            <div className="flex flex-col gap-10">
                <h1 className="text-6xl text-center">ABOUT US</h1>
                <div>
                    <PinkNeonText text="Who are we?" size="3xl" />
                    <span>
                    At Baddie Bash Presents, we are dedicated to creating empowering, inclusive, 
                    and exhilarating event experiences exclusively for women. As an all-female-led 
                    company, we celebrate the diverse talents of female DJs, vendors, and creatives 
                    by curating events that prioritize safety, connection, and joy. Our mission extends 
                    beyond the dance floor: every event contributes to meaningful change by donating $1 
                    from every ticket sold to a different charity each time. To date, we have supported 
                    the American Foundation for Suicide Prevention and the Florida Alliance Against Human 
                    Trafficking. such as the American Foundation for Suicide Prevention and the Florida 
                    Alliance Against Human Trafficking. Join us as we uplift and unite women, championing 
                    both individual empowerment and collective impact.
                    </span>
                </div>    
                <div>
                    <PinkNeonText text="How did this business come about?" size="3xl" />
                    <span>
                    Baddie Bash Presents began as part of our senior capstone class at the University of 
                    Central Florida’s Rosen College. To graduate with our degree, we were required to 
                    successfully execute an event for this class. Having collaborated on our school's 
                    inaugural entertainment festival the semester before, we already had a strong team 
                    dynamic and a shared passion for event planning.

                    Initially, our vision was focused solely on EDM shows. However, our idea evolved into 
                    creating an all-girls party, and eventually, we decided to incorporate philanthropy to 
                    give back to the community. This shift was driven by our desire to make a positive 
                    impact while celebrating the empowerment of women.

                    Our journey began with our first event at Celine Orlando on April 11, 2024. The 
                    success and positive feedback we received encouraged us to turn this school project 
                    into a formal LLC just two months later. Today, Baddie Bash Presents is dedicated to 
                    hosting empowering events for women and supporting different charities with each event 
                    we hold.

                    We’re excited to continue creating unforgettable experiences and contributing to 
                    meaningful causes. Thank you for being a part of our journey!
                    </span>
                </div>
            </div>
            
        </div>
    );
};

export default AboutUs;