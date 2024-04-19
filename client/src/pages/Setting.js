import React, { useState } from 'react';
function Setting() {
  // States for different settings
  const [emailNotifications, setEmailNotifications] = useState(false);
  const [theme, setTheme] = useState('light');

  // Handle change in email notification setting
  const handleEmailNotificationChange = (event) => {
    setEmailNotifications(event.target.checked);
  };

  // Handle change in theme setting
  const handleThemeChange = (event) => {
    setTheme(event.target.value);
  };

  return (
    <div className="settings-container">
      <h1>Settings</h1>
      <form>
        <div className="form-group">
          <label htmlFor="emailNotifications">Email Notifications</label>
          <input
            type="checkbox"
            id="emailNotifications"
            checked={emailNotifications}
            onChange={handleEmailNotificationChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="themeSelect">Theme</label>
          <select id="themeSelect" value={theme} onChange={handleThemeChange}>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </div>
      </form>
    </div>
  );
}

export default Setting;
