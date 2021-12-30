const faqQuestions = document.querySelectorAll('.faq-question')

faqQuestions.forEach(q => {
    q.addEventListener('click', () => {
        q.parentNode.classList.toggle('show')
    })
})