"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";
import { TranslationProvider } from "../i18n/provider";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <TranslationProvider>
      <NextThemesProvider {...props}>{children}</NextThemesProvider>
    </TranslationProvider>
  );
}
