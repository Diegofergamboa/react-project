import React from 'react'
import { useState } from 'react'


export const TwitterFollowCard = ({ formatUserName, userName='Unknown', name='Unknown name', initialIsFollowing }) => {
    const [isFollowing , setItsFollowing] = useState(initialIsFollowing)
    const handleFollowing = () => {
        setItsFollowing(!isFollowing)
    }

    const text = (isFollowing) ? 'Follow' : 'Following'
    const buttonClassName = (isFollowing) ? 'tw-followCard-button is-follow' : 'tw-followCard-button'

    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img className='tw-followCard-avatar' src="https://unavatar.io/github/37t?fallback=https://avatars.githubusercontent.com/u/66378906?v=4" alt="Avatar" />
                <div className='tw-followCard-info'>
                    <strong className='tw-followCard-infoUserName'>{name}</strong>
                    <span>{formatUserName(userName)}</span>
                </div>
            </header>
            <aside>
                <button onClick={handleFollowing} className={buttonClassName}>
                    {text}
                </button>
            </aside>
        </article>
    )
}

export default TwitterFollowCard
