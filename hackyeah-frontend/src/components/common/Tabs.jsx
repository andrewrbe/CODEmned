import React, { createContext, useState } from 'react';

const { Provider, Consumer } = createContext();

const TabContent = ({ index, children }) => (
  <Consumer>
    {({ isActive, activeTab }) => (
      isActive(index)
        ? <div className="tab__content">{children}</div>
        : null
    )}
  </Consumer>
)

const TabsProvider = ({ children }) => {
  const [activeTab, setActiveTab] = useState(0);
  const value = {
    setActiveTab,
    activeTab,
    isActive (index) {
      return Number(index) === activeTab;
    },
  };

  return (
    <Provider value={value}>
      {children}
    </Provider>
  );
}

export {
  TabsProvider as Provider,
  Consumer,
  TabContent,
};