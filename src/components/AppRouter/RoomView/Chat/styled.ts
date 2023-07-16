import styled from "styled-components";

export const ChatWindow = styled.div`
  flex-grow: 1;
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export const OutgoingMessageBubble = styled.div`
  padding: 7.5px;
  background-color: #ffa08b;
  color: #ffffff;
  font-size: 14px;
  border-radius: 4px;
  align-self: flex-end;
  max-width: 180px;
  margin-top: 15px;
`;

export const IncomingMessageBubble = styled(OutgoingMessageBubble)`
  background-color: #e4e4e4;
  color: #747474;
  align-self: flex-start;
`;

export const MessageTextArea = styled.textarea`
  height: 70px;
  border: 2px solid #e4e4e4;
  border-radius: 4px 0px 0px 4px;
  border-right: none;
  outline: none;
  flex-grow: 1;
  padding: 10px;
  resize: none;
  font-family: "Open Sans", sans-serif;
  color: #747474;
  font-size: 14px;
  margin: 0;
`;

export const MessageTextAreaContainer = styled.div`
  display: flex;
  width: 100%;
  box-sizing: border-box;
`;

export const Actions = styled.div`
  padding: 5px;
  height: 100%;
  border: 2px solid #e4e4e4;
  border-radius: 0px 4px 4px 0px;
  border-left: none;
  box-sizing: border-box;
  justify-content: flex-end;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SendButton = styled.button`
  border: none;
  outline: none;
  height: 25px;
  width: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffa08b;
  border-radius: 4px;
  color: #ffffff;
`;
