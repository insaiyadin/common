"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Publisher = void 0;
class Publisher {
    constructor(client) {
        this.client = client;
    }
    publish(data) {
        return new Promise((res, rej) => {
            this.client.publish(this.subject, JSON.stringify(data), (err) => {
                if (err) {
                    return rej(err);
                }
                console.log("Event published to subject", this.subject);
                res();
            });
        });
    }
}
exports.Publisher = Publisher;
