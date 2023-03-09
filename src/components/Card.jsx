export const Card = ({ url, title }) => {
  return (
    <div className="parent">
      <img className="child" src={url} alt={title} />
    </div>
  );
};
