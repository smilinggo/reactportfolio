 import certificationData from '../Data/Certificationdata'

 const Certs = certificationData.map(x => <li>
                <span class="fa-li"><i className="fas text-[#ffc107] fa-trophy text-warning"></i></span>{x}</li>)
 
 export default function Certifications() {
    
    return (
        <div>
             <section class="h-full flex ml-6 py-px max-w-6xl w-3/4 font-primary-text leading-relaxed mb-12" id="Certifications">
                <div class="h-1/2 self-center">
                    <h2 class="mt-6 mb-8 text-6xl font-semibold">Certifications</h2>
                    <ul class="fa-ul mb-0">
                        {Certs}
                    </ul>
                </div>
            </section>
        </div>
    )
 }