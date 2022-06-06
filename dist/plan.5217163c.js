let previous = document.querySelector("#pre");
let play = document.querySelector("#play");
let next = document.querySelector("#next");
let title = document.querySelector("#title");
let slider = document.querySelector("#duration_slider");
let show_duration = document.querySelector("#show_duration");
let present = document.querySelector("#present");
let total = document.querySelector("#total");
let artist = document.querySelector("#artist");
let timer;
let autoplay = 0;
let index_no = 0;
let Playing_song = false;
//create a audio Element
let track = document.createElement("audio");
//All songs list
let All_song = [
    {
        name: "Acoustic",
        path: "public/music/song1.mp3"
    },
    {
        name: "Memories",
        path: "music/song2.mp3"
    },
    {
        name: "Better days",
        path: "music/song3.mp3"
    }
];
console.log(All_song);
// All functions
// function load the track
function load_track(index_no1) {
    clearInterval(timer);
    reset_slider();
    track.src = All_song[index_no1].path;
    title.innerHTML = All_song[index_no1].name;
    track.load();
    timer = setInterval(range_slider, 1000);
//total.innerHTML = All_song.length;
//present.innerHTML = index_no + 1;
}
load_track(index_no);
//mute sound function
//function mute_sound(){
//	track.volume = 0;
//	volume.value = 0;
//	volume_show.innerHTML = 0;
//}
// checking.. the song is playing or not
function justplay() {
    if (Playing_song == false) playsong();
    else pausesong();
}
// reset song slider
function reset_slider() {
    slider.value = 0;
}
// play song
function playsong() {
    track.play();
    Playing_song = true;
    play.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
}
//pause song
function pausesong() {
    track.pause();
    Playing_song = false;
    play.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
}
// next song
function next_song() {
    if (index_no < All_song.length - 1) {
        index_no += 1;
        load_track(index_no);
        playsong();
    } else {
        index_no = 0;
        load_track(index_no);
        playsong();
    }
}
// previous song
function previous_song() {
    if (index_no > 0) {
        index_no -= 1;
        load_track(index_no);
        playsong();
    } else {
        index_no = All_song.length;
        load_track(index_no);
        playsong();
    }
}
// change slider position 
function change_duration() {
    slider_position = track.duration * (slider.value / 100);
    track.currentTime = slider_position;
}
function range_slider() {
    let position = 0;
    // update slider position
    if (!isNaN(track.duration)) {
        position = track.currentTime * (100 / track.duration);
        slider.value = position;
    }
    // function will run when the song is over
    if (track.ended) {
        play.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
        if (autoplay == 1) {
            index_no += 1;
            load_track(index_no);
            playsong();
        }
    }
}
//---------------------------------TASK FUNCTION ----------//
function newtask() {
    let taskname = document.querySelector("#taskname");
    taskname.innerHTML = taskname.value;
}
//-----------------------------DATE-----------------------------?? 
let btnShow = document.getElementById("date-btn");
console.log(btnShow);
let output = document.querySelector("h1");
console.log(output);
btnShow.addEventListener("click", ()=>{
    let today = new Date();
    let month = today.getMonth() + 1;
    let year = today.getDate();
    let date = today.getDate();
    console.log("show");
    let current_date = `${month}/${date}/${year}`;
    output.innerText = current_date;
    console.log(current_date);
});
let todayDate = moment();
console.log(todayDate);
window.onSpotifyIframeApiReady = (IFrameAPI)=>{
// 
};
window.onSpotifyIframeApiReady = (IFrameAPI)=>{
    let element = document.getElementById("embed-iframe");
    let options = {
        uri: "spotify:episode:7makk4oTQel546B0PZlDM5"
    };
    let callback = (EmbedController)=>{};
    IFrameAPI.createController(element, options, callback);
};

//# sourceMappingURL=plan.5217163c.js.map
