// Cassette Player — audio player stylesheet override
// GPL v3 fork of Navidrome — cassette: Patch 001
// Targets react-jinke-music-player-main (the persistent audio player component).

const stylesheet = `

/* Accent: Cassette orange on all interactive SVG icons */
.react-jinke-music-player-main svg:active,
.react-jinke-music-player-main svg:hover {
    color: #E87830
}

/* Progress track + handle */
.react-jinke-music-player-main .music-player-panel .panel-content .rc-slider-handle,
.react-jinke-music-player-main .music-player-panel .panel-content .rc-slider-track {
    background-color: #E87830
}

.react-jinke-music-player-main .music-player-panel .panel-content .rc-slider-handle:active {
    box-shadow: 0 0 8px rgba(232, 120, 48, 0.8), 0 0 16px rgba(232, 120, 48, 0.4)
}

/* Scrollbar inside the player */
.react-jinke-music-player-main ::-webkit-scrollbar-thumb {
    background-color: #3E3628;
}
.react-jinke-music-player-main ::-webkit-scrollbar-thumb:hover {
    background-color: #E87830;
}

/* Currently-playing item in the track list */
.react-jinke-music-player-main .audio-item.playing svg {
    color: #E87830
}
.react-jinke-music-player-main .audio-item.playing .player-singer {
    color: #E87830 !important
}

/* Lyric button */
.react-jinke-music-player-main .lyric-btn {
    color: #A89878 !important
}
.react-jinke-music-player-main .lyric-btn-active svg {
    color: #E87830 !important
}
.music-player-lyric {
    color: #E87830 !important
}

/* Track list — playing state */
.audio-lists-panel-content .audio-item.playing,
.audio-lists-panel-content .audio-item.playing svg {
    color: #E87830
}
.audio-lists-panel-content .audio-item:active .group:not([class=".player-delete"]) svg,
.audio-lists-panel-content .audio-item:hover .group:not([class=".player-delete"]) svg {
    color: #E87830
}

/* Audio title link */
.progress-bar-content .audio-title a {
    color: #EDE4D0
}

/* Checkboxes */
.MuiCheckbox-colorSecondary.Mui-checked {
    color: #E87830 !important
}

/* Player panel background */
.react-jinke-music-player-main .music-player-panel {
    background: #2A261E !important;
    border-top: 1px solid #342E24 !important;
}
`

export default stylesheet
