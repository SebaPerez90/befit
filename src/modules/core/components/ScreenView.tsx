import { StyleSheet, View, type ViewProps } from 'react-native';

import { useThemeColor } from '@/src/modules/core/hooks/useThemeColor';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export type ThemedViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
  align?: 'center' | 'start' | 'end';
};

export function ScreenView({
  align = 'center',
  style,
  lightColor,
  darkColor,
  ...rest
}: ThemedViewProps) {
  const insets = useSafeAreaInsets();
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    'background'
  );

  return (
    <View
      style={[
        {
          backgroundColor,
          flex: 1,
          paddingTop: insets.top,
          paddingLeft: 15,
          paddingBottom: 10,
          paddingRight: 15,
        },
        align === 'center' ? styles.center : undefined,
        align === 'start' ? styles.start : undefined,
        align === 'end' ? styles.end : undefined,
        style,
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  start: {
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  end: {
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
});
