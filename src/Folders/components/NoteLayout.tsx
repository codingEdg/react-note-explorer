import React from "react";
import { Outlet, useParams, Navigate } from "react-router-dom";
import { Note } from "../types_interface/types";

type NoteLayoutProps = {
  notes: Note[];
};

const NoteLayout = ({ notes }: NoteLayoutProps) => {
  const { id } = useParams();
  const note = notes.find((note) => note.id === id);
  if (note === null) <Navigate to="/" replace />;
  return <Outlet context={note} />;
};

export default NoteLayout;
