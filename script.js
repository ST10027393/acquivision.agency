document.addEventListener("DOMContentLoaded", function () {
    const faqQuestions = document.querySelectorAll(".faq-question");

    faqQuestions.forEach((faqQuestion) => {
        const toggleIcon = faqQuestion.querySelector(".faq-toggle-icon");

        faqQuestion.addEventListener("click", () => {
            faqQuestion.classList.toggle("active");
        });
    });
});
