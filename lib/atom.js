import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import SvgIcon from "@/components/SvgIcon";

export const projectsAtom = atomWithStorage("projects", []);
export const viewsAtom = atomWithStorage("views", []);
export const statusUploadAtom = atom("");
export const showModalSketchAtom = atom(false);
export const showEditImageAtom = atom(false);
export const settingsIconAtom = atom(<SvgIcon variant="settings" />);
