import image from '../../assets/goals.jpg'

const Header = () => {
    return (
        <div className='flex flex-col justify-between items-center border-yellow-800 m-2 p-2 border-2'>
            <h1 className='text-xl md:text-2xl font-semibold'>Welcome to Course Goals</h1>
            <img src={image} alt="Image" className='w-40 h-40 rounded-full flex justify-center' />
          

        </div>
    );
};

export default Header;