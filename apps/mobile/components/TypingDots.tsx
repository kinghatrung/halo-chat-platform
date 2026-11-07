import { useEffect } from 'react';
import { Text, View } from 'react-native';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withRepeat,
  withSequence,
  withTiming,
} from 'react-native-reanimated';

import { BRAND } from '@/constants/brand';

// One dot of the Telegram-style "typing…" wave; each dot starts a little later than the previous.
function Dot({ delay, color }: { delay: number; color: string }) {
  const lift = useSharedValue(0);

  useEffect(() => {
    lift.set(
      withDelay(
        delay,
        withRepeat(
          withSequence(
            withTiming(1, { duration: 280, easing: Easing.out(Easing.quad) }),
            withTiming(0, { duration: 280, easing: Easing.in(Easing.quad) }),
            withTiming(0, { duration: 240 }),
          ),
          -1,
        ),
      ),
    );
  }, [delay, lift]);

  const style = useAnimatedStyle(() => ({
    opacity: 0.45 + lift.get() * 0.55,
    transform: [{ translateY: -lift.get() * 3 }],
  }));

  return (
    <Animated.View
      style={[
        { width: 5, height: 5, borderRadius: 3, backgroundColor: color, marginRight: 3 },
        style,
      ]}
    />
  );
}

export default function TypingDots({
  label = 'đang nhập',
  color = BRAND.primary,
}: {
  label?: string;
  color?: string;
}) {
  return (
    <View className="flex-row items-center">
      <View className="mr-1 flex-row items-end pt-1">
        <Dot delay={0} color={color} />
        <Dot delay={140} color={color} />
        <Dot delay={280} color={color} />
      </View>
      <Text style={{ color }} className="text-[13px] font-medium">
        {label}
      </Text>
    </View>
  );
}
