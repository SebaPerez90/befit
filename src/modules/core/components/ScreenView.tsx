import { StyleSheet, type ViewProps } from 'react-native';

import { useThemeColor } from '@/src/modules/core/hooks/useThemeColor';
import { SafeAreaView } from 'react-native-safe-area-context';

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
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    'background'
  );

  return (
    <SafeAreaView
      edges={['top', 'right', 'bottom', 'left']}
      style={[
        {
          backgroundColor,
          flex: 1,
          paddingLeft: 15,
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
