import {
  Container,
  ButtonHome,
  ButtonIconHome,
  ButtonLeadBoard,
  ButtonIconLeadBoard,
} from "../styles/components/SideBar.module";
import Router from "next/router";

export interface SideBarProps {
  namePath?: string;
}

export function SideBar({ namePath }: SideBarProps) {
  function handleGoToHome() {
    Router.push("/profile");
  }
  function handleGoToLeadBoard() {
    Router.push("/leadboard");
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
          <ButtonLeadBoard
            onClick={handleGoToLeadBoard}
            className={namePath === "leadboard" ? "active" : ""}
          >
            <ButtonIconLeadBoard />
          </ButtonLeadBoard>
        </div>

        <div />
      </Container>
    </>
  );
}
