export interface Colors {
    violet:string
}

export interface Sizes {
}

export interface Header {
    bg: string;
    textPrimary: string;
}

export interface Theme {
    header: Header;
    colors:Colors;
    size: Sizes;
}

export interface ITheme {
    theme:Theme
}