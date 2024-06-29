import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
function About() {
  return (
    <>
      <section className="bg-cyan-50">
        <div className="bg-cyan-400">
          <Navbar />
        </div>
        <div>
          <h1 className="font-comic font-bold text-4xl pt-12 p-5">
            About Us&#127872;
          </h1>
          <p className="font-comic text-xl px-6 text-slate-600">
            Welcome to [KidsZone] – where learning meets play in the most fun
            and engaging way! At [KidsZone], we believe that the best way for
            children to learn is through play. Our platform is designed to
            provide a safe and interactive environment where kids can explore,
            discover, and learn essential skills while having a blast.
          </p>
        </div>
        <div>
          <h3 className="font-comic font-bold text-3xl pt-6 px-5">
            What We Offer &#8594;
          </h3>
          <ul className="list-outside pl-14">
            <li className="font-comic text-xl text-slate-600 pt-5">
              <span className="font-bold text-black">Educational Games:</span>{" "}
              Our wide range of games is designed to teach children various
              skills such as math, language, science, and critical thinking.
              Each game is carefully crafted to align with educational standards
              and promote cognitive development.
            </li>
            <li className="font-comic text-xl text-slate-600 pt-5">
              <span className="font-bold text-black">
                Interactive Learning:
              </span>{" "}
              Children can engage with interactive lessons and activities that
              make learning dynamic and exciting. From solving puzzles to
              completing challenges, kids are motivated to learn through
              hands-on experiences.
            </li>
            <li className="font-comic text-xl text-slate-600 pt-5">
              <span className="font-bold text-black">Safe Environment:</span> We
              prioritize the safety and well-being of our young users. Our
              platform is secure, ad-free, and designed to provide a positive
              and supportive online space for kids.
            </li>
            <li className="font-comic text-xl text-slate-600 pt-5">
              <span className="font-bold text-black">
                Parental Involvement:
              </span>{" "}
              We believe in the importance of involving parents in the learning
              process. Our platform offers tools and resources for parents to
              track their child's progress and engage with their educational
              journey.
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-comic font-bold text-3xl pt-6 px-5">
            Our Mission&#127872;
          </h3>
          <p className="font-comic text-xl px-6 text-slate-600 pt-5">
            Our mission is to create a joyful learning experience for children
            that nurtures their curiosity, creativity, and love for learning. We
            aim to combine education with entertainment, ensuring that every
            game and activity is both educational and enjoyable.
          </p>
        </div>
        <div>
          <h3 className="font-comic font-bold text-3xl pt-6 px-5">
            Our Vision&#127872;
          </h3>
          <p className="font-comic text-xl px-6 text-slate-600 py-5">
            We envision a world where children can grow and learn with joy and
            enthusiasm. By blending play with education, we aim to foster a
            lifelong love for learning in every child. At [KidsZone], we are
            committed to making education accessible, enjoyable, and impactful.
            Join us on this exciting adventure of learning through play, and
            watch your child thrive with [KidsZone]!
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default About;
