// Function to open the modal and load the selected video
function openModal(videoId) {
    const modal = document.getElementById('video-modal');
    const videoSource = document.getElementById('video-source');
    const videoElement = document.getElementById('modal-video');

    // Set the video source based on the clicked video item
    if (videoId === 'video1') {
        videoSource.src = "videos/kk.mp4";
    } else if (videoId === 'video2') {
        videoSource.src = "videos/V1.mp4";
    }else if (videoId === 'video2') {
        videoSource.src = "videos/V2.mp4";
    }else if (videoId === 'video4') {
        videoSource.src = "videos/V2.mp4";
    }else if (videoId === 'video5') {
        videoSource.src = "videos/V4.mp4";
    }
    else if (videoId === 'video6') {
        videoSource.src = "videos/V5.mp4";
    }
    else if (videoId === 'video1') {
        videoSource.src = "videos/V6.mp4";
    }

    // Load the new video and play it
    videoElement.load();
    videoElement.play();

    // Show the modal
    modal.style.display = 'flex';
}

// Function to close the modal
function closeModal() {
    const modal = document.getElementById('video-modal');
    const videoElement = document.getElementById('modal-video');

    // Pause the video and reset the modal
    videoElement.pause();
    videoElement.currentTime = 0;

    // Hide the modal
    modal.style.display = 'none';
}

// Close the modal if user clicks outside of the modal content
window.onclick = function(event) {
    const modal = document.getElementById('video-modal');
    if (event.target === modal) {
        closeModal();
    }
}
