import React from 'react';

const ImageCard = ({ image }) => {

  const tags = image.tags.split(',');


  return (
    <div className="max-w-lg rounded overflow-hidden shadow-2xl bg-[#E9EAEC] h-[500px]">
      <a className='cursor-pointer ' href={image.pageURL}><img className="w-full h-[50%] object-cover" src={image.webformatURL} alt=""></img></a>
      <div className="px-6 py-4 text-[#333652]">
        <div className="font-bold  text-xl mb-2">Photo By {image.user}</div>
        <ul>
          <li>
            <strong>Views: {image.views}</strong>
          </li>
          <li>
            <strong>Downloads: {image.downloads}</strong>
          </li>
          <li>
            <strong>Likes: {image.likes}</strong>
          </li>
        </ul>
      </div>
      <div className="px-6 py-4">
        {tags.map((tag, index) => (
          <span key={index} className="inline-block bg-[#FAD02C] rounded-full px-3 py-1 m-1 text-sm font-semibold text-[#333652] mr-2">
            #{tag}
          </span>
        ))}
      </div>
    </div>
  )
}

export default ImageCard;

