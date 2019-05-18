class JSError extends Error {
    constructor(message, cause) {
        super(((typeof message == 'string') || (message instanceof String)) ? message : message.message);
        Object.defineProperties(this, {
            name: {
                enumerable: true,
                value: ((typeof message == 'string') || (message instanceof String)) ? this.name : message.name
            },
            message: {
                enumerable: true,
                value: this.message
            },
            data: {
                enumerable: true,
                value: ((typeof message == 'string') || (message instanceof String)) ? undefined : message.data
            },
            cause: {
                enumerable: true,
                value: cause
            },
            stack: {
                enumerable: true,
                value: `${this.stack || this.message}${cause ? `\nCaused by: ${cause.stack || cause}` : ''}`
            }
        });
    }
}

module.exports = JSError;
