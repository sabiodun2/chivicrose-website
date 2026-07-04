import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaWater, FaBolt, FaWind, FaFireExtinguisher, FaTools, FaSolarPanel, FaTruck, FaProjectDiagram, FaCogs } from 'react-icons/fa'
import { MdEngineering } from 'react-icons/md'
import { GiValve } from 'react-icons/gi'
import Gallery from '../components/Gallery'
import './Services.css'

const productCategories = [
  // Pump Services
  {
    id: 1,
    title: 'Pump Sales & Maintenance',
    products: [
      {
        id: 'p1',
        image: '/images/surface pump.jpeg',
        name: 'Surface Pumps',
        summary: 'Above-ground pumps for water, oil, and chemical transfer. Includes centrifugal and vertical models.',
        details: `Surface, vertical, and centrifugal pumps are mechanical devices installed above ground used to transfer liquids such as water, oil, or chemicals. Centrifugal pumps use a rotating impeller to move large volumes efficiently with steady flow, while vertical pumps lift liquids from deep sources like boreholes using a space-saving vertical shaft design. Together they offer self-priming capability, pressure boosting, and reliable flow control.

Key uses include irrigation, industrial cooling, municipal water supply, oil and fuel transfer, well pumping, cooling towers, flood drainage, and fire protection systems.`,
      },
      {
        id: 'p2',
        image: '/images/electric motors1.jpeg',
        name: 'Electric Motors',
        summary: 'Compact motor-pump units offering clean, quiet, and efficient fluid movement.',
        details: `Electric motor pumps integrate an electric motor directly with a pump into a single compact assembly, converting electrical energy into hydraulic energy. They offer clean and quiet operation, instant start/stop control, variable speed operation with VFDs, high efficiency, and low maintenance compared to engine-driven alternatives.

Common applications include residential water supply, industrial processing, commercial HVAC circulation, agricultural irrigation, wastewater and drainage systems, and fire protection sprinkler systems.`,
      },
      {
        id: 'p3',
        image: '/images/air.jpg',
        name: 'Air Blowers',
        summary: 'High-volume airflow systems for aeration, ventilation, and pneumatic conveying.',
        details: `Air blowers generate a continuous, high-volume flow of air or gas at moderate pressure using rotating impellers, lobes, or fans. They provide high-volume airflow, moderate pressure generation, oil-free operation in many models, continuous duty capability, and smooth low-pulsation flow.

Common uses include wastewater treatment aeration, pneumatic conveying of powders and granules, industrial drying and cleaning, aquaculture oxygenation, HVAC ventilation, and vacuum system applications.`,
      },
      {
        id: 'p4',
        image: '/images/fire hydrant pump.jpeg',
        name: 'Fire Hydrant and Equipments',
        summary: 'Complete fire protection systems delivering high-pressure water to hydrants and sprinklers.',
        details: `Fire hydrant pumps and equipment form a complete fire protection system including a fire pump, jockey pump, controllers, piping, valves, and hydrant landing valves. They provide high-pressure water delivery, automatic start-up when pressure drops, jockey pump maintenance of standby pressure, dual power source backup, and continuous flow monitoring.

These systems are essential in commercial buildings, industrial facilities, residential high-rises, airports, and oil and gas facilities for life-safety fire protection.`,
      },
      {
        id: 'p5',
        image: '/images/dredge pump.jpeg',
        name: 'Sewage/Submersible Pumps',
        summary: 'Heavy-duty submersible pumps for wastewater, sludge, and abrasive slurry handling.',
        details: `Sewage and submersible pumps are heavy-duty electric pumps designed to handle raw wastewater containing solids and fibrous materials, fully sealed for underwater operation. For more demanding slurry environments, dredge pumps add extra-thick casings and wear-resistant materials to handle sand, gravel, and mud at high solid content.

Together they offer solids handling, submerged operation, optional grinding/maceration, automatic float-switch control, and corrosion resistance — used in municipal sewage systems, basements, septic systems, flood control, dredging, mining, and land reclamation projects.`,
      },
      {
        id: 'p6',
        image: '/images/industrial valve.jpg',
        name: 'Industrial Valves',
        summary: 'A full range of valves for flow control, isolation, and pressure regulation.',
        details: `Industrial valves are mechanical devices designed to control, regulate, direct, or shut off fluid flow within a piping system. We supply gate, globe, ball, butterfly, check, plug, diaphragm, pressure relief, pressure reducing, control, pinch, knife gate, and needle valves — each suited to specific flow control, isolation, or throttling needs.

Used across oil and gas, water and wastewater treatment, chemical processing, power generation, pharmaceuticals, HVAC, mining, and marine applications.`,
      },
    ],
  },

  // Water Treatment Services
  {
    id: 2,
    title: 'Water Treatment Services',
    products: [
      {
        id: 'w1',
        image: '/images/water purification system 4.jpeg',
        name: 'Water Treatment Materials',
        summary: 'Filtration and treatment equipment from domestic filters to industrial RO systems.',
        details: `We supply a full range of water treatment materials including domestic water filters, softeners, large-scale Reverse Osmosis (RO) systems, and industrial effluent treatment equipment. Our process begins with water analysis to identify contaminants before designing a customized treatment solution.

Used for residential drinking water, industrial process water, sewage treatment, and sustainable wastewater management.`,
      },
      {
        id: 'w2',
        image: '/images/tech consult.jpeg',
        name: 'Technical Consultations',
        summary: 'Expert advice on pump selection, system design, and project implementation.',
        details: `Our technical consultation service provides professional guidance on selecting the right pumping, water treatment, or solar equipment for your specific needs — covering system design, capacity planning, and implementation strategy.

Available for residential, commercial, industrial, and government projects requiring expert input before procurement or installation.`,
      },
      {
        id: 'w3',
        image: '/images/delivery.jpeg',
        name: 'Delivery and Logistics Services',
        summary: 'Reliable transport and delivery of equipment to your project site.',
        details: `We manage the delivery and logistics of all purchased equipment — pumps, motors, solar systems, and water treatment materials — ensuring safe and timely transport to your site, whether residential, commercial, or industrial.

Our logistics network covers Lagos and surrounding regions, with planning support for large-scale or multi-item deliveries.`,
      },
      {
        id: 'w4',
        image: '/images/project management.jpg',
        name: 'Project Management',
        summary: 'Full planning, execution, and supervision of pumping and plumbing projects.',
        details: `Our project management service covers planning, execution, supervision, and monitoring of pumping, plumbing, solar, and water treatment installations from start to finish — ensuring projects are completed on time, within budget, and to specification.

Suited for large commercial or industrial installations requiring coordinated multi-stage execution.`,
      },
    ],
  },

  // Solar Services
  {
    id: 3,
    title: 'Solar Sales & Installation',
    products: [
      {
        id: 's1',
        image: '/images/solar pump.jpeg',
        name: 'Solar Pumps',
        summary: 'Off-grid water pumping powered entirely by solar energy.',
        details: `Solar powered pumps use photovoltaic panels to lift water from wells, boreholes, rivers, or storage tanks without fuel or grid power. They feature Maximum Power Point Tracking (MPPT) for optimal performance, dry-run protection, and automatic start/stop based on sunlight availability.

Ideal for agricultural irrigation, livestock watering, community water supply in remote areas, fish pond aeration, and garden or landscape watering.`,
      },
      {
        id: 's2',
        image: '/images/solar appliance.jpeg',
        name: 'Solar Appliances',
        summary: 'DC-powered household and industrial appliances for off-grid use.',
        details: `Solar appliances include refrigerators, fans, lights, and water heaters engineered for direct DC operation or paired with battery storage. They offer energy-efficient design, battery backup for nighttime use, and portability for remote or mobile applications.

Common uses include solar refrigeration for clinics and homes, ventilation for greenhouses and livestock shelters, solar lighting, solar water heating, and solar-powered charging stations.`,
      },
      {
        id: 's3',
        image: '/images/solar panel.png',
        name: 'Panels & Inverters',
        summary: 'Solar panels and inverter systems for reliable off-grid power generation.',
        details: `We supply grid-tie and off-grid solar panels along with inverter systems that convert and manage solar-generated electricity for use in homes, businesses, and industrial sites. These systems integrate with battery storage and other solar appliances to deliver consistent, renewable power.

Suited for residential solar installations, commercial backup power, rural electrification, and hybrid power systems combining solar with grid or generator power.`,
      },
    ],
  },

  // Fuel Dispenser Sales
  {
    id: 4,
    title: 'Fuel Dispenser Sales',
    products: [
      {
        id: 'f1',
        image: '/images/fuel dispencer.jpeg',
        name: 'Fuel Dispenser',
        summary: 'High-quality fuel dispensers for petrol stations and industrial fuel management.',
        details: `Fuel dispensers are precision metering devices used to transfer and measure petroleum products — petrol, diesel, kerosene, and lubricants — from storage tanks to vehicles or containers. We supply single and multi-product dispensers suited for petrol stations, depots, and industrial fuel management facilities.
Key features include accurate digital metering, multi-hose configurations, tamper-proof flow control, and compatibility with both above-ground and underground storage tanks. Available in manual and electronic variants with optional fleet management integration.
Used in petrol stations, transport depots, aviation fueling, construction sites, and industrial plants requiring reliable on-site fuel dispensing.`,
      },
    ],
  },
]

