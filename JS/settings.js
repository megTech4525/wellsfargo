const securityUpdateDescription = document.getElementById("securityUpdateDescription-logout")
const confirmBox = document.getElementById('custom-confirm');
    const confirmMessage = document.getElementById('confirm-message');
    const confirmYes = document.getElementById('confirm-yes');
    const confirmNo = document.getElementById('confirm-no');
    const logout = document.getElementById('securityUpdateDescription-logout')
    const logBox = document.getElementById('confirm-box')


// securityUpdateDescription.addEventListener('click', () => {
//     logBox.classList.add('active')
// })





        // Access the toggle button and the body element
        const toggleButton = document.getElementById('toggle-button');
        const body = document.body;

        // Check for saved theme in local storage
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            body.className = savedTheme;
            toggleButton.innerHTML = savedTheme === 'dark-mode'
                ? '<i class="fa fa-toggle-on" aria-hidden="true"></i>'
                : '<i class="fa fa-toggle-off" aria-hidden="true"></i>';
        }

        // Toggle between dark and light modes
        toggleButton.addEventListener('click', () => {
            if (body.classList.contains('light-mode')) {
                body.classList.replace('light-mode', 'dark-mode');
                toggleButton.innerHTML = '<i class="fa fa-toggle-on" aria-hidden="true"></i>';
                localStorage.setItem('theme', 'dark-mode');
            } else {
                body.classList.replace('dark-mode', 'light-mode');
                toggleButton.innerHTML = '<i class="fa fa-toggle-off" aria-hidden="true"></i>';
                localStorage.setItem('theme', 'light-mode');
            }
        });


//confirm box
   
    





