import Link from 'next/link';

const Buttons = ({ text, link }) => {
    return (
      <div className="w-auto py-5 flex justify-center">
        <Link legacyBehavior href={link}>
          <a className="flex text-gray-100 justify-center transition duration-200 ease-in-out transform px-1 py-1 border-b-4 border-gray-500 hover:border-b-2 bg-gradient-to-t from-gray-400 via-gray-600 to-gray-200 rounded-xl hover:translate-y-px"
            style={{
              boxShadow: '0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0)',
              WebkitBoxShadow: '0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0)'
            }}>
            <button className="font-bold">{text}</button>
          </a>
        </Link>
      </div>
    );
  }
  
  export default Buttons;