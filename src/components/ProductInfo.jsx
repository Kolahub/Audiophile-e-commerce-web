import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export function ProductGallery({ productInfo }) {
  console.log(productInfo);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="h-full">
        <img src={productInfo.gallery.first.desktop} alt="" className="w-full h-full hidden lg:block" />
        <img src={productInfo.gallery.first.tablet} alt="" className="w-full object-cover hidden sm:block lg:hidden" />
        <img src={productInfo.gallery.first.mobile} alt="" className="w-full sm:hidden" />
      </div>

      <div className="h-full lg:row-start-2">
        <img src={productInfo.gallery.second.desktop} alt="" className="w-full hidden lg:block" />
        <img src={productInfo.gallery.second.tablet} alt="" className="w-full object-cover hidden sm:block lg:hidden" />
        <img src={productInfo.gallery.second.mobile} alt="" className="w-full sm:hidden" />
      </div>

      <div className="lg:col-start-2 lg:row-span-2 h-full">
        <img src={productInfo.gallery.third.desktop} alt="" className="w-full h-full object-cover hidden lg:block" />
        <img src={productInfo.gallery.third.tablet} alt="" className="w-full object-cover hidden sm:block lg:hidden" />
        <img src={productInfo.gallery.third.mobile} alt="" className="w-full sm:hidden" />
      </div> 
    </div>
  );
}

ProductGallery.propTypes = {
  productInfo: PropTypes.shape({
    gallery: PropTypes.shape({
      first: PropTypes.shape({
        desktop: PropTypes.string.isRequired,
        tablet: PropTypes.string.isRequired,
        mobile: PropTypes.string.isRequired,
      }).isRequired,
      second: PropTypes.shape({
        desktop: PropTypes.string.isRequired,
        tablet: PropTypes.string.isRequired,
        mobile: PropTypes.string.isRequired,
      }).isRequired,
      third: PropTypes.shape({
        desktop: PropTypes.string.isRequired,
        tablet: PropTypes.string.isRequired,
        mobile: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};


export function MayAlsoLike({ mayAlsoLikeproducts, products }) {
    console.log(mayAlsoLikeproducts);
  
    return (
      <div className="">
        <h1 className="text-center text-4xl uppercase font-bold mb-6">You may also like</h1>
        <div className="flex gap-6 flex-col md:flex-row">
          {mayAlsoLikeproducts.map((el) => {
            const nm = products.find((product) => product.slug === el.slug);
            
            // Assuming you want to use part of the slug and append the id:
            let modifiedSlug = nm.slug.split('-').slice(-1)[0]; // Modify according to your requirement
            if (!modifiedSlug.endsWith('s')) {
                modifiedSlug += 's';
              }
  
            return (
              <div key={el.slug} className="">
                <div className="">
                  <img src={el.image.desktop} alt="" className="w-full hidden lg:block" />
                  <img src={el.image.tablet} alt="" className="w-full object-cover hidden sm:block lg:hidden" />
                  <img src={el.image.mobile} alt="" className="w-full sm:hidden" />
                </div>
                <div className="mt-8 text-center">
                  <h1 className="font-bold text-3xl">{el.name}</h1>
                  <Link
                    to={`/${modifiedSlug}/${nm.id}`}
                    className="inline-block bg-orangePrimary hover:bg-orangeSecondary uppercase text-whitePrimary font-semibold py-3 px-8 mt-8 mx-auto"
                  >
                    See Product
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
  
  MayAlsoLike.propTypes = {
    mayAlsoLikeproducts: PropTypes.arrayOf(
      PropTypes.shape({
        slug: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        image: PropTypes.shape({
          desktop: PropTypes.string.isRequired,
          tablet: PropTypes.string.isRequired,
          mobile: PropTypes.string.isRequired,
        }).isRequired,
      })
    ).isRequired,
    products: PropTypes.arrayOf(
      PropTypes.shape({
        slug: PropTypes.string.isRequired,
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      })
    ).isRequired,
  };
  

  export function IncludesInfo({ includesData, featuresData }) {
    const ps = featuresData.split('\n\n');
  
    return (
      <div className="flex flex-col lg:flex-row justify-between gap-16 lg:gap-12">
        <div className="lg:w-2/3">
          <h1 className="uppercase font-bold text-3xl mb-6">Features</h1>
          <p className="lg:max-w-[635px] mb-5">{ps[0]}</p>
          <p className="lg:max-w-[635px]">{ps[1]}</p>
        </div>
        <div className="lg:w-1/3 sm:flex lg:block">
          <h1 className="uppercase font-bold text-3xl mb-6 sm:w-2/3 lg:w-full">In the Box</h1>
          <ul className="list-none">
            {includesData.map((el, i) => (
              <li key={i} className="flex gap-4 mb-3">
                <p className="text-orangePrimary font-semibold">{el.quantity}x</p>
                <p>{el.item}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
  
  IncludesInfo.propTypes = {
    includesData: PropTypes.arrayOf(
      PropTypes.shape({
        quantity: PropTypes.number.isRequired,
        item: PropTypes.string.isRequired,
      })
    ).isRequired,
    featuresData: PropTypes.string.isRequired,
  };
  
