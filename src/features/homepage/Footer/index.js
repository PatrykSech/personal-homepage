import { Caption } from "../../../components/caption/index";
import { Email, Paragraph, Media } from "./styled";
import { ReactComponent as GithubIcon } from "../Images/Github.svg";
import { ReactComponent as InstagramIcon } from "../Images/Instagram_black.svg";
import { ReactComponent as LinkedinIcon } from "../Images/LinkedIN_black.svg";
import Facebook from "../Images/Facebook_black";


export const Footer = () => (
    <>
    <Caption content="Let's&nbsp;Talk" />
    <Email>Patryk@youcode.pl</Email>
    <Paragraph>I’m always open to new projects whenever I have the time. If you have a website, dashboard or mobile app in mind and need some help to make your ideas come to life, feel free to contact me 🤞</Paragraph>
    <Media>
        <Facebook />
        <GithubIcon />
        <InstagramIcon />
        <LinkedinIcon />
    </Media>
    </>
)