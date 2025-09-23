import React from 'react';

interface AdPlaceholderProps {
  size: 'banner' | 'rectangle' | 'sidebar';
  className?: string;
}

const AdPlaceholder: React.FC<AdPlaceholderProps> = ({ size, className = '' }) => {
  const getSizeClasses = () => {
    switch (size) {
      case 'banner':
        return 'h-24 md:h-32'; // 728x90 or responsive banner
      case 'rectangle':
        return 'h-64'; // 336x280 rectangle
      case 'sidebar':
        return 'h-96'; // 160x600 or similar sidebar ad
      default:
        return 'h-32';
    }
  };

  const getAdUnit = () => {
    switch (size) {
      case 'banner':
        return `
        <ins class="adsbygoogle"
             style="display:block"
             data-ad-client="{{ADSENSE_PUBLISHER_ID}}"
             data-ad-slot="{{BANNER_AD_SLOT}}"
             data-ad-format="auto"
             data-full-width-responsive="true"></ins>
        `;
      case 'rectangle':
        return `
        <ins class="adsbygoogle"
             style="display:block"
             data-ad-client="{{ADSENSE_PUBLISHER_ID}}"
             data-ad-slot="{{RECTANGLE_AD_SLOT}}"
             data-ad-format="rectangle"></ins>
        `;
      case 'sidebar':
        return `
        <ins class="adsbygoogle"
             style="display:block"
             data-ad-client="{{ADSENSE_PUBLISHER_ID}}"
             data-ad-slot="{{SIDEBAR_AD_SLOT}}"
             data-ad-format="vertical"></ins>
        `;
    }
  };

  return (
    <div className={`bg-gray-100 border-2 border-dashed border-gray-300 flex flex-col items-center justify-center text-gray-500 text-sm ${getSizeClasses()} ${className}`}>
      <div className="text-center px-4">
        <p className="font-medium mb-2">AdSense {size} Ad Placeholder</p>
        <p className="text-xs">Replace this div with:</p>
        <pre className="text-xs mt-2 bg-gray-200 p-2 rounded overflow-x-auto">
          {getAdUnit()}
        </pre>
        <p className="text-xs mt-2">
          Then add: <code>(adsbygoogle = window.adsbygoogle || []).push({});</code>
        </p>
      </div>
    </div>
  );
};

export default AdPlaceholder;