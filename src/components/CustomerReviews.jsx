import { reviews } from '../constants';
import ReviewCard from './ReviewCard';

const CustomerReviews = () => {
  return (
    <section className="max-container">
      <div>
        <h2 className="font-palanquin text-4xl font-bold text-center">
          What Our
          <span className="text-coral-red"> Customers</span> Say?
        </h2>
        <p className="mt-4 max-w-lg info-text m-auto text-center">
          Hear genuine stories from our satisfied customers about their
          exceptional experiences with us.
        </p>
        <div
          className="mt-24 flex flex-1 justify-center items-center
        max-lg:flex-col gap-14"
        >
          {reviews.map(review => (
            <ReviewCard
              key={review.customerName}
              imgURL={review.imgURL}
              customerName={review.customerName}
              rating={review.rating}
              feedback={review.feedback}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
