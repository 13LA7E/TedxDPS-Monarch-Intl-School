# Email Confirmation Troubleshooting Guide

## Issue: Not Receiving Confirmation Emails

If registrations are being saved to your Google Sheet but emails are not being sent, follow these steps:

## Step 1: Update Your Google Apps Script

1. Open your Google Sheet with the registration data
2. Go to **Extensions** → **Apps Script**
3. **Delete all existing code** and replace with this:

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
      
      Logger.log("Emails sent successfully to: " + data.Email);
      
    } catch(emailError) {
      Logger.log("Email error: " + emailError.toString());
      // Continue even if email fails
    }
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'success' }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch(error) {
    Logger.log("Error: " + error.toString());
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'error', 'error': error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

4. Click **Save** (💾 disk icon)

## Step 2: REDEPLOY the Script (CRITICAL!)

This is the most important step - updating the code alone won't work!

1. Click **Deploy** → **Manage deployments**
2. Click the **Edit** icon (✏️ pencil) next to your existing deployment
3. Under "Version", change to **New version**
4. Click **Deploy**
5. Close the dialog

## Step 3: Test the Form

1. Go to your live website: https://13la7e.github.io/TedxDPS-Monarch-Intl-School/apply.html
2. Fill out the registration form with your own email
3. Submit the form
4. Check your email inbox (and spam folder!)

## Step 4: Check Execution Logs

If emails still don't arrive:

1. In Apps Script, click **View** → **Executions**
2. Look for recent executions
3. Click on an execution to see details
4. Check for any error messages

## Common Issues:

### ❌ Issue: "Authorization required"
**Solution:** 
- Click **Deploy** → **Test deployments**
- Click **Run** on the test
- Authorize the script when prompted
- Then redeploy (Step 2)

### ❌ Issue: Emails in spam folder
**Solution:**
- Check spam/junk folder
- Mark emails as "Not Spam"
- Add tedxdpsmonarch@gmail.com to contacts

### ❌ Issue: Script runs but no emails sent
**Solution:**
- Check Apps Script quota (View → Executions → Check for "Service invoked too many times")
- Make sure "Execute as: Me" in deployment settings
- Verify email addresses are correct in the script

### ❌ Issue: Form submits but nothing happens
**Solution:**
- Verify the Web App URL in apply.html is correct
- Make sure deployment has "Who has access: Anyone"
- Check browser console (F12) for errors

## Step 5: Verify Email Quota

Google Apps Script has daily email quotas:
- **Free Gmail account:** 100 emails/day
- **Google Workspace account:** 1,500 emails/day

Check current usage: **View** → **Executions** in Apps Script

---

## Quick Test Function

Add this to your Apps Script to test emails directly:

```javascript
function testEmail() {
  MailApp.sendEmail({
    to: "YOUR_EMAIL@gmail.com",  // Replace with your email
    subject: "Test Email - TEDx Registration",
    body: "If you receive this, emails are working!"
  });
}
```

Run this function from Apps Script (click the ▶️ Run button) to test if emails work at all.

---

**Still having issues?** Share the error message from Executions log!
