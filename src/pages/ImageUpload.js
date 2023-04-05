import React, { useState } from 'react';
//border: '2px dashed black', 
 // borderRadius: '5px',
function ImageUpload() {
  const [image, setImage] = useState(null);

  const handleDrop = e => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && file.type.includes('image')) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleInputChange = e => {
    const file = e.target.files[0];
    if (file && file.type.includes('image')) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDragOver = e => {
    e.preventDefault();
  };
  
  return (
    <div
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      style={{ display: 'flex', 
      justifyContent: 'center',
       alignItems: 'center',
       borderRadius: '2px',
       border: '2px dashed black'
        }}
    >
      {!image ? (
        <p style={{ textAlign: 'center', paddingTop: '100px',paddingBottom: '100px', marginLeft: '25px', marginRight: '50px' }}>Drag and drop image here, or click to select image</p>
      ) : (
        <img src={image} alt="Uploaded Image" style={{ maxWidth: '100%', maxHeight: '100%' }} />
      )}
      <input
        type="file"
        accept="image/*"
        onChange={handleInputChange}
        style={{ display: 'none' }}
        id="fileInput"
      />
      <label htmlFor="fileInput" style={{ position: 'absolute', top: '0', bottom: '0', left: '0', right: '0' }}></label>
    </div>
  );
}

export default ImageUpload;
