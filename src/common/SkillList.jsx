function SkillList({ src, skill }) {
  return (
    <span>
      <img src={src} alt={`${skill} Icon`} />
      <p>{skill}</p>
    </span>
  );
}

export default SkillList;
