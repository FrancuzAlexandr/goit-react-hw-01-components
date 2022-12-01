import PropTypes from 'prop-types';
import css from './friendList.module.css';

export default function FriendList({ friends }) {
  return (
    <ul className={css.friendsList}>
      {friends.map(friend => {
        return (
          <li key={friend.id} className={css.item}>
            <span
              className={
                css.status +
                ' ' +
                (friend.isOnline ? css.isOnline : css.isOffline)
              }
            ></span>

            <img
              className="avatar"
              src={friend.avatar}
              alt="User avatar"
              width="60"
            />
            <p className="name">{friend.name}</p>
          </li>
        );
      })}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    }).isRequired
  ).isRequired,
};
