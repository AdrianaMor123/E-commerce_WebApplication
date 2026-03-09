import Newsletter from "../models/newsletterModel.js";
import validator from "validator";
import nodemailer from "nodemailer";

export const subscribe = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email || !validator.isEmail(email)) {
      return res.status(400).json({ success: false, message: "Invalid email" });
    }

    const exists = await Newsletter.findOne({ email });
    if (exists) {
      return res.status(400).json({ success: false, message: "Email already subscribed" });
    }

    const newSub = new Newsletter({ email });
    await newSub.save();

    // --- Email setup ---
    const transporter = nodemailer.createTransport({
      service: "Gmail", // or your email service
      auth: {
        user: process.env.ADMIN_EMAIL,
        pass: process.env.ADMIN_PASSWORD, // or app password if Gmail
      },
    });

    // 1. Confirmation email to subscriber
    await transporter.sendMail({
      from: `"House of Hype" <${process.env.ADMIN_EMAIL}>`,
      to: email,
      subject: "Subscription Confirmed!",
      html: `<h3>Thank you for subscribing to our newsletter!</h3><p>You will now receive updates from House of Hype.</p>`,
    });

    // // 2. Notification email to admin
    // await transporter.sendMail({
    //   from: `"House of Hype" <${process.env.ADMIN_EMAIL}>`,
    //   to: process.env.ADMIN_EMAIL,
    //   subject: "New Newsletter Subscription",
    //   html: `<p>New subscriber: <b>${email}</b></p>`,
    // });

    res.json({ success: true, message: "Subscribed successfully. Confirmation email sent!" });
  } catch (error) {
    console.error("Error subscribing:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};
