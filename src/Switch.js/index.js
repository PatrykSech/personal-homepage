import { useState } from "react";

function Switch({ toggleTheme }) {
    const [isToggled, setIsToggled] = useState(false);

    const onToggle = () => {
        setIsToggled(!isToggled)
        toggleTheme();
    };

    return (
        <button onClick={onToggle}>Zmień tło</button>
    )
}

export default Switch;