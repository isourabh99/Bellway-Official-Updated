import { Link } from "react-router-dom";
import ourwork from "../data/ourwork";
import { Helmet } from "react-helmet";

const OurWork = () => {
  return (
    <div className="flex flex-col items-center mt-20 px-2 md:px-20">
      <Helmet>
        <title>BELLWAY INFOTECH | Our Work - Innovation In Action</title>
        <meta
          name="description"
          content="Explore our in-depth case studies showcasing our expertise. Discover how we've helped clients achieve their business goals through innovative solutions, strategic insights, and cutting-edge technology."
        />
        <meta
          name="keywords"
          content="case studies, business success stories, innovative solutions, strategic insights, project case studies, client success, business solutions, technology innovation, industry case studies, digital transformation, enterprise solutions, IT project case studies, successful business projects, business goal achievement, technology consulting, project delivery, innovative business solutions, custom technology solutions"
        />
      </Helmet>

      <p className="md:text-5xl text-3xl mt-4 text-center font-semibold">
        Explore Our <span className="text-[#d82c2c]">Recent Work</span>
      </p>

      <p className="mt-4 text-center text-lg md:text-xl text-gray-600 max-w-3xl">
        We craft immersive experiences that blend design and tech. These aren't
        just projects – they're stories, solutions, and standout moments.
      </p>

      <div className="w-full ">
        {ourwork.map((card, index) => (
          <div
            key={index}
            className="bg-white max-h-80 rounded-3xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden flex   my-10 "
          >
            {card.image && (
              <img
                src={card.image}
                alt={card.title}
                className="w-1/3  object-cover object-center"
              />
            )}

            <div className="p-2 md:p-6 flex flex-col flex-grow">
              <span className="text-xs text-[#d82c2c] font-semibold uppercase tracking-wide mb-2">
                {card.category}
              </span>

              <img src={card.logo} alt="logo" className="w-20 mb-3" />

              <h2 className="text-xl font-semibold mb-3">{card.title}</h2>
              <p className="text-gray-600 text-sm mb-6  text-ellipsis overflow-hidden line-clamp-2">
                {card.description}
              </p>

              <Link
                to={`/case-study/${card.id}`}
                className="text-sm text-white font-semibold bg-[#d82c2c] rounded-full px-4 py-2 self-start hover:bg-red-700 transition"
              >
                View Case Study
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurWork;
