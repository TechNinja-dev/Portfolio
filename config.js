// // Fetch the Base64 string from the file
// fetch('photo_base64.txt').then(response => response.text()).then(data => {
//      document.getElementById('profile').src = data.trim();
//    }).catch(err => console.error('Error loading image:', err));


document.getElementById('profile').src = window.PHOTO_BASE64;
