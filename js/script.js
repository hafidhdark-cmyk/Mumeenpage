/*======================================= typing animation ============================= */
var typed = new Typed(".typing", {
    strings:["Web Designer","Web Developer","Software Engineer","Freelancer","Full-stack Developer"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true      
});
/*======================================= Email ============================= */
(function() {
    // 1. Initialize with your Public Key
    emailjs.init("aZDgCa6cejgN7ib0p"); 
})();

window.onload = function() {
    const btn = document.getElementById('submit-btn');

    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Stop the page from reloading

        btn.innerText = 'Sending...'; // Give user feedback

        const serviceID = 'service_ifdll8l';
        const templateID = 'template_skfymvc';

        // 2. Send the form data
        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                btn.innerText = 'Send Message';
                alert('Sent Successfully!');
                this.reset(); // Clear the form
            }, (err) => {
                btn.innerText = 'Send Message';
                alert("Failed to send: " + JSON.stringify(err));
            });
    });
}