import { ThemeProvider } from "styled-components";
import { CreateListSkillset } from "./components/skillsets";
import { Tail } from "./components/tail/index";
import { CreateListToLearn } from "./components/tolearn";
import { About } from "./features/homepage/About/index"
import { Portfolio } from "./features/homepage/Portfolio";
import { theme } from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
    <main>
      <div>
        <About name="Patryk Sech" about="👨🏻‍💻💻 I’m a passionate Frontend Developer in love with React, currently looking for new job opportunities"/>
        <Tail title="My skillset includes 🛠️" body={<CreateListSkillset />}/>
        <Tail title="What I want to learn next 🚀" body={<CreateListToLearn />}/>
        <Portfolio />
      </div>
    </main>
    </ThemeProvider>
  );
}

export default App;