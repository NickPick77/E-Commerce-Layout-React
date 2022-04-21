export const Product = (props) => {
  

  return (
    <article>
      <img src={props.image} alt={props.alt} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <p>€{props.price}</p>
      
    </article>
  );
};
