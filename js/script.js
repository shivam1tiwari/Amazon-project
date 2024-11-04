      const navbar = document.querySelector('.nav-container')
      const header = document.getElementById('header')
      const sliderCard = document.querySelectorAll('.slider-card')
      const button =document.querySelector('.slider-butoon')
      const back = document.querySelector('.back-button')
      const next = document.querySelector('.back-button')
      const select = document.querySelector('.category-list')


      let count = 0;

// slider button event

      button.addEventListener('click',function(e){
        if(count == -4) {
          count = 0;
        }  

        count--;

        sliderCard.forEach((card)=>{
        card.style.transform = `translateX(${count*100}%)`;
        })
      })
// Header sticky when cross full viewport

      function obsCallback(entries, observer) {
        const [entry] = entries;
        console.log(entry.isIntersecting);

        if (entry.isIntersecting) {
            header.classList.remove('header');
        } else {
            header.classList.add('header');
        }
      }

      const obsProperty ={
        root : null,
        threshold:0,
      }
      const observer = new IntersectionObserver(obsCallback,obsProperty);
            observer.observe(navbar);

      setInterval(()=>{
        if(count == -4) {
          count = 0;
        }  

        count--;

        sliderCard.forEach((card)=>{
        card.style.transform = `translateX(${count*100}%)`;
        })
      },6000)  

      select.addEventListener('change',()=>{
        if(select.value!=='search-alias=aps')return select.classList.add('category-list__size')
        select.classList.remove('category-list__size')
      })

