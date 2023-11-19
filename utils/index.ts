export function delay (timeout: any, callback?: any) {
    return new Promise((resolve) => {
        setTimeout(() => {
            if (callback) {
                resolve(callback())
            } else {
                resolve('')
            }
        }, timeout);
    })
}