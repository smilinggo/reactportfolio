export default function Interests(props) {
    return (
        <div>
            <section className="h-full flex ml-6 py-px max-w-6xl w-3/4 font-primary-text leading-relaxed mb-12" id={props.title}>
                <div className="h-1/2 self-center">
                    <h2 class="mt-6 mb-8 text-6xl font-semibold">{props.title}</h2>
                    {props.children}
                </div>
            </section>
            <hr class="m-0" />
        </div>
    )
}