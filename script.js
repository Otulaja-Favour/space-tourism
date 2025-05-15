let nav1 = document.getElementById('nav1')
let nav2 = document.getElementById('nav2')
let nav3 = document.getElementById('nav3')
let nav4 = document.getElementById('nav4')
let section1 = document.getElementById('section1')
let section2 = document.getElementById('section2')
let container = document.getElementById('main-container')
let Text = document.getElementById('text')
let homeLeft = document.getElementById('home1')
let homeRight = document.getElementById('home2')
let destinationLeft = document.getElementById('destination1')
let destinationRight = document.getElementById('destination2')
let crewLeft = document.getElementById('crew1')
let crewRight = document.getElementById('crew2')
let technologyLeft = document.getElementById('technology1')
let technologyRight = document.getElementById('technology2')
let moon = document.getElementById('moon')
let mars = document.getElementById('mars')
let europa = document.getElementById('europa')
let titan = document.getElementById('titan')
let cretext = document.getElementById('cretext')
let techtext = document.getElementById('techtext')


nav1.addEventListener('click', () => {
  nav1.style.borderBottom = '2px solid white'
  nav2.style.borderBottom = 'none'
  nav3.style.borderBottom = 'none'
  nav4.style.borderBottom = 'none'

  container.style.backgroundImage = "url('./assets/home/background-home-desktop.jpg')";
  container.style.backgroundSize = 'cover';
  container.style.backgroundPosition = 'center';
  container.style.backgroundRepeat = 'no-repeat';


  homeLeft.style.display = 'block'
  homeRight.style.display = 'block'
  destinationLeft.style.display = 'none'
  destinationRight.style.display = 'none'
  crewLeft.style.display = 'none'
  crewRight.style.display = 'none'
  technologyLeft.style.display = 'none'
  technologyRight.style.display = 'none'
})


nav2.addEventListener('click', () => {
  nav2.style.borderBottom = '2px solid white'
  nav1.style.borderBottom = 'none'
  nav3.style.borderBottom = 'none'
  nav4.style.borderBottom = 'none'

  container.style.backgroundImage = "url('./assets/destination/background-destination-desktop.jpg')";
  container.style.backgroundSize = 'cover';
  container.style.backgroundPosition = 'center';
  container.style.backgroundRepeat = 'no-repeat';


  homeLeft.style.display = 'none'
  homeRight.style.display = 'none'
  destinationLeft.style.display = 'block'
  destinationRight.style.display = 'block'
  crewLeft.style.display = 'none'
  crewRight.style.display = 'none'
  technologyLeft.style.display = 'none'
  technologyRight.style.display = 'none'
})


nav3.addEventListener('click', () => {
  nav3.style.borderBottom = '2px solid white'
  nav1.style.borderBottom = 'none'
  nav2.style.borderBottom = 'none'
  nav4.style.borderBottom = 'none'

  container.style.backgroundImage = "url('./assets/crew/background-crew-desktop.jpg')";
  container.style.backgroundSize = 'cover';
  container.style.backgroundPosition = 'center';
  container.style.backgroundRepeat = 'no-repeat';


  homeLeft.style.display = 'none'
  homeRight.style.display = 'none'
  destinationLeft.style.display = 'none'
  destinationRight.style.display = 'none'
  crewLeft.style.display = 'block'
  crewRight.style.display = 'block'
  technologyLeft.style.display = 'none'
  technologyRight.style.display = 'none'
})

nav4.addEventListener('click', () => {
  nav4.style.borderBottom = '2px solid white'
  nav1.style.borderBottom = 'none'
  nav2.style.borderBottom = 'none'
  nav3.style.borderBottom = 'none'

  container.style.backgroundImage = "url('./assets/technology/background-technology-desktop.jpg')";
  container.style.backgroundSize = 'cover';
  container.style.backgroundPosition = 'center';
  container.style.backgroundRepeat = 'no-repeat';


  homeLeft.style.display = 'none'
  homeRight.style.display = 'none'
  destinationLeft.style.display = 'none'
  destinationRight.style.display = 'none'
  crewLeft.style.display = 'none'
  crewRight.style.display = 'none'
  technologyLeft.style.display = 'block'
  technologyRight.style.display = 'block'
})


