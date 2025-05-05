const NewWelcomeContainer = () => {
  return (
    <div className="flex flex-wrap gap-8">
      <div className="flex flex-wrap w-full">
        <h1 className="text-[1.5rem] lg:text-[2rem] font-bold w-full">Hello, My name is <span className="text-[#009B00]">Jun Ki Ahn</span></h1>
        <h1 className="text-[1.5rem] lg:text-[2rem] font-bold w-full">I'm a <span className="text-[#009B00]">Full Stack Developer</span></h1>
      </div>
      <div className="flex flex-wrap w-full">
        <h3 className="text-[1.2rem] lg:text-[1.4rem] font-bold w-full">I am working on full-stack development that encompasses <span className="text-[#009B00]">frontend, backend, cloud infrastructure, and data</span>, utilizing a diverse tech stack.</h3>
        <h3 className="text-[1.2rem] lg:text-[1.4rem] font-bold w-full">With top-tier skills and passion, I am looking for a company or project where I can grow and thrive together.</h3>
      </div>
    </div>
  )
}

export default NewWelcomeContainer