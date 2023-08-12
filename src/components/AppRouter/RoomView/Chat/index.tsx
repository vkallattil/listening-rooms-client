import React, { useState, useRef, useEffect } from "react";
import * as styled from "./styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "../../../../utils/icons";
import { useSocket } from "../../../SocketProvider";

function Chat() {
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatWindowRef = useRef<HTMLDivElement>(null);

  const { sendChat, socketID, chats } = useSocket();

  const [name, setName] = useState<string>("Some Idiot");
  const [writingMessage, setWritingMessage] = useState<string>("");

  const [scrolling, setScrolling] = useState<boolean>(false);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView();
  };

  useEffect(() => {
    chatWindowRef.current?.addEventListener("scroll", () => {
      const scrolledToBottom =
        chatWindowRef.current?.scrollHeight -
          chatWindowRef.current?.clientHeight <=
        chatWindowRef.current?.scrollTop + 1;

      if (!scrolledToBottom) {
        console.log("scrolling");
        setScrolling(true);
      }

      if (scrolledToBottom) {
        console.log("not scrolling");
        setScrolling(false);
      }
    });
  }, []);

  useEffect(() => {
    if (!scrolling) {
      scrollToBottom();
    }
  }, [chats]);

  const handleSendMessage = () => {
    if (writingMessage !== "") {
      const newMessage = {
        senderID: socketID,
        message: writingMessage,
        senderName: name,
      };
      sendChat(newMessage);
      setWritingMessage("");
      scrollToBottom();
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
      <styled.ChatContainer ref={chatWindowRef}>
        {chats &&
          chats.map((message) => {
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
        <div ref={messagesEndRef} />
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
