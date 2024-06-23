import React from 'react'
import './Resources.css'
import './Sensors/Sensors'

import sensors from '../Resources/Assets/sensors.png'
import pcb from '../Resources/Assets/pcb.png'
import datasheet from '../Resources/Assets/datasheet.jpg'
import code from '../Resources/Assets/code.png'
import communi from '../Resources/Assets/com.png'
import power from '../Resources/Assets/power.png'
import proto from '../Resources/Assets/proto.png'

import { Link } from 'react-router-dom';
import { Search } from '../../Component/Search/Search'

export const Resources = () => {
  return (
    <div className='resoCollect'>
        <Search/>
      <div className='collect' id='collect1'>
          <div className='resoimg'>
              <img src={sensors} alt="" className='resoimg'/> 
          </div>
          <div className='resopara'>
              <h3>Sensors : </h3>
              <br />
              <p>The sensors section includes motion, temperature, light, proximity, gas,sound, image, and 
                environmental sensors, each serving specific purposes in detecting movement, measuring temperature, 
                gauging light levels, identifying nearby objects, monitoring gases, capturing sound, imaging, and
                assessing environmental factors like humidity.
              </p>
          </div>
          <div className='seemore'>
              <Link to='/sensors' > <button>See more</button></Link>
          </div>
      </div>

      <div className='collect' id='collect2'>
            <div className='resoimg'>
              <img src={pcb} alt="" className='resoimg'/> 
            </div>
          <div className='resopara'>
              <h3>PCB (Printed Circuit Board) :</h3>
              <br />
              <p>The PCB section covers design tools like Altium Designer, PCB manufacturing, components, 
                and assembly. Altium Designer is a highlighted tool in this context. It provides concise 
                insights into the entire process of creating and assembling Printed Circuit Boards, essential 
                for electronic device development.
              </p>   
          </div>
          <div className='seemore'>
              <button>See more</button>
          </div>  
      </div>

      <div className='collect' id='collect3'>
            <div className='resoimg'>
              <img src={datasheet} alt="" className='resoimg'/> 
            </div>
          <div className='resopara'>
              <h3>Data Sheets :</h3>
              <br />
              <p>The Data Sheets section offers concise details on microcontroller, sensor, communication module, 
                and integrated circuit (IC) specifications. These sheets serve as valuable resources, providing 
                essential information for informed decision-making and efficient implementation in diverse 
                applications.
              </p>   
          </div>
          <div className='seemore'>
              <button>See more</button>
          </div>  
      </div>

      <div className='collect' id='collect4'>
            <div className='resoimg'>
              <img src={code} alt="" className='resoimg'/> 
            </div>
          <div className='resopara'>
              <h3>Codes/Programming :</h3>
              <br />
              <p>The Codes/Programming section encompasses programming languages (C, C++, Python), Integrated 
                Development Environments (IDEs), code debugging techniques, and provides sample codes for projects, 
                along with specific examples tailored for various microcontrollers.
              </p>   
          </div>
          <div className='seemore'>
              <button>See more</button>
          </div>  
      </div>

      <div className='collect' id='collect5'>
            <div className='resoimg'>
              <img src={communi} alt="" className='resoimg'/> 
            </div>
          <div className='resopara'>
              <h3>Communication Modules :</h3>
              <br />
              <p>The Communication Modules section covers Wi-Fi, Bluetooth, Zigbee, and Cellular modules, 
                serving diverse wireless applications. Wi-Fi provides internet connectivity, Bluetooth 
                facilitates short-range data exchange, Zigbee supports low-power communication, and Cellular 
                modules offer long-range connectivity options.
              </p>   
          </div>
          <div className='seemore'>
              <button>See more</button>
          </div>  
      </div>

      <div className='collect' id='collect6'>
            <div className='resoimg'>
              <img src={power} alt="" className='resoimg'/> 
            </div>
          <div className='resopara'>
              <h3>Power Management :</h3>
              <br />
              <p>The Power Management section discusses batteries for portable energy, power supply circuits 
                for stable voltage, and energy harvesting techniques for sustainability. It offers a concise 
                overview of key elements in effective power management, emphasizing the importance of these 
                components in electronic systems.
              </p>   
          </div>
          <div className='seemore'>
              <button>See more</button>
          </div>  
      </div>

      <div className='collect' id='collect7'>
          <div className='resoimg'>
              <img src={proto} alt="" className='resoimg'/> 
          </div>
          <div className='resopara'>
              <h3>Prototyping Tools :</h3>
              <br />
              <p>The Prototyping Tools section includes breadboards for circuit construction, prototyping platforms 
                like Arduino and Raspberry Pi, jumper wires for flexible connections, and oscilloscopes plus 
                multimeters for signal analysis. These tools are pivotal for efficient electronic prototyping and 
                testing.
              </p>   
          </div>
          <div className='seemore'>
              <button>See more</button>
          </div>  
      </div>

      <div className='collect' id='collect8'>
          <div className='resoimg'>
              <img src={pcb} alt="" className='resoimg'/> 
          </div>
          <div className='resopara'>
              <h3>Enclosures and Cases :</h3>
              <br />
              <p>The Enclosures and Cases section covers protective enclosures for electronics and explores 3D 
                printing for customized prototyping. It emphasizes the importance of tailored solutions for 
                electronic device development, underlining the role of suitable enclosures and innovative 3D 
                printing techniques.
              </p>   
          </div>
          <div className='seemore'>
              <button>See more</button>
          </div>  
      </div>

      <div className='collect' id='collect9'>
          <div className='resoimg'>
              <img src={sensors} alt="" className='resoimg'/> 
          </div>
          <div className='resopara'>
              <h3>Networking :</h3>
              <br />
              <p>The Networking section delves into IoT basics, highlighting protocols such as MQTT and CoAP, and 
                indispensable networking components. It furnishes a concise overview, equipping readers with 
                foundational knowledge crucial for effective Internet of Things (IoT) networking design and seamless 
                implementation.
              </p>   
          </div>
          <div className='seemore'>
              <button>See more</button>
          </div>  
      </div>

      <div className='collect' id='collect10'>
          <div className='resoimg'>
              <img src={pcb} alt="" className='resoimg'/> 
          </div>
          <div className='resopara'>
              <h3>Security :</h3>
              <br />
              <p>The Security section addresses IoT security best practices, encryption techniques, and secure 
                coding practices. It emphasizes implementing effective measures for safeguarding sensitive data 
                during communication, highlighting the pivotal role of code integrity in fortifying IoT systems 
                against potential threats.
              </p>   
          </div>
          <div className='seemore'>
              <button>See more</button>
          </div>  
      </div>

      <div className='collect' id='collect11'>
          <div className='resoimg'>
              <img src={pcb} alt="" className='resoimg'/> 
          </div>
          <div className='resopara'>
              <h3>Microcontrollers :</h3>
              <br />
              <p>The Microcontrollers section includes basics, popular models, interfacing, and development tools. 
                Emphasizing microcontroller datasheets, it explores Real-time Operating Systems (RTOS), low-power 
                microcontrollers, and advanced topics. This concise overview encapsulates key aspects of 
                microcontroller technology.
              </p>   
          </div>
          <div className='seemore'>
              <button>See more</button>
          </div>  
      </div>

      <div className='collect' id='collect12'>
          <div className='resoimg'>
              <img src={pcb} alt="" className='resoimg'/> 
          </div>
          <div className='resopara'>
              <h3>IoT Platforms and Cloud Services: :</h3>
              <br />
              <p>The IoT Platforms and Cloud Services section covers Cloud Service Providers, IoT platform 
                comparisons, and emphasizes data storage and analysis. This concise overview offers insights into 
                navigating IoT platforms and leveraging cloud services for optimal functionality.
              </p>   
          </div>
          <div className='seemore'>
              <button>See more</button>
          </div>  
      </div>

      <div className='collect' id='collect13'>
          <div className='resoimg'>
              <img src={pcb} alt="" className='resoimg'/> 
          </div>
          <div className='resopara'>
              <h3>Wireless Communication :</h3>
              <br />
              <p>The Wireless Communication section covers RF communication, antennas, and signal propagation. 
                It explores RF technologies, delves into antenna design, and addresses signal propagation 
                principles. This concise overview provides key insights for optimizing wireless networks.
              </p>   
          </div>
          <div className='seemore'>
              <button>See more</button>
          </div>  
      </div>

      <div className='collect' id='collect14'>
          <div className='resoimg'>
              <img src={pcb} alt="" className='resoimg'/> 
          </div>
          <div className='resopara'>
              <h3>Machine Learning and AI for IoT :</h3>
              <br />
              <p>The Machine Learning and AI for IoT section introduces ML/AI fundamentals, explores dedicated 
                libraries for IoT, and emphasizes the role of Edge Computing. It provides key insights for 
                leveraging ML and AI to enhance data processing and decision-making in IoT applications.
              </p>   
          </div>
          <div className='seemore'>
              <button>See more</button>
          </div>  
      </div>

      <div className='collect' id='collect15'>
          <div className='resoimg'>
              <img src={pcb} alt="" className='resoimg'/> 
          </div>
          <div className='resopara'>
              <h3>IoT Prototyping and Development Kits :</h3>
              <br />
              <p>The IoT Prototyping and Development Kits section includes kits for beginners, facilitating an easy 
                entry into IoT prototyping, and advanced development kits for complex projects. This concise 
                overview ensures options catering to users at different skill levels in the IoT prototyping and 
                development domain.
              </p>   
          </div>
          <div className='seemore'>
              <button>See more</button>
          </div>  
      </div>

      <div className='collect' id='collect16'>
          <div className='resoimg'>
              <img src={pcb} alt="" className='resoimg'/> 
          </div>
          <div className='resopara'>
              <h3>Documentation and Project Management :</h3>
              <br />
              <p>The Documentation and Project Management section emphasizes best practices for clear IoT project 
                documentation, highlighting its significance in streamlined development. It also explores project 
                management tools, providing insights for efficient collaboration and tracking in IoT projects.
              </p>   
          </div>
          <div className='seemore'>
              <button>See more</button>
          </div>  
      </div>

      <div className='collect' id='collect17'>
          <div className='resoimg'>
              <img src={pcb} alt="" className='resoimg'/> 
          </div>
          <div className='resopara'>
              <h3>Troubleshooting and Debugging :</h3>
              <br />
              <p>The Troubleshooting and Debugging section provides solutions for common issues and explores 
                debugging techniques in IoT projects. It equips users with insights into identifying and resolving 
                challenges during development and deployment, enhancing problem-solving skills for efficient 
                troubleshooting in the dynamic field of IoT.
              </p>   
          </div>
          <div className='seemore'>
              <button>See more</button>
          </div>  
      </div>

    </div>
  )
}
