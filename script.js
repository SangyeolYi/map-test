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


WA.onEnterZone('needHelp', () => {
    currentZone = 'needHelp'
    openPopup(currentZone, currentZone + 'Popup')
});
WA.onEnterZone('followUs', () => {
    currentZone = 'followUs'
    openPopup(currentZone, currentZone + 'Popup')
});
WA.onLeaveZone('needHelp', closePopup);
WA.onLeaveZone('followUs', closePopup);


function openPopup(zoneName: string, popupName: string) {
    const zone = config.find((item) => {
        return item.zone == zoneName
    });
    if (typeof zone !== 'undefined') {
        // @ts-ignore otherwise we can't use zone.cta object
        currentPopup = WA.openPopup(popupName, zone.message, zone.cta)
    }
}
function closePopup(){
    if (typeof currentPopup !== undefined) {
        currentPopup.close();
        currentPopup = undefined;
    }
}