import aboutimage from "../assets/aboutimage.svg";

const About = () => {
  return (
    <div className="bg-white">
      <h2 className="text-[#091913] lg:text-[36px] md:text-[36px] text-[26px] font-[700] my-8 text-center mt-20">
        About Us
      </h2>
      <div>
        <div className="flex justify-between flex-col lg:flex-row md:flex-row items-center px-8 lg:px-8 md:px-8">
          <ul className="text-[#0C0814]/70 lg:w-[50%] md:w-[50%] w-[90%] text-justify px-2">
            <li className="lg:text-[20px] md:text-[24px] text-[18px] list-disc mb-4 ">
              At LearnersFund, we believe that every student deserves the
              opportunity to  pursue their educational aspirations without financial
              constraints. Our mission is to empower students from diverse backgrounds to
              unlock their full potential through accessible and transparent funding
              solutions.
            </li>
            <li className="lg:text-[20px] md:text-[24px] text-[18px] list-disc mb-4 ">
              Driven by a passion for education and innovation, LearnersFund is revolutionizing
              the way students access financial support for their academic endeavors.
              With a commitment to transparency, security, and accountability, we
              provide a trusted platform where students can connect with contributors
              who share our vision of advancing education.
            </li>
            <li className="lg:text-[20px] md:text-[24px] text-[18px] list-disc mb-4 ">
              Our platform harnesses the power of blockchain technology to
              ensure that funds are securely held in escrow until release conditions are
              met,  providing peace of mind to both students and contributors. By
              leveraging cutting-edge technology, we aim to create a seamless and efficient
              funding  process that removes barriers to education and promotes equal opportunities for all.
            </li>
            <li className="lg:text-[20px] md:text-[24px] text-[18px] list-disc mb-4 ">
              At LearnersFund, we are more than just a funding platform; we are a community
              dedicated to supporting the next generation of leaders, innovators, and
              change-makers. Together, we can make a difference
              in the lives of
              students and empower them to realize their dreams.
            </li>
            <li className="lg:text-[20px] md:text-[24px] text-[18px] list-disc mb-4 ">
              Join us in our mission to transform education and unlock the
              potential of students worldwide. Together, we can build a brighter future for
              generations to come
            </li>
          </ul>
          <div className="lg:w-[45%] md:w-[45%] w-[100%]">
            <img
              src={aboutimage}
              alt=""
              className="w-[100%] h-[100%]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
