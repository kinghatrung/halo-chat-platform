import { Slot } from 'expo-router';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import QueryClientProvider from '@/providers/QueryProvider';
import { SocketProvider } from '@/providers/SocketProvider';
import '../global.css';

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <QueryClientProvider>
        <SocketProvider>
          <Slot />
        </SocketProvider>
      </QueryClientProvider>
    </GestureHandlerRootView>
  );
}
