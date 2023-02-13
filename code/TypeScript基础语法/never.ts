function handleMessage(message: string | number) {
    switch (typeof message) {
        case 'string':
            console.log(message, 'string')
            break;
        case "number":
            console.log(message, 'number')
            break;
        default:
            const check:never = message
            break;
    }
}
handleMessage('123')
handleMessage(123)
handleMessage(true)