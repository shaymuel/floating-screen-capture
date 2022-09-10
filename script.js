const videoElement = document.getElementById('video');
const button = document.getElementById('button');

//Prompt to select media stream, pass to video element, play
async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    }
    catch (error) {
        console.log(error);
    }
}

//event listener to start picture in picture
button.addEventListener('click', async () => {
    // disable button
    button.disabled = true;
    //start picture in picture
    await videoElement.requestPictureInPicture();
    // reset button
    button.disabled = false;
});

//On Load
selectMediaStream();
