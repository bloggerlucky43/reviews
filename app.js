//local reviewa data
const reviews=[
    {
        id:1,
        name:"Susan Smith",
        job:"Web developer",
        img:"https://media.istockphoto.com/id/1371934584/photo/portrait-of-a-confident-mature-businesswoman-working-in-a-modern-office.jpg?s=612x612&w=0&k=20&c=NF_IO6IEXY3HifRIhRqP0KDFJFdlFwaMwo3zfOOvKnQ=",
        text:
        "Hello, I'm Susan Smith, a passionate web developer with experience in both front-end and back-end development. I specialize in creating responsive, user-friendly websites and web applications that are not only visually appealing but also efficient and scalable. With skills in technologies like HTML, CSS, JavaScript, React, and Node.js, I enjoy turning ideas into functional digital solutions. I'm always eager to take on new challenges and continue learning to stay at the forefront of web development trends."
        
    },
    {
        id:2,
        name:"Sango Smith",
        job:"UI/UX designer",
        img:"https://media.istockphoto.com/id/1032228678/photo/portrait-of-smiling-successful-businesswoman-posing-at-office-desk.jpg?s=612x612&w=0&k=20&c=C9Jt3znc2hKIBYbn4bmlj4xgywZuvsny29MxCZofK8g=",
        text:"Hi, I'm  Sango Smith, a UI/UX designer with a passion for creating intuitive and visually engaging digital experiences. I specialize in understanding user needs and translating them into functional, aesthetically pleasing designs that enhance usability. My goal is to bridge the gap between users and technology, ensuring that every interaction feels seamless and enjoyable.",

    },
    {
        id:3,
        name:"John smith",
        job:"Data analyst",
        img:"https://media.istockphoto.com/id/1299077558/photo/lead-yourself-to-a-life-of-success.jpg?s=612x612&w=0&k=20&c=OQZPSnM1Eq-4Xx8bxJE8KQ5olJFfRw_YMc29aQ0Au6U=",
        text:   
        "Hello, I'm John Smith, a data analyst with a passion for turning raw data into actionable insights. With expertise in data collection, cleaning, and visualization, I excel in using tools like Excel, SQL, and Python to uncover trends and support decision-making. My background in [your field or industry] has equipped me with a strong analytical mindset and a keen eye for detail. I'm dedicated to helping organizations leverage data to drive strategies and improve performance."
    

    }
]


// select items
const img=document.getElementById('person-img');
const author=document.getElementById('author');
const job=document.getElementById('job');
const info=document.getElementById('info');

const prevBtn=document.querySelector('.prev-btn')
const nextBtn=document.querySelector('.next-btn')
const randomBtn=document.querySelector('.random-btn')

// set starting item
let currentItem=0;


//load initial item
window.addEventListener('DOMContentLoaded', function(){
    showPerson(currentItem);
});

// show person based on item

function showPerson(person){
    const item=reviews[person]
    img.src=item.img;
    author.textContent=item.name;
    job.textContent=item.job;
    info.textContent=item.text;
};

// shoe next person

nextBtn.addEventListener('click', function(){
    currentItem++;
    if(currentItem > reviews.length-1){
        currentItem=0;
    }
    showPerson(currentItem);
});
prevBtn.addEventListener('click', function(){
    currentItem--;
    if(currentItem < 0){
        currentItem=reviews.length -1;
    }
    showPerson(currentItem)
});

// show random person
randomBtn.addEventListener('click', function(){
    currentItem=Math.floor(Math.random() * reviews.length)
    showPerson(currentItem);
    
});