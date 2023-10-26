import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface PaletteColor {
    100: string;
    300: string;
    500: string;
    700: string;
    900: string;
  }
  interface CustomPalette {
    semantic: {
      success: {
        100: string;
        500: string;
      };
      warning: {
        100: string;
        300: string;
      };
      error: {
        100: string;
        500: string;
      };
    };
    gray: {
      50: string;
      100: string;
      300: string;
      500: string;
      700: string;
      900: string;
      white: string;
    };
    currency: {
      100: string;
      200: string;
      300: string;
      400: string;
      500: string;
      600: string;
      700: string;
    };
  }

  interface TypeText {
    highemp: string;
    medemp: string;
    lowemp: string;
  }

  interface TypographyVariants {
    h1: TypographyStyle;
    b3: TypographyStyle;
    b4: TypographyStyle;
    c1: TypographyStyle;
    c2: TypographyStyle;
  }
  interface TypographyVariantsOptions {
    h1: TypographyStyle;
    b3: TypographyStyle;
    b4: TypographyStyle;
    c1: TypographyStyle;
    c2: TypographyStyle;
  }

  interface Palette extends CustomPalette {}
  interface PaletteOptions extends CustomPalette {}
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    h1: true;
    b3: true;
    b4: true;
    c1: true;
    c2: true;
  }
}

interface TypographyStyle {
  "@media (max-width:1920px)": {
    fontFamily: string;
    fontWeight: string;
    fontSize: string;
    lineHeight: string;
  };
}

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 601,
      md: 1081,
      lg: 1441,
      xl: 1920,
    },
  },
  spacing: [4, 8, 12, 16, 20, 24, 32],
  palette: {
    primary: {
      100: "#FAFCFF",
      300: "#CCE3FF",
      500: "#0052FF",
      700: "#002EB7",
      900: "#00177A",
    },
    semantic: {
      success: {
        100: "#E9F7EC",
        500: "#20B03F",
      },
      warning: {
        100: "#FFF6ED",
        300: "#FFA74F",
      },
      error: {
        100: "#F3E6EB",
        500: "#B71A33",
      },
    },
    gray: {
      50: "#F2F2F7",
      100: "#E8E8F7",
      300: "#B4B4CF",
      500: "#4B4B60",
      700: "#252545",
      900: "#0E0E2E",
      white: "#FFFFFF",
    },
    currency: {
      100: "#F7931A33",
      200: "#22222233",
      300: "#E6007A33",
      400: "#627EEA33",
      500: "#26A17B33",
      600: "#19197133",
      700: "#DBC98433",
    },
    text: {
      highemp: "#1A1B25",
      medemp: "#414552",
      lowemp: "#6A7383",
    },
  },

  typography: {
    h1: {
      "@media (max-width:1920px)": {
        fontFamily: "Helvetica",
        fontWeight: "400",
        fontSize: "28px",
        lineHeight: "32px",
      },
    },
    b3: {
      "@media (max-width:1920px)": {
        fontFamily: "Helvetica",
        fontWeight: "400",
        fontSize: "14px",
        lineHeight: "20px",
      },
    },
    b4: {
      "@media (max-width:1920px)": {
        fontFamily: "Helvetica",
        fontWeight: "400",
        fontSize: "14px",
        lineHeight: "20px",
      },
    },
    c1: {
      "@media (max-width:1920px)": {
        fontFamily: "HelveticaNeue",
        fontWeight: "400",
        fontSize: "12px",
        lineHeight: "18px",
      },
    },
    c2: {
      "@media (max-width:1920px)": {
        fontFamily: "HelveticaNeue",
        fontWeight: "400",
        fontSize: "11px",
        lineHeight: "20px",
      },
    },
  },
});

export default theme;