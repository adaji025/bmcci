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
      src="https://www.youtube.com/embed/E1xkXZs0cAQ?si=u8feJcpo2Tma1l6P"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerpolicy="strict-origin-when-cross-origin"
      allowfullscreen
    ></iframe>
  </div>
);

export default YoutubeEmbed;