moon.addEventListener('click', () => {
  moon.style.backgroundColor = 'white'
  mars.style.backgroundColor = 'transparent'
  europa.style.backgroundColor = 'transparent'
  titan.style.backgroundColor = 'transparent'


  destinationLeft.innerHTML = `
  <p id="des">01 PICK YOUR DESTINATION</p>

<img src="./assets/destination/image-moon.png" alt="">


`

  Text.innerHTML = `
  <h1>MOON</h1>
            <p>See our planet as you’ve never seen it before. A perfect relaxing
              trip away to help regain perspective and come back refreshed. While you’re there,
              take in some history by visiting the Luna 2 and Apollo 11 landing sites.</p>
<div id="flex">

            <p>Avg. distance
              <br>
              384,400 km
            </p>
            <p>Est. travel time
              <br>
              3 days
            </p>
            </div>
  `
})

mars.addEventListener('click', () => {
  mars.style.backgroundColor = 'white'
  moon.style.backgroundColor = 'transparent'
  europa.style.backgroundColor = 'transparent'
  titan.style.backgroundColor = 'transparent'

  destinationLeft.innerHTML = `
           <p id="des">01 PICK YOUR DESTINATION</p>
          
          <img src="./assets/destination/image-mars.png" alt="">
          
  `
  Text.innerHTML = `
  <br>
  <h1>Mars</h1>
            <p>Don’t forget to pack your hiking boots. You’ll need them to 
tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!
</p>
<div id="flex">

            <p>Avg. distance
            <br>
225 mil. km
            </p>
            <p>
            Est. travel time
            <br>
9 months
            </p></div>
  `
})


europa.addEventListener('click', () => {
  europa.style.backgroundColor = 'white'
  mars.style.backgroundColor = 'transparent'
  moon.style.backgroundColor = 'transparent'
  titan.style.backgroundColor = 'transparent'
  destinationLeft.innerHTML = `
            <p id="des">01 PICK YOUR DESTINATION</p>
    <img src="./assets/destination/image-europa.png" alt="">
          
  `
  Text.innerHTML = `
  <h1>Europia</h1>
            <p>
            The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.

            </p>
<div id="flex">

            <p>
Avg. distance
<br>
628 mil. km
            </p>
            <p>Est. travel time
              <br>
              9 days
            </p></div>
  `
})

titan.addEventListener('click', () => {
  titan.style.backgroundColor = 'white'
  mars.style.backgroundColor = 'transparent'
  europa.style.backgroundColor = 'transparent'
  moon.style.backgroundColor = 'transparent'
  destinationLeft.innerHTML = `
             <p id="des">01 PICK YOUR DESTINATION</p>
          
   <img src="./assets/destination/image-titan.png" alt="">

          
  `
  Text.innerHTML = `
           <h1>Titan</h1>
            <p>
            The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.

            </p>
<div id="flex">

            <p>Avg. distance
              <br>
              1.6 bil. km
            </p>
            <p>Est. travel time
              <br>
              7 days
            </p></div>
  `
})


document.getElementById('per1').addEventListener('click', () => {
  document.getElementById('per1').style.backgroundColor = 'white'
  document.getElementById('per2').style.backgroundColor = 'transparent'
  document.getElementById('per3').style.backgroundColor = 'transparent'
  document.getElementById('per4').style.backgroundColor = 'transparent'

  cretext.innerHTML = `
<p>02  MEET YOUR CREW</p>
<p>COMMANDER</p>
<h1>Douglas Hurley</h1>
<P>Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.</P>
</div>
`
  crewRight.innerHTML = `
<img src="./assets/crew/image-douglas-hurley.png" alt="">

`

})

