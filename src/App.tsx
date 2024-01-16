import { useState } from "react";
import Button from "./components/ui/Button";
import Container from "./components/ui/Container";
import Model from "./components/ui/Model";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const handleModelOpen = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <>
      <div className="flex items-center justify-center mt-20">
        <Container>
          <Button onClick={handleModelOpen}> Open Model</Button>
          <Model isOpen={isOpen} onClose={handleModelOpen}>
            <Model.Header>
              <h1>This is a Header</h1>
              <Model.CloseButton>Close</Model.CloseButton>
            </Model.Header>
            <p>This is text</p>
          </Model>
        </Container>
      </div>
    </>
  );
}

export default App;
