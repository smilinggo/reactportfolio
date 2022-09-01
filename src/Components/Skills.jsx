export default function Skills() {
    return (
        <div>
            <section className="h-full flex ml-6 py-px max-w-6xl w-3/4 font-primary-text leading-relaxed mb-12" id='Skills'>
                <div className="h-1/2 self-center">
                    <h2 className="mt-6 mb-8 text-6xl font-semibold">Skills</h2>
                    <div className="mb-3">Programming Languages & Tools</div>
                    <ul className="flex justify-between text-5xl dev-icons mb-4">
                        <li className="mr-4"><i className="fab fa-html5"></i></li>
                        <li className="mr-4"><i className="fab fa-css3-alt"></i></li>
                        <li className="mr-4"><i className="fab fa-js-square"></i></li>
                        <li className="mr-4"><i className="fab fa-react"></i></li>
                        <li className="mr-4"><i className="fab fa-node-js"></i></li>
                        <li className="mr-4"><i className="fab fa-npm"></i></li>
                    </ul>
                    <div className="subheading mb-3">Workflow</div>
                    <ul className="fa-ul mb-0">
                        <li>
                            <span className="fa-li"><i className="fas fa-check"></i></span>
                            Mobile-First, Responsive Design
                        </li>
                        <li>
                            <span className="fa-li"><i className="fas fa-check"></i></span>
                            Cross Browser Testing & Debugging
                        </li>
                        <li>
                            <span className="fa-li"><i className="fas fa-check"></i></span>
                            Cross Functional Teams
                        </li>
                        <li>
                            <span className="fa-li"><i className="fas fa-check"></i></span>
                            Agile Development & Scrum
                        </li>
                    </ul>
                </div>
            </section>
            <hr class="m-0" /></div>
        
    )
}