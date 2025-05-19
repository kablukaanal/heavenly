        // Кастомный курсор
        const cursor = document.getElementById('cursor');
        const cursorSize = 20;
        
        for (let i = 0; i < 5; i++) {
            const petal = document.createElement('div');
            petal.className = 'petal';
            
            const angle = (i * 72) * (Math.PI / 180);
            const distance = 12;
            
            petal.style.left = `${Math.cos(angle) * distance + cursorSize/2 - 4}px`;
            petal.style.top = `${Math.sin(angle) * distance + cursorSize/2 - 4}px`;
            petal.style.transform = `rotate(${i * 72}deg)`;
            petal.style.animation = `float ${1 + Math.random()}s ease-in-out infinite`;
            petal.style.animationDelay = `${Math.random()}s`;
            
            cursor.appendChild(petal);
        }

        document.addEventListener('mousemove', (e) => {
            cursor.style.left = `${e.clientX - cursorSize/2}px`;
            cursor.style.top = `${e.clientY - cursorSize/2}px`;
        });

        document.addEventListener('mouseover', (e) => {
            if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.onclick) {
                cursor.style.transform = 'scale(1.5)';
                cursor.style.opacity = '0.8';
            }
        });

        document.addEventListener('mouseout', (e) => {
            cursor.style.transform = 'scale(1)';
            cursor.style.opacity = '1';
        });

        // Переключение между формами
        const showLoginBtn = document.getElementById('showLoginBtn');
        const showRegisterBtn = document.getElementById('showRegisterBtn');
        const registrationForm = document.querySelector('.registration-form');
        const welcomePanel = document.querySelector('.welcome-panel');
        const loginForm = document.getElementById('loginForm');
        
        // Плавное переключение на форму входа
        showLoginBtn.addEventListener('click', function() {
            registrationForm.style.transform = 'translateX(-100%)';
            welcomePanel.style.transform = 'translateX(-100%)';
            setTimeout(() => {
                loginForm.style.transform = 'translateX(0)';
            }, 300);
        });
        
        // Плавное возвращение к регистрации
        showRegisterBtn.addEventListener('click', function() {
            loginForm.style.transform = 'translateX(100%)';
            setTimeout(() => {
                registrationForm.style.transform = 'translateX(0)';
                welcomePanel.style.transform = 'translateX(0)';
            }, 300);
        });


