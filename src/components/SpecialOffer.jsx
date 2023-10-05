import Button from './Button';
const SpecialOffer = () => {
  return (
    <div className="flex flex-1 flex-col">
      <h2 className="mt-10 font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
        <span className="text-coral-red"> Special</span> Offer
      </h2>
      <p className="mt-4 lg:max-w-lg info-text">
        Embark on a shopping journey that redefines your experience with
        unbeatable deals. From premier selections to incredible savings, we
        offer unparalleled value that sets us apart.
      </p>
      <p className="mt-6 lg:max-w-lg info-text">
        Navigate a realm of possibilities designed to fulfill your unique
        desires, surpassing the loftiest expectations. Your journey with us is
        nothing short of exceptional.
      </p>
      <div className="mt-11 flex gap-4">
        <Button label="View details" />
        <Button label="Learn more" />
      </div>
    </div>
  );
};

export default SpecialOffer;
