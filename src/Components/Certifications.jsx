 import certificationData from '../Data/Certificationdata'
 import SectionContainer from './SectionContainer'

 const Certs = certificationData.map(x => <li>
                <span class="fa-li"><i className="fas text-[#ffc107] fa-trophy text-warning"></i></span>{x}</li>)
 
 export default function Certifications() {
    
    return (
        <SectionContainer title="Certifications">
                    <ul class="fa-ul mb-0">
                        {Certs}
                    </ul>
        </SectionContainer>
    )
 }