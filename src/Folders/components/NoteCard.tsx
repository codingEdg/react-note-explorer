import React from "react";
import { Badge, Card, Stack } from "react-bootstrap";
import { Tag } from "../types_interface/types";
import { Link } from "react-router-dom";
import styles from "../css_Modules/NoteList.module.css";

type NoteCardProps = {
  id: string;
  title: string;
  tags: Tag[];
};
const NoteCard = ({ id, title, tags }: NoteCardProps) => {
  return (
    <Card
      as={Link}
      to={`/${id}`}
      className={`h-100 text-reset text-decoration-none ${styles.card}`}
    >
      <Card.Body>
        <Stack
          gap={2}
          className="align-items-center justify-content-center h-100"
        >
          <span className="fs-5 ">{title}</span>
          {tags.length > 0 && (
            <Stack
              gap={1}
              className="justify-content-center flex-wrap "
              direction="horizontal"
            >
              {tags.map((tag) => (
                <Badge className="text-truncate" key={tag.id}>
                  {tag.label}
                </Badge>
              ))}
            </Stack>
          )}
        </Stack>
      </Card.Body>
    </Card>
  );
};

export default NoteCard;
