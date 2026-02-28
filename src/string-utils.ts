
export namespace StringUtils {
    
    export function join (strings: string[]) {
        if (strings.length <= 0) {
            return 'N/A';
        } else if (strings.length === 1) {
            return strings[0];
        } else if (strings.length === 2) {
            return strings[0] + ' and ' + strings[1];
        } else {
            return strings.map((str, i) => {
                if (i === strings.length - 1) {
                    return `and ${str}`;
                } else {
                    return str;
                }
            }).join(', ');
        }
    }
    
    export function capitalize (str: string) {
        return [...str].map((char, i) => i === 0 ? char.toUpperCase() : char.toLowerCase()).join('');
    }
    
}
