const zoomMeetingIDs = {
  "36":"5356415262",
  "37":"3715273694",
}

WA.onInit().then(() => {
  // WA.nav.goToPage('https://play.vs.katariba.online/_/global/play.vs.katariba.online/maps/room-k/map.json');
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
  if(  ua.indexOf("android 3.") !== -1
    || ua.indexOf("android 4.") !== -1
    || ua.indexOf("android 5.") !== -1
    || ua.indexOf("android 6.") !== -1
    || ua.indexOf("android 7.") !== -1
    || ua.indexOf("android 8.") !== -1) {

      for (let s = 0; s < mtgRoomNames.length; s++){
          let mtgRoom = mtgRoomNames[s]

          WA.room.onEnterLayer('red/red-'+mtgRoom).subscribe(() => {
              triggerMessage = WA.ui.displayActionMessage({
                  message: "タブレット利用者はこっちをタッチして部屋に移動してください",
                  callback: () => {
                      WA.nav.goToPage('https://jitsi.katariba.online/globalroomk'+mtgRoom+'#userInfo.displayName="'+ userName + '"');
                  }
              })
          })
          WA.room.onLeaveLayer('red/red-'+mtgRoom).subscribe(() => {
              triggerMessage.remove();
          })

      }

  }

  
  for (let s = 36; s < 38; s++){
      let roomNum = ("0" + s).slice(-2)
      let meetingID = zoomMeetingIDs.roomNum
      let coWebsite
      let url = "https://zoom-sdk-web.vercel.app:/meeting.html?name=Q0ROMi45LjBNYWMjY2hyb21lLzEwNi4wLjAuMA%3D%3D&mn="+meetingID+"&email=&pwd=&role=0&lang=jp-JP&signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzZGtLZXkiOiJMazkzbUdGRDNaUFB5aUtNc05IQ1psbTd2NFh6MENiTGFNZW8iLCJpYXQiOjE2Njg5NDY1MjIsImV4cCI6MTY2ODk1MzcyMiwibW4iOjM3MTUyNzM2OTQsInJvbGUiOjB9.WLGGrsp-O3ucYHEuCL3idejyDN5w-h2Pbk2J53YlT7Q&china=0&sdkKey=Lk93mGFD3ZPPyiKMsNHCZlm7v4Xz0CbLaMeo"
      WA.room.onEnterLayer('zone/zoomURL/zoom'+roomNum).subscribe(() => {
          triggerMessage = WA.ui.displayActionMessage({
              message: 'SpaceキーかタッチでZoom'+roomNum+'を開きます',
              callback: () => {
                // coWebsite = await WA.nav.openCoWebSite(url, true, "camera;microphone", 70, 1, true, true);
              }
          });
      })
      WA.room.onLeaveLayer('zone/zoomURL/zoom'+roomNum).subscribe(() => {
          triggerMessage.remove();
          // coWebsite.close();
      })

  }
  
}).catch(e => console.error(e));


