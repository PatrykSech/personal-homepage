import { Caption } from "../../../components/caption/index";
import { Email, Paragraph, Media } from "./styled";
import Facebook from "../Images/Facebook";
import GitHub from "../Images/Github";
import Instagram from "../Images/Instagram";
import Linkedin from "../Images/Linkedin";


export const Footer = () => (
    <>
    <Caption content="Let's&nbsp;Talk" />
    <Email>Patryk@youcode.pl</Email>
    <Paragraph>I’m always open to new projects whenever I have the time. If you have a website, dashboard or mobile app in mind and need some help to make your ideas come to life, feel free to contact me 🤞</Paragraph>
    <Media>
        <Facebook />
        <GitHub />
        <Instagram />
        <Linkedin />
    </Media>
    </>
)