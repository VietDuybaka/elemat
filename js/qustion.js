function playAudio(url) {
    new Audio(url).play();
  }
var submit_btn = document.querySelector(".submit-btn"),
               answer_input = document.querySelector(".answer"),
               hinl_place = document.querySelector(".hinl-place"),
               qustion = document.querySelector(".qustion"),
               alert_box = document.querySelector(".alert-box"),
               skip = document.querySelector(".skip"),
               reveal = document.querySelector(".reveal"),
               qustion_number = "",
               title_data = "";

         window.addEventListener('load', () => {
            getQuestion();
         });

         skip.addEventListener("click", () => {
            getQuestion();
         });

         reveal.addEventListener("click", () => {
            show_alert("Chúc may mắn lần sau","red");
            qustion.style = "color: #39ff14;";
            qustion.innerHTML = "Câu trả lời là: " + title_data;
         });

         submit_btn.addEventListener("click", () => {
            var set_answer = answer_input.value;
            var final_answer = set_answer.toLowerCase();
            if(final_answer == title_data)
            {
               show_alert("HOÀN TOÀN CHÍNH XÁC","#39ff14");
               playAudio('sound/correct.mp3')
               qustion.innerHTML = "Đang tải câu hỏi mới ...";
               qustion.style = "color: blue;"
               setTimeout(getQuestion,2500);
            }
            else
            {
                show_alert("Chưa chính xác","red");
                playAudio('sound/wrong.mp3')
            }
         });

         function getQuestion()
         {
            qustion_number = Math.floor(Math.random() * qustion_data_base.length),
            image_url = qustion_data_base[qustion_number].image_url;
            title_data = qustion_data_base[qustion_number].title
            hinl_place.innerHTML = `<img width=300 height=300 src = "${image_url}"></img>`;
            qustion.innerHTML = qustion_data_base[qustion_number].hint_qustion;
            qustion.style = "color: black;";
            alert_box.style = "display: none;";
            answer_input.value = "";
         }
         function show_alert(alert_title,bg_color)
         {
            alert_box.style = "display: block; background:" + bg_color;
            alert_box.innerHTML = alert_title;
         }

var qustion_data_base = [
      {
          title: "urbanisation",
          hint_qustion: "The process by which more and more people leave the countryside to live in cities",
          image_url: "https://imgnew.outlookindia.com/public/uploads/articles/2019/6/10/Enviornment_36_20190608.jpg"
      },
      {
          title: "industrialisation",
          hint_qustion: "The process of developing industries in a country",
          image_url: "https://indiacsr.in/wp-content/uploads/2021/11/x1080.jpg"
      },   
      {
          title: "lead",
          hint_qustion: "To control a group of people, a country, or a situation",
          image_url: "https://www.studytienganh.vn/upload/2021/05/98131.jpeg"
      },
      {
          title: "progressive",
          hint_qustion: "Developing or happening gradually",
          image_url: "https://cafefcdn.com/thumb_w/650/2019/2/9/kt-15496454529361952141237-crop-1549645474073418365895.jpg"
      },
      {
          title: "mould and mildew",
          hint_qustion: "A grey or black subtance that grows on food, walls or surfaces in wet and warm conditions",
          image_url: "https://www.mashed.com/img/gallery/why-you-shouldnt-just-cut-the-mold-off-old-bread/l-intro-1647730054.jpg"
      },
      {
          title: "clutter",
          hint_qustion: "(a lot of objects in) A state of being untidy",
          image_url: "https://s.abcnews.com/images/Health/cluttered-home-stock-jef-190114_hpMain_16x9_1600.jpg"
      },
      {
          title: "organic",
          hint_qustion: "Not using artificial chemicals in the growing of plants and animals for food and other products",
          image_url: "https://naganic.vn/wp-content/uploads/2021/09/thuc-pham-organic-1.jpg"
      },
      {
          title: "figure",
          hint_qustion: "The symbol for a number or an amount expressed in numbers",
          image_url: "https://i.imgur.com/cC5yS01.jpg"
      },
      {
          title: "mindset",
          hint_qustion: "A person's way of thinking and their opinions",
          image_url: "https://cafekinhdoanh.net/wp-content/uploads/2020/11/mindset-la-gi.jpg"
      },
      {
          title: "mass media",
          hint_qustion: "The main means of communication reaching people on a large scale, such as: television, radio, movies, newspapers,...",
          image_url: "https://lh6.googleusercontent.com/g4okBvKUUwz4lJgy-m0rVzHHZAC7Oz37qBa7HwqhI0gXFjA71lIjxP9pb7YKCXuTDRviFNY_wYSbRbBqVzh13VylV1nIdQV3UpmfLv9bJwl8pdb5Ac7UdgfzXCnTIoIG00tIWZBz"
      },
  ]