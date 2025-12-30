import { data } from '../../utilities/data';

const Testimonials = () => {
  return (
    <>
      {data.map((testimonial) => (
        <div id={testimonial.id} key={testimonial.id}>
          {/* <img
            src={require(`../../assets/testimonials/${testimonial.photo}`)}
            alt={testimonial.name}
            width="150"
            height="150"
          /> */}
          <h4>{testimonial.name}</h4>
          <p>{testimonial.message}</p>
          <hr />
        </div>
      ))}
    </>
  )
}

export default Testimonials;
