import { useContextThemeData } from "../contexts/ThemeContext";
import { Container } from "../styles/components/HeaderTheme.module";
import { ThemeName } from "../styles/themes";

interface HeaderProps {
  themeName: ThemeName;
  setThemeName: (newName: ThemeName) => void;
}

export const HeaderTheme: React.FC<HeaderProps> = ({
  themeName,
  setThemeName,
}) => {
  //const { getThemeName, themeName } = useContextThemeData();

  function toggleTheme() {
    setThemeName(themeName === "light" ? "dark" : "light");
  }
  return (
    <Container>
      <button onClick={toggleTheme}>
        {themeName === "light" ? "Escuro" : "Claro"}
      </button>
    </Container>
  );
};
