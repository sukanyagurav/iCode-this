import React, { useState } from 'react';

const Friend = ({ friend }) => {
  const [following, setFollowing] = useState(friend.isFollowing);
  return (
    <div key={friend.id} className='flex justify-between gap-4 items-center '>
      <div className='grid grid-cols-[60px_1fr]'>
        <img
          src={friend.image}
          alt={friend.name}
          className='w-12 h-12  rounded-full row-span-2 '
        />
        <h2 className='font-semibold text-sm'>{friend.name}</h2>
        {friend.mutalConnections > 0 && (
          <p className='text-[13px]'>
            {friend.mutalConnections > 1
              ? `${friend.mutalConnections} mutual connections`
              : `${friend.mutalConnections} mutual connection`}
          </p>
        )}
      </div>
      <button onClick={() => setFollowing(!following)} className='cursor-pointer py-[7px] text-sm px-4 border-2 shadow-md border-transparent'>
        {following ? 'Following' : 'Confirm'}
      </button>
    </div> 
  );
};

export default Friend;
