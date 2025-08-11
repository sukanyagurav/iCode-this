import React from 'react';
import Friend from './Friend';

const friendRequestList = [
  {
    id: 1,
    image: 'https://randomuser.me/api/portraits/men/44.jpg',
    name: 'Damon Simpson',
    mutalConnections: 8,
    isFollowing: false,
  },
  {
    id: 2,
    image: 'https://randomuser.me/api/portraits/women/13.jpg',
    name: 'Zoe Nichols',
    mutalConnections: 5,
    isFollowing: false,
  },
  {
    id: 3,
    image: 'https://randomuser.me/api/portraits/men/89.jpg',
    name: 'Lucca Guzman',
    mutalConnections: 6,
    isFollowing: false,
  },
  {
    id: 4,
    image: 'https://randomuser.me/api/portraits/men/65.jpg',
    name: 'Tyler Francis',
    mutalConnections: 20,
    isFollowing: false,
  },
  {
    id: 5,
    image: 'https://randomuser.me/api/portraits/women/49.jpg',
    name: 'Ivory Gibson',
    mutalConnections: 1,
    isFollowing: false,
  },
];

const FriendListContainer = () => {
  return (
    <section className=' relative friendRequest container max-w-[650px] bg-white  rounded-md w-full mx-auto p-6 shadow-lg my-14 overflow-hidden pb-14 '>
      
      <div className='flex justify-between gap-4 my-6'>
        <h2 className='font-semibold'>Friend Requests</h2>
        <button>View All</button>
      </div>
      <div className='flex flex-col gap-8 '>
        {friendRequestList.map((friend) => (
          <Friend
            friend={friend}
            key={friend.id}
          />
        ))}
      </div>
      {/* <div className='bottom-curve'></div> */}
    </section>
  );
};

export default FriendListContainer;
