const YoutubeEmbed = ({ embedId }: { embedId: string }) => (
  <div className="bg-white app-width mt-32 overflow-hidden rounded-2xl">
    {/* <iframe
      width="100%"
      height="480"
      src={`https://www.youtube.com/embed/${embedId}`}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    /> */}
    <iframe
      width="100%"
      height="480"
      src="https://www.youtube.com/embed/mg6k3W2MNxY?si=pJ68ilRf48-IAWko"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
      title={`YouTube video player ${embedId}`}
    ></iframe>
  </div>
);

export default YoutubeEmbed;
