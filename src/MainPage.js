import React from "react";
import { EmailConsumer } from "./EmailContext";
import Header from "./Header";
import MessageList from "./MessageList";
import MessageViewer from "./MessageViewer";

const MainPage = () => {
  return (
    <EmailConsumer>
      {({ currentEmail }) => (
        <main>
          <Header />
          {currentEmail ? <MessageViewer /> : <MessageList />}
        </main>
      )}
    </EmailConsumer>
  );
};

export default MainPage;
