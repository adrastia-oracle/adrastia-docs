'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function ThemeAwareLogo() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const logoSrc =
    !mounted || resolvedTheme === 'light' ? '/logo/logomark-light.svg' : '/logo/logomark-dark.svg';

  return (
    <img
      src={logoSrc}
      alt="Adrastia"
      style={{
        maxWidth: '100%',
        maxHeight: '100%',
      }}
    />
  );
}
