import LoginPage from "./LoginPage";
import MainPage from "./MainPage";
import "./styles.css";
import { UserConsumer } from "./UserContext";

export default function App() {
  return (
    <UserConsumer>
      {({ user }) => (user ? <MainPage /> : <LoginPage />)}
    </UserConsumer>
  );
}
