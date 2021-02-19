import { LinkContainer } from "react-router-bootstrap";
import { Form, Input, Row, Col, FormGroup, Label, Button } from "reactstrap";

function MyForm(props) {
  return (
    <div className="row">
      <section className="py-5 px-5 mx-auto">
        <h1 className="hero-heading mb-0">{props.data.title}</h1>
        <p className="text-muted mb-5">{props.data.subtitle}</p>
        <Form>
          {props.data.items.map((item) => (
            <>
              {(item.type === "text" ||
                item.type === "email" ||
                item.type === "password") && (
                <Col className="form-group">
                  <FormGroup>
                    <Label for="phone" className="form-label">
                      {item.title}
                    </Label>
                    <Input type={item.type} required={item.required} />
                  </FormGroup>
                </Col>
              )}
              {item.type === "link" && (
                <Col className="form-group">
                  <LinkContainer to={item.to}>
                    <a>{item.title}</a>
                  </LinkContainer>
                </Col>
              )}
              {item.type === "button" && (
                <Col className="form-group">
                  <FormGroup>
                    <Button type="submit">{item.title}</Button>
                  </FormGroup>
                </Col>
              )}
            </>
          ))}
        </Form>
      </section>
    </div>
  );
}

export default MyForm;
