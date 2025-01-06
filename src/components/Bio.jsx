const Bio = (props) => {
  return (
    <section className="bio">
      <h2 className="bio--name">{props.name}</h2>
      <p className="bio--description">{props.desc}</p>
    </section>
  );
};

export default Bio;
