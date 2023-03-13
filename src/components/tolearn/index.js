import { List, ListItem } from "./styled"

export const CreateListToLearn = () => {
    const tolearn = [
        {content: "React Context"},
        {content: "Cypress"},
        {content: "TypeScript"},
        {content: "Node.js"},
        {content: "Unit testing"},
        {content: "JS classes"},
      ];

    return (
        <List>
            {tolearn.map(learn => (
                <ListItem>
                    {learn.content}
                </ListItem>
            ))}
        </List>
    )
}