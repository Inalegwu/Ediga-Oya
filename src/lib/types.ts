export type Project = {
  name: string;
  description: string;
  status: "ongoing" | "completed";
  image: string;
};

export type Partner = {
  name: string;
  image: string;
  website: string;
};

export type Testimony = {
  name: string;
  benefit: string;
  image: string;
  statement: string;
};

export type Team = {
  name: string;
  image: string;
  role: string;
};

export type Gallery = {
  name: string;
  image: string;
};
