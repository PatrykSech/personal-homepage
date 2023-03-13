import { Button, Caption, Container, Header, Paragraph, Image, ButtonContent } from "./styled";

export const About = ({name, about}) => (
    <Container>
        <Image src='https://i.postimg.cc/NMW2KtLd/me-web.png' alt='photo of me'/>
        <div>
            <Caption>This&nbsp;is</Caption>
            <Header>{name}</Header>
            <Paragraph>{about}</Paragraph>
            <Button>
                <svg width="19.23" height="17.12" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.2676 6.56116L12.0022 9.99543C11.1949 10.6283 10.0634 10.6283 9.25616 9.99543L4.9541 6.56116" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.88787 1H15.3158C16.6752 1.01525 17.969 1.58993 18.896 2.5902C19.823 3.59048 20.3022 4.92903 20.222 6.29412V12.822C20.3022 14.1871 19.823 15.5256 18.896 16.5259C17.969 17.5262 16.6752 18.1009 15.3158 18.1161H5.88787C2.96796 18.1161 1 15.7407 1 12.822V6.29412C1 3.37545 2.96796 1 5.88787 1Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                <ButtonContent>Hire Me</ButtonContent>
            </Button>
        </div>
    </Container>
);