import { CustomXmppPlugin } from '@pazznetwork/ngx-chat';
import { XmppChatAdapter } from '@pazznetwork/ngx-chat';
import { Subject } from 'rxjs';
import { Stanza } from '../../../projects/pazznetwork/ngx-chat/src/lib/core/stanza';

/**
 * XEP-0132: Presence Obtained via Kinesthetic Excitation (POKE) (https://xmpp.org/extensions/xep-0132.html)
 */
export class PokePlugin extends CustomXmppPlugin {
    private onPoke: Subject<string> = new Subject<string>();

    constructor(xmppChatAdapter: XmppChatAdapter) {
        super(xmppChatAdapter);
    }

    handleStanza(stanza: Stanza): boolean {
        console.log(stanza);
        // const receivedOrSentElement = stanza.getChildByAttr('xmlns', 'urn:xmpp:carbons:2');
        // const forwarded = receivedOrSentElement && receivedOrSentElement.getChild('forwarded', 'urn:xmpp:forward:0');
        // const messageElement = forwarded && forwarded.getChild('message', 'jabber:client');
        // const carbonFrom = stanza.attrs.from;
        // const userJid = this.xmppChatAdapter.chatConnectionService.userJid;
        // if (stanza.is('message') && receivedOrSentElement && forwarded && messageElement && userJid
        //     && userJid.bare().toString() === carbonFrom) {
        //     return this.handleCarbonMessageStanza(messageElement, receivedOrSentElement);
        // }
        return false;
    }
}
