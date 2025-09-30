import { useColorScheme as _useColorScheme, type ColorSchemeName } from "react-native";
export function useColorScheme(): NonNullable<ColorSchemeName> { return _useColorScheme() ?? "light"; }
