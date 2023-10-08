import { star } from '../assets/icons';

const PopularProductCard = ({ imgURL, name, price }) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
      <img
        src={imgURL}
        alt={name}
        className="w-[280px] h-[280px] max-sm:w-full max-sm:h-full cursor-pointer"
        onClick={() => {}}
      />
      <div className="flex mt-8 justify-start gap-2.5">
        <img src={star} alt="rating" width={24} height={24} />
        <p className="text-xl font-montserrat text-slate-gray leading-normal">
          5.0
        </p>
      </div>
      <h3 className="mt-2 text-2xl leading-normal font-palanquin font-semibold">
        {name}
      </h3>
      <p
        className="mt-2 text-2xl leading-normal font-montserrat
       text-coral-red font-semibold"
      >
        {price}
      </p>
    </div>
  );
};

export default PopularProductCard;
