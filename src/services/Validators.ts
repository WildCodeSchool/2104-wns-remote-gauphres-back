import { Message } from '../models/Messages';

export class Validators {
    static isMessageValid(message: Message): boolean {
        if (!message || message.text.trim() === '') {
            return false;
        }
        return true;
    }
}
