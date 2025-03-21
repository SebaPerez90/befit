import { View, type ViewProps } from 'react-native';

import { useThemeColor } from '@/src/modules/core/hooks/useThemeColor';

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
    <View
      className={`${
        align === 'center'
          ? 'justify-center items-center'
          : align === 'start'
          ? 'justify-center items-start'
          : align === 'end' && 'justify-center items-end'
      } flex flex-1`}
      style={[{ backgroundColor }, style]}
      {...rest}
    />
  );
}
