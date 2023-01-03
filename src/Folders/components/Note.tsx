import { Badge, Button, Col, Row, Stack } from "react-bootstrap";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useNote } from "../helpers/useNote";

type NoteProps = {
  onDeleteNote: (id: string) => void;
};

export function Note({ onDeleteNote }: NoteProps) {
  const navigate = useNavigate();
  const note = useNote();
  return (
    <>
      <Row className="align-items-center mb-4 ">
        <Col className="">
          <h1>{note.title}</h1>
          {note.tags.length > 0 && (
            <Stack gap={1} className=" flex-wrap " direction="horizontal">
              {note.tags.map((tag) => (
                <Badge className="text-truncate" key={tag.id}>
                  {tag.label}
                </Badge>
              ))}
            </Stack>
          )}
        </Col>
        <Col xs="auto">
          <Stack gap={2} direction="horizontal">
            <Link to={`/${note.id}/edit`}>
              <Button variant="primary">Edit</Button>
            </Link>
            <Button
              onClick={() => {
                onDeleteNote(note.id);
                navigate("/");
              }}
              variant="outline-danger"
            >
              Delete
            </Button>
            <Link to={"/"}>
              {""}
              <Button variant="outline-secondary">Back</Button>
            </Link>
          </Stack>
        </Col>
      </Row>
      <ReactMarkdown>{note.markdown}</ReactMarkdown>
    </>
  );
}
