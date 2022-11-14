import React from 'react'
import team from '../../assets/team.jpg'

const AboutUs = () => {
  return (
    <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
      <div className="flex flex-col lg:flex-row justify-between gap-8">
        <div className="w-full lg:w-5/12 flex flex-col justify-center">
          <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">About Us</h1>
          <p className="font-normal text-base leading-6 text-gray-600 ">
            Since its genesis in 2009, KiwiTech has persistently led innovation toward creating a better tomorrow. Utilizing our unique experience
            acquired with a committed passion for innovation as a custom software development company, we take a consultative approach to provide
            end-to-end technology services to our clients ranging from new startup founders to aspiring unicorns and established leaders in the tech
            space. With a knack for identifying potential leaders thanks to our own entrepreneurial history, we partner with innovative clients to
            create futuristic digital products. The tailor-made guidance, resources, and technologies that we provide help our partners revamp their
            everyday operations, boost efficiency, and amplify profitability.
          </p>
        </div>
        <div className="w-full lg:w-8/12 ">
          <img className="w-full h-full" src={team} alt="A group of People" />
        </div>
      </div>

      <div className="flex lg:flex-row flex-col justify-between gap-8 pt-12">
        <div className="w-full lg:w-5/12 flex flex-col justify-center">
          <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">Our Story</h1>
          <p className="font-normal text-base leading-6 text-gray-600 ">
            Over the last decade, KiwiTech has established itself among the top software development companies in the United States and built a
            leading ecosystem of 500+ portfolio startups, 3,000+ investors, and 200+ mentors. KiwiTech also boasts of serving leading global companies
            such as McKinsey, Accenture, P&G, World Bank, Lockton, HomeVestors, Elsevier, and Springer.
          </p>
        </div>
        <div className="w-full lg:w-8/12 lg:pt-8">
          <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-4 shadow-lg rounded-md">
            <div className="p-4 pb-6 flex justify-center flex-col items-center">
              <img
                className="md:block hidden"
                src="https://www.kiwitech.com/assets/version7/images/our_team/profile/Rakesh_Gupta.png"
                alt="Alexa featured Img"
              />
              <img
                className="md:hidden block"
                src="https://www.kiwitech.com/assets/version7/images/our_team/profile/Rakesh_Gupta.png"
                alt="Alexa featured Img"
              />
              <p className="font-medium text-xl leading-5 text-gray-800 mt-4">Rakesh Gupta</p>
              <p className="  leading-5 text-gray-800 mt-4">(Chief Executive Officer & Founder)</p>
            </div>
            <div className="p-4 pb-6 flex justify-center flex-col items-center">
              <img
                className="md:block hidden"
                src="https://www.kiwitech.com/assets/version7/images/our_team/profile/Gurvinder.png"
                alt="Olivia featured Img"
              />
              <img
                className="md:hidden block"
                src="https://www.kiwitech.com/assets/version7/images/our_team/profile/Gurvinder.png"
                alt="Olivia featured Img"
              />
              <p className="font-medium text-xl leading-5 text-gray-800 mt-4">Gurvinder Batra</p>
              <p className=" leading-5 text-gray-800 mt-4">(Chief Technology Officer & Founder)</p>
            </div>
            <div className="p-4 pb-6 flex justify-center flex-col items-center">
              <img
                className="md:block hidden"
                src="https://www.kiwitech.com/assets/version7/images/our_team/profile/Neal_Gupta.png"
                alt="Liam featued Img"
              />
              <img
                className="md:hidden block"
                src="https://www.kiwitech.com/assets/version7/images/our_team/profile/Neal_Gupta.png"
                alt="Neal Gupta Img"
              />
              <p className="font-medium text-xl leading-5 text-gray-800 mt-4">Neal Gupta</p>
              <p className=" leading-5 text-gray-800 mt-4">(Chief Investment Officer & Founder)</p>
            </div>
            <div className="p-4 pb-6 flex justify-center flex-col items-center">
              <img
                className="md:block hidden"
                src="https://www.kiwitech.com/assets/version7/images/our_team/profile/Mohsin.png"
                alt="Mohsin Syed img"
              />
              <img
                className="md:hidden block"
                src="https://www.kiwitech.com/assets/version7/images/our_team/profile/Mohsin.png"
                alt="Mohsin Syed img"
              />
              <p className="font-medium text-xl leading-5 text-gray-800 mt-4">Mohsin Syed</p>
              <p className=" leading-5 text-gray-800 mt-4">(President & Chief Startup Officer)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
