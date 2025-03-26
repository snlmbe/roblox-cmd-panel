// ==UserScript==
// @name         Roblox CMD Panel
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Gelişmiş komut paneli
// @author       Sen
// @match        https://www.roblox.com/*
// @grant        GM_addStyle
// ==/UserScript==

import { CommandHandler } from './core/CommandHandler.js';
import { CommandPanel } from './core/CommandPanel.js';
import tpgame from './commands/tpgame.js';
import tpuser from './commands/tpuser.js';
import tpid from './commands/tpid.js';
import creater from './commands/creater.js';
import roll from './commands/roll.js';
import fakeban from './commands/fakeban.js';
import fastmode from './commands/fastmode.js';

(async () => {
    const commandHandler = new CommandHandler();
    
    // Komutları kaydet
    commandHandler.register(tpgame);
    commandHandler.register(tpuser);
    commandHandler.register(tpid);
    commandHandler.register(creater);
    commandHandler.register(roll);
    commandHandler.register(fakeban);
    commandHandler.register(fastmode);

    // Paneli başlat
    new CommandPanel(commandHandler);
})();
