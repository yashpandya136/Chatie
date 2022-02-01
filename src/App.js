import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './component/ChatFeed';
import './App.css';  

const App = ()=> {
return(
   <ChatEngine
       height='100vh'
       projectID='696fdcf2-ffa5-44ca-a29a-4f515c861c09'
       userName='yashpandya'
       userSecret='123123'
       renderChatFeed={(chatAppProps) =><ChatFeed {...chatAppProps}/> }
   />
);
}

export default App;