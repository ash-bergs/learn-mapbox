import SproutSticker from './svgs/sprout-sticker';

function MapLoadingIndicator({ className = "" }: { className?: string }) {
  return (
    <div className={className}>
      <span>
        <SproutSticker />
      </span>
      <h1>Loading the map...</h1>
    </div>
  );
}

export default MapLoadingIndicator;
