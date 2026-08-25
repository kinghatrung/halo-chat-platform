import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, {
  Extrapolation,
  interpolate,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import { Ionicons } from '@expo/vector-icons';
import * as Haptics from 'expo-haptics';

export interface SwipeToReplyProps {
  children: React.ReactNode;
  onReply: () => void;
  onLongPress?: () => void;
  onPress?: () => void;
  isMe?: boolean;
  enabled?: boolean;
  threshold?: number;
  maxSwipeDistance?: number;
}

const DEFAULT_THRESHOLD = 65;
const DEFAULT_MAX_SWIPE = 95;

const SPRING_CONFIG = {
  damping: 20,
  stiffness: 220,
  mass: 0.6,
};

export const SwipeToReply: React.FC<SwipeToReplyProps> = ({
  children,
  onReply,
  onLongPress,
  onPress,
  isMe = false,
  enabled = true,
  threshold = DEFAULT_THRESHOLD,
  maxSwipeDistance = DEFAULT_MAX_SWIPE,
}) => {
  const translateX = useSharedValue(0);
  const hasTriggeredHaptic = useSharedValue(false);
  const isThresholdPassed = useSharedValue(false);

  const triggerHaptic = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium).catch(() => {});
  };

  const triggerReply = () => {
    onReply();
  };

  const triggerLongPress = () => {
    if (onLongPress) {
      onLongPress();
    }
  };

  const triggerPress = () => {
    if (onPress) {
      onPress();
    }
  };

  const panGesture = Gesture.Pan()
    .enabled(enabled)
    .cancelsTouchesInView(false)
    /*
     * Configure swipe direction based on isMe:
     * - isMe === true (own message): active when dragging left [-20, -10]
     * - isMe === false (other's message): active when dragging right [10, 20]
     */
    .activeOffsetX(isMe ? [-20, -10] : [10, 20])
    .failOffsetY([-10, 10])
    .onUpdate((event) => {
      if (isMe) {
        // Own message: only swipe left (negative translation)
        if (event.translationX >= 0) {
          translateX.value = 0;
          return;
        }
        const absVal = Math.abs(event.translationX);
        if (absVal <= threshold) {
          translateX.value = -absVal;
        } else {
          const extra = absVal - threshold;
          const dampedExtra = extra * 0.35;
          translateX.value = -Math.min(threshold + dampedExtra, maxSwipeDistance);
        }
      } else {
        // Other's message: only swipe right (positive translation)
        if (event.translationX <= 0) {
          translateX.value = 0;
          return;
        }
        const absVal = event.translationX;
        if (absVal <= threshold) {
          translateX.value = absVal;
        } else {
          const extra = absVal - threshold;
          const dampedExtra = extra * 0.35;
          translateX.value = Math.min(threshold + dampedExtra, maxSwipeDistance);
        }
      }

      // Check if current drag distance reached threshold
      const currentDistance = Math.abs(translateX.value);
      if (currentDistance >= threshold) {
        if (!hasTriggeredHaptic.value) {
          hasTriggeredHaptic.value = true;
          isThresholdPassed.value = true;
          runOnJS(triggerHaptic)();
        }
      } else {
        hasTriggeredHaptic.value = false;
        isThresholdPassed.value = false;
      }
    })
    .onEnd(() => {
      const currentDistance = Math.abs(translateX.value);
      if (currentDistance >= threshold) {
        runOnJS(triggerReply)();
      }

      translateX.value = withSpring(0, SPRING_CONFIG);
      hasTriggeredHaptic.value = false;
      isThresholdPassed.value = false;
    });

  const longPressGesture = Gesture.LongPress()
    .enabled(enabled && Boolean(onLongPress))
    .minDuration(220)
    .maxDistance(10)
    .onStart(() => {
      runOnJS(triggerLongPress)();
    });

  const tapGesture = Gesture.Tap()
    .enabled(enabled && Boolean(onPress))
    .maxDuration(250)
    .onEnd((_event, success) => {
      if (success) {
        runOnJS(triggerPress)();
      }
    });

  const composedGesture = Gesture.Simultaneous(panGesture, longPressGesture, tapGesture);

  const messageAnimStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));

  const iconAnimStyle = useAnimatedStyle(() => {
    const currentDistance = Math.abs(translateX.value);
    const opacity = interpolate(
      currentDistance,
      [0, 15, threshold],
      [0, 0.4, 1],
      Extrapolation.CLAMP,
    );

    const scale = isThresholdPassed.value
      ? withSpring(1.25, { damping: 12, stiffness: 250 })
      : interpolate(currentDistance, [0, threshold], [0.5, 1], Extrapolation.CLAMP);

    const iconTranslateX = isMe
      ? interpolate(currentDistance, [0, threshold], [10, -12], Extrapolation.CLAMP)
      : interpolate(currentDistance, [0, threshold], [-10, 12], Extrapolation.CLAMP);

    return {
      opacity,
      transform: [{ translateX: iconTranslateX }, { scale }],
    };
  });

  return (
    <View style={styles.container}>
      {/* Reply Icon positioned on right for isMe, on left for !isMe */}
      <Animated.View
        style={[
          styles.iconContainer,
          isMe ? styles.iconRight : styles.iconLeft,
          iconAnimStyle,
        ]}
      >
        <View style={styles.iconCircle}>
          <Ionicons name="arrow-undo" size={16} color="#ffffff" />
        </View>
      </Animated.View>

      {/* Swipeable Message Bubble Layer */}
      <GestureDetector gesture={composedGesture}>
        <Animated.View style={[styles.contentContainer, messageAnimStyle]}>
          {children}
        </Animated.View>
      </GestureDetector>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    justifyContent: 'center',
  },
  iconContainer: {
    position: 'absolute',
    zIndex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconLeft: {
    left: 4,
  },
  iconRight: {
    right: 4,
  },
  iconCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#6f6bff',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#6f6bff',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3,
  },
  contentContainer: {
    zIndex: 2,
  },
});
