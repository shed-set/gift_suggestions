        // Theme management
        function updateTheme(theme) {
          const body = document.body;
          if (theme === 'light') {
              body.classList.remove('dark-theme');
              body.classList.add('light-theme');
          } else if (theme === 'dark') {
              body.classList.remove('light-theme');
              body.classList.add('dark-theme');
          }
          localStorage.setItem('theme', theme);
      }

      // Notification toggle
      function toggleNotification(type) {
          const isChecked = document.getElementById(`${type}Notifications`).checked;
          const message = `${type.charAt(0).toUpperCase() + type.slice(1)} notifications ${isChecked ? 'enabled' : 'disabled'}!`;
          alert(message);
      }

      // Language management
      const translations = {
          en: {
              settingsTitle: "Settings",
              customizeTitle: "Customize Your Experience",
              themeTitle: "Theme Management",
              lightThemeLabel: "Light Theme",
              darkThemeLabel: "Dark Theme",
              notificationTitle: "Notification Preferences",
              emailLabel: "Email Notifications",
              pushLabel: "Push Notifications",
              languageTitle: "Language Management"
          },
          te: {
              settingsTitle: "సెట్టింగ్‌లు",
              customizeTitle: "మీ అనుభవాన్ని అనుకూలీకరించండి",
              themeTitle: "థీమ్ నిర్వహణ",
              lightThemeLabel: "లైట్ థీమ్",
              darkThemeLabel: "డార్క్ థీమ్",
              notificationTitle: "నోటిఫికేషన్ ప్రాధాన్యతలు",
              emailLabel: "ఈమెయిల్ నోటిఫికేషన్‌లు",
              pushLabel: "పుష్ నోటిఫికేషన్‌లు",
              languageTitle: "భాషా నిర్వహణ"
          },
          hi: {
              settingsTitle: "सेटिंग्स",
              customizeTitle: "अपना अनुभव अनुकूलित करें",
              themeTitle: "थीम प्रबंधन",
              lightThemeLabel: "लाइट थीम",
              darkThemeLabel: "डार्क थीम",
              notificationTitle: "सूचना प्राथमिकताएँ",
              emailLabel: "ईमेल सूचनाएं",
              pushLabel: "पुश सूचनाएं",
              languageTitle: "भाषा प्रबंधन"
          }
      };

      function updateLanguage(showAlert = true) {
          const selectedLanguage = document.getElementById("languageSelect").value;
          document.documentElement.lang = selectedLanguage;

          Object.entries(translations[selectedLanguage]).forEach(([id, text]) => {
              const element = document.getElementById(id);
              if (element) {
                  element.textContent = text;
              }
          });

          if (showAlert) {
              const messages = {
                  en: "Language set to English!",
                  te: "Language set to Telugu!",
                  hi: "Language set to Hindi!"
              };
              alert(messages[selectedLanguage] || "Language preference updated!");
          }
      }

      // Initialize settings
      document.addEventListener('DOMContentLoaded', () => {
          // Set saved theme or default to light
          const savedTheme = localStorage.getItem('theme') || 'light';
          updateTheme(savedTheme);
          document.getElementById(`${savedTheme}Theme`).checked = true;

          // Set default notification states
          document.getElementById('emailNotifications').checked = false;
          document.getElementById('pushNotifications').checked = false;

          // Initialize language
          updateLanguage(false);
      });