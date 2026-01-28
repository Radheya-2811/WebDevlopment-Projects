package com.ProStafffBackend.Controller;

import com.ProStafffBackend.dto.ContactRequest;
import com.ProStafffBackend.Services.EmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/contact")
@CrossOrigin(origins = "*") // Allow frontend
public class ContactController {

    @Autowired
    private EmailService emailService;

    private final String ADMIN_EMAIL = "YOUR_EMAIL@gmail.com";

    @PostMapping
    public String submitContactForm(@RequestBody ContactRequest request) {

        // 1️⃣ Email to Admin
        String adminSubject = "📩 New Contact Form Submission - ProStafff";
        String adminBody =
                "New message received:\n\n" +
                        "Name: " + request.getFirstName() + " " + request.getLastName() + "\n" +
                        "Email: " + request.getEmail() + "\n" +
                        "Mobile: " + request.getMobile() + "\n\n" +
                        "Message:\n" + request.getMessage();

        emailService.sendEmail(ADMIN_EMAIL, adminSubject, adminBody);

        // 2️⃣ Auto Reply to User
        String userSubject = "Thanks for contacting ProStafff 🚀";
        String userBody =
                "Hi " + request.getFirstName() + ",\n\n" +
                        "Thank you for reaching out to ProStafff.\n" +
                        "Our team will contact you shortly.\n\n" +
                        "Regards,\nProStafff Team";

        emailService.sendEmail(request.getEmail(), userSubject, userBody);

        return "Message sent successfully";
    }
}