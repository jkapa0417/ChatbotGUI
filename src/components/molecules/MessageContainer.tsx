import React from "react";
import Message from "../atoms/Message";
import { useMessageStore } from "../../stores/stores";
import Loader from "../atoms/Loader";


interface MessageContainerProps { }

const MessageContainer: React.FC<MessageContainerProps> = ({ }) => {
  const { messages } = useMessageStore()

  return (
    <>
      {messages.map((message, index) => (
        <div key={index} className={`flex w-full flex-col`}>
          {React.isValidElement(message.content)
            ? React.cloneElement(message.content, { key: index })
            : <Message id={`${index}`} userType={message.types}>{message.content === 'loading' && message.types === 'bot' ? <Loader /> : message.content}</Message>
          }
        </div>
      ))}
    </>
  );
}

export default MessageContainer;