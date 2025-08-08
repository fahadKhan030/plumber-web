// src/pages/Blogpage.jsx
import React from "react";
import { useParams } from "react-router-dom";

import blogimg1 from "../assets/blog1.avif";
import blogimg2 from "../assets/blog2.avif";
import blogimg3 from "../assets/blog3.avif";
import blogimg4 from "../assets/blog4.avif";
import blogimg5 from "../assets/blog5.webp";
import blogimg6 from "../assets/blog6.webp";

import "../App.css";

const blogs = [
  {
    id: 1,
    img: blogimg1,
    date: "2023-06-01",
    title: "Understanding Plumbing Systems",
    heading: "Understanding Plumbing Systems",
    subheading: "A Comprehensive Guide to Plumbing Components",
    content:
      "Plumbing systems are the unsung heroes of modern living, quietly ensuring the flow of clean water into our homes and the efficient removal of waste. At their core, these intricate networks consist of various interconnected components, each playing a crucial role. From the main water supply line entering your property to the intricate web of pipes, fixtures, and drainage systems within your walls, understanding these elements is fundamental to appreciating how our homes function.\n\nKey components include supply lines, which deliver fresh water; drain-waste-vent (DWV) systems, responsible for removing wastewater and preventing sewer gas buildup; and fixtures like faucets, toilets, and showers, which are the visible points of water usage. Beyond these basics, there are also water heaters, pressure regulators, and various valves that control flow and prevent backflow. Each part is designed to work in harmony, creating a reliable and hygienic water infrastructure.\n\nMaintaining a basic understanding of these systems can empower homeowners to identify potential issues early, perform simple repairs, or communicate more effectively with professional plumbers. Knowing the difference between a supply pipe and a drain pipe, or the function of a shut-off valve, can save time, money, and prevent significant water damage. This foundational knowledge is key to ensuring the longevity and efficiency of your home's plumbing.",
  },
  {
    id: 2,
    img: blogimg2,
    date: "2023-07-10",
    title: "Common Plumbing Issues",
    heading: "Common Plumbing Issues",
    subheading: "How to Fix Common Plumbing Problems",
    content:
      "Every homeowner eventually encounters plumbing issues, ranging from minor annoyances to major emergencies. Recognizing the most common problems is the first step toward effective troubleshooting and repair. Leaky faucets, for instance, are not just irritating; they can waste significant amounts of water over time. Clogged drains, often caused by hair, grease, or food debris, can lead to slow drainage or complete blockages, posing hygiene risks and potential overflow.\n\nBeyond these, low water pressure can be a frustrating problem, often signaling issues with pipes, fixtures, or even the main water supply. Running toilets, characterized by the sound of water constantly refilling the tank, indicate a faulty flapper or fill valve, leading to unnecessary water consumption. Burst pipes, while less common, are severe and require immediate attention, usually due to freezing temperatures or excessive pressure.\n\nWhile some issues necessitate professional help, many common plumbing problems can be addressed with basic DIY skills and tools. Learning how to clear a minor clog with a plunger, replace a worn-out washer in a leaky faucet, or adjust a running toilet can save you a service call. However, for complex problems like persistent low pressure, hidden leaks, or major pipe repairs, it's always best to consult a certified plumber to prevent further damage.",
  },
  {
    id: 3,
    img: blogimg3,
    date: "2023-08-20",
    title: "Choosing the Right Plumber",
    heading: "Choosing the Right Plumber",
    subheading: "Tips for Selecting a Qualified Plumber",
    content:
      "When faced with a plumbing emergency or planning a significant renovation, selecting the right plumber is crucial for ensuring quality work and peace of mind. The market is flooded with options, making it challenging to distinguish between reliable professionals and less reputable services. A good plumber should not only possess technical expertise but also demonstrate professionalism, transparency, and excellent customer service.\n\nKey factors to consider include licensing and insurance, which protect you from liability and ensure the plumber meets industry standards. Experience is also vital; a plumber with a long track record is likely to have encountered and successfully resolved a wide range of issues. Furthermore, look for clear communication regarding pricing, project timelines, and potential solutions. Reputable plumbers will provide detailed estimates and avoid hidden fees.\n\nTo find the best fit, start by asking for recommendations from friends, family, or neighbors. Online reviews and ratings can also offer valuable insights into a plumber's reputation and service quality. Don't hesitate to interview a few candidates, ask for references, and compare bids. Taking the time to vet potential plumbers thoroughly will help you avoid costly mistakes and ensure your plumbing needs are met efficiently and effectively.",
  },
  {
    id: 4,
    img: blogimg4,
    date: "2023-09-15",
    title: "Preventative Plumbing Maintenance",
    heading: "Preventative Plumbing Maintenance",
    subheading: "Keeping Your Plumbing System in Top Shape",
    content:
      "Just like any other system in your home, your plumbing requires regular maintenance to function optimally and prevent costly breakdowns. Proactive care can significantly extend the lifespan of your pipes and fixtures, saving you from unexpected repairs and water damage. Neglecting simple preventative measures can lead to a cascade of problems, from minor leaks to major structural issues caused by undetected water intrusion.\n\nEffective preventative maintenance involves several key practices. Regularly checking for leaks under sinks, around toilets, and near appliances can catch small drips before they escalate. Being mindful of what goes down your drains – avoiding grease, food scraps, and non-biodegradable items – can prevent stubborn clogs. Additionally, flushing your water heater annually to remove sediment can improve its efficiency and longevity, while insulating exposed pipes can prevent freezing in colder months.\n\nConsider scheduling annual inspections with a professional plumber. They can identify subtle issues that might go unnoticed by the average homeowner, such as minor pipe corrosion, hidden leaks, or pressure imbalances. A professional can also advise on necessary upgrades or repairs to keep your system in top shape. Investing in preventative maintenance is a smart financial decision that protects your home and ensures a reliable water supply for years to come.",
  },
  {
    id: 5,
    img: blogimg5,
    date: "2023-09-30",
    title: "Eco-Friendly Plumbing Solutions",
    heading: "Eco-Friendly Plumbing Solutions",
    subheading: "Sustainable Practices for Modern Plumbing",
    content:
      "As environmental consciousness grows, so does the demand for sustainable practices in every aspect of our lives, including home plumbing. Eco-friendly plumbing solutions are designed to conserve water, reduce energy consumption, and minimize environmental impact, all while maintaining efficient functionality. Embracing these practices not only benefits the planet but can also lead to significant savings on utility bills for homeowners.\n\nOne of the primary focuses of green plumbing is water conservation. This involves installing low-flow fixtures such as toilets, showerheads, and faucets that use significantly less water without compromising performance. Rainwater harvesting systems, which collect and store rainwater for non-potable uses like irrigation, are another excellent way to reduce reliance on municipal water supplies. Gray water recycling systems, which reuse water from sinks and showers for landscape irrigation, also contribute to substantial water savings.\n\nBeyond water, eco-friendly plumbing also considers energy efficiency. Tankless water heaters, for example, heat water on demand, reducing standby energy losses compared to traditional tank heaters. Proper insulation of pipes can also prevent heat loss, ensuring hot water reaches its destination more efficiently. By integrating these sustainable solutions, homeowners can create a more environmentally responsible living space and contribute to a healthier planet.",
  },
  {
    id: 6,
    img: blogimg6,
    date: "2023-10-01",
    title: "The Future of Plumbing Technology",
    heading: "The Future of Plumbing Technology",
    subheading: "Innovations Shaping the Future of Plumbing",
    content:
      "The plumbing industry, often perceived as traditional, is undergoing a quiet revolution driven by technological advancements. Innovations are transforming how we manage water, detect leaks, and maintain our systems, promising greater efficiency, sustainability, and convenience. These emerging technologies are set to make plumbing smarter, more reliable, and environmentally conscious, moving beyond conventional pipes and fixtures.\n\nSmart plumbing devices are at the forefront of this evolution. Leak detection systems, for instance, can monitor water flow in real-time and alert homeowners to unusual consumption patterns or potential leaks, preventing costly water damage. Smart water heaters can be controlled remotely, optimizing energy use, while smart irrigation systems adjust watering based on weather forecasts, conserving water. These connected devices offer unprecedented control and insight into water usage.\n\nFurther innovations include advanced materials for pipes that are more durable and corrosion-resistant, reducing the need for frequent replacements. Water recycling and purification technologies are becoming more sophisticated, enabling greater water reuse within homes. As these technologies become more accessible, they will not only enhance the functionality and efficiency of our plumbing systems but also play a crucial role in addressing global water conservation challenges and promoting sustainable living.",
  },
];

