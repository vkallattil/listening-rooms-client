import React, { useState, useEffect, useRef } from "react";
import * as styled from "./styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

function Chat() {
  const [messages, setMessages] = useState([]);
  const [writingMessage, setWritingMessage] = useState("");

  const handleSendMessage = () => {
    if (writingMessage !== "") {
      setMessages([...messages, writingMessage]);
      setWritingMessage("");
    }
  };

  const handlePressEnter = (event: any) => {
    if (event.keyCode === 13 && event.shiftKey === false) {
      event.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      <styled.ChatWindow>
        <styled.IncomingMessageBubble>
          Hey! Send some messages!
        </styled.IncomingMessageBubble>
        {messages.map((message) => {
          return (
            <styled.OutgoingMessageBubble>
              {message}
            </styled.OutgoingMessageBubble>
          );
        })}
      </styled.ChatWindow>
      <styled.MessageTextAreaContainer>
        <styled.MessageTextArea
          value={writingMessage}
          onChange={(event) => {
            setWritingMessage(event.target.value);
          }}
          placeholder="Type your message here..."
          onKeyDown={handlePressEnter}
        />
        <styled.Actions>
          <styled.SendButton onClick={handleSendMessage}>
            <FontAwesomeIcon icon={faPaperPlane} />
          </styled.SendButton>
        </styled.Actions>
      </styled.MessageTextAreaContainer>
    </>
  );
}

export default Chat;
