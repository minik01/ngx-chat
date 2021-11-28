import {AbstractXmppPlugin} from './abstract-xmpp-plugin';
import {XmppChatAdapter} from '../xmpp-chat-adapter.service';

export class CustomXmppPlugin extends AbstractXmppPlugin {
    constructor(protected readonly xmppChatAdapter: XmppChatAdapter) {
        super();
    }
}
