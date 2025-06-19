

import "./services.css"
import ComputerModelContainer from "./computer/ComputerModelContainer"
import AvatarModelContainer from "./avatar/avatarModelContainer"
import ConsoleModelContainer from "./gaming/ConsoleModelContainer"
import AnimeModelContainer from "./anime/AnimeModelContainer"


const Services = () => {
  return (
    <div className='services'>
      <div className="sSection left"></div>
      <div className="sSection right">
        <ComputerModelContainer />
        <AvatarModelContainer />
        <ConsoleModelContainer />
        <AnimeModelContainer />


      </div>
    </div>
  )
}

export default Services