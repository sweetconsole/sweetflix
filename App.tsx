import { StatusBar } from 'expo-status-bar';
import "./global.css"
import {SafeAreaProvider} from "react-native-safe-area-context";
import Navigation from "./navigation/Navigation";
import {FC} from "react";
import AuthProvider from "./providers/auth/AuthProvider";

const App: FC = () => {
  return (
    <>
      <AuthProvider>
        <SafeAreaProvider>
          <Navigation/>
        </SafeAreaProvider>
      </AuthProvider>
      <StatusBar style="light" />
    </>
  );
}

export default App