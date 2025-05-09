document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        

        if (!name || !email || !message) {
            alert('Please fill in all required fields');
            return;
        }
        

        const formData = {
            name,
            email,
            subject,
            message,
            timestamp: new Date().toISOString()
        };
        
        saveFormData(formData);
        showNotification('Your message has been sent! We will contact you soon.');
        contactForm.reset();
    });
    
    // Сохранение данных формы (для демонстрации)
    function saveFormData(data) {
        let savedForms = JSON.parse(localStorage.getItem('contactForms')) || [];
        savedForms.push(data);
        localStorage.setItem('contactForms', JSON.stringify(savedForms));
    }
    
    // Показ уведомления
    function showNotification(message) {
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.textContent = message;
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.classList.add('fade-out');
            setTimeout(() => notification.remove(), 500);
        }, 3000);
    }
});