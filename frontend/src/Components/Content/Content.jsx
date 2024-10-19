import React from 'react'
import './Content.css'
import ia_our_expertise from '../Assets/ia_our_expertise.png'
import ia_customized_solutions from '../Assets/ia_customized_solutions.png'
import ia_industry_expertise from '../Assets/ia_industry_expertise.png'
import innovative_approach from '../Assets/innovative_approach.png'
import ia_focused_approach from '../Assets/ia_focused_approach.png'




const Content = () => {
  return (
    <div className='content'>
      <div className="main-card-1">
        <div className="main-card-title-1">
          <h3>Our <span className='r-c'>Expertise</span></h3>
        </div>
        <div className="main-card-title-2">
          <p>PAI Fundtech is an innovative, forward-thinking Professional Services Company specializing in delivering bespoke financial solutions tailored to meet the unique challenges of your business. We pride ourselves on being a trusted partner throughout every stage of your business journey. From formulating expert tax strategies that maximize savings and compliance to offering in-depth audit and assurance services, or providing cutting-edge management consulting to enhance operational efficiency, we are with you at every step. Our team of highly skilled industry professionals brings deep and diverse experience across multiple sectors, ensuring that your business is supported by expert hands with the highest standards of integrity and excellence.</p>
          <img src={ia_our_expertise} alt="" />
        </div>
      </div>
      <div className="ai-content-subcard">
        <div className="ai-content-title-1">
          <h2>Why Choose PAI Fundtech</h2>
          <p>Our approach goes beyond delivering solutions.  we build lasting partnerships. Here's why businesses choose us as their trusted partner:</p>
        </div>
        <div className="ai-content-subcard-1">
          <div className="ia-customized-solutions">
            <img src={ia_customized_solutions} alt="" />
            <h3>Customized Solutions</h3>
            <p>Every business is unique, which is why we offer tailored solutions specifically crafted to address your individual challenges and objectives. Our strategies are designed to deliver tangible, measurable outcomes that align with your business goals.</p>
          </div>
          <div className="ia-industry-expertise">
            <img src={ia_industry_expertise} alt="" />
            <h3>Industry Expertise</h3>
            <p>Our team of experienced professionals brings deep sector knowledge across a wide range of industries, from finance and manufacturing technology  retail. This ensures that receive the highest level of expertise and practical advice that’s relevant to your industry</p>
          </div>
          <div className="innovative-approach">
            <img src={innovative_approach} alt="" />
            <h3>Innovative Approach</h3>
            <p>We leverage the latest tools and technologies to provide cutting-edge solutions, ensuring business stays ever-changing market. Whether it’s through automation, digital transformation, or the use of advanced analytics, we help future-proof operations</p>
          </div>
        </div>
        <div className="ai-content-subcard-2">
          <div className="ia-focused-approach">
            <img src={ia_focused_approach} alt="" />
            <h3>Client-Focused Approach</h3>
            <p>Your success is the heart of everything we do. We  focused on developing  partnerships, providing personalized, hands-on support  your business journey. Every client is treated with the attention and  ensuring receive customized service at all times.</p>
          </div>
        </div>
        <div className="">
          <button >CONTACT US</button>
        </div>
      </div>
    </div>
  )
}

export default Content
