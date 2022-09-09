import SectionContainer from './SectionContainer'

export default function Education() {
    return (
            <SectionContainer title="Education">
                <div class=" mb-5">
                    <div class="flex-grow-1">
                            <h3 class="font-semibold">North Georgia Technical College</h3>
                            <div className="mb-3 leading-6 font-bold text-slate-400">Assocaite of Applied Science</div>
                            <div>Web Development Track</div>
                            <p>GPA: 3.43</p>
                    </div>
                        <div class="flex-shrink-0"><span class="text-primary">August 2009 - August 2011</span></div>
                    </div>
                
            </SectionContainer>
    )
}