WA.ui.registerMenuCommand('menu test', {
    callback: () => {
        WA.chat.sendChatMessage('test');
    }
})