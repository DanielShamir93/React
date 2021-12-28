import { useRef } from 'react';

export default function Components212() {
    
    const videoRef = useRef('');

    function clickVideo(e) {
        if (e.target.id === "play-button") {
            videoRef.current.play();
        } else if (e.target.id === "pause-button") {
            videoRef.current.pause();
        }
    }
    
    return (
        <div>
            <video controls
            ref={videoRef}
            src="https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4"
            poster="https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217"
            width="620" />
            <div>
                <button id="play-button" onClick={(e) => {clickVideo(e)}}>Play</button>
                <button id="pause-button" onClick={(e) => {clickVideo(e)}}>Pause</button>
            </div>
        </div>
        
    );
}