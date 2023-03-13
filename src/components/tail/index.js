import { Container, List, ListItem, SubHeader } from "./styled";

export const Tail = ({ title, body }) => (
    <Container>
        <SubHeader>
            {title}
        </SubHeader>
        {body}
    </Container>
)