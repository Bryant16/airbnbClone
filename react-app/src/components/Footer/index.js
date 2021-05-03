import { Person } from './Person';

import './tags.css';

export default function Footer () {
  return (
    <footer>
      <div className='div__footer_container'>
        <Person
          name='Andrew Dotterer'
          github='adotterer'
          linkedin='andrew-dotterer-6338aa97'
          email='adotterer@gmail.com'
        />
        <Person
          name='Bryant Klein'
          github='Bryant16'
          linkedin='bryant-klein-927915134'
          email='kleinb1616@gmail.com'
        />
        <Person
          name='James Monaco'
          github='monaco021'
          linkedin='james-monaco-770127175'
          email='monaco.james18@gmail.com'
        />
        <Person
          name='JM Alan'
          github='jm-alan'
          linkedin='j-alan'
          email='j.maxwell.alan@gmail.com'
        />
      </div>
    </footer>
  );
}
