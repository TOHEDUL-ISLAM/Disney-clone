import React from 'react';

const HeaderItem = ({ name, Icon }) => {
  return (
    <div className='mt-2 text-white flex items-center gap-3 text-[15px] font-semibold hover:underline underline-offset-8'>
      {Icon && <Icon/>}
      <h2 className=''>{name}</h2>
    </div>
  );
};

export default HeaderItem; 