const companyServices = [
  {
    icon: <MdEngineering size={32} />,
    title: 'Pump Installations',
    description: 'Professional setup of pumping systems for homes, businesses, and industrial sites.',
  },
  {
    icon: <FaTools size={32} />,
    title: 'Pump Maintenance',
    description: 'Routine servicing and preventive maintenance to keep your pumps running smoothly.',
  },
  {
    icon: <FaSolarPanel size={32} />,
    title: 'Solar Installation',
    description: 'Expert installation of solar pumps, panels, and appliances for reliable off-grid power.',
  },
  {
    icon: <FaWater size={32} />,
    title: 'Water Treatment Services',
    description: 'Customized water treatment solutions from domestic filters to industrial systems.',
  },
  {
    icon: <FaCogs size={32} />,
    title: 'Technical Consultations',
    description: 'Expert guidance on equipment selection, system design, and project planning.',
  },
  {
    icon: <FaTruck size={32} />,
    title: 'Delivery and Logistics Services',
    description: 'Safe, timely transport of equipment to your project site, wherever you are.',
  },
  {
    icon: <FaProjectDiagram size={32} />,
    title: 'Project Management',
    description: 'Full planning, execution, and supervision of pumping and plumbing projects.',
  },
]

const Services = () => {
  const [activeProduct, setActiveProduct] = useState(null)

  const toggleProduct = (id) => {
    setActiveProduct(activeProduct === id ? null : id)
  }

  return (
    <div className="services-page">
      <div className="services-hero">
        <h1>Our Products & Services</h1>
        <p>Explore our range of pumping, solar, and water treatment solutions</p>
      </div>

      <div className="services-container">
        {productCategories.map((category) => (
          <div key={category.id} className="product-category-block">
            <h2 className="section-title">{category.title}</h2>
            <div className="products-card-grid">
              {category.products.map((product) => (
                <motion.div
                  key={product.id}
                  className="product-detail-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="product-detail-image">
                    <img src={product.image} alt={product.name} />
                  </div>
                  <div className="product-detail-info">
                    <h3>{product.name}</h3>
                    <p>{product.summary}</p>
                    <button
                      className="view-details-btn"
                      onClick={() => toggleProduct(product.id)}
                    >
                      {activeProduct === product.id ? 'Hide Details' : 'View Details'}
                    </button>
                  </div>

                  <AnimatePresence>
                    {activeProduct === product.id && (
                      <motion.div
                        className="product-detail-expanded"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4 }}
                      >
                        {product.details.split('\n\n').map((para, i) => (
                          <p key={i}>{para}</p>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="company-services-section">
        <h2 className="section-title">Our Services</h2>
        <div className="company-services-grid">
          {companyServices.map((service, i) => (
            <motion.div
            key={i}
            className="company-service-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <div className="company-service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <Gallery />
    </div>
  )
}

export default Services