import { useState } from "react";
import { Form, Button } from "react-bootstrap";

function ChatBot() {
  const [showChat, setShowChat] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Your submit logic here
    setMessage("");
    setShowChat(false);
  };

  return (
    <div className="position-fixed bottom-0 end-0 p-3">
      {!showChat && (
        <button
          className="btn btn-primary rounded-circle"
          onClick={() => setShowChat(true)}
        >
          Chat
        </button>
      )}

      {showChat && (
        <div className="position-fixed bottom-0 end-0">
          <div className="bg-light p-3 rounded-top">
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formBasicEmail">
                <Form.Control
                  type="text"
                  placeholder="Type your message here"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Send
              </Button>
            </Form>
          </div>
          <div
            className="position-relative bg-white p-3 rounded-bottom"
            style={{ maxHeight: "200px", overflowY: "auto" }}
          >
            {/* Your chat messages here */}
            <p className="text-muted mb-0">No messages yet</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default ChatBot;
