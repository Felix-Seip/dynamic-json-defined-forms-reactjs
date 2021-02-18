import "./scss/theme.default.scss";

import { Button, Row } from "reactstrap";

function App() {
  return (
    <section className="px-5 py-5">
      <Row className="justify-content-center">
        <Button className="btn">
          Click on me to get started with the form
        </Button>
      </Row>
    </section>
  );
}

export default App;
