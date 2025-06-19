

import "./services.css"
import ComputerModelContainer from "./computer/ComputerModelContainer"
import AvatarModelContainer from "./avatar/avatarModelContainer"
import ConsoleModelContainer from "./gaming/ConsoleModelContainer"
import AnimeModelContainer from "./anime/AnimeModelContainer"
import Counter from "./Counter"


const services = [

  {
  id: 1,
  img: "/service1.png",
  title: "Web Development",
  counter: 35,
},
{
  id: 2, 
  img: "/service2.png",
  title: "Product Design",
  counter: 23,

},
{
  id: 3,
  img: "/service3.png",
  title: "Branding",
  counter: 46
}
];

const Services = () => {
  return (
    <div className='services'>
      <div className="sSection left">
      <h1 className="sTitle"> How can I help?</h1>
      <div className="serviceList">
        {services.map((service) => (
          <div className="service" key={service.id}>
            <div className="serviceIcon">
            <img src={service.img} alt="" />
          </div>
          <div className="serviceInfo">
            <h2>{service.title}</h2>
            <h3>{service.counter} Projects</h3>
           
          </div>
          </div>
        ))}


      </div>
      <div className="counterList">
        <Counter from={0} to={104} text="Projects Completed" />
        <Counter from={0} to={72} text="Happy Clients" />
      </div>

      </div>
      <div className="sSection right">
        {/* <ComputerModelContainer />
        <AvatarModelContainer />
        <ConsoleModelContainer />
        <AnimeModelContainer /> */}


      </div>
    </div>
  )
}

export default Services