document.getElementById('per2').addEventListener('click', () => {
  document.getElementById('per2').style.backgroundColor = 'white'
  document.getElementById('per1').style.backgroundColor = 'transparent'
  document.getElementById('per3').style.backgroundColor = 'transparent'
  document.getElementById('per4').style.backgroundColor = 'transparent'
  cretext.innerHTML = `
  <p>02  MEET YOUR CREW</p>
  <p>Mission Specialist</p>
  <h1>Mark Shuttleworth</h1>
  <P>
  Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.
  </P>
  </div>
  `

  crewRight.innerHTML = `
<img src="./assets/crew/image-mark-shuttleworth.png" alt="">

`
})

document.getElementById('per3').addEventListener('click', () => {
  document.getElementById('per3').style.backgroundColor = 'white'
  document.getElementById('per2').style.backgroundColor = 'transparent'
  document.getElementById('per1').style.backgroundColor = 'transparent'
  document.getElementById('per4').style.backgroundColor = 'transparent'
  cretext.innerHTML = `
<p>02  MEET YOUR CREW</p>
<p>Pilot</p>
<h1>Victor Glover</h1>
<P>
Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.
</P>
`

  crewRight.innerHTML = `
<img src="./assets/crew/image-victor-glover.png" alt="">

`
})

document.getElementById('per4').addEventListener('click', () => {
  document.getElementById('per4').style.backgroundColor = 'white'
  document.getElementById('per2').style.backgroundColor = 'transparent'
  document.getElementById('per3').style.backgroundColor = 'transparent'
  document.getElementById('per1').style.backgroundColor = 'transparent'
  cretext.innerHTML = `
<p>02  MEET YOUR CREW</p>
<p>Flight Engineer</p>
<h1>Anousheh Ansari
</h1>
<P>
Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.
</P>
</div>
`

  crewRight.innerHTML = `
<img src="./assets/crew/image-anousheh-ansari.png" alt="">

`
})

document.getElementById('tech1').addEventListener('click', () => {
  techtext.innerHTML = `
  <P>THE TECHNOLOGY...</P>
            <h2>Launch Vehicle</h2>
            <p>A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!</p>
  `

  technologyRight.innerHTML = `
<img src="./assets/technology/image-launch-vehicle-portrait.jpg" alt="">
  
  `
})

document.getElementById('tech2').addEventListener('click', () => {
  techtext.innerHTML = `
  <P>THE TECHNOLOGY...</P>
            <h2>Spaceport</h2>
            <p>
            A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.
            </p>
  `

  technologyRight.innerHTML = `
<img src="./assets/technology/image-spaceport-portrait.jpg" alt="">
    
    `
})

document.getElementById('tech3').addEventListener('click', () => {
  techtext.innerHTML = `
  <P>THE TECHNOLOGY...</P>
            <h2>Space capsule</h2>
            <p>
           A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.
            </p>
  `

  technologyRight.innerHTML = `
<img src="./assets/technology/image-space-capsule-portrait.jpg" alt="">
    
    `
})
document.getElementById('circle').addEventListener('click', () => {
  nav2.style.borderBottom = '2px solid white'
  nav1.style.borderBottom = 'none'
  nav3.style.borderBottom = 'none'
  nav4.style.borderBottom = 'none'

  container.style.backgroundImage = "url('./assets/destination/background-destination-desktop.jpg')";
  container.style.backgroundSize = 'cover';
  container.style.backgroundPosition = 'center';
  container.style.backgroundRepeat = 'no-repeat';

  moon.style.backgroundColor = 'white'

  homeLeft.style.display = 'none'
  homeRight.style.display = 'none'
  destinationLeft.style.display = 'block'
  destinationRight.style.display = 'block'
  crewLeft.style.display = 'none'
  crewRight.style.display = 'none'
  technologyLeft.style.display = 'none'
  technologyRight.style.display = 'none'
})