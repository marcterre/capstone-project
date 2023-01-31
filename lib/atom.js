import { atomWithStorage } from "jotai/utils";
import { atom } from "jotai";

export const projectsAtom = atomWithStorage("projects", []);
export const viewsAtom = atomWithStorage("views", []);
