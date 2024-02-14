import image from '../../assets/goals.jpg'

const Header = () => {
    return (
        <div>
            <img src={image} alt="Image" className='w-40 h-40 rounded-full flex justify-center' />
            <h1 className='text-lg font-medium'>Your Goals</h1>

        </div>
    );
};

export default Header;