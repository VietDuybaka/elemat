const quizData = [
    {
        question: "Tìm khoảng đồng biến của hàm số $$ y = 2x^3 - 9x^2 + 12x + 3 $$",
        a: "(-∞; 1) ∪ (2; +∞) ",
        b: "(-∞; 0) và (1; +∞)",
        c: "(-∞; -1) ∪ (0; 1)",
        d: "(0;1)",
        correct: "a",
    },
    {
        question: "Một vật nhỏ dao động điều hòa trên trục Ox theo phương trình x = Acos (ωt + φ). Vận tốc của vật có biểu thức là:",
        a: "v = ωAcos (ωt +φ).",
        b: "v = –ωAsin (ωt +φ).",
        c: "v = –Asin (ωt +φ).",
        d: "v = ωAsin (ωt +φ).",
        correct: "b",
    },
    {
        question: "Ứng với công thức C4H8O2 có bao nhiêu este là đồng phân của nhau ?",
        a: "2",
        b: "3",
        c: "4",
        d: "5",
        correct: "c",
    },
    {
        question: "Đặc điểm nào không phải là đặc điểm cơ bản của nền văn học Việt Nam từ năm 1945 đến năm 1975?",
        a: "Nền văn học chủ yếu vận động theo hướng cách mạng hoá, gắn bó sâu sắc với vận mệnh chung của đất nước.",
        b: "Nền văn học đổi mới theo hướng hiện đại hóa.",
        c: "Nền văn học chủ yếu mang khuynh hướng sử thi và cảm hứng lãng mạn.",
        d: "Nền văn học hướng về đại chúng.",
        correct: "B",
    },


];

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')


let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}


submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }

       currentQuiz++

       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>

           <button onclick="location.reload()">Reload</button>
           `
       }
    }
})