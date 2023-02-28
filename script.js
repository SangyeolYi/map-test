WA.onInit().then(() => {
//     WA.nav.goToPage('https://play.vs.katariba.online/_/global/play.vs.katariba.online/maps/room-k/map.json');
    console.log('Scripting API ready');
    console.log('Player tags: ',WA.player.tags)
    let ua = window.navigator.userAgent.toLowerCase();
    let userName = WA.player.name
    let triggerMessage
    
    let mtgRoomNames = ['melonpann'
                        ,'rollcake'
                        ,'creampann'
                        ,'shiopann'
                        ,'cinnamonroll'
                        ,'currypann'
                        ,'chocolatecookie'
                        ,'shinryokuRight'
                        ,'shinryokuLeft'
                        ,'sanbashi'
                        ,'roomk-shinden'
                        ,'Kilimanjaro'
                        ,'MountFuji'
                        ,'Everest'
                        ,'Rocky'
                        ,'StudyArea100'
                        ,'StudyArea101'
                        ,'StudyArea102'
                        ,'StudyArea103'
                        ,'StudyArea104'
                        ,'StudyArea105'
                        ,'StudyArea106'
                        ,'StudyArea107'
                        ,'StudyArea108'
                        ,'StudyArea200'
                        ,'StudyArea201'
                        ,'StudyArea202'
                        ,'StudyArea203'
                        ,'StudyArea204'
                        ,'StudyArea205'
                        ,'StudyArea206'
                        ,'StudyArea207'
                        ,'StudyArea208'
                        ,'StudyArea209'
                    ]

    // Androidの6~8までは、JITSIに接続する際に、WAを終了してJITSIに直接REDIRECTさせる
//     if(  ua.indexOf("android 3.") !== -1
//       || ua.indexOf("android 4.") !== -1
//       || ua.indexOf("android 5.") !== -1
//       || ua.indexOf("android 6.") !== -1
//       || ua.indexOf("android 7.") !== -1
//       || ua.indexOf("android 8.") !== -1) {

        for (let s = 0; s < mtgRoomNames.length; s++){
            let mtgRoom = mtgRoomNames[s].toLowerCase()

            WA.room.onEnterLayer('red/red-'+mtgRoom).subscribe(() => {
                triggerMessage = WA.ui.displayActionMessage({
                    message: "タブレット利用者はこっちをタッチして部屋に移動してください",
                    callback: () => {
                        WA.nav.goToPage(`https://jitsi.katariba.online/globalroomk${mtgRoom}`);
//                         WA.nav.goToPage(`https://jitsi.katariba.online/globalroomk${mtgRoom}`);
//                     WA.nav.goToPage(`https://jitsi.katariba.online/globalroomk${mtgRoom}#userInfo.displayName="${userName}"`);
//                         WA.nav.goToPage('https://jitsi.katariba.online/globalroomk'+mtgRoom+'#userInfo.displayName="'+ userName + '"');
                    }
                })
            })
            WA.room.onLeaveLayer('red/red-'+mtgRoom).subscribe(() => {
                triggerMessage.remove();
            })

        }

//     }

    
    for (let s = 4; s < 44; s++){
        let roomNum = ("0" + s).slice(-2)
        WA.room.onEnterLayer('zone/zoomURL/zoom'+roomNum).subscribe(() => {
            triggerMessage = WA.ui.displayActionMessage({
                message: 'SpaceキーかタッチでZoom'+roomNum+'に移動します',
                callback: () => {
                    WA.nav.goToPage('http://zoom'+roomNum+'.katariba.in');
                }
            });
        })
        WA.room.onLeaveLayer('zone/zoomURL/zoom'+roomNum).subscribe(() => {
            triggerMessage.remove();
        })
    }
    
    // for (let s = 44; s < 100; s++){
    //     let roomNum = ("0" + s).slice(-2)
    //     let roomID = zoomRoomIDs[roomNum] === undefined ? "0000000000" : zoomRoomIDs[roomNum]
    //     let signature
    //     // let signature = signaturesAttendee[roomNum] === undefined ? "0000000000" : signaturesAttendee[roomNum]
    //     //表示名をEncodeする
    //     let encodedUserName = btoa(encodeURIComponent(userName).replace(/%([0-9A-F]{2})/g,function toSolidBytes(match,p1) {return String.fromCharCode("0x" + p1);}));
    //     let accessURL = `https://zoom-sdk-web.vercel.app:/meeting.html?name=${encodedUserName}&mn=${roomID}&email=&pwd=&role=0&lang=jp-JP&signature=${signature}&china=1&sdkKey=Lk93mGFD3ZPPyiKMsNHCZlm7v4Xz0CbLaMeo`
    //     WA.room.setProperty('zone/zoomURL/zoom'+roomNum, "openWebsite", accessURL);
    //     WA.room.setProperty('zone/zoomURL/zoom'+roomNum, "openWebsiteTrigger", "onaction");
    //     WA.room.setProperty('zone/zoomURL/zoom'+roomNum, "openWebsiteTriggerMessage", 'SpaceキーかタッチでZoom'+roomNum+'を開きます');
    // }
    
}).catch(e => console.error(e));

