export class KeyboardHelper {

    public static isEnterPressed(event: KeyboardEvent): boolean {
        if (event.key === "Enter") {
            return true;
        }
        return false;
    }
}