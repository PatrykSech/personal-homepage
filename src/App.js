import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { CreateListSkillset } from "./components/skillsets";
import { Tail } from "./components/tail/index";
import { CreateListToLearn } from "./components/tolearn";
import { About } from "./features/homepage/About/index"
import { Footer } from "./features/homepage/Footer/index";
import { Portfolio } from "./features/homepage/Portfolio";
import { lightTheme } from "./lightTheme";
import { darkTheme } from "./darkTheme";
import { GlobalStyle } from "./GlobalStyle";
import Switch from "./Switch.js";

function App() {
  const [theme, setTheme] = useState("light");
  const isDarkTheme = theme === "dark";

  const toggleTheme = () => {
    setTheme(isDarkTheme ? "light" : "dark")
  }

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <GlobalStyle />
    <main>
      <div>
        <Switch toggleTheme={toggleTheme} isDarkTheme={isDarkTheme}/>
        <About name="Patryk Sech" about="👨🏻‍💻💻 I’m a passionate Frontend Developer in love with React, currently looking for new job opportunities"/>
        <Tail title="My skillset includes 🛠️" body={<CreateListSkillset />}/>
        <Tail title="What I want to learn next 🚀" body={<CreateListToLearn />}/>
        <Portfolio />
        <Footer />
      </div>
    </main>
    </ThemeProvider>
  );
}

export default App;