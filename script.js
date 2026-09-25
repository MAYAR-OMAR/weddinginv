document.getElementById('envelope-btn').addEventListener('click', function() {
    const overlay = document.getElementById('envelope-overlay');
    const audio = document.getElementById('wedding-audio');

    // Tshgheel el-oghnya
    if (audio) {
        audio.play().catch(error => console.log("Audio play blocked", error));
    }

    // Ekfa' el-envelope
    overlay.classList.add('fade-out');
});