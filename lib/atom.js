import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

export const projectsAtom = atomWithStorage("projects", []);
export const viewsAtom = atomWithStorage("views", []);
export const statusUploadAtom = atom("");
export const showModalSketchAtom = atom(false);
export const showEditImageAtom = atom(false);
