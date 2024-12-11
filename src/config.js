export const DASHBOARD_PATH = '/sample-page';
export const HORIZONTAL_MAX_ITEM = 7;

export const MenuOrientation = {
    VERTICAL: 'vertical',
    HORIZONTAL: 'horizontal'
};

export const ThemeMode = {
    LIGHT: 'light',
    DARK: 'dark'
};

export const ThemeDirection = {
    LTR: 'ltr',
    RTL: 'rtl'
};

export const Presets = {
    theme0: "default",
    theme1 : "theme1",
    theme2 : "theme2",
    theme3 : "theme3",
    theme4 : "theme4",
    theme5 : "theme5",
    theme6 : "theme6",
}

const config = {
    menuOrientation: MenuOrientation.VERTICAL,
    miniDrawer: false,
    fontFamily: `'Roboto', sans-serif`,
    borderRadius: 8,
    outlinedFilled: true,
    mode: ThemeMode.LIGHT,
    presetColor: Presets.theme0,
    i18n: 'en',
    themeDirection: ThemeDirection.LTR,
    container: false
};

export default config;
