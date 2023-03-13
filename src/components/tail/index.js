import { Container, List, ListItem, SubHeader } from "./styled";

export const Tail = ({ title }) => (
    <Container>
        <SubHeader>
            {title}
        </SubHeader>
        <List>
            <ListItem>Coś</ListItem>
            <ListItem>Coś</ListItem>
            <ListItem>Coś</ListItem>
            <ListItem>Coś</ListItem>
            <ListItem>Coś</ListItem>
            <ListItem>Coś</ListItem>
        </List>
    </Container>
)