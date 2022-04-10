WA.ui.registerMenuCommand('menu test', {
    callback: () => {
        WA.chat.sendChatMessage('test');
    }
})


WA.ui.registerMenuCommand('menu test', {
    callback: () => {
        WA.chat.sendChatMessage('test');
    }
})

const myLayerSubscriber = WA.room.onEnterLayer("j-sleore").subscribe(() => {
    WA.chat.sendChatMessage("Hello!", "Mr Robot");
});

WA.room.onLeaveLayer("j-sleore").subscribe(() => {
    WA.chat.sendChatMessage("Goodbye!", "Mr Robot");
    myLayerSubscriber.unsubscribe();
});


