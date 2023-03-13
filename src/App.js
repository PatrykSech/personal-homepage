import { ThemeProvider } from "styled-components";
import { Tail } from "./components/tail/index";
import { About } from "./features/homepage/About/index"
import { theme } from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
    <main>
      <div>
        <About name="Patryk Sech" about="👨🏻‍💻💻 I’m a passionate Frontend Developer in love with React, currently looking for new job opportunities"/>
        <Tail title="My skillset includes 🛠️"/>
        <Tail title="What I want to learn next 🚀"/>
      </div>
    </main>
    </ThemeProvider>
  );
}

export default App;