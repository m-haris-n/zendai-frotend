import { ActionIcon, useMantineColorScheme, useComputedColorScheme } from '@mantine/core';
import { IconSun, IconMoon } from '@tabler/icons-react';

export default function ColorSchemeToggleVariant() {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true });
  return (
    <ActionIcon
      onClick={() => setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light')}
      variant="default"
      size="lg"
      aria-label="Toggle color scheme"
    >
      <IconSun display={computedColorScheme === 'light' ? 'none' : 'block'} stroke={1.5} />
      <IconMoon display={computedColorScheme === 'light' ? 'block' : 'none'} stroke={1.5} />
    </ActionIcon>
  );
}
