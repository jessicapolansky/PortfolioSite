import { RxLinkedinLogo, RxGithubLogo, RxHand } from 'react-icons/rx';
import { RiSparkling2Line, RiCodeSSlashLine, RiDatabaseLine } from 'react-icons/ri';
import { SiMicrosoftsharepoint, SiMicrosoftazure, SiPowerautomate, SiPowerapps, SiPowerbi, SiPowerfx } from 'react-icons/si';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
		<div className='w-full inline-flex gap-3 p-2 justify-end border-b border-gray-300 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border-b lg:bg-gray-200 lg:dark:bg-zinc-800/30'>
		<a href='https://www.linkedin.com/in/jessica-robinson-4852232b/'><RxLinkedinLogo size='2rem'/></a>
		<a href="https://github.com/jessicapolansky"><RxGithubLogo size='2rem' className='cursor-pointer' /></a>
		</div>
        <h1 className=" text-3xl flex lg:static lg:w-auto  lg:rounded-md lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-900/30 justify-center">
          Jessica Robinson
        </h1><div className='flex w-full text-center grid-cols-2 justify-around pt-2'>
			<div><h3>Full-Stack Software Developer</h3>
				<div className='flex gap-2 items-center pb-2 justify-center mt-2'>
					<RiCodeSSlashLine className='text-teal' /> Javascript
					<RiCodeSSlashLine className='text-teal' /> Typescript 
					<RiCodeSSlashLine className='text-teal' /> C# </div>
				<div className='flex gap-2 items-center pb-2 justify-center'>
					<RiSparkling2Line className='text-teal' /> React
					<RiSparkling2Line className='text-teal' /> NextJS </div>
				<div className='flex gap-2 items-center pb-2 justify-center'>
					<RiDatabaseLine className='text-teal' /> PostGreSQL
					<RiDatabaseLine className='text-teal' /> SQL </div>
			</div>
			<div><h3>Experienced in Microsoft Integrations </h3>
				<div className='flex gap-2 items-center pb-2 justify-center mt-2'>
					<SiMicrosoftsharepoint className='text-microsoft' /> SharePoint
					<SiMicrosoftazure className='text-microsoft' /> Azure</div>
				<div className='flex gap-2 items-center pb-2 justify-center mt-2'>
					<SiPowerautomate className='text-microsoft' />Power Automate, 
					<SiPowerbi className='text-microsoft' />Power BI, and 
					<SiPowerapps className='text-microsoft' />Power Apps</div>
			</div>
		</div> 
		<br /> 
		<h2>About Me</h2>  
		<p className='flex gap-2'>Hello, Jessica here! <RxHand size='1em'/></p>
		<br /> 
		<h2>Projects</h2>  
	</main>
  )
}
