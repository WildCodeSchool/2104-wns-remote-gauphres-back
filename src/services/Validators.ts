import { Message } from '../models/Message';

export class Validators {
    static isMessageValid(message: Message): boolean {
        return message.text ? true : false;
    }
}
