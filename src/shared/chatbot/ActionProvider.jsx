
import React from 'react';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const handleHello = () => {
    const botMessage = createChatBotMessage('Hello. Nice to meet you.');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  
  const handleOthers = () => {
    const botMessage = createChatBotMessage('Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga veniam dolorem, quas esse culpa hic repudiandae natus dolor fugit, quos, quasi debitis porro molestias facere maiores voluptatem ratione consequuntur ex.');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  // Put the handleHello function in the actions object to pass to the MessageParser
  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleHello,
            handleOthers,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;