const Blogpage = () => {
  const { id } = useParams();
  const blog = blogs.find((item) => item.id === parseInt(id));

  if (!blog) {
    return <h1 className="text-center py-20 text-xl">Blog Not Found</h1>;
  }

  return (
    <div>
      <div className="relative text-white gradient-bg h-[35vh] lg:h-[45vh] pt-20 lg:pt-36 w-full">
        <div className="flex items-center justify-center flex-col text-center max-w-[1200px] mx-auto">
          <h1 className="text-2xl md:text-3xl lg:text-5xl max-w-[250px] md:max-w-[500px] font-bold mt-2 mb-4">
            {blog.heading}
          </h1>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto flex items-center  justify-center flex-col p-6">
        <div className="w-[350px] md:w-[600px]  lg:w-[800px] mt-[-120px] md:mt-[-200px] z-10  p-6">
          <img
            src={blog.img}
            alt={blog.title}
            className="w-full h-[200px] md:h-[400px] object-cover rounded-xl mb-6"
          />
        </div>
        <div>
          <span className="text-gray-400">{blog.date}</span>

          <h2 className="text-xl font-semibold mb-4">{blog.subheading}</h2>
          <p className="text-lg text-gray-700 leading-7">{blog.content}</p>
        </div>
      </div>
    </div>
  );
};

export default Blogpage;
