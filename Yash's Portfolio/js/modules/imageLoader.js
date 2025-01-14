// Handle image loading and management
export const initImageLoader = () => {
  const imageUpload = document.getElementById('imageUpload');
  const profileImage = document.getElementById('profileImage');

  if (imageUpload && profileImage) {
    imageUpload.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (file && file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = (event) => {
          profileImage.src = event.target.result;
        };
        reader.readAsDataURL(file);
      }
    });
  }
};