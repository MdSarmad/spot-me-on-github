import { Link } from 'react-router-dom'
import { FaLongArrowAltRight } from 'react-icons/fa'
import PropTypes from 'prop-types'

function UserItem({ user: { login, avatar_url } }) {
  return (
    <div className='card shadow-md compact side bg-slate-500 hover:bg-gray-400'>
      <Link to={`/user/${login}`}>
        <div className='flex-row items-center space-x-4 card-body'>
          <div>
            <div className='avatar'>
              <div className='rounded-full shadow w-14 h-14'>
                <img src={avatar_url} alt='Profile' />
              </div>
            </div>
          </div>
          <div>
            <h2 className='card-title text-gray-200'>{login}</h2>
            <div className='text-base-content text-opacity-80 text-gray-200 text-xl'>
              <FaLongArrowAltRight size={'1.5em'} />
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
}

export default UserItem
