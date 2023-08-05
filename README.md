# listening-rooms-client

Synchronized listening rooms for SoundCloud streams, with custom audio player and chat (React client for https://github.com/vkallattil/listening-rooms-api). 

* Try it out: https://listening-rooms-client.onrender.com/rooms/a5ea53c7-29f0-4cd7-bfad-c2bf532c489f
* Figma design: https://www.figma.com/file/gOFBRkEzBocs16J2umB4J6/LISTENING-ROOMS?type=design&node-id=0%3A1&mode=design&t=un8D45AY54coxUXX-1
* Built on SoundCloud's Widget API: https://developers.soundcloud.com/docs/api/html5-widget
* (Note: SoundCloud also has a Developer API, which I tried to use, but they currently aren't accepting any more requests, so I'm limited to their public Widget API.)

## Notes

8/5/23
* The playback syncing experience is 90% theree. The back end is equipped to process and emit skip, seek, play, and pause events, and barring some lingering initial page load issues, users can play with all playback controls and see the results reflected on all participating clients. The prior issue where autoplay is restricted until a user interacts with the page still exists on Chrome and is also prevalent on Firefox: both browsers have the same autoplay restriction policy.
* Song information now loads for all songs in a playlist. I did some research and there's an issue with the API where sounds are not loaded fully before the widget fires as ready, so I implemented a solution I found online that refetches the sounds every 0.2 seconds until all of the sounds are loaded. See: https://stackoverflow.com/questions/48550585/soundcloud-api-getsounds-only-returns-the-first-5-objects.
* Still need room search. Firefox and Chrome instances are relatively well tested. Microsoft Edge / IE are not tested at all, and Safari is tested minimally with a prominent issue involving insecure origin requests that seems to affect playback, as well as some other UI discrepancies. Still not mobile responsive.

8/4/23 (first note)
* There are some prominent issues with the Widget API. When a user loads a playlist into the widget, the API does not return song information for the any of the songs after the first five, which is reflected in the room view UI. Also, the widget's "PLAY" event fires twice when the widget plays the audio, causing strange WebSocket behavior in the backend and messing up any play/pause syncing between room participants, necessitating the use of a custom audio player with play and pause buttons that aren't linked to the core <iframe> element. There are other general issues with the API, and it no longer seems to be very well-supported, so in the distant future I plan to find some way to either get authorization to use SoundCloud's full API or use some other API or audio delivery mechanism.
* Chat feature is bare minimum functional. Need to add user authentication, which is at the moment low priority, and remove or beautify the ugly set name input above the chat window, and maybe polish on the rest of the chat UI. 
* Play/pause syncing for room participants was attempted but is facing lots of issues. For one, Google Chrome's autoplay restrictions mean that if a user loads the page directly into a room view, and another user in that room plays the audio, it doesn't update for the user who just loaded the page because Chrome doesn't allow the widget to play, even if it received the message from the backend, until the user clicks or gestures on the page. Safari has an issue with playing the audio on page load as well, which seems to go away when a user clicks another song in the song queue to load it, in which case the sound autoplays and the user can do any playback. I've definitely observed at least once that the behavior reappeared afterwards though, but most of the time it seems like after these two initial browser hurdles the user can sync play and pause *only*, meaning two users can still be loading different songs or song positions even if they're synced to the same play/pause state. In conclusion, there's no full syncing yet, which is obviously a high priority as it's the core feature of the entire app, and I intend to build it out once the browser bugs are fixed.
* Room search doesn't work yet, it just looks pretty.
* Browser support is limited right now to just Google Chrome and Safari, and is a big work in progress.
* Not responsive to mobile screen sizes or slightly smaller screen sizes in general.
* As mentioned before, there is a need for user authentication for more seamless chat and interaction support and for provisioning permissions, but that's not a priority for a minimum viable instance of the app. Practically the app is working once all playback syncing, chat, and crud features are robust, and the app runs properly and mobile-responsive on all browsers with no major UI/UX issues.
