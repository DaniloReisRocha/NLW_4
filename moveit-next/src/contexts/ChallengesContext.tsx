import React from "react";
import challenges from "../../challenges.json";

export enum ChallengeType {
  body = "body",
  eye = "eye",
}

export interface Challenge {
  type: "body" | "eye";
  description: string;
  amount: number;
}

export interface ChallengesContextData {
  level: number;
  currentXP: number;
  challengesCompleted: number;
  activeChallenge: Challenge | null;
  xpNextLevel: number;
  levelUp: () => void;
  startNewChallenge: () => void;
  resetChallenge: () => void;
}

export const ChallengesContext = React.createContext(
  {} as ChallengesContextData
);

export const ChalengeProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [level, setLevel] = React.useState(1);
  const [currentXP, setCurrentXP] = React.useState(0);
  const [challengesCompleted, setChallengesCompleted] = React.useState(0);
  const [activeChallenge, setActiveChallenge] = React.useState<Challenge>(null);
  const xpNextLevel = Math.pow((level + 1) * 4, 2);
  const levelUp = () => {
    setLevel(level + 1);
  };

  const startNewChallenge = () => {
    const randomIndex = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[randomIndex] as Challenge | null;
    setActiveChallenge(challenge);
  };

  const resetChallenge = () => {
    setActiveChallenge(null);
  };

  return (
    <ChallengesContext.Provider
      value={{
        level,
        currentXP,
        activeChallenge,
        challengesCompleted,
        xpNextLevel,
        levelUp,
        startNewChallenge,
        resetChallenge,
      }}
    >
      {children}
    </ChallengesContext.Provider>
  );
};
