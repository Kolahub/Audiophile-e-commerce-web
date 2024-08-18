// import React from 'react';
import PropTypes from 'prop-types';

function ProductHeader({ productName }) {
  return (
    <div className="bg-[#191919] text-center">
      <h1 className="text-whitePrimary uppercase font-semibold text-xl md:text-2xl tracking-widest py-16">
        {productName}
      </h1>
    </div>
  );
}

ProductHeader.propTypes = {
  productName: PropTypes.string.isRequired,
};

export default ProductHeader;
