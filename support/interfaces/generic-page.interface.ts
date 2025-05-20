export interface Clickable {
    buttonClick(): Promise<void>;
}

export interface TitleReadable {
    getTitleText(): Promise<string | null>;
}
