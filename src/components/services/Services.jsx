

import "./services.css"
import ComputerModelContainer from "./computer/ComputerModelContainer"
import AvatarModelContainer from "./avatar/avatarModelContainer"
import ConsoleModelContainer from "./gaming/ConsoleModelContainer"


const Services = () => {
  return (
    <div className='services'>
      <div className="sSection left"></div>
      <div className="sSection right">
        <ComputerModelContainer />
        <AvatarModelContainer />
        <ConsoleModelContainer />


      </div>
    </div>
  )
}

export default Services