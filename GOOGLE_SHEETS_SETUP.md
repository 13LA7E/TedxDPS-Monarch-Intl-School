# Google Sheets Registration Setup Guide

Follow these steps to connect your registration form to Google Sheets.

## Step 1: Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it something like "TEDx Registration Responses"
4. In the first row, add these column headers (must match exactly):
   - `Timestamp`
   - `Name`
   - `Email`
   - `Phone`
   - `Affiliation`
   - `Attendees`

## Step 2: Create Google Apps Script

1. In your Google Sheet, click **Extensions** → **Apps Script**
2. Delete any existing code in the script editor
3. Copy and paste this code:

```javascript
function doPost(e) {
  try {
    // Open the active spreadsheet
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Get form data
    var data = e.parameter;
    
    // Create row data in the same order as your headers
    var rowData = [
      data.Timestamp,
      data.Name,
      data.Email,
      data.Phone,
      data.Affiliation,
      data.Attendees
    ];
    
    // Append the data to the sheet
    sheet.appendRow(rowData);
    
    // Send confirmation email to the registrant
    try {
      MailApp.sendEmail({
        to: data.Email,
        subject: "Registration Confirmed - TEDxDPS Monarch Intl School Youth",
        htmlBody: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #e62b1e;">TEDxDPS Monarch Intl School Youth</h2>
            <h3 style="color: #333;">Registration Confirmed!</h3>
            
            <p>Dear ${data.Name},</p>
            
            <p>Thank you for registering for TEDxDPS Monarch Intl School Youth!</p>
            
            <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h4 style="color: #e62b1e; margin-top: 0;">Event Details:</h4>
              <p><strong>📅 Date:</strong> December 13, 2025</p>
              <p><strong>📍 Location:</strong> DPS Monarch International School</p>
              <p><strong>🗺️ Map:</strong> <a href="https://maps.app.goo.gl/HrsLyatVDvd28BvXA">View on Google Maps</a></p>
              <p><strong>⏰ Time:</strong> TBA (Will be updated soon)</p>
              <p><strong>👥 Number of Attendees:</strong> ${data.Attendees}</p>
              <p><strong>🎟️ Entry:</strong> Free</p>
            </div>
            
            <p style="color: #666;">We're excited to have you join us for an unforgettable experience of thought-provoking talks and revolutionary perspectives!</p>
            
            <p style="margin-top: 30px;"><strong>Stay Connected:</strong></p>
            <p>
              📧 Email: <a href="mailto:tedxdpsmonarch@gmail.com">tedxdpsmonarch@gmail.com</a><br>
              📱 Instagram: <a href="https://www.instagram.com/tedxdpsmonarchintlschool/">@tedxdpsmonarchintlschool</a>
            </p>
            
            <p style="margin-top: 30px; color: #999; font-size: 12px;">
              This independent TEDx event is operated under license from TED.<br>
              © 2025 TEDxDPS Monarch Intl School Youth
            </p>
          </div>
        `
      });
      
      // Send notification to organizers
      MailApp.sendEmail({
        to: "tedxdpsmonarch@gmail.com",
        subject: "New Registration: " + data.Name,
        body: "New registration received:\n\n" +
              "Name: " + data.Name + "\n" +
              "Email: " + data.Email + "\n" +
              "Phone: " + data.Phone + "\n" +
              "Affiliation: " + data.Affiliation + "\n" +
              "Attendees: " + data.Attendees + "\n" +
              "Timestamp: " + data.Timestamp
      });
    } catch(emailError) {
      Logger.log("Email error: " + emailError.toString());
      // Continue even if email fails
    }
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'success' }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch(error) {
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'error', 'error': error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

4. Click **Save** (disk icon) and give your project a name like "TEDx Registration Handler"

## Step 3: Deploy the Script

1. Click **Deploy** → **New deployment**
2. Click the gear icon (⚙️) next to "Select type" and choose **Web app**
3. Configure the deployment:
   - **Description**: "TEDx Registration Form" (or any description)
   - **Execute as**: Me (your email)
   - **Who has access**: Anyone
4. Click **Deploy**
5. You may need to authorize the script:
   - Click **Authorize access**
   - Choose your Google account
   - Click **Advanced** → **Go to [project name] (unsafe)**
   - Click **Allow**
6. **Copy the Web app URL** - it should look like:
   ```
   https://script.google.com/macros/s/AKfycbzVEhtWAYVGelVPn3bET_b0sANHD4Q_fBVtvJdptAZzQeBbXTkcjwJyOihH8IrG4hpZ/exec
   ```

## Step 4: Update Your Website

1. Open `apply.html` in your code editor
2. Find this line near the bottom:
   ```javascript
   const scriptURL = 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE';
   ```
3. Replace `'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE'` with your actual Web app URL (keep the quotes):
   ```javascript
   const scriptURL = 'https://script.google.com/macros/s/AKfycbzVEhtWAYVGelVPn3bET_b0sANHD4Q_fBVtvJdptAZzQeBbXTkcjwJyOihH8IrG4hpZ/exec';
   ```
4. Save the file

## Step 5: Test Your Form

1. Commit and push your changes:
   ```powershell
   git add .
   git commit -m "Connect registration form to Google Sheets"
   git push origin main
   ```

2. Wait for GitHub Pages to deploy (1-2 minutes)

3. Visit your live site and submit a test registration

4. Check your Google Sheet - you should see the test data appear!

## Troubleshooting

### Form not submitting?
- Make sure the Web app URL is correct (ends with `/exec`)
- Check that the deployment has "Who has access: Anyone"
- Open browser console (F12) to see any error messages

### Data not appearing in sheet?
- Verify column headers match exactly (case-sensitive)
- Check the script execution logs in Apps Script (View → Executions)
- Try redeploying the script

### Getting CORS errors?
- This is normal! The form should still work even with CORS warnings in console
- The script uses `ContentService` which handles CORS automatically

## Confirmation Emails

The script above automatically sends:
1. **Confirmation email to registrant** - Professional HTML email with all event details
2. **Notification to organizers** - Simple email to tedxdpsmonarch@gmail.com with registration details

### Email Features:
- ✅ Automatic confirmation emails sent immediately after registration
- ✅ Includes event date, location, Google Maps link
- ✅ Branded with TEDx colors and styling
- ✅ Organizers get notified of each new registration
- ✅ Registrants receive a professional confirmation

**Important:** After updating the script, remember to click **Deploy** → **Manage deployments** → **Edit** (pencil icon) → **Deploy** to apply the changes!

## Security Notes

- The form data is sent directly to your Google Sheet
- No data is stored on your website or any third-party service
- Only you (the sheet owner) can access the responses
- The script URL is public but can only append data to your sheet (read/edit access is protected)

---

**All set!** Your registration form is now connected to Google Sheets. 🎉
