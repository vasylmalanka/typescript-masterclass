function printStrings(str: string | string[] | null) {
    if (str && typeof str === 'object') {
        for (const s of str) {
            console.log(s);
        }
    } else if (str === 'string') {
        console.log(str);
    } else {
        console.log('Pass an array of strings or a string as an argument');
    }
}
