import React from 'react';
import PropTypes from 'prop-types';
import styles from './Profile.module.css';

const Profile = ({ user }) => (
  <div className={styles.profile}>
    <div className={styles.description}>
      <img src={user.avatar} alt="avatar" className={styles.avatar} />
      <p className={styles.name}>{user.name}</p>
      <p className={styles.tag}>{`@${user.tag}`}</p>
      <p className={styles.location}>{user.location}</p>
    </div>
    <ul className={styles.stats}>
      <li className={styles.statsItem}>
        <span className={styles.label}>Followers</span>
        <span className={styles.quantity}>{user.stats.followers}</span>
      </li>
      <li className={styles.statsItem}>
        <span className={styles.label}>Views</span>
        <span className={styles.quantity}>{user.stats.views}</span>
      </li>
      <li className={styles.statsItem}>
        <span className={styles.label}>Likes</span>
        <span className={styles.quantity}>{user.stats.likes}</span>
      </li>
    </ul>
  </div>
);

Profile.propTypes = {
  user: PropTypes.shape({
    avatar: PropTypes.string,
    location: PropTypes.string,
    name: PropTypes.string,
    tag: PropTypes.string,
    stats: PropTypes.shape({
      followers: PropTypes.number,
      likes: PropTypes.number,
      views: PropTypes.number,
    }),
  }).isRequired,
};

export default Profile;
