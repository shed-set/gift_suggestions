   // Handle profile picture preview and validation
   document.getElementById('picture').addEventListener('change', function () {
    const file = this.files[0];
    const profilePicture = document.getElementById('profilePicture');

    if (file) {
      const validTypes = ['image/jpeg', 'image/png'];
      const maxSize = 5 * 1024 * 1024; // 5MB

      if (!validTypes.includes(file.type)) {
        alert('Please upload a valid image file (JPG or PNG).');
        this.value = '';
        profilePicture.src = '';
        return;
      }

      if (file.size > maxSize) {
        alert('File size must be less than 5MB.');
        this.value = '';
        profilePicture.src = '';
        return;
      }

      const reader = new FileReader();
      reader.onload = function (e) {
        profilePicture.src = e.target.result;
      };
      reader.readAsDataURL(file);
    } else {
      profilePicture.src = '';
    }
  });

  function toggleForm(disabled) {
    const formElements = document.querySelectorAll('#profileForm input, #profileForm select, #profileForm textarea');
    formElements.forEach(el => el.disabled = disabled);
  }

  function saveProfile() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const pictureInput = document.getElementById('picture');
    const pictureSrc = document.getElementById('profilePicture').src;
    const preferences = document.getElementById('preferences').value;
    const giftHistory = document.getElementById('giftHistory').value.trim();

    if (!validateName(name) || !validateEmail(email) || !validatePreferences(preferences) || !validatePicture(pictureInput) || !validateGiftHistory(giftHistory)) {
      return;
    }

    const profileDisplay = document.getElementById('profileDisplay');
    profileDisplay.innerHTML = `
      <img src="${pictureSrc}" alt="Profile Picture" class="img-fluid mt-3 rounded-circle" style="width: 120px; height: 120px; object-fit: cover;">
      <p><strong><span style="color:red; font-size: 30px;">Name:</span></strong> <span style="color:green; font-size: 25px;">${name}</span></p>
      <p><strong><span style="color:red; font-size: 30px;">Email:</strong> <span style="color:green; font-size: 25px;">${email}</span></p>
      <p><strong><span style="color:red; font-size: 30px;">Preferences:</strong> <span style="color:green; font-size: 25px;">${preferences}</span></p>
      <p style="word-break: break-all;"><strong><span style="color:red; font-size: 30px;">Gift History:</strong> <span style="color:green; font-size: 25px;">${giftHistory}</span></p>
    `;

    alert('Profile saved successfully!');
    toggleForm(true);
    document.getElementById('saveButton').style.display = 'none';
    document.getElementById('editButton').style.display = 'inline-block';
  }

  function editProfile() {
    toggleForm(false);
    document.getElementById('saveButton').style.display = 'inline-block';
    document.getElementById('editButton').style.display = 'none';
  }

  function validateName(name) {
    const namePattern = /^[A-Za-z\s]{3,18}$/;
    if (!namePattern.test(name)) {
      alert('Please enter a valid fullName with only letters and spaces (minimum 3 characters and maximum 18).');
      return false;
    }
    return true;
  }

  function validateEmail(email) {
    const emailPattern = /^[a-z](?!.*\.\.)[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)*@[a-zA-Z]+\.(com|org|net|edu|gov|co|io|in|biz|info|tv|us|ca|uk|eu)$/;
    if (!emailPattern.test(email)) {
      alert('Please enter a valid email address.');
      return false;
    }
    return true;
  }

  function validatePreferences(preferences) {
    if (preferences === "") {
      alert("Please select a valid gift preference.");
      return false;
    }
    return true;
  }

  function validatePicture(pictureInput) {
    if (!pictureInput.files.length) {
      alert('Please upload a profile picture.');
      return false;
    }
    return true;
  }

  function validateGiftHistory(giftHistory) {
    if (giftHistory.length < 10) {
      alert('Please provide a valid gift history with at least 10 characters.');
      return false;
    }
    return true;
  }

  toggleForm(false);

