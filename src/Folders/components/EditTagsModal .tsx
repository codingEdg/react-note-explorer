import {
  Button,
  Col,
  Form,
  Modal,
  ModalBody,
  Row,
  Stack,
} from "react-bootstrap";
import { Tag } from "../types_interface/types";

type EditTagsModalProps = {
  availableTags: Tag[];
  show: boolean;
  handleClose: () => {};
  onDeleteTag: (id: string) => void;
  onUpdateTag: (id: string, label: string) => void;
};

export function EditTagsModal({
  onDeleteTag,
  onUpdateTag,
  availableTags,
  handleClose,
  show,
}: EditTagsModalProps) {
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Edit Tags</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Stack gap={2}>
              {availableTags.map((tag) => (
                <Row key={tag.id}>
                  <Col>
                    <Form.Control
                      onChange={(e) => onUpdateTag(tag.id, e.target.value)}
                      type="text"
                      value={tag.label}
                    ></Form.Control>
                  </Col>
                  <Col xs="auto">
                    <Button
                      onClick={() => onDeleteTag(tag.id)}
                      variant="outline-danger"
                    >
                      &times;
                    </Button>
                  </Col>
                </Row>
              ))}
            </Stack>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
