export const Person = ({ name, github, linkedin, email }) => (
  <div className='div__project_member'>
    <div className='div__project_member_name'>
      {name}
    </div>
    <div>
      <div className='div__icons'>
        <a href={`https://github.com/${github}`}>
          <i className='fab fa-github' />
        </a>
        <a href={`https://www.linkedin.com/in/${linkedin}`}>
          <i className='fab fa-linkedin-in' />
        </a>
        <a href={`mailto:${email}`}>
          <i className='far fa-envelope' />
        </a>
      </div>
    </div>
  </div>
);
