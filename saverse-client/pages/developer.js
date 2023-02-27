import Head from 'next/head';
import Image from 'next/image';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import SocialMediaIcons from '../components/SocialMediaIcons';
import Img2 from '../public/Adeola_dp.png';
import Buttons from '../components/Buttons';



function Developer() {

    return (
        <>
            <Head>
                <title>Saverse</title>
                <meta name="description" content="Thrift without a rift." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="h-full">
                <Navbar />
            </div>
            <div className="grid grid-cols-6 gap-1 bg-gradient-to-r from-slate-500 to-gray-200">
                <div className="col-start-1 col-end-6 rounded-r-lg bg-gradient-to-r from-white to-gray-200 mx-2 my-2">
                    <div className='mt-3 mx-3 text-justify'>

                    <h1 className=''>Adeola David Adelakun</h1>
                    <h4 className=''>Full-stack Solidity Developer</h4>

                    <div className='my-5'>
                        <Image style={{ boxShadow: '3px 4px 3px 4px rgba(0, 0, 0, 0.7)' }}
                            className='m-auto rounded-full'
                            src={Img2} alt="Adeola" width={250} height={250}
                        />
                        <SocialMediaIcons />
                    </div>

                    <div className=''>
                        <h3>Reach Adeola</h3>
                        <p>
                            Email: adesdesk@outlook.com
                            <br></br>
                            Phone: +2347062587509
                            <br></br>
                            Abuja, FCT Nigeria.
                            <br></br>
                            https://github.com/adesdesk
                            <br></br>
                            <br></br>
                            <h3>Professional Summary</h3>
                            Adeola is the developer and pioneer of Smart-Transcript Decentralized Application. He is a solution-driven
                            Frontend and Solidity Developer with over 2 years of experience exploring the possibilities
                            that a nexus between web 2 and web 3 brings. He is comfortable developing and working with full-stack
                            decentralized applications, frontend web applications, and is skilled in adapting to new work situations
                            and challenges to best provide tech solutions to real life problems.
                            <br></br>
                            <br></br>

                            Though a graduate of Fisheries Technology (with Distinction), Adeola practiced digital content writing
                            for over 5 years, the later part of which he also committed to developing skills in web development as a
                            response to perceived needs. With a desire to skill-up so as to be better positioned to develop solutions
                            that harness digital technology in solving real problems, he passed through a number of programming courses
                            and internships. Notable among his most recent certifications are:
                            <h3>Certifications</h3>
                            <ul className=''>
                                <li>Python 3 Programming Specialization, University of Michigan</li>
                                <li>Introduction to Scripting in Python Specialization, Rice University</li>
                                <li>Coding for Everyone: C and C++ Specialization, University of California in Santa Cruz</li>
                                <li>Javascript for Beginners Specialization, University of California Davis</li>
                                <li>Java Programming and Software Engineering Fundamentals Specialization, Duke University</li>
                                <li>Blockchain Specialization, University of Buffalo, The State University of New York</li>
                                <li>Typescript - Learn the Fundamentals</li>
                                <li>Digital Marketing, Graphics, and Web Design – Bizmarrow Technologies, Gwarinpa, Abuja, Nigeria</li>
                                <br></br>
                                <li>Ethical Leadership Specialization - University of Notre Dame</li>
                                <li>High Performance Collaboration: Leadership, Teamwork, and Negotiation - Northwestern University</li>
                                <li>Greek and Roman Mythology - University of Pennsylvania</li>
                                <li>Introduction to Public Speaking - University of Washington</li>
                                <li>Young African Leaders Initiative (YALI) Emerging Leaders Program - YALI Regional Leadership Center West Africa, Accra</li>
                            </ul>
                            Today, Adeola has various individual and collaborative software projects targeted at solving various
                            problems, to his credit. His mantra, &ldquo;there is code for every instruction, and logic behind every
                            effect: if it matters to humanity, we should find it!&rdquo; has been a motivation behind his use of programming
                            to solve problems. The following are some of his skill endowments.
                            <h3>Technical Skills</h3>
                            <ul className=''>
                                <li>Blockchain Technology / Web 3</li>
                                <li>Version Control</li>
                                <li>Tailwind CSS</li>
                                <li>Frontend Frameworks and Libraries</li>
                                <li>Full-stack Decentralized Applications Development</li>
                                <li>Algorithms Development</li>
                                <li>Responsive Design</li>
                                <li>Document Object Model</li>
                                <li>Hardhat, Truffle, Remix, Thirdweb</li>
                                <li>Solidity, Data Structures</li>
                            </ul>

                            <h3>Soft Skills</h3>
                            <ul className=''>
                                <li>Communication and Effective Time Management</li>
                                <li>Critical Thinking and Problem-Solving</li>
                                <li>Adaptability and Flexibility</li>
                                <li>Self Learning</li>
                                <li>Collaboration and Accountability</li>
                            </ul>
                            Being not ignorant of the fact that programming is a hands-on profession, he has also acquired
                            and is still developing experience from real workplaces of international repute.
                            <h3>Experience</h3>
                            <p className=''>Grandida LLC <br></br>
                                <span className=''>Miramar, Florida, July 2022 till date <br></br> Solidity Developer </span> </p>
                            <ul className=''>
                                <li>Decentralized Applications Development: Designed, developed and deployed full-stack decentralized applications.</li>
                                <li>Desktop Applications Development: Designed and developed desktop applications tailored at meeting various real-life needs.</li>
                                <li>Developer Interactive Sessions: Held live presentation sessions to communicate the development
                                    process and functionalities of developed applications to a community of solidity developers and offered
                                    meaningful contributions to other developers executing various blockchain projects.</li>
                                <li>Learning and Skills Development: Developed hands-on skills in alternative languages for smart contract development
                                    through actual development of a variety of applications in Rust and Python programming languages</li>
                            </ul>



                            <span className=''>Wills Smart Technology</span> <br></br>
                            <span className=''> Cadastal Zone B09, Ahmadu Bello Way, Kado, Abuja, Nigeria, Feb 2021 – Oct 2022
                                <br></br> IoT Specialist </span>
                            <ul className=''>
                                <li>Designed and participated in the construction of IoT driven aquaponics systems</li>
                                <li>Co-created algorithms implemented by the IoT Team to manage IoT facilities for clients</li>
                            </ul>

                            <span className=''>Togios Limited</span> <br></br>
                            <span className=''> No. 141, Upper Owina Street, Benin, Edo State, Nigeria, 2016 - 2021
                                <br></br> Digital Content Writer </span>
                            <ul className=''>
                                <li>Designed and managed the organization’s website</li>
                                <li>Managed digital and print communication channels including emails, flyers, letters, etc.</li>
                                <li>Handled personal social media accounts belonging to the CEO</li>
                            </ul>
                            As one who takes the initiative to put in his best in every of his engagements, Adeola is a recipient of a
                            number of prestigious awards that attest to his hardworking and focus driven personality.<br></br>
                            <span className=''>Awards</span> <br></br>
                            <span className=''> 2015/2016</span>
                            <ul className=''>
                                <li>Cross River State National Youth Service Corps (NYSC) Honors Award for outstanding performance
                                    and diligence in the discharge of duties as an NYSC Corps member – Office of the Governor, Cross River
                                    State, Nigeria.</li>
                            </ul>
                            <span className=''> 2006/2007</span>
                            <ul className=''>
                                <li>Physics Olympiad Merit Award – National Mathematical Center, Abuja, Nigeria.</li>
                            </ul>

                            <span className=''>Affiliations</span> <br></br>
                            Adeola is a lifelong fellow of the following prestigious international organizations
                            <ul className=''>
                                <li>The Tony Elumelu Foundation</li>
                            </ul>
                            <ul className=''>
                                <li>YALI Regional Leadership Center West Africa, Accra Ghana.</li>
                            </ul>


                        </p>
                    </div>
                </div>
                </div>
                <div className="col-end-7 col-span-1 rounded-l-lg bg-gradient-to-r py-5 from-gray-900 to-gray-200 mx-2 my-2">

                    <Buttons text="No. 1" link="#" />
                    <Buttons text="No. 2" link="#" />
                    <Buttons text="No. 3" link="#" />
                    <Buttons text="No. 4" link="#" />
                    <Buttons text="No. 5" link="#" />
                    <Buttons text="No. 6" link="#" />
                    <Buttons text="No. 7" link="#" />
                    <Buttons text="No. 8" link="#" />
                    <Buttons text="No. 9" link="#" />
                    <Buttons text="No. 10" link="#" />

                </div>
            </div>
            <Footer />
        </>
    )
}

export default Developer;