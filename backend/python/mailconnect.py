import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from config import *
def send_email_notification(data):
    gmail_user = gmail_users
    gmail_password = gmail_passwords
    to_email = sent_email

    subject = f"New Inquiry from {data['firstName']}"
    body = f"""
 New Inquiry Received:

Full Name: {data["firstName"]+data["lastName"]}
Email: {data['email']}
Mobile: {data["phoneNumber"]}
Message: {data['message']}
"""

    message = MIMEMultipart()
    message["From"] = gmail_user
    message["To"] = to_email
    message["Subject"] = subject
    message.attach(MIMEText(body, "plain"))
    try:
        server = smtplib.SMTP("smtp.gmail.com", 587)
        server.starttls()
        server.login(gmail_user, gmail_password)
        server.sendmail(gmail_user, to_email, message.as_string())
        server.quit()
        print(" Email sent successfully!")
    except Exception as e:
        print(f" Failed to send email: {e}")
