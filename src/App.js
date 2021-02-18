import "./scss/theme.default.scss";

import { Button, Row } from "reactstrap";
import { LinkContainer } from "react-router-bootstrap";

function App() {
  return (
    <section className="px-5 py-5">
      <Row className="justify-content-center">
        <LinkContainer to="/form/page-1">
          <Button className="btn">
            Click on me to get started with the form
          </Button>
        </LinkContainer>
      </Row>
    </section>
  );
}

export default App;
