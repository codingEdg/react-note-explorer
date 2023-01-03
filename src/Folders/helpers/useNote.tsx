import { useOutletContext } from "react-router-dom";
import { Note } from "../types_interface/types";
export function useNote() {
  return useOutletContext<Note>();
}
