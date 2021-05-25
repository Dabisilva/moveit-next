import {
  Container,
  ButtonHome,
  ButtonIconHome,
  ButtonLeaderBoard,
  ButtonIconLeaderBoard,
} from "../styles/components/SideBar.module";
import Router from "next/router";

export interface SideBarProps {
  namePath?: string;
}

export function SideBar({ namePath }: SideBarProps) {
  function handleGoToHome() {
    Router.push("/profile");
  }
  function handleGoToLeaderBoard() {
    Router.push("/leaderboard");
  }
  return (
    <>
      <Container>
        <img src="/icons/SideBarLogo.svg" alt="logo" />

        <div>
          <ButtonHome
            onClick={handleGoToHome}
            className={namePath === "profile" ? "active" : ""}
          >
            <ButtonIconHome />
          </ButtonHome>
          <ButtonLeaderBoard
            onClick={handleGoToLeaderBoard}
            className={namePath === "leaderboard" ? "active" : ""}
          >
            <ButtonIconLeaderBoard />
          </ButtonLeaderBoard>
        </div>

        <div />
      </Container>
    </>
  );
}
