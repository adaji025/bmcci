const YoutubeEmbed = ({ embedId }: { embedId: string }) => (
  <div className="bg-white app-width mt-32 overflow-hidden rounded-2xl">
    <iframe
      width="100%"
      height="480"
      src={`https://www.youtube.com/embed/${embedId}`}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);

export default YoutubeEmbed;
