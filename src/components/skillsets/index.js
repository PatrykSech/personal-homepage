import { List, ListItem } from "./styled"

export const CreateListSkillset = () => {
    const skillset = [
        {content: "Semantic & accessible HTML"},
        {content: "Responsive Web Design"},
        {content: "CSS Grid"},
        {content: "CSS Flexbox"},
        {content: "CSS BEM convention"},
        {content: "Styled Components"},
        {content: "JavaScript: ES6+"},
        {content: "Immutability"},
        {content: "Working with API (fetch, axios)"},
        {content: "Promises, Async/Await"},
        {content: "Error handling"},
        {content: "React"},
        {content: "React Hooks"},
        {content: "React Router"},
        {content: "Redux (Toolkit)"},
        {content: "Redux-Saga"},
        {content: "NPM"},
        {content: "Teamwork"},
        {content: "Git"},
        {content: "GitHub Pull Requests & Review"},
        {content: "Trello"},
        {content: "Scrum"},
        {content: "Markdown"},
      ];

    return (
        <List>
            {skillset.map(skill => (
                <ListItem>
                    {skill.content}
                </ListItem>
            ))}
        </List>
    )
}

// https://api.github.com/users/PatrykSech/repos