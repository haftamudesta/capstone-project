const section2 = {
  images: ['images/haftamu.jpg', 'images/solomon.png', 'images/tsegay.png', 'images/kinf.png', 'images/berihu.png', 'images/haftamu-m.png'],
  trainers: ['haftamu Desta', 'solomon gebereslassie', 'thegay kidu', 'kinfe gebrekirstos', 'berihu tesfay', 'haftamu mokenen'],
  title: ['substation construction expert', 'Test and commissioning expert', 'Railway Engineer', 'Transmmission construction expert', 'Substation design expert', 'Transmmission substation director'],
  resume: ['graduated from AAiT in electrical engineering for rail way sysytems and from MIT in Electrical and electronics Engineering', 'Test and commissiong expert at industrial park developent corroparation.previously seniour power engineer at METEC ', 'Rail way senior integration Engineer. He has reach exprience in rail awy systems especially in rail way automation system', 'kinfe gebrekirstos is transmmission construction senior expert. he has more than ten years exprience in transmmission construction', 'distribution substation design and system integration exper.He has worked for more than 15 year in different companies', 'specialized in communication system more in fiber communication system.'],
};

const hambergur = document.querySelector('.hamburger');
const information = document.querySelector('.information');
const close = document.querySelector('.close');
hambergur.addEventListener('click', (events) => {
  events.preventDefault();
  hambergur.classList.toggle('close');
  close.style.display = 'block';
  hambergur.style.display = 'none';
  information.classList.add('active');
});
close.addEventListener('click', (events) => {
  events.preventDefault();
  hambergur.classList.toggle('hambergur');
  hambergur.style.display = 'block';
  close.style.display = 'none';
  information.classList.remove('active');
});
const detailtrainers = `<p class="under-line">trainers of the program</p>
<div class="trainers">
    
    <div class="right-side">
        <div class="profesionalist">
        <div class="right">
        <img src=${section2.images[0]} alt="picture of haftamu" >
        </div>
        <div class="left">
        <h2>${section2.trainers[0]}</h2>
        <p class="title">${section2.title[0]}</p>
        <p class="resume">${section2.resume[0]}</p>
        </div>        
        </div>
        <div class="profesionalist">
        <div class="right">
        <img src=${section2.images[1]} alt="picture of haftamu" >
        </div>
        <div class="left">
        <h2>${section2.trainers[1]}</h2>
        <p class="title">${section2.title[1]}</p>
        <p class="resume">${section2.resume[1]}</p>
        </div> 
        </div>
        <div class="profesionalist">
        <div class="right">
        <img src=${section2.images[2]} alt="picture of haftamu" >
        </div>
        <div class="left">
        <h2>${section2.trainers[2]}</h2>
        <p class="title">${section2.title[2]}</p>
        <p class="resume">${section2.resume[2]}</p>
        </div>   
        </div>
    </div>
    <div class="left-side">
        <div class="profesionalist">
        <div class="right">
        <img src=${section2.images[3]} alt="picture of haftamu" >
        </div>
        <div class="left">
        <h2>${section2.trainers[3]}</h2>
        <p class="title">${section2.title[3]}</p>
        <p class="resume">${section2.resume[3]}</p>
        </div>   
        </div>
        <div class="profesionalist">
        <div class="right">
        <img src=${section2.images[4]} alt="picture of haftamu" >
        </div>
        <div class="left">
        <h2>${section2.trainers[4]}</h2>
        <p class="title">${section2.title[4]}</p>
        <p class="resume">${section2.resume[4]}</p>
        </div>   
        </div>
        <div class="profesionalist">
        <div class="right">
        <img src=${section2.images[5]} alt="picture of haftamu" >
        </div>
        <div class="left">
        <h2>${section2.trainers[5]}</h2>
        <p class="title">${section2.title[5]}</p>
        <p class="resume">${section2.resume[5]}</p>
        </div>   
        </div>
    </div>
</div>
`;
const section = document.querySelector('.two');
const classDetail = document.createElement('div');
classDetail.classList.add('detail');
classDetail.insertAdjacentHTML('beforeend', detailtrainers);
section.appendChild(classDetail);
