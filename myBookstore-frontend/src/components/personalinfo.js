import React, { useState } from 'react';
import '../styles/personalinfoStyle.css'; 

const PersonalInfo = () => {
  const [user, setUser] = useState({
    name: 'Jason Young',
    twitter: '@jason_yng',
    notes: 'My picture',
    avatar: '/images/profilepic.jpg', 
  });

  const [editing, setEditing] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleEdit = () => {
    setEditing(true);
  };

  const handleCancel = () => {
    setEditing(false);
  };

  const handleSave = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const updatedUser = {
      name: formData.get('name'),
      twitter: formData.get('email'),
    };
    setUser(updatedUser);
    setEditing(false);
    alert('Information updated successfully!');
    
    console.log('Saved Data', user);
  };

  const handleAvatarChange = (event) => {
  };

  return (
    <div className="profile-container">
      <div className="sidebar"> {} </div>
      <div className="profile-content">
        <h2>My Profile</h2>
        <form id="profile-form" onSubmit={handleSave}>
          {!editing ? (
            <>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" value={user.name} onChange={handleInputChange} />
              </div>
              <div className="form-group">
                <label htmlFor="twitter">Twitter</label>
                <input type="text" id="twitter" name="twitter" value={user.twitter} onChange={handleInputChange} />
              </div>
              <div className="form-group">
                <label>Avatar</label>
                <div className="avatar-upload">
                  <div className="avatar-preview">
                    <img src={user.avatar} alt="Avatar" />
                  </div>
                  <input type="file" id="avatar" name="avatar" onChange={handleAvatarChange} hidden />
                  <button type="button" onClick={() => document.getElementById('avatar').click()}>Click to Upload</button>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="notes">Notes</label>
                <textarea id="notes" name="notes" value={user.notes} onChange={handleInputChange} />
              </div>
            </>
          ) : (
            <>
              <div className="form-display">
                <p><strong>Name:</strong> {user.name}</p>
                <p><strong>Twitter:</strong> {user.twitter}</p>
                <div><strong>Avatar:</strong><div className="avatar-display"><img src={user.avatar} alt="Avatar" /></div></div>
                <p><strong>Notes:</strong> {user.notes}</p>
              </div>
            </>
          )}
          <div className="form-actions">
            {!editing ? (
              <>
                <button type="submit">Save</button>
                <button type="button" onClick={handleCancel}>Cancel</button>
              </>
            ) : (
              <button type="button" onClick={handleEdit}>Edit</button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default PersonalInfo;
