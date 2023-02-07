import Accordion from 'react-bootstrap/Accordion';
import { useSelector } from 'react-redux';
import './testAccordion.css';

const TestAccordion = () => {

    const {activeVideo} = useSelector(state => state.units);


    return (
        <div className="accordion-section">
           <Accordion defaultActiveKey="0" flush>
               <Accordion.Item eventKey={"0"}>
                    <Accordion.Header>{activeVideo.name}</Accordion.Header>
                        <Accordion.Body>
                            <ul className='list-unstyled p-0 ul-item'>
                                <li>lessons quiz namber</li>
                                <li>lessons quiz namber</li>
                                <li>lessons quiz namber</li>
                                <li>lessons quiz namber</li>
                            </ul>
                        </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    )
}

export default TestAccordion;