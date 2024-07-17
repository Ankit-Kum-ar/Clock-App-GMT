import React from 'react';

const ShareButton = ({ speed }) => {
  const handleShare = () => {
    const url = `${window.location.origin}?speed=${speed}`;
    navigator.clipboard.writeText(url).then(() => {
      alert('URL copied to clipboard!');
    });
  };

  return (
    <button
      onClick={handleShare}
      className="px-14 py-2 flex left-0 right-0 mx-auto bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-900 mb-11"
    >
      Share
    </button>
  );
};

export default ShareButton;
