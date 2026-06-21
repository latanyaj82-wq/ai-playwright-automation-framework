

export class Logger {

    static info(label: string, value: unknown) {
        console.log(`${label}:`, value);
    }

}