$(document).ready(function () {
    $('nav a').on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            const hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                window.location.hash = hash;
            });
        }
    });
});

$(document).ready(function () {
    const text = $('#animated-text').text(); // Get the full text
    let currentIndex = 0;

    // Clear the text to start the animation
    $('#animated-text').text('');

    // Function to reveal the text letter by letter
    function typeLetter() {
        if (currentIndex < text.length) {
            $('#animated-text').append(text[currentIndex]); // Add one letter
            currentIndex++;
            setTimeout(typeLetter, 150); // Adjust speed (in milliseconds)
        }
    }

    typeLetter(); // Start the animation
});

