import React from "react";
import { EmailConsumer } from "./EmailContext";
import { UserConsumer } from "./UserContext";

const MessageList = () => (
  <UserConsumer>
    {({ user }) => (
      <EmailConsumer>
        {({ loading, emails, onSelectEmail }) => (
          <div className="MessageList">
            {loading ? (
              <div className="no-messages">Loading....</div>
            ) : emails.length === 0 ? (
              <div className="no-messages">
                Your mailbox is empty, {user.firstName}
              </div>
            ) : (
              <ul>
                {emails.map((email) => (
                  <Email
                    key={email.id}
                    email={email}
                    onClick={() => onSelectEmail(email)}
                  ></Email>
                ))}
              </ul>
            )}
          </div>
        )}
      </EmailConsumer>
    )}
  </UserConsumer>
);

const Email = ({ email, onClick }) => (
  <li onClick={onClick}>
    <div className="subject">{email.subject}</div>
    <div className="preview">{email.preview}</div>
  </li>
);

export default MessageList;
