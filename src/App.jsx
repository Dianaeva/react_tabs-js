import { useState, useMemo } from 'react';

import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';

import { Tabs } from './components/Tabs';

export const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const tabsIdMap = {};

tabs.forEach(tab => {
  tabsIdMap[tab.id] = tab;
});

const DEFAULT_TAB_ID = tabs[0].id;

export const App = () => {
  const [activeTabId, setActiveTabId] = useState(DEFAULT_TAB_ID);

  const activeTab = useMemo(() => {
    return tabsIdMap[activeTabId] ?? tabsIdMap[DEFAULT_TAB_ID] ?? tabs[0];
  }, [activeTabId]);

  const onTabSelected = tabId => {
    if (tabId) {
      setActiveTabId(tabId);
    } else {
      setActiveTabId(DEFAULT_TAB_ID);
    }
  };

  return (
    <div className="section">
      <h1 className="title">Selected tab is {activeTab.title}</h1>

      <Tabs
        tabs={tabs}
        activeTabId={activeTab.id}
        onTabSelected={onTabSelected}
      />
    </div>
  );
};
