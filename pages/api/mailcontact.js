// import nodemailer from 'nodemailer';

// export default async function handler(req, res) {
//   if (req.method === 'POST') {
//     const { name, email, subject, message } = req.body;

//     // Set up transporter
//     const transporter = nodemailer.createTransport({
//       service: 'gmail', // Or another email service
//       auth: {
//         user: 'rasikasusl002@gmail.com', // Replace with your email
//         pass: 'rasikasusl002@gmail.com', // Replace with your email password or app password
//       },
//     });

//     // Email content
//     const mailOptions = {
//       from: email,
//       to: 'your-email@gmail.com', // Replace with your email
//       subject: `Portfolio Contact: ${subject}`,
//       text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
//     };

//     try {
//       await transporter.sendMail(mailOptions);
//       res.status(200).json({ message: 'Email sent successfully!' });
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ message: 'Failed to send email.' });
//     }
//   } else {
//     res.status(405).json({ message: 'Method not allowed' });
//   }
// }
