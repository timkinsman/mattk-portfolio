import storage, { Storage } from '@/utils/storage';

export const updateTheme = () => {
  const themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
  const themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

  // toggle icons inside button
  themeToggleDarkIcon?.classList.toggle('hidden');
  themeToggleLightIcon?.classList.toggle('hidden');

  const theme = storage.getItem(Storage.theme);

  if (theme) {
    if (theme === 'light') {
      document.documentElement.classList.add('dark');
      storage.setItem(Storage.theme, 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      storage.setItem(Storage.theme, 'light');
    }

    // if NOT set via local storage previously
  } else {
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark');
      storage.setItem(Storage.theme, 'light');
    } else {
      document.documentElement.classList.add('dark');
      storage.setItem(Storage.theme, 'dark');
    }
  }
};
