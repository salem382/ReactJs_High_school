import { Container } from 'react-bootstrap';
import './subjectsearch.scss';

const subjectSearch = () => {
  return (
    <Container>
      <div className='search-subject'>
        <button className='filter-btn'>Study Video</button>
        <button className='filter-btn active'>Study material</button>
        <div className='filter-icon'>
          <img src='./imgs/teachers/filterIcon.png' alt='' />
        </div>
        <div className='search-input'>
          <img src='./imgs/teachers/searchIcon.png' alt='' />
          <input type='text' placeholder='Search' />
        </div>
      </div>
    </Container>
  );
};

export default subjectSearch;
