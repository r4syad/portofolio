// Navbar Fixed
const header = document.querySelector('header');
const fixedNav = header.offsetTop;

window.addEventListener('scroll', function() {
    if (window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
    } else {
        header.classList.remove('navbar-fixed');
    }
});

//Hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');


hamburger.addEventListener('click',function() {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
})
















//Music
const playButton = document.getElementById('playButton');
const audioPlayer = document.getElementById('audioPlayer');
const playIcon = document.getElementById('playIcon');

let isPlaying = false; // Musik belum diputar

// Fungsi untuk kontrol play/pause
playButton.addEventListener('click', function() {
    if (isPlaying) {
        audioPlayer.pause();
        playIcon.classList.remove('fa-pause'); // Ganti ikon pause
        playIcon.classList.add('fa-play'); // Kembali ke ikon play
    } else {
        audioPlayer.play();
        playIcon.classList.remove('fa-play'); // Ganti ikon play
        playIcon.classList.add('fa-pause'); // Ganti ikon menjadi pause
    }
    isPlaying = !isPlaying;
});

//Agar tombol kembali ke status play ketika musik selesai
audioPlayer.addEventListener('ended', function() {
    isPlaying = false;
    playIcon.classList.remove('fa-pause');
    playIcon.classList.add('fa-play'); // Kembali ke ikon play
});

// Memastikan musik mulai secara otomatis jika pengguna mengizinkan
window.addEventListener('load', function() {
    Swal.fire({
        title: 'Apakah Anda ingin memutar musik?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Ya',
        cancelButtonText: 'Tidak'
    }).then((result) => {
        if (result.isConfirmed) {
            audioPlayer.play(); // Memutar musik jika pengguna memilih "Ya"
            playIcon.classList.remove('fa-play'); // Ganti ikon play
            playIcon.classList.add('fa-pause'); // Ganti ikon menjadi pause
            isPlaying = true; // Setel status ke "Playing"
        } else {
            console.log("Musik tidak diputar.");
        }
    });
});