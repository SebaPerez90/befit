import 'react-native-reanimated';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import '../styles/global.css';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <Stack>
        <Stack.Screen
          name='index'
          options={{ headerShown: false }}
        />
      </Stack>
      <StatusBar style='light' />
    </SafeAreaProvider>
  );
}
