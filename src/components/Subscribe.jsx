import Button from './Button';

const Subscribe = () => {
  return (
    <section
      className="flex max-container justify-between 
    items-center max-lg:flex-col gap-10"
      id="contact-us"
    >
      <h2 className="font-palanquin text-4xl leading-[68px] font-bold lg:max-w-md">
        Sign Up from <span className="text-coral-red"> Updates</span> &
        Newsletter
      </h2>
      <div
        className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col
      gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full
      "
      >
        <input type="text" placeholder="subscribe" className="input" />
        <div className="flex  max-sm:justify-end items-center max-sm:w-full">
          <Button label="Sign up" fullWidth />
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
