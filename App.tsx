import { StatusBar } from 'expo-status-bar';
import { Text } from 'react-native';
import "./global.css"
import {SafeAreaProvider} from "react-native-safe-area-context";

export default function App() {
  return (
    <>
      <SafeAreaProvider>
        <Text className="mt-10 text-2xl text-orange-400">Hello, World</Text>
      </SafeAreaProvider>
      <StatusBar style="light" />
    </>
  );
}
