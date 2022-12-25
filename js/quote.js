var quotes = [
    '"Học vấn do người siêng năng đạt được, tài sản do người tinh tế sở hữu, quyền lợi do người dũng cảm nắm giữ, thiên đường do người lương thiện xây dựng." – Franklin',
    '"Hiền dữ đâu phải do tính sẵn, phần nhiều do giáo dục mà nên.” Hồ Chí Minh',
    '“Học tập là hạt giống của kiến thức, kiến thức là hạt giống của hạnh phúc.” Ngạn ngữ Gruzia',
    '"Giáo dục là vũ khí mạnh nhất mà người ta có thể sử dụng để thay đổi cả thế giới." – N. Mandela',
    'Đọc sách không bằng suy ngẫm. Học trường không hơn được trường đời. – Immanuel Kant',
    '"Cần phải lựa chọn một cách nghiêm ngặt xem nên học gì và không nên học gì.” Lev. Tolstoy',
    '“Đọc sách không bằng suy ngẫm. Học trường không hơn được trường đời”. Immanuel Kant',
    '“Học không biết chán, dạy người không biết mỏi.” Khổng Tử.',
    'Ngủ dậy muộn thì phí mất cả ngày, ở tuổi thanh niên mà không học tập thì phí mất cả cuộc đời .'
]

function newQuote(){
    var randomNumber = Math.floor(Math.random() * quotes.length)
    document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber]
}

newQuote()