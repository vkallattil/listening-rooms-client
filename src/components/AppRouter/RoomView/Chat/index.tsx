import React, { useState, useEffect } from "react";
import * as styled from "./styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "../../../../utils/icons";
import { useSocket } from "../../../SocketProvider";

function Chat() {
  const { sendChat, socketID, chats } = useSocket();

  const [name, setName] = useState<string>("Some Idiot");
  const [writingMessage, setWritingMessage] = useState<string>("");

  const reverseChats = () => {
    const newChats = chats.map((_, index) => chats[chats.length - 1 - index]);
    console.log(newChats)
    return newChats
  }

  const handleSendMessage = () => {
    if (writingMessage !== "") {
      const newMessage = {
        senderID: socketID,
        message: writingMessage,
        senderName: name,
      };
      sendChat(newMessage);
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
      <styled.ChatHeader>
        <styled.ChatTitle>Set Name:</styled.ChatTitle>
        <styled.NameInput
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
      </styled.ChatHeader>
      <styled.ChatContainer>
        <styled.ChatWindow>
          {chats &&
            reverseChats().map((message) => {
              if (message.senderID == socketID) {
                return (
                  <styled.Message>
                    <styled.OutgoingMessageBubble>
                      {message.message}
                    </styled.OutgoingMessageBubble>
                  </styled.Message>
                );
              }
              return (
                <styled.Message>
                  <styled.NameLabel>{message.senderName}</styled.NameLabel>
                  <styled.IncomingMessageBubble>
                    {message.message}
                  </styled.IncomingMessageBubble>
                </styled.Message>
              );
            })}
        </styled.ChatWindow>
      </styled.ChatContainer>
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
