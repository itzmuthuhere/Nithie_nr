import React from 'react';
import { Share2, MessageSquare, Twitter, Facebook, Linkedin } from 'lucide-react';

interface ShareButtonsProps {
  url: string;
  title: string;
  description: string;
}

const ShareButtons: React.FC<ShareButtonsProps> = ({ url, title, description }) => {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);
  const encodedDescription = encodeURIComponent(description);

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    whatsapp: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`,
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title,
          text: description,
          url,
        });
      } catch (error) {
        console.log('Error sharing:', error);
      }
    }
  };

  return (
    <div className="flex items-center space-x-3">
      <span className="text-sm font-medium text-gray-700">Share:</span>
      
      {navigator.share && (
        <button
          onClick={handleNativeShare}
          className="flex items-center space-x-1 px-3 py-1 text-sm bg-gray-100 hover:bg-gray-200 rounded transition-colors"
        >
          <Share2 className="h-4 w-4" />
          <span>Share</span>
        </button>
      )}

      <a
        href={shareLinks.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-1 px-3 py-1 text-sm bg-green-100 hover:bg-green-200 text-green-700 rounded transition-colors"
      >
        <MessageSquare className="h-4 w-4" />
        <span>WhatsApp</span>
      </a>

      <a
        href={shareLinks.twitter}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-1 px-3 py-1 text-sm bg-blue-100 hover:bg-blue-200 text-blue-700 rounded transition-colors"
      >
        <Twitter className="h-4 w-4" />
        <span>Twitter</span>
      </a>

      <a
        href={shareLinks.facebook}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-1 px-3 py-1 text-sm bg-blue-100 hover:bg-blue-200 text-blue-700 rounded transition-colors"
      >
        <Facebook className="h-4 w-4" />
        <span>Facebook</span>
      </a>

      <a
        href={shareLinks.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-1 px-3 py-1 text-sm bg-blue-100 hover:bg-blue-200 text-blue-700 rounded transition-colors"
      >
        <Linkedin className="h-4 w-4" />
        <span>LinkedIn</span>
      </a>
    </div>
  );
};

export default ShareButtons;