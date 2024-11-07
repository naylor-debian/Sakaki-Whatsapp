import { makeWASocket, DisconnectReason, BufferJSON, useMultiFileAuthState,  } from '@whiskeysockets/baileys'
import { Boom } from '@hapi/boom'
import * as fs from 'fs'


async function StartBaileys () {
    const { state, saveCreds } = await useMultiFileAuthState('Lib/Public/DataBase/Bayleys/Connection');
 
    const sakaki = makeWASocket({
        // can provide additional config here
        printQRInTerminal: true,
        auth: state
    });
    
    sakaki.events = new Map ();
    sakaki.commands = new Map () ;
    sakaki.saveCreds = saveCreds;
    

// run in main file
StartBaileys()
