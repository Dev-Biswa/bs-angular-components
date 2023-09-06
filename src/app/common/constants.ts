export class Constants {
    public static emailRegx: RegExp = /[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}/;
    public static phoneRegx: RegExp = /(\+)?((\d+)|(\d+\-)|(\(\d+\))|(\(\d+\)\-))*(\d+)/;
    public static phoneRegx2: RegExp = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;
}