// Dark mode toggle functionality - Simple and robust version
document.addEventListener('DOMContentLoaded', function() {
    console.log('Dark mode script loaded');
    
    const toggleBtn = document.getElementById('dark-mode-toggle');
    const moonIcon = '🌙';
    const sunIcon = '☀️';
    
    if (!toggleBtn) {
        console.error('Dark mode toggle button not found');
        return;
    }
    
    console.log('Dark mode toggle button found');
    
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme') || 'light';
    console.log('Saved theme:', savedTheme);
    
    // Apply initial theme - make sure it starts as light if no saved preference
    const initialTheme = savedTheme === 'dark' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', initialTheme);
    updateToggleButton(initialTheme);
    
    // Toggle function
    function toggleDarkMode() {
        console.log('Toggle clicked');
        const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        console.log('Switching from', currentTheme, 'to', newTheme);
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateToggleButton(newTheme);
    }
    
    // Update button appearance
    function updateToggleButton(theme) {
        console.log('Updating button for theme:', theme);
        if (theme === 'dark') {
            toggleBtn.innerHTML = sunIcon;
            toggleBtn.setAttribute('aria-label', 'Switch to light mode');
            toggleBtn.setAttribute('title', 'Switch to light mode');
        } else {
            toggleBtn.innerHTML = moonIcon;
            toggleBtn.setAttribute('aria-label', 'Switch to dark mode');
            toggleBtn.setAttribute('title', 'Switch to dark mode');
        }
    }
    
    // Add click event listener
    toggleBtn.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        console.log('Button clicked via event listener');
        toggleDarkMode();
    });
    
    // Also handle it as onclick for backup
    toggleBtn.onclick = function(e) {
        e.preventDefault();
        e.stopPropagation();
        console.log('Button clicked via onclick');
        toggleDarkMode();
    };
    
    console.log('Dark mode setup complete');
});
