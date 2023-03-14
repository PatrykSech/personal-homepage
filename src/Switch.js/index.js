import { useState } from "react";
import { Toggle } from "./styled";

function Switch({ toggleTheme, isDarkTheme }) {
    const [isToggled, setIsToggled] = useState(isDarkTheme);

    const onToggle = () => {
        setIsToggled(!isToggled)
        toggleTheme();
    };

    return (
        <Toggle onClick={onToggle} isDarkTheme={isDarkTheme}/>
    )
}

export default Switch;
