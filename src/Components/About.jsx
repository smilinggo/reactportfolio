export default function About() {
    return (
        <div>
        <section className="h-1/2 flex align-center  ml-6 py-px max-w-6xl w-full font-primary-text">
            <div className="">
                <h1 className="mt-12 text-4xl font-semibold">
                    TONEY
                    <span className="text-primary ml-2">TATE</span>
                </h1>
                <div class="subheading mb-5  text-slate-600">
                    DULUTH, GA 30096 · (678) 820-9370 ·
                    <a href="mailto:info@ttate.com" className="text-primary underline uppercase hover:font-semibold">info@ttate.net</a>
                </div>
                <p className="mb-5 text-slate-600 font-primary-text text-l">I am experienced in leveraging agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.</p>
                <div className="social-icons my-16 flex">
                    <a className="w-10 h-10 mx-4 p-8 flex rounded-full justify-center items-center text-white bg-blue-300 hover:bg-primary" target="_blank" href="https://www.linkedin.com/in/toney-tate/"><i className="fab fa-linkedin-in text-2xl"></i></a>
                    <a className="w-10 h-10 mx-4 p-8 flex rounded-full justify-center items-center text-white bg-black hover:bg-primary" target="_blank" href="https://github.com/smilinggo"><i class="fab fa-github text-2xl"></i></a>
                </div>
            </div>
            </section>
            <hr class="m-0" />
        </div>
    )
}