// import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Products({ data }) {
  console.log(data);
  return (
    <div className="w-full flex gap-16 lg:gap-24 flex-col">
      {
        [...data.filter((el) => el.new), ...data.filter(el => !el.new)].map((el, i) => (
          <div key={el.id} className={`mb-8 flex flex-col lg:flex-row ${i%2 !== 0 ? 'lg:flex-row-reverse' : ''} gap-14 lg:gap-28`}>
            <div className="lg:w-1/2">
              <img src={el.image.desktop} alt="" className="h-full hidden lg:block"/>
              <img src={el.image.tablet} alt="" className="w-full h-[550px] object-cover hidden sm:block lg:hidden"/>
              <img src={el.image.mobile} alt="" className="w-full sm:hidden"/>
            </div>
            <div className="lg:w-1/2">
              <div className="lg:max-w-sm text-center lg:text-start my-auto">
                {el.new && <p className="uppercase text-orangePrimary tracking-[8px] mb-4">new product</p>}
                <h1 className="font-bold text-4xl uppercase tracking-[4px] mb-8">{el.name}</h1>
                <p className="text-lg">{el.description}</p>
                <Link to={`${el.id}`} className="inline-block bg-orangePrimary hover:bg-orangeSecondary uppercase text-whitePrimary font-semibold py-3 px-8 mt-16" relative="path">
                  see product
                </Link>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  );
}

Products.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      name: PropTypes.string.isRequired,
      new: PropTypes.bool,
      description: PropTypes.string.isRequired,
      image: PropTypes.shape({
        desktop: PropTypes.string.isRequired,
        tablet: PropTypes.string.isRequired,
        mobile: PropTypes.string.isRequired,
      }).isRequired,
    })
  ).isRequired,
};

export default Products;
