

WA.onInit().then(() => {
  // location.href = 'https://play.vs.katariba.online';
  WA.nav.goToPage('https://play.vs.katariba.online/_/global/play.vs.katariba.online/maps/room-k/map.json');
    // console.log('Scripting API ready');
    // console.log('Player tags: ',WA.player.tags)
    // let ua = window.navigator.userAgent.toLowerCase();
    // let userName = WA.player.name
    // let triggerMessage
    
    // let mtgRoomNames = ['melonpann'
    //                     ,'rollcake'
    //                     ,'creampann'
    //                     ,'shiopann'
    //                     ,'cinnamonroll'
    //                     ,'currypann'
    //                     ,'chocolatecookie'
    //                     ,'shinryokuRight'
    //                     ,'shinryokuLeft'
    //                     ,'sanbashi'
    //                     ,'roomk-shinden'
    //                     ,'Kilimanjaro'
    //                     ,'MountFuji'
    //                     ,'Everest'
    //                     ,'Rocky'
    //                     ,'StudyArea1'
    //                     ,'StudyArea2'
    //                     ,'StudyArea3'
    //                     ,'StudyArea4'
    //                     ,'StudyArea5'
    //                     ,'StudyArea6'
    //                     ,'StudyArea7'
    //                 ]

    // // Androidの6~8までは、JITSIに接続する際に、WAを終了してJITSIに直接REDIRECTさせる
    // if(  ua.indexOf("android 3.") !== -1
    //   || ua.indexOf("android 4.") !== -1
    //   || ua.indexOf("android 5.") !== -1
    //   || ua.indexOf("android 6.") !== -1
    //   || ua.indexOf("android 7.") !== -1
    //   || ua.indexOf("android 8.") !== -1) {

    //     for (let s = 0; s < mtgRoomNames.length; s++){
    //         let mtgRoom = mtgRoomNames[s]

    //         WA.room.onEnterLayer('red/red-'+mtgRoom).subscribe(() => {
    //             triggerMessage = WA.ui.displayActionMessage({
    //                 message: "タブレット利用者はこっちをタッチして部屋に移動してください",
    //                 callback: () => {
    //                     WA.nav.goToPage('https://jitsi.katariba.online/globalroomk'+mtgRoom+'#userInfo.displayName="'+ userName + '"');
    //                 }
    //             })
    //         })
    //         WA.room.onLeaveLayer('red/red-'+mtgRoom).subscribe(() => {
    //             triggerMessage.remove();
    //         })

    //     }

    // }

    
    // for (let s = 4; s < 100; s++){
    //     let roomNum = ("0" + s).slice(-2)
    //     WA.room.onEnterLayer('zone/zoomURL/zoom'+roomNum).subscribe(() => {
    //         triggerMessage = WA.ui.displayActionMessage({
    //             message: 'SpaceキーかタッチでZoom'+roomNum+'に移動します',
    //             callback: () => {
    //                 WA.nav.goToPage('http://zoom'+roomNum+'.katariba.in');
    //             }
    //         });
    //     })
    //     WA.room.onLeaveLayer('zone/zoomURL/zoom'+roomNum).subscribe(() => {
    //         triggerMessage.remove();
    //     })

    // }
    
}).catch(e => console.error(e));

