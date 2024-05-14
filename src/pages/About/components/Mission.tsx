const Mission = () => {
  return (
    <div className="app-width flex flex-col lg:flex-row gap-10 xl:gap-20 justify-between mt-20 overflow-hidden">
      <div className="flex-1">
        <div className="bg-[#92CD0033]/20 px-5 py-3 rounded w-max text-xs text-[#2C6700] font-medium">
          Our Mission
        </div>
        <div className="max-w-[600px] mt-3">
          <h2 className="font-semibold text-[32px] lg:text-[48px] leading-none">
            Society and educational development
          </h2>
        </div>
        <div className="mt-3">
          Our primary targets are secondary school students, young people/youth
          and women. This is due to the fact that these groups of people are the
          most vulnerable members of the society
        </div>
        <ul className="mt-5 list-disc ml-5 grid gap-3">
          <li>Education</li>
          <li>Poverty alleviation and self sufficiency</li>
          <li>Morals and Ethical values</li>
          <li>Water and sanitary health education</li>
          <li>
            Public enlightenment and Sensitization on issues affecting the
            community under the aegis of women community in Africa
          </li>
        </ul>
      </div>
      <div className="flex-1">
        <div className="bg-[#92CD0033]/20 px-5 py-3 rounded w-max text-xs text-[#2C6700] font-medium">
          Our vision
        </div>
        <div className="max-w-[600px] mt-3">
          <h2 className="font-semibold text-[32px] lg:text-[48px] leading-none">
            Activating every Northern Nigerian child
          </h2>
        </div>
        <div className="mt-3">
          Beyond Mentors Community Care Initiative (BMCCI) is a unique
          Non-Governmental, Non-political, human development organization which
          was conceived out of the need to address and prevent poverty from the
          cradle in Nigeria, particularly in the North.
        </div>
        <div className="mt-3">
          Activating financial literacy, leadership, entrepreneurship skills and
          patriotism in every Northern Nigerian child is the ultimate vision of
          the team.
        </div>
      </div>
    </div>
  );
};

export default Mission;
