export type Coefficient = {
  a: number;
  b: number;
  correct?: boolean;
};

export type GameState = {
  question: [Coefficient, Coefficient];
  answer: Coefficient[];
};
