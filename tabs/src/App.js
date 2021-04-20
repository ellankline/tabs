import {useState} from 'react';
import './App.css';
import Tabs from './components/Tabs';
import Content from './components/Content';

function App() {

  const tabsList = [
    {label: "First", content: "This is the content for the first tab."},
    {label: "Second", content: "This is the content for the second tab."},
    {label: "Third", content: "This is the content for the third tab."},
  ]

  const [allTabs, setAllTabs] = useState(tabsList);
  const [currentTabIdx, setCurrentTabIdx] = useState(0);
  return (
    <div className="App">
      <Tabs 
        allTabs={allTabs}
        currentTabIdx={currentTabIdx}
        setCurrentTabIdx={setCurrentTabIdx}
      />
      <Content 
        allTabs={allTabs}
        currentTabIdx={currentTabIdx}
      />
    </div>
  );
}

export default App;
