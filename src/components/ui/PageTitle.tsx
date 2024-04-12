
type Props = {
    title:string;
    className?:string;
};

const PageTitle = ({title, className}: Props) => {
    console.log(className)
  return (
    <h1 className='text-2xl mt-[3rem] font-semibold '>{title}</h1>
  )
}

export default PageTitle