import {
  createContext,
  useState,
  ReactNode,
  useContext,
  useEffect,
} from "react";
import challenges from "../../challenges.json";
import { LevelUpModal } from "../components/LevelUpModal";
import { parseCookies, setCookie } from "nookies";

interface ChallengesProviderProps {
  children: ReactNode;
}

interface Challenge {
  type: "body" | "eye";
  description: string;
  amount: number;
}

interface ChallengesContextData {
  level: number;
  levelUp: () => void;
  currentExperience: number;
  challengesCompleted: number;
  startNewChallenge: () => void;
  startNormalChallenge: () => void;
  resetChallenge: () => void;
  completChallenge: () => void;
  completChallengeNormal: () => void;
  closeLevelUpModal: () => void;
  activeChallenge: Challenge;
  experienceToNextLevel: number;
  isLevelUpModalOpen: boolean;
}

export const ChallengesContext = createContext({} as ChallengesContextData);

export function ChallengesProvider({ children }: ChallengesProviderProps) {
  const {
    "moveit:level": cookieLevel,
    "moveit:currentExperience": cookieCurrentExperience,
    "moveit:challengesCompleted": cookieChallengeCompleted,
  } = parseCookies();

  const [level, setLevel] = useState<number>(Number(cookieLevel));
  const [currentExperience, setCurrentExperience] = useState<number>(
    Number(cookieCurrentExperience)
  );
  const [challengesCompleted, setChallengesCompleted] = useState<number>(
    Number(cookieChallengeCompleted)
  );
  const [activeChallenge, setActiveChallenge] = useState(null);

  const [isLevelUpModalOpen, setIsLevelUpModalOpen] = useState(false);

  const experienceToNextLevel = Math.pow((level + 1) * 4, 2);

  useEffect(() => {
    Notification.requestPermission();
  }, []);

  useEffect(() => {
    setCookie(undefined, "moveit:level", String(level));
    setCookie(undefined, "moveit:currentExperience", String(currentExperience));
    setCookie(
      undefined,
      "moveit:challengesCompleted",
      String(challengesCompleted)
    );
  }, [level, currentExperience, challengesCompleted]);

  function levelUp() {
    setLevel(level + 1);
    setIsLevelUpModalOpen(true);
  }

  function closeLevelUpModal() {
    setIsLevelUpModalOpen(false);
  }

  function startNewChallenge() {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length);

    const challenge = challenges[randomChallengeIndex];

    setActiveChallenge(challenge);

    new Audio("/notification.mp3").play();

    if (Notification.permission === "granted") {
      new Notification("Novo desafio 🚀", {
        body: `Valendo ${challenge.amount}xp!`,
      });
    }
  }

  function resetChallenge() {
    setActiveChallenge(null);
  }

  function completChallenge() {
    if (!activeChallenge) {
      return;
    }

    const { amount } = activeChallenge;
    let finalExperience = currentExperience + amount;

    if (finalExperience >= experienceToNextLevel) {
      finalExperience = finalExperience - experienceToNextLevel;
      levelUp();
    }

    setCurrentExperience(finalExperience);
    setChallengesCompleted(challengesCompleted + 1);
    setActiveChallenge(null);
  }

  function startNormalChallenge() {
    if (activeChallenge) {
      return;
    } else {
      setActiveChallenge("challenge");
    }
  }

  function completChallengeNormal() {
    if (!activeChallenge) {
      return;
    }

    let finalExperience = currentExperience + 80;

    if (finalExperience >= experienceToNextLevel) {
      finalExperience = finalExperience - experienceToNextLevel;
      levelUp();
    }

    setCurrentExperience(finalExperience);
    setChallengesCompleted(challengesCompleted + 1);
    setActiveChallenge(null);
  }

  return (
    <ChallengesContext.Provider
      value={{
        level,
        levelUp,
        currentExperience,
        challengesCompleted,
        startNewChallenge,
        startNormalChallenge,
        activeChallenge,
        resetChallenge,
        experienceToNextLevel,
        completChallenge,
        completChallengeNormal,
        isLevelUpModalOpen,
        closeLevelUpModal,
      }}
    >
      {children}
      {isLevelUpModalOpen && <LevelUpModal />}
    </ChallengesContext.Provider>
  );
}

export function useContextChallengerData() {
  const context = useContext(ChallengesContext);

  return context;
}
