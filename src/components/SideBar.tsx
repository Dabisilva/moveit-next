import Link from "next/link";
import {
  Container,
  IconHome,
  IconLeaderBoard,
} from "../styles/components/SideBar.module";

export interface SideBarProps {
  namePath?: string;
}

export function SideBar({ namePath }: SideBarProps) {
  return (
    <>
      <Container>
        <img src="/icons/SideBarLogo.svg" alt="logo" />

        <div>
          <Link href="/home">
            <a className={namePath === "home" ? "active" : ""}>
              <IconHome />
            </a>
          </Link>
          <Link href="/leaderboard">
            <a className={namePath === "leaderboard" ? "active" : ""}>
              <IconLeaderBoard />
            </a>
          </Link>
        </div>

        <div />
      </Container>
    </>
  );
}
