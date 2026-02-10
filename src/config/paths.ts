import path from "path";

export const DESKTOP_PATH = path.resolve(
  process.env.USERPROFILE as string,
  "Desktop"
